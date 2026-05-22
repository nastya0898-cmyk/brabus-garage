import { useRef, useMemo, Suspense, lazy } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Link } from 'react-router-dom'

// ─── Shaders ────────────────────────────────────────────────────────────────

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = /* glsl */ `
  varying vec2 vUv;
  uniform float uOpacity;
  uniform float uTime;
  uniform float uSpeed;
  uniform float uPhase;

  void main() {
    // Width: bright center, transparent edges
    float xFade = 1.0 - abs(vUv.x - 0.5) * 2.0;
    xFade = pow(xFade, 1.8);

    // Length: soft fade at tips
    float yFade = smoothstep(0.0, 0.06, vUv.y) * smoothstep(1.0, 0.94, vUv.y);

    // Cinematic breathing pulse
    float pulse = 0.6 + 0.4 * sin(uTime * uSpeed * 0.35 + uPhase);

    float alpha = xFade * yFade * uOpacity * pulse;
    gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
  }
`

// ─── Single beam ────────────────────────────────────────────────────────────

function Beam({ position, rotation, width, length, opacity, speed, phase }) {
  const meshRef = useRef()
  const uniforms = useMemo(
    () => ({
      uOpacity: { value: opacity },
      uTime:    { value: 0 },
      uSpeed:   { value: speed },
      uPhase:   { value: phase },
    }),
    [opacity, speed, phase]
  )

  useFrame(({ clock }) => {
    uniforms.uTime.value = clock.elapsedTime
    if (meshRef.current) {
      // Very slow, cinematic drift
      meshRef.current.rotation.z += 0.00006 * speed
    }
  })

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <planeGeometry args={[width, length]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

// ─── Scene configuration ────────────────────────────────────────────────────

const BEAMS = [
  { position: [-2.8,  1.2, -3.0], rotation: [0,    0.10,  0.38], width: 0.55, length: 15, opacity: 0.13, speed: 0.90, phase: 0.0  },
  { position: [ 2.6, -0.8, -4.0], rotation: [0,   -0.12, -0.26], width: 0.38, length: 13, opacity: 0.10, speed: 1.20, phase: 2.1  },
  { position: [ 0.4,  2.2, -2.5], rotation: [0.10, 0,     0.58], width: 0.62, length: 17, opacity: 0.11, speed: 0.65, phase: 1.3  },
  { position: [-4.2, -1.8, -5.5], rotation: [0,    0.20, -0.47], width: 0.42, length: 22, opacity: 0.07, speed: 0.85, phase: 3.7  },
  { position: [ 4.1,  2.1, -3.5], rotation: [-0.1, 0,     0.16], width: 0.32, length: 12, opacity: 0.09, speed: 1.40, phase: 4.2  },
  { position: [-1.2, -2.8, -4.5], rotation: [0.15, 0,    -0.68], width: 0.48, length: 16, opacity: 0.08, speed: 0.75, phase: 5.5  },
  { position: [ 1.6,  3.6, -5.8], rotation: [-0.05,0.10,  0.30], width: 0.26, length: 24, opacity: 0.05, speed: 1.00, phase: 0.8  },
  { position: [ 3.2, -2.6, -2.8], rotation: [0,   -0.16, -0.40], width: 0.42, length: 14, opacity: 0.10, speed: 1.15, phase: 6.1  },
  { position: [-3.8,  3.2, -6.5], rotation: [0.22, 0,     0.50], width: 0.24, length: 26, opacity: 0.05, speed: 0.80, phase: 2.8  },
  { position: [ 0.0, -0.5, -2.0], rotation: [0.04, 0.04,  0.08], width: 0.72, length: 20, opacity: 0.06, speed: 0.55, phase: 1.9  },
]

function Scene() {
  return (
    <>
      <color attach="background" args={['#030303']} />
      <fog attach="fog" args={['#030303', 10, 30]} />
      {BEAMS.map((beam, i) => (
        <Beam key={i} {...beam} />
      ))}
    </>
  )
}

// ─── Hero content ────────────────────────────────────────────────────────────

export default function EtherealBeamsHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#030303]">

      {/* Three.js canvas */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 70 }}
          gl={{ antialias: true, powerPreference: 'high-performance' }}
          dpr={[1, 1.5]}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Cinematic gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-black/5 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/75 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between px-[7vw]">

        {/* Main */}
        <div className="flex-1 flex items-center">
          <div className="max-w-2xl pt-16">

            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-px bg-white/25" />
              <p className="uppercase tracking-[0.38em] text-[10px] text-white/45 font-light">
                Service Automobile de Luxe · Lausanne
              </p>
            </div>

            {/* Title */}
            <div className="mb-10">
              <h1 className="text-[82px] md:text-[96px] leading-[0.9] font-extralight tracking-[-0.03em] text-white">
                BRABUS
              </h1>
              <h1 className="text-[82px] md:text-[96px] leading-[0.9] font-semibold tracking-[-0.03em] text-white">
                GARAGE
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-white/45 text-[14px] max-w-[420px] leading-[1.9] mb-12 font-light">
              Premium automotive engineering, diagnostics and cinematic detailing
              for luxury performance vehicles in Lausanne.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-16">
              <Link
                to="/services"
                className="px-8 py-3.5 bg-white text-[#0a0a0a] text-[10px] tracking-[0.28em] uppercase font-light hover:bg-white/90 transition-colors duration-300"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3.5 border border-white/18 text-white text-[10px] tracking-[0.28em] uppercase font-light hover:border-white/45 hover:bg-white/6 transition-all duration-400 backdrop-blur-sm"
              >
                Book Consultation
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-start gap-10 pt-10 border-t border-white/8">
              <div>
                <p className="text-[26px] font-light tracking-tight text-white">12+</p>
                <p className="text-[9px] uppercase tracking-[0.24em] text-white/30 font-light mt-1">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-[26px] font-light tracking-tight text-white">3 000+</p>
                <p className="text-[9px] uppercase tracking-[0.24em] text-white/30 font-light mt-1">
                  Clients
                </p>
              </div>
              <div>
                <p className="text-[26px] font-light tracking-tight text-white">5.0 ★</p>
                <p className="text-[9px] uppercase tracking-[0.24em] text-white/30 font-light mt-1">
                  Rating
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll hint */}
        <div className="pb-10 flex items-center gap-3">
          <div className="w-5 h-px bg-white/18" />
          <span className="text-[9px] uppercase tracking-[0.32em] text-white/28 font-light">
            Défiler
          </span>
        </div>

      </div>
    </section>
  )
}
