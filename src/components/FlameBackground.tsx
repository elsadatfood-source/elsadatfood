import { useMemo } from 'react'

interface Ember {
    id: number
    left: string
    size: number
    duration: number
    delay: number
    drift: number
}

export default function FlameBackground() {
    const embers = useMemo<Ember[]>(() => {
        return Array.from({ length: 35 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            size: 2 + Math.random() * 4,
            duration: 5 + Math.random() * 7,
            delay: Math.random() * 9,
            drift: (Math.random() - 0.5) * 60,
        }))
    }, [])

    return (
        <div className="flame-bg-root" aria-hidden="true">
            {/* لهب حافة اليمين */}
            <div className="flame-edge flame-edge-right">
                <span className="flame-tongue" style={{ animationDelay: '0s' }} />
                <span className="flame-tongue" style={{ animationDelay: '0.9s' }} />
                <span className="flame-tongue" style={{ animationDelay: '1.7s' }} />
            </div>

            {/* لهب حافة الشمال */}
            <div className="flame-edge flame-edge-left">
                <span className="flame-tongue" style={{ animationDelay: '0.4s' }} />
                <span className="flame-tongue" style={{ animationDelay: '1.3s' }} />
                <span className="flame-tongue" style={{ animationDelay: '2.1s' }} />
            </div>

            {/* الشرر المتطاير */}
            <div className="ember-layer">
                {embers.map((e) => (
                    <span
                        key={e.id}
                        className="ember"
                        style={
                            {
                                left: e.left,
                                width: e.size,
                                height: e.size,
                                animationDuration: `${e.duration}s`,
                                animationDelay: `${e.delay}s`,
                                '--drift': `${e.drift}px`,
                            } as React.CSSProperties
                        }
                    />
                ))}
            </div>
        </div>
    )
}