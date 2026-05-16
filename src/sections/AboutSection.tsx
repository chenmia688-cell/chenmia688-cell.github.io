import { site } from '@/content/site'
import { Icon } from '@/components/Icon'
import { Reveal } from '@/components/Reveal'

const capIcons = ['tree', 'robot', 'chart', 'bolt'] as const

export function AboutSection() {
  return (
    <section className="section" id="about">
      <Reveal>
        <div className="about-panel">
          <div>
            <div className="section__tag" style={{ marginBottom: 'var(--space-3)' }}>
              <Icon name="pulse" />
              {site.about.sectionTag}
            </div>
            <h2 className="h2">{site.about.title}</h2>
          </div>
          <div className="about-panel__copy">
            <p className="lead">{site.about.overview}</p>
            <div className="about-tags" aria-label="Profile keywords">
              {site.about.background.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <div className="about-grid">
        {site.about.capabilities.map((cap, index) => (
          <Reveal key={cap.id}>
            <article className="cap-block">
              <div className="cap-block__row">
                <span className="cap-block__id">{cap.id}</span>
                <Icon name={capIcons[index]} className="muted" />
              </div>
              <h3 className="cap-block__title">{cap.title}</h3>
              <p className="cap-block__zh">{cap.titleZh}</p>
              <p className="cap-block__body">{cap.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
