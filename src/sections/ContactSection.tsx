import { useState } from 'react'

import { site } from '@/content/site'
import { Reveal } from '@/components/Reveal'

export function ContactSection() {
  const c = site.contact
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null)

  const copyContact = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = value
      textarea.setAttribute('readonly', '')
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }

    setCopiedLabel(label)
    window.setTimeout(() => setCopiedLabel(null), 1800)
  }

  return (
    <section className="section" id="contact">
      <Reveal>
        <div className="contact-card">
          <div className="contact-card__eyebrow">{c.scriptName}</div>
          <div className="contact-card__body">
            <h2 className="h2" style={{ textTransform: 'none' }}>
              {c.title}
            </h2>
            <p className="muted" style={{ margin: 0 }}>
              {c.prompt}
            </p>
            <div className="links-row">
              {c.links.map((l) =>
                l.label === 'GitHub' ? (
                  <a key={l.label} className="link-scan" href={l.href} target="_blank" rel="noreferrer">
                    {l.label}: {l.value}
                  </a>
                ) : (
                  <button key={l.label} className="link-scan link-scan--button" type="button" onClick={() => copyContact(l.label, l.value)}>
                    {l.label}: {l.value}
                  </button>
                ),
              )}
            </div>
            <div className={`copy-toast${copiedLabel ? ' copy-toast--show' : ''}`} role="status" aria-live="polite">
              复制成功
            </div>
            <a className="btn btn--ghost" href={c.resume.href} style={{ width: 'fit-content' }}>
              {c.resume.label}
            </a>
            <div className="eof">MIA CHEN · AI 产品</div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
