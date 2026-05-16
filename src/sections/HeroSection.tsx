import { Icon } from '@/components/Icon'
import { Reveal } from '@/components/Reveal'
import { site } from '@/content/site'

export function HeroSection() {
  return (
    <section className="section hero" id="home">
      <Reveal>
        <div>
          <div className="section__tag">
            <Icon name="pulse" />
            {site.hero.status}
          </div>
          <p className="section__tag" style={{ marginTop: 8, color: 'var(--muted)' }}>
            {site.hero.roleLine}
          </p>
          <h1 className="h1">{site.hero.title}</h1>
          <p className="lead">{site.hero.subtitle}</p>
          <div className="tags">
            {site.hero.tags.map((t) => (
              <span key={t} className="pill">
                {t}
              </span>
            ))}
          </div>
          <div className="cta-row">
            {site.hero.ctas.map((c) => (
              <a key={c.href} className="btn" href={c.href}>
                {c.label}
              </a>
            ))}
            <a className="btn btn--ghost" href={site.contact.resume.href}>
              {site.contact.resume.label}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
