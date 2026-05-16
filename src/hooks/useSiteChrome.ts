import { useEffect, useState } from 'react'

export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return reduced
}

export function useBootPhase(reducedMotion: boolean): 'boot' | 'exit' | 'done' {
  const [phase, setPhase] = useState<'boot' | 'exit' | 'done'>(() =>
    reducedMotion ? 'done' : 'boot',
  )

  useEffect(() => {
    if (reducedMotion) setPhase('done')
  }, [reducedMotion])

  useEffect(() => {
    if (reducedMotion) {
      setPhase('done')
      return
    }
    if (phase !== 'boot') return
    const t = window.setTimeout(() => setPhase('exit'), 900)
    return () => window.clearTimeout(t)
  }, [phase, reducedMotion])

  useEffect(() => {
    if (phase !== 'exit') return
    const t = window.setTimeout(() => setPhase('done'), 420)
    return () => window.clearTimeout(t)
  }, [phase])

  return phase
}

export function useActiveSection(sectionIds: readonly string[]): string {
  const [active, setActive] = useState(sectionIds[0] ?? 'home')

  useEffect(() => {
    const nodes = sectionIds
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => Boolean(n))

    if (!nodes.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: '-40% 0px -45% 0px', threshold: [0.05, 0.25, 0.5, 0.75, 1] },
    )

    for (const n of nodes) observer.observe(n)
    return () => observer.disconnect()
  }, [sectionIds])

  return active
}

export function useInView<T extends Element>() {
  const [ref, setRef] = useState<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref) return
    const obs = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      threshold: 0.12,
    })
    obs.observe(ref)
    return () => obs.disconnect()
  }, [ref])

  return [setRef, inView] as const
}
