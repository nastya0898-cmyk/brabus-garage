const points = [
  'Techniciens certifiés constructeurs',
  'Équipements de diagnostic dernière génération',
  'Devis transparents sans surprises',
  'Prise en charge et livraison disponibles',
]

export default function About() {
  return (
    <section id="about" className="bg-white py-28">
      <div className="px-[6vw] grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Left — Image */}
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1200&auto=format&fit=crop"
              alt="Atelier Brabus Garage Lausanne"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating stat badge */}
          <div className="absolute bottom-8 -right-6 bg-white p-6 shadow-lg">
            <p className="text-[34px] font-extralight text-[#0d0d0d] leading-none">12+</p>
            <p className="text-[9px] uppercase tracking-[0.22em] text-neutral-400 font-light mt-1">
              Ans d'expertise
            </p>
          </div>
        </div>

        {/* Right — Text */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-neutral-300" />
            <p className="uppercase tracking-[0.35em] text-[10px] text-neutral-400 font-light">
              Notre Histoire
            </p>
          </div>

          <h2 className="text-[44px] font-extralight tracking-[-0.02em] text-[#0d0d0d] leading-tight mb-8">
            Passion, précision
            <br />
            <span className="font-semibold">et savoir-faire</span>
          </h2>

          <p className="text-neutral-400 text-[14px] leading-[1.85] mb-5 font-light">
            Fondé à Lausanne, Brabus Garage s'est imposé comme la référence
            en matière d'entretien et de préparation de véhicules de prestige
            en Suisse romande.
          </p>
          <p className="text-neutral-400 text-[14px] leading-[1.85] mb-12 font-light">
            Notre équipe de techniciens certifiés allie expertise technique et
            amour du détail pour offrir à chaque véhicule un traitement à la
            hauteur de sa valeur.
          </p>

          {/* Key points */}
          <div className="space-y-4 mb-12">
            {points.map((point) => (
              <div key={point} className="flex items-start gap-4">
                <div className="w-4 h-px bg-[#0d0d0d] mt-[9px] flex-shrink-0" />
                <p className="text-[13px] text-neutral-600 font-light">{point}</p>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase font-light text-[#0d0d0d] border-b border-[#0d0d0d] pb-1 hover:text-neutral-500 hover:border-neutral-400 transition-colors duration-300"
          >
            <span>Nous contacter</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
