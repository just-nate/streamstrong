import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * ASCII Globe using Three.js
 * Renders a 3D sphere and maps it to ASCII characters
 * Creates the terminal/console globe effect
 */

interface GlobeProps {
  size?: 'small' | 'medium' | 'large'
}

export function AsciiGlobe({ size = 'medium' }: GlobeProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)

    // Camera
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000)
    camera.position.z = 2.5

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: false,
      alpha: true,
    })
    renderer.setPixelRatio(1) // Low pixel ratio for ASCII effect
    
    const sizeMap = { small: 200, medium: 300, large: 400 }
    const renderSize = sizeMap[size]
    renderer.setSize(renderSize, renderSize * 0.5) // Half height for ASCII aspect
    
    containerRef.current.appendChild(renderer.domElement)

    // Create sphere with earth-like texture
    const geometry = new THREE.SphereGeometry(1, 64, 32)
    
    // Custom ASCII shader material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        void main() {
          vUv = uv;
          vNormal = normal;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec2 vUv;
        varying vec3 vNormal;
        
        void main() {
          // Create continent-like pattern using noise
          float noise = sin(vUv.x * 20.0) * cos(vUv.y * 15.0) 
                      + sin(vUv.x * 40.0 + time * 0.5) * 0.3;
          
          // Latitude bands (like Jupiter/saturn)
          float bands = sin(vUv.y * 30.0) * 0.5 + 0.5;
          
          // Combine for landmass effect
          float land = step(0.3, noise) * step(0.4, bands);
          
          // Edge glow (atmosphere)
          float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);
          
          // Color: green terminal for land, dark for space
          vec3 landColor = vec3(0.0, 1.0, 0.4); // Matrix green
          vec3 oceanColor = vec3(0.0, 0.3, 0.1);
          vec3 glowColor = vec3(0.0, 1.0, 0.6);
          
          vec3 color = mix(oceanColor, landColor, land);
          color = mix(color, glowColor, fresnel * 0.5);
          
          float alpha = 0.8 + land * 0.2;
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
    })

    const sphere = new THREE.Mesh(geometry, material)
    scene.add(sphere)

    // Add wireframe grid for that tech look
    const wireGeometry = new THREE.SphereGeometry(1.02, 24, 12)
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    })
    const wireframe = new THREE.Mesh(wireGeometry, wireMaterial)
    scene.add(wireframe)

    // Add some "stars" or points
    const pointsGeometry = new THREE.BufferGeometry()
    const points: number[] = []
    for (let i = 0; i < 50; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      const r = 1.8 + Math.random() * 0.5
      points.push(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      )
    }
    pointsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3))
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x00ff88,
      size: 0.03,
      transparent: true,
      opacity: 0.6,
    })
    const stars = new THREE.Points(pointsGeometry, pointsMaterial)
    scene.add(stars)

    // Animation
    let animationId: number
    let startTime = Date.now()

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000
      
      // Rotate sphere
      sphere.rotation.y += 0.008
      wireframe.rotation.y += 0.004
      stars.rotation.y += 0.002
      
      // Update shader
      material.uniforms.time.value = elapsed
      
      renderer.render(scene, camera)
      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return
      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight
      renderer.setSize(width, height)
    }
    
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [size])

  const sizeMap = { small: '200px', medium: '300px', large: '400px' }

  return (
    <div style={{ position: 'relative' }}>
      {/* Terminal-style container */}
      <div
        ref={containerRef}
        style={{
          width: sizeMap[size],
          aspectRatio: '2/1',
          backgroundColor: '#0a0a0a',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: `
            0 0 0 1px #1a1a1a,
            0 0 30px rgba(0, 255, 0, 0.1),
            inset 0 0 60px rgba(0, 0, 0, 0.8)
          `,
        }}
      />
      
      {/* Scanlines overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 0, 0, 0.2) 2px,
            rgba(0, 0, 0, 0.2) 4px
          )`,
          pointerEvents: 'none',
          borderRadius: '8px',
        }}
      />
      
      {/* Corner decorations */}
      <div style={{
        position: 'absolute',
        top: '8px',
        left: '12px',
        fontFamily: '"SF Mono", monospace',
        fontSize: '10px',
        color: 'rgba(0, 255, 0, 0.5)',
      }}>
        STREAM_STRONG
      </div>
      <div style={{
        position: 'absolute',
        bottom: '8px',
        right: '12px',
        fontFamily: '"SF Mono", monospace',
        fontSize: '9px',
        color: 'rgba(0, 255, 0, 0.4)',
      }}>
        LAT: 1.3°S LON: 36.8°E
      </div>
    </div>
  )
}
