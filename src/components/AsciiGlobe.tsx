import { useState, useEffect } from 'react'

/**
 * ASCII Globe with rotating animation and pulsing hotspots
 * Creates a 3D-like rotating globe effect using ASCII characters
 * Fixed: proper rendering with visible colors on dark background
 */

interface GlobeProps {
  size?: 'small' | 'medium' | 'large'
  showHotspots?: boolean
}

// Better ASCII globe frames with clearer visual
const GLOBE_FRAMES = [
  // Frame 0
`        ***       
     *********    
   *************  
  *************** 
  ******●*****●** 
  ****************
   *************  
     *********    
        ***       `,
  // Frame 1
`        ***       
     *********    
   *************  
  *************** 
  *****●********* 
  ****●***********
   *************  
     *********    
        ***       `,
  // Frame 2
`        ***       
     *********    
   *************  
  *************** 
  *************●**
  ******●*********
   *************  
     *********    
        ***       `,
  // Frame 3
`        ***       
     *********    
   *************  
  *************** 
  **************●*
  *************●**
   *************  
     *********    
        ***       `,
  // Frame 4
`        ***       
     *********    
   *************  
  *************** 
  *************** 
  **************●*
   *****●*****   
     *********    
        ***       `,
]

const SIZE_CONFIG = {
  small: { fontSize: '10px', lineHeight: '1.2', maxWidth: '200px' },
  medium: { fontSize: '14px', lineHeight: '1.2', maxWidth: '300px' },
  large: { fontSize: '18px', lineHeight: '1.2', maxWidth: '400px' },
}

export function AsciiGlobe({ size = 'medium' }: GlobeProps) {
  const [frameIndex, setFrameIndex] = useState(0)

  // Rotation animation - faster for smoother effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % GLOBE_FRAMES.length)
    }, 600)

    return () => clearInterval(interval)
  }, [])

  const config = SIZE_CONFIG[size]
  const currentFrame = GLOBE_FRAMES[frameIndex]

  return (
    <div
      style={{
        fontFamily: '"Courier New", monospace',
        fontSize: config.fontSize,
        lineHeight: config.lineHeight,
        maxWidth: config.maxWidth,
        color: '#ffffff',
        textAlign: 'center',
        userSelect: 'none',
        overflow: 'hidden',
      }}
    >
      {currentFrame.split('\n').map((line, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            whiteSpace: 'pre',
            letterSpacing: '2px',
          }}
        >
          {line.includes('●') ? (
            <>
              {line.split('●').map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span
                      style={{
                        color: '#00ff88',
                        textShadow: '0 0 10px #00ff88, 0 0 20px #00ff88',
                        animation: 'pulse 1.5s ease-in-out infinite',
                      }}
                    >
                      ●
                    </span>
                  )}
                </span>
              ))}
            </>
          ) : (
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>{line}</span>
          )}
        </div>
      ))}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
      `}</style>
    </div>
  )
}
