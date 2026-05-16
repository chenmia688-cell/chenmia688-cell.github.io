import { site } from '@/content/site'
import { Icon } from '@/components/Icon'
import { Reveal } from '@/components/Reveal'

export function WorkSection() {
  const w = site.work

  return (
    <section className="section" id="work">
      <div className="section__tag" style={{ marginBottom: 'var(--space-4)' }}>
        <Icon name="chart" />
        {w.sectionTag}
      </div>

      <Reveal>
        <div className="case">
          <div className="case__head">
            <strong>Project: Intelligent Sales Ops</strong>
            <span className="muted">{w.featured.period}</span>
          </div>
          <div className="case__grid">
            <div className="case__main">
              <h2 className="h2" style={{ textTransform: 'none', fontSize: 'clamp(1.2rem, 2vw, 1.45rem)' }}>
                {w.featured.name}
              </h2>
              <p className="muted" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, margin: 0 }}>
                {w.featured.role}
              </p>
              <p className="lead" style={{ maxWidth: '72ch', marginTop: 'var(--space-3)' }}>
                {w.featured.lead}
              </p>

              <div className="metrics">
                {w.featured.metrics.map((m) => (
                  <div key={m.key}>
                    <div className="metric__k">{m.key}</div>
                    <div className="metric__v">{m.value}</div>
                    <div className="metric__d">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="split">
                <div>
                  <div className="kv__k">[CONTEXT]</div>
                  <p className="kv__v">{w.featured.context}</p>
                </div>
                <div>
                  <div className="kv__k">[STRATEGY]</div>
                  <p className="kv__v">{w.featured.strategy}</p>
                </div>
              </div>
            </div>

            <aside className="case__side">
              <div>
                <div className="kv__k">[ARCHITECTURE]</div>
                <div className="arch-list" style={{ marginTop: 'var(--space-3)' }}>
                  {w.featured.architecture.map((line) => (
                    <div key={line} className="arch-item">
                      <span className="dot" aria-hidden />
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="muted" style={{ fontFamily: 'var(--font-mono)', fontSize: 10, lineHeight: 1.5 }}>
                {w.featured.stackNote}
              </p>
              <a className="btn" href="#" style={{ textAlign: 'center' }}>
                查看完整项目框架
              </a>
            </aside>
          </div>
        </div>
      </Reveal>

      <div style={{ marginTop: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
        {w.secondary.map((p) => (
          <Reveal key={p.title}>
            <article className="more">
              <div className="more__top">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <span className="more__period">{p.period}</span>
                  <h3 className="cap-block__title" style={{ fontSize: 20 }}>
                    {p.title}
                  </h3>
                </div>
                <span className="section__meta">{p.phase}</span>
              </div>
              <div className="more__cols">
                {p.bullets.map((b) => (
                  <div key={b} className="more__col">
                    {b}
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
