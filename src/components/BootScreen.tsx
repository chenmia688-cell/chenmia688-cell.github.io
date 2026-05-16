type Props = { phase: 'boot' | 'exit' | 'done' }

export function BootScreen({ phase }: Props) {
  if (phase === 'done') return null

  return (
    <div className={`boot${phase === 'exit' ? ' boot--hide' : ''}`} aria-live="polite">
      <div>
        <div>Mia Chen · Blush Product Lab</div>
        <div className="boot__line" />
      </div>
    </div>
  )
}
