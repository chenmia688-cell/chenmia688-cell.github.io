import { useEffect, useId, useState } from 'react'

import { navItems, site } from '@/content/site'
import { Icon } from '@/components/Icon'

type Props = {
  activeId: string
}

export function Header({ activeId }: Props) {
  const [open, setOpen] = useState(false)
  const labelId = useId()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <header className="header">
        <a className="header__brand" href="#home">
          <span className="header__mark">{site.brand}</span>
          <span className="header__name">{site.brandVersion}</span>
        </a>

        <nav className="nav" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              className={`nav__link${activeId === item.id ? ' nav__link--active' : ''}`}
              href={`#${item.id}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header__tools">
          <Icon name="chart" className="muted" />
          <Icon name="pulse" style={{ color: 'var(--accent)' }} />
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="site-drawer"
            aria-labelledby={labelId}
            onClick={() => setOpen(true)}
          >
            <span id={labelId} className="sr-only">
              Open menu
            </span>
            <Icon name="menu" />
          </button>
        </div>
      </header>

      <div className={`drawer${open ? ' drawer--open' : ''}`} id="site-drawer" role="dialog" aria-modal="true">
        <div
          className="drawer__backdrop"
          role="presentation"
          tabIndex={-1}
          onClick={() => setOpen(false)}
        />
        <div className="drawer__panel">
          <div className="section__tag">
            <Icon name="menu" />
            Menu
          </div>
          <div className="drawer__links">
            {navItems.map((item) => (
              <a
                key={item.id}
                className="drawer__link"
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
                <span className="muted"> · {item.labelZh}</span>
              </a>
            ))}
          </div>
          <button type="button" className="drawer__close" onClick={() => setOpen(false)}>
            <Icon name="close" /> Close
          </button>
        </div>
      </div>
    </>
  )
}
