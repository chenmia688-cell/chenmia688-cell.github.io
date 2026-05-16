import { lazy, Suspense } from 'react'

const MagicRings = lazy(() => import('@/components/magic'))

export function GlobalMagicRings() {
  return (
    <div className="global-magic-rings-layer" aria-hidden>
      <div className="global-magic-rings-inner">
        <Suspense fallback={null}>
          <MagicRings
            color="#06B6D4"
            colorTwo="#6366F1"
            ringCount={6}
            speed={1}
            attenuation={10}
            lineThickness={2}
            baseRadius={0.35}
            radiusStep={0.1}
            scaleRate={0.1}
            opacity={1}
            blur={0}
            noiseAmount={0.1}
            rotation={0}
            ringGap={1.5}
            fadeIn={0.7}
            fadeOut={0.5}
            followMouse={false}
            mouseInfluence={0.2}
            hoverScale={1.2}
            parallax={0.05}
            clickBurst={false}
          />
        </Suspense>
      </div>
    </div>
  )
}
