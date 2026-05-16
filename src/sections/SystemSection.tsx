import { site } from '@/content/site'
import { Icon } from '@/components/Icon'
import type { IconName } from '@/components/Icon'
import { Reveal } from '@/components/Reveal'

const methodIcons: IconName[] = ['search', 'check', 'layers', 'analytics', 'bolt']

export function SystemSection() {
  const s = site.system

  return (
    <section className="section" id="system">
      <div className="section__bar">
        <h2 className="h2">{s.title}</h2>
        <span className="section__meta">{s.sectionTag}</span>
      </div>

      <div className="log">
        {s.methods.map((m, i) => (
          <Reveal key={m.id}>
            <div className="log__row">
              <div className="log__id">{m.id}</div>
              <div>
                <h3 className="log__title">{m.title}</h3>
                <p className="log__body">{m.body}</p>
              </div>
              <div className="log__icon" aria-hidden>
                <Icon name={methodIcons[i] ?? 'bolt'} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
