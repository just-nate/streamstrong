import { useState, useEffect } from 'react'

/**
 * ASCII Globe with rotating animation and pulsing hotspots
 * Creates a 3D-like rotating globe effect using ASCII characters
 */

interface GlobeProps {
  size?: 'small' | 'medium' | 'large'
  showHotspots?: boolean
}

// ASCII globe frame data - pre-calculated frames for rotation
const GLOBE_FRAMES = [
  [
    "          ░░░░░          ",
    "       ░░░░░░░░░░░       ",
    "     ░░░░░░░░░░░░░░░     ",
    "    ░░░░░░░░░░░░░░░░░    ",
    "   ░░░░░░●░░░░░░●░░░░░   ",
    "   ░░░░░░░░░░░░░░░░░░░   ",
    "    ░░░░░░░░░░░░░░░░░    ",
    "     ░░░░░░░░░░░░░░░     ",
    "       ░░░░░░░░░░░       ",
    "          ░░░░░          ",
  ],
  [
    "          ░░░░░          ",
    "       ░░░░░░░░░░░       ",
    "     ░░░░░░░░░░░░░░░     ",
    "    ░░░░░░░░░░░░░░░░░    ",
    "   ░░░░●░░░░░░░░░░●░░░   ",
    "   ░░░░░░░░░░░░░░░░░░░   ",
    "    ░░░░░░░░░░░░░░░░░    ",
    "     ░░░░░░░░░░░░░░░     ",
    "       ░░░░░░░░░░░       ",
    "          ░░░░░          ",
  ],
  [
    "          ░░░░░          ",
    "       ░░░░░░░░░░░       ",
    "     ░░░░░░░░░░░░░░░     ",
    "    ░░░░░░░░░░░░░░░░░    ",
    "   ░░░░░░░░░░░░░░░░░░░   ",
    "   ░░░░░●░░░░░░░●░░░░░   ",
    "    ░░░░░░░░░░░░░░░░░    ",
    "     ░░░░░░░░░░░░░░░     ",
    "       ░░░░░░░░░░░       ",
    "          ░░░░░          ",
  ],
  [
    "          ░░░░░          ",
    "       ░░░░░░░░░░░       ",
    "     ░░░░░░░░░░░░░░░     ",
    "    ░░░░░░░░░░░░░░░░░    ",
    "   ░░░░░░░░░░░░░░░░░░░   ",
    "   ░░░●░░░░░░░░░░●░░░░   ",
    "    ░░░░░░░░░░░░░░░░░    ",
    "     ░░░░░░░░░░░░░░░     ",
    "       ░░░░░░░░░░░       ",
    "          ░░░░░          ",
  ],
  [
    "          ░░░░░          ",
    "       ░░░░░░░░░░░       ",
    "     ░░░░░░░░░░░░░░░     ",
    "    ░░░░░░░░░░░░░░░░░    ",
    "   ░░░░░░░░░░░░░░░░░░░   ",
    "   ░░░░░░░░░░░░░░░░░░░   ",
    "    ░░░░░░●░░░░░░░░░░    ",
    "     ░░░░░░░░░░░░░░░     ",
    "       ░░░░░░░░░░░       ",
    "          ░░░░░          ",
  ],
]

const HOTSPOT_POSITIONS = [
  { frame: 0, row: 4, col: 10 },
  { frame: 1, row: 4, col: 9 },
  { frame: 2, row: 5, col: 10 },
  { frame: 3, row: 5, col: 9 },
  { frame: 4, row: 6, col: 10 },
]

const SIZE_CONFIG = {
  small: { fontSize: '8px', padding: '20px' },
  medium: { fontSize: '14px', padding: '30px' },
  large: { fontSize: '20px', padding: '40px' },
}

export function AsciiGlobe({ size = 'medium' }: GlobeProps) {
  const [frameIndex, setFrameIndex] = useState(0)
  const [hoveredSpot, setHoveredSpot] = useState<number | null>(null)

  // Rotation animation
  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % GLOBE_FRAMES.length)
    }, 800)

    return () => clearInterval(interval)
  }, [])

  const config = SIZE_CONFIG[size]
  const currentFrame = GLOBE_FRAMES[frameIndex]
  const hotspots = HOTSPOT_POSITIONS.filter(h => h.frame === frameIndex)

  return (
    <div 
      className="globe-container"
      style={{ 
        fontSize: config.fontSize,
        padding: config.padding,
      }}
    >
      {currentFrame.map((line, rowIndex) => {
        const hotspotAtPosition = hotspots.find(h => h.row === rowIndex)
        const isHovered = hotspotAtPosition && hoveredSpot === hotspotAtPosition.col

        return (
          <span 
            key={rowIndex} 
            className="globe-line"
            style={{
              color: hotspotAtPosition 
                ? '#ffffff' 
                : 'rgba(255, 255, 255, 0.6)',
              display: 'inline-block',
              minWidth: line.length + 'ch',
            }}
          >
            {line.split('').map((char, colIndex) => {
              const isHotspot = hotspotAtPosition && hotspotAtPosition.col === colIndex
              
              if (isHotspot) {
                return (
                  <span
                    key={colIndex}
                    className={`hotspot ${isHovered ? 'cursor-pointer' : ''}`}
                    onMouseEnter={() => setHoveredSpot(colIndex)}
                    onMouseLeave={() => setHoveredSpot(null)}
                    style={{
                      color: isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.9)',
                      textShadow: isHovered ? '0 0 20px rgba(255, 255, 255, 0.8)' : 'none',
                    }}
                  >
                    {char}
                  </span>
                )
              }

              return (
                <span 
                  key={colIndex}
                  style={{ 
                    opacity: char === ' ' ? 0 : undefined 
                  }}
                >
                  {char}
                </span>
              )
            })}
          </span>
        )
      })}
      
      {/* Hotspot labels on hover */}
      {hoveredSpot !== null && (
        <div 
          style={{
            position: 'absolute',
            bottom: '-30px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '4px 12px',
            borderRadius: '4px',
            fontSize: '10px',
            whiteSpace: 'nowrap',
          }}
        >
          {hoveredSpot % 2 === 0 ? 'Server Active' : 'Node Connected'}
        </div>
      )}
    </div>
  )
}
