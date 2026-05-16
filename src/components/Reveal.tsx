import type { ReactNode } from 'react'

import { useInView } from '@/hooks/useSiteChrome'

type Props = { children: ReactNode }

export function Reveal({ children }: Props) {
  const [setRef, inView] = useInView<HTMLDivElement>()

  return (
    <div ref={setRef} className={`reveal${inView ? ' reveal--in' : ''}`}>
      {children}
    </div>
  )
}
