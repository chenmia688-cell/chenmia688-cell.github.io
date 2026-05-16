import { site } from '@/content/site'
import { Icon } from '@/components/Icon'
import { Reveal } from '@/components/Reveal'
import demoOne from '@/assets/53994fc96de082858e013728f0cf0558.png'
import demoTwo from '@/assets/aa511e3a0a1a67ce42ea6346df7e8f34.png'
import demoThree from '@/assets/ba289314deb670de3aeee796f9883b54.png'

const agentDemoImages = [
  { src: demoOne, label: '销售助手首页截图' },
  { src: demoTwo, label: '销售助手问答截图' },
  { src: demoThree, label: '销售助手策略建议截图' },
] as const

function ProjectLink({
  href,
  label,
  variant = 'text',
}: {
  href: string
  label: string
  variant?: 'button' | 'ghost' | 'text'
}) {
  const isReady = href !== '#'
  const className =
    variant === 'button'
      ? 'btn'
      : variant === 'ghost'
        ? 'btn btn--ghost'
        : `text-link${isReady ? '' : ' text-link--disabled'}`

  if (!isReady) {
    return (
      <span className={className} aria-disabled="true">
        {label} · 待补充
      </span>
    )
  }

  return (
    <a className={className} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
      {label}
    </a>
  )
}

function AgentDemoPreview({
  href,
  images,
}: {
  href: string
  images: typeof agentDemoImages
}) {
  return (
    <a className="agent-demo-link" href={href} target="_blank" rel="noreferrer" aria-label="打开销售问答助手公网演示">
      <div className="agent-demo-phone" aria-hidden="true">
        <div className="agent-demo-track">
          {images.map((image) => (
            <figure className="agent-demo-shot" key={image.src}>
              <img src={image.src} alt={image.label} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
      <div className="agent-demo-caption">
        <span>销售助手 Agent 演示</span>
        <strong>点击进入公网链接</strong>
      </div>
    </a>
  )
}

export function WorkSection() {
  const w = site.work
  const featuredLinks = w.featured.links

  return (
    <section className="section" id="work">
      <div className="section__bar section__bar--compact">
        <div>
          <div className="section__tag" style={{ marginBottom: 'var(--space-3)' }}>
            <Icon name="chart" />
            {w.sectionTag}
          </div>
          <h2 className="h2">{w.title}</h2>
        </div>
        {w.intro ? <p className="section__summary">{w.intro}</p> : null}
      </div>

      <Reveal>
        <div className="case">
          <div className="case__head">
            <div>
              <span className="case__id">{w.featured.id}</span>
              <strong>{w.featured.type}</strong>
            </div>
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
                  <div className="kv__k">[背景]</div>
                  <p className="kv__v">{w.featured.context}</p>
                </div>
                <div>
                  <div className="kv__k">[方案]</div>
                  <p className="kv__v">{w.featured.strategy}</p>
                </div>
              </div>

              <div className="case__architecture">
                <div className="kv__k">[架构]</div>
                <div className="arch-list arch-list--grid" style={{ marginTop: 'var(--space-3)' }}>
                  {w.featured.architecture.map((line) => (
                    <div key={line} className="arch-item">
                      <span className="dot" aria-hidden />
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
                <p className="case__note">{w.featured.stackNote}</p>
              </div>
            </div>

            <aside className="case__side">
              <AgentDemoPreview href={featuredLinks.demo} images={agentDemoImages} />
              <div className="project-actions" aria-label="重点项目链接">
                <ProjectLink href={featuredLinks.prd} label="查看 PRD" variant="button" />
                <ProjectLink href={featuredLinks.demo} label="公网演示" variant="ghost" />
                <ProjectLink href={featuredLinks.case} label="项目复盘" />
              </div>
            </aside>
          </div>
        </div>
      </Reveal>

      <div className="project-grid" aria-label="更多项目作品">
        {w.projectBlocks.map((p) => (
          <Reveal key={p.title}>
            <article className="project-card">
              <div className="more__top">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <span className="more__period">
                    {p.id} · {p.period}
                  </span>
                  <h3 className="cap-block__title" style={{ fontSize: 20 }}>
                    {p.title}
                  </h3>
                </div>
                <span className="section__meta">{p.phase}</span>
              </div>
              <p className="project-card__summary">{p.summary}</p>
              <div className="more__cols">
                {p.bullets.map((b) => (
                  <div key={b} className="more__col">
                    {b}
                  </div>
                ))}
              </div>
              <div className="project-card__actions">
                <ProjectLink href={p.links.prd} label="PRD" />
                <ProjectLink href={p.links.demo} label="公网演示" />
                <ProjectLink href={p.links.case} label="复盘" />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
