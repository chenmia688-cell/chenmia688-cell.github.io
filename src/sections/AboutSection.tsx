import { site } from '@/content/site'
import { Icon } from '@/components/Icon'
import { Reveal } from '@/components/Reveal'

const capIcons = ['tree', 'robot', 'chart', 'bolt'] as const

export function AboutSection() {
  const [a, b, c, d] = site.about.capabilities

  return (
    <section className="section" id="about">
      <div className="section__bar">
        <h2 className="h2">{site.about.title}</h2>
        <span className="section__meta">{site.about.sectionTag}</span>
      </div>

      <Reveal>
        <p className="lead" style={{ maxWidth: '68ch', marginBottom: 'var(--space-8)' }}>
          {site.about.overview}
        </p>
      </Reveal>

      <div className="cap-grid">
        <Reveal>
          <article className="cap-block cap-grid__a">
            <div className="cap-block__row">
              <span className="cap-block__id">{a.id}</span>
              <Icon name={capIcons[0]} className="muted" />
            </div>
            <h3 className="cap-block__title">{a.title}</h3>
            <p className="cap-block__zh">{a.titleZh}</p>
            <p className="cap-block__body">{a.body}</p>
          </article>
        </Reveal>

        <Reveal>
          <article className="cap-block cap-block--tall cap-grid__b">
            <div>
              <div className="cap-block__row">
                <span className="cap-block__id">{b.id}</span>
                <Icon name={capIcons[1]} className="muted" />
              </div>
              <h3 className="cap-block__title">{b.title}</h3>
              <p className="cap-block__zh">{b.titleZh}</p>
              <p className="cap-block__body">{b.body}</p>
            </div>
            <div
              style={{
                marginTop: 'var(--space-6)',
                paddingTop: 'var(--space-5)',
                borderTop: '1px solid var(--line-soft)',
              }}
            >
              <div className="cap-block__row">
                <span className="cap-block__id">{d.id}</span>
                <Icon name={capIcons[3]} className="muted" />
              </div>
              <h3 className="cap-block__title">{d.title}</h3>
              <p className="cap-block__zh">{d.titleZh}</p>
              <p className="cap-block__body">{d.body}</p>
            </div>
          </article>
        </Reveal>

        <Reveal>
          <article className="cap-block cap-grid__c">
            <div className="cap-block__row">
              <span className="cap-block__id">{c.id}</span>
              <Icon name={capIcons[2]} className="muted" />
            </div>
            <h3 className="cap-block__title">{c.title}</h3>
            <p className="cap-block__zh">{c.titleZh}</p>
            <p className="cap-block__body">{c.body}</p>
          </article>
        </Reveal>
      </div>

      <Reveal>
        <div className="strip" aria-label="Background">
          {site.about.background.map((s) => (
            <span key={s}>// {s}</span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
