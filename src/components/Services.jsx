const services = [
  {
    number: '01',
    title: 'Diagnostic',
    subtitle: 'Expertise électronique',
    description:
      'Analyse complète des systèmes de votre véhicule avec équipements de dernière génération. Rapport détaillé fourni.',
    price: 'CHF 150',
    unit: 'par véhicule',
    image:
      'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=800&auto=format&fit=crop',
  },
  {
    number: '02',
    title: 'Carrosserie',
    subtitle: 'Peinture & réparation',
    description:
      'Remise en état parfaite de votre carrosserie. Teintes certifiées constructeur, finitions au micron.',
    price: 'dès CHF 90',
    unit: 'par heure',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
  },
  {
    number: '03',
    title: 'Detailing',
    subtitle: 'Préparation premium',
    description:
      'Traitement complet intérieur et extérieur, protection céramique et polish de haute finition.',
    price: 'dès CHF 399',
    unit: '',
    image:
      'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=800&auto=format&fit=crop',
  },
  {
    number: '04',
    title: 'Tuning',
    subtitle: 'Performance & sport',
    description:
      'Optimisation moteur, reprogrammation ECU et modifications sportives sur mesure pour chaque véhicule.',
    price: 'Sur devis',
    unit: '',
    image:
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=800&auto=format&fit=crop',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-[#f7f7f7] py-28 px-[6vw]">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-neutral-300" />
            <p className="uppercase tracking-[0.35em] text-[10px] text-neutral-400 font-light">
              Nos Services
            </p>
          </div>
          <h2 className="text-[48px] font-extralight tracking-[-0.02em] text-[#0d0d0d] leading-tight">
            L'excellence
            <br />
            <span className="font-semibold">à votre service</span>
          </h2>
        </div>
        <a
          href="#contact"
          className="flex items-center gap-2.5 text-[10px] tracking-[0.22em] uppercase font-light text-neutral-400 hover:text-[#0d0d0d] transition-colors duration-300 self-start md:self-auto"
        >
          <span>Prendre rendez-vous</span>
          <span>→</span>
        </a>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s) => (
          <div key={s.number} className="group bg-white flex flex-col">

            {/* Image */}
            <div className="overflow-hidden h-48 flex-shrink-0">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Content */}
            <div className="p-7 flex flex-col flex-1">
              <span className="text-[10px] tracking-[0.3em] text-neutral-300 font-light">
                {s.number}
              </span>
              <h3 className="text-[20px] font-light tracking-tight text-[#0d0d0d] mt-2 mb-1">
                {s.title}
              </h3>
              <p className="text-[10px] uppercase tracking-[0.18em] text-neutral-400 mb-4 font-light">
                {s.subtitle}
              </p>
              <p className="text-[13px] text-neutral-500 leading-relaxed font-light flex-1">
                {s.description}
              </p>

              <div className="border-t border-neutral-100 pt-5 mt-6 flex items-end justify-between">
                <div>
                  <p className="text-[17px] font-light text-[#0d0d0d]">{s.price}</p>
                  {s.unit && (
                    <p className="text-[10px] text-neutral-400 font-light">{s.unit}</p>
                  )}
                </div>
                <a
                  href="#contact"
                  className="text-[10px] tracking-[0.18em] uppercase font-light text-neutral-400 hover:text-[#0d0d0d] transition-colors"
                >
                  RDV →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
