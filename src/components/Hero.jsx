export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">

      {/* Fullscreen video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/brabus-hero.mp4" type="video/mp4" />
      </video>

      {/* Cinematic overlays */}
      {/* Left fade — keeps text readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />
      {/* Top/bottom vignette — cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-[7vw] pt-16">
        <div className="max-w-xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-8 h-px bg-white/30" />
            <p className="uppercase tracking-[0.35em] text-[10px] text-white/50 font-light">
              Service Automobile de Luxe · Lausanne
            </p>
          </div>

          {/* Headline — weight contrast */}
          <div className="mb-10">
            <h1 className="text-[82px] leading-[0.92] font-extralight tracking-[-0.03em] text-white">
              Brabus
            </h1>
            <h1 className="text-[82px] leading-[0.92] font-semibold tracking-[-0.03em] text-white">
              Garage
            </h1>
          </div>

          {/* Description */}
          <p className="text-white/55 text-[14px] max-w-[340px] leading-[1.8] mb-12 font-light">
            Expertise technique et soin premium pour véhicules de prestige.
            Votre performance, notre passion.
          </p>

          {/* CTA */}
          <div className="flex items-center gap-9">
            <a
              href="#services"
              className="px-8 py-3.5 bg-white text-[#0d0d0d] text-[10px] tracking-[0.25em] uppercase font-light hover:bg-white/90 transition-colors duration-300"
            >
              Nos Services
            </a>
            <a
              href="/contact"
              className="flex items-center gap-2.5 text-[10px] tracking-[0.25em] uppercase font-light text-white/50 hover:text-white transition-colors duration-300"
            >
              <span>Prendre RDV</span>
              <span className="text-xs">→</span>
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-start gap-10 mt-16 pt-10 border-t border-white/10">
            <div>
              <p className="text-[26px] font-light tracking-tight text-white">12+</p>
              <p className="text-[9px] uppercase tracking-[0.22em] text-white/40 font-light mt-1">
                Ans d'expérience
              </p>
            </div>
            <div>
              <p className="text-[26px] font-light tracking-tight text-white">3 000+</p>
              <p className="text-[9px] uppercase tracking-[0.22em] text-white/40 font-light mt-1">
                Véhicules traités
              </p>
            </div>
            <div>
              <p className="text-[26px] font-light tracking-tight text-white">5.0★</p>
              <p className="text-[9px] uppercase tracking-[0.22em] text-white/40 font-light mt-1">
                Satisfaction client
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-[7vw] z-10 flex items-center gap-3">
        <div className="w-5 h-px bg-white/25" />
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/35 font-light">
          Défiler
        </span>
      </div>

    </section>
  )
}
