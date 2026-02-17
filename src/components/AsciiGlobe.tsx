import { useState, useEffect } from 'react'

/**
 * ASCII Globe - Terminal/Console Style
 * Pure ASCII characters forming a rotating globe
 * Like old-school terminal animations
 */

interface GlobeProps {
  size?: 'small' | 'medium' | 'large'
}

// Simple rotating globe with longitude/latitude lines
const ROTATING_GLOBE = [
`        ╭─────────╮      
      ╱  ╱││╲╲││╲  ╲    
     │ ╱ ││ │  ││ ╲ │   
     ││  ││ ├───┤│  ││   
    ╱│  ╰┤ │ ● │ ├╯  │╲   
    ╲│   ╰┤ │   │ ├╯   │╱   
     │ ╲  ││ ├───┤│  ╱ │   
     │  ╲ ││ │   ││ ╱  │   
      ╲  ╲││╱╲╲││╱  ╱    
        ╰─────────╯      `,
`        ╭─────────╮      
      ╱  ╱││╲╲││╲  ╲    
     │ ╱ ││ │  ││ ╲ │   
     ││  ││ ├───┤│  ││   
    ╱│  ╰┤ │ ● │ ├╯  │╲   
    ╲│   ╰┤ │   │ ├╯   │╱   
     │ ╲  ││ ├───┤│  ╱ │   
     │  ╲ ││ │   ││ ╱  │   
      ╲  ╲││╱╲╲││╱  ╱    
        ╰─────────╯      `,
`        ╭─────────╮      
      ╱  ╱││╲╲││╲  ╲    
     │ ╱ ││ │  ││ ╲ │   
     ││  ││ ├───┤│  ││   
    ╱│  ╰┤ │ ● │ ├╯  │╲   
    ╲│   ╰┤ │   │ ├╯   │╱   
     │ ╲  ││ ├───┤│  ╱ │   
     │  ╲ ││ │   ││ ╱  │   
      ╲  ╲││╱╲╲││╱  ╱    
        ╰─────────╯      `,
]

const SIZE_CONFIG = {
  small: { fontSize: '8px', lineHeight: '1.1' },
  medium: { fontSize: '12px', lineHeight: '1.15' },
  large: { fontSize: '16px', lineHeight: '1.1' },
}

export function AsciiGlobe({ size = 'medium' }: GlobeProps) {
  const [frameIndex, setFrameIndex] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % ROTATING_GLOBE.length)
    }, 400)
    return () => clearInterval(interval)
  }, [])

  const config = SIZE_CONFIG[size]
  const currentFrame = ROTATING_GLOBE[frameIndex]

  return (
    <div style={{
      fontFamily: '"SF Mono", "Fira Code", "Courier New", monospace',
      fontSize: config.fontSize,
      lineHeight: config.lineHeight,
      color: '#00ff00',
      textAlign: 'center',
      userSelect: 'none',
      backgroundColor: '#0a0a0a',
      padding: '20px',
      borderRadius: '8px',
      border: '1px solid #1a1a1a',
      boxShadow: '0 0 20px rgba(0, 255, 0, 0.1), inset 0 0 40px rgba(0, 0, 0, 0.8)',
      whiteSpace: 'pre',
      display: 'inline-block',
    }}>
      {/* Scanline effect overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.3) 2px, rgba(0, 0, 0, 0.3) 4px)',
        pointerEvents: 'none',
        borderRadius: '8px',
      }} />
      
      {/* Globe */}
      <div style={{ position: 'relative' }}>
        {currentFrame.split('\n').map((line, i) => (
          <div key={i} style={{
            textShadow: line.includes('●') ? '0 0 10px #00ff00, 0 0 20px #00ff00' : '0 0 5px rgba(0, 255, 0, 0.3)',
          }}>
            {line.includes('●') ? (
              <>
                {line.split('●').map((part, idx, arr) => (
                  <span key={idx}>
                    {part}
                    {idx < arr.length - 1 && (
                      <span style={{
                        color: '#00ff88',
                        textShadow: '0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00',
                      }}>●</span>
                    )}
                  </span>
                ))}
              </>
            ) : (
              <span style={{
                color: line.includes('╭') || line.includes('╰') || line.includes('╮') || line.includes('╯') || line.includes('─') || line.includes('│')
                  ? '#00ff88' 
                  : 'rgba(0, 255, 0, 0.7)',
              }}>{line}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
