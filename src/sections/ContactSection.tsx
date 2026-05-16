import { site } from '@/content/site'
import { Reveal } from '@/components/Reveal'

export function ContactSection() {
  const c = site.contact

  return (
    <section className="section" id="contact">
      <Reveal>
        <div className="contact-card">
          <div className="contact-card__eyebrow">{c.scriptName}</div>
          <div className="contact-card__body">
            <h2 className="h2" style={{ textTransform: 'none' }}>
              {c.title}
            </h2>
            <div>
              <p className="muted" style={{ margin: 0 }}>
                {c.prompt}
              </p>
              <p className="muted" style={{ margin: '8px 0 0' }}>
                {c.sub}
              </p>
            </div>
            <div className="links-row">
              {c.links.map((l) => (
                <a key={l.label} className="link-scan" href={l.href}>
                  {l.label}: {l.value}
                </a>
              ))}
            </div>
            <a className="btn btn--ghost" href={c.resume.href} style={{ width: 'fit-content' }}>
              {c.resume.label}
            </a>
            <div className="eof">MIA CHEN · AI PRODUCT</div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
