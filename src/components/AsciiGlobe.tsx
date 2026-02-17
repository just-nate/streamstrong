import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * Three.js Globe with ASCII/Terminal aesthetic
 * Renders a 3D globe with scanlines and terminal-style effects
 */

interface GlobeProps {
  size?: 'small' | 'medium' | 'large'
}

export function AsciiGlobe({ size = 'medium' }: GlobeProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const globeRef = useRef<THREE.Mesh | null>(null)
  const hotspotsRef = useRef<THREE.Mesh[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)
    sceneRef.current = scene

    // Camera
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000)
    camera.position.z = 3.5
    cameraRef.current = camera

    // Renderer with ASCII-like effect
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    rendererRef.current = renderer

    // Size config
    const sizeMap = { small: 200, medium: 280, large: 350 }
    const containerSize = sizeMap[size]
    renderer.setSize(containerSize, containerSize)
    
    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement)
    }

    // Create globe with wireframe/ASCII aesthetic
    const globeGeometry = new THREE.SphereGeometry(1, 32, 32)
    
    // Custom shader material for ASCII/terminal look
    const globeMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(0xffffff) },
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
        uniform vec3 color;
        varying vec2 vUv;
        varying vec3 vNormal;
        
        float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
        }
        
        void main() {
          // ASCII-style grid
          float gridX = step(0.95, fract(vUv.x * 40.0));
          float gridY = step(0.95, fract(vUv.y * 20.0));
          float grid = max(gridX, gridY);
          
          // Scanline effect
          float scanline = sin(vUv.y * 100.0 + time * 2.0) * 0.1 + 0.9;
          
          // Edge glow (Fresnel)
          float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);
          
          // Combine
          float alpha = (0.15 + grid * 0.3 + fresnel * 0.4) * scanline;
          
          // Flicker effect
          alpha *= 0.9 + random(vec2(time * 0.1, 0.0)) * 0.1;
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      wireframe: false,
    })

    const globe = new THREE.Mesh(globeGeometry, globeMaterial)
    globeRef.current = globe
    scene.add(globe)

    // Add wireframe overlay for more ASCII feel
    const wireframeGeometry = new THREE.SphereGeometry(1.01, 24, 12)
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.1,
    })
    const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial)
    scene.add(wireframe)

    // Add glowing hotspots (green dots)
    const hotspotPositions = [
      { lat: 40, lng: -74 },  // USA
      { lat: 51, lng: 0 },    // UK
      { lat: 35, lng: 139 },  // Japan
      { lat: -23, lng: -46 }, // Brazil
      { lat: 1, lng: 36 },    // Kenya
    ]

    const hotspotGeometry = new THREE.SphereGeometry(0.04, 8, 8)
    const hotspotMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ff88,
      transparent: true,
      opacity: 0.9,
    })

    hotspotPositions.forEach((pos) => {
      const phi = (90 - pos.lat) * (Math.PI / 180)
      const theta = (pos.lng + 180) * (Math.PI / 180)
      
      const x = -1 * Math.sin(phi) * Math.cos(theta)
      const y = Math.cos(phi)
      const z = Math.sin(phi) * Math.sin(theta)
      
      const hotspot = new THREE.Mesh(hotspotGeometry, hotspotMaterial.clone())
      hotspot.position.set(x, y, z)
      
      // Add glow sprite
      const glowMaterial = new THREE.SpriteMaterial({
        color: 0x00ff88,
        transparent: true,
        opacity: 0.4,
      })
      const glow = new THREE.Sprite(glowMaterial)
      glow.scale.set(0.2, 0.2, 1)
      hotspot.add(glow)
      
      scene.add(hotspot)
      hotspotsRef.current.push(hotspot)
    })

    // Animation
    let animationId: number
    let startTime = Date.now()

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000
      
      // Rotate globe
      globe.rotation.y += 0.003
      wireframe.rotation.y += 0.003
      
      // Update shader time
      globeMaterial.uniforms.time.value = elapsed
      
      // Pulse hotspots
      hotspotsRef.current.forEach((hotspot, i) => {
        const scale = 1 + Math.sin(elapsed * 2 + i) * 0.2
        hotspot.scale.setScalar(scale)
      })
      
      renderer.render(scene, camera)
      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId)
      renderer.dispose()
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [size])

  return (
    <div 
      ref={containerRef}
      style={{
        width: '100%',
        maxWidth: size === 'small' ? '200px' : size === 'medium' ? '280px' : '350px',
        aspectRatio: '1/1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  )
}
