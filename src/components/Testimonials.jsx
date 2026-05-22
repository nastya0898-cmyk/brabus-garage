const reviews = [
  {
    quote:
      "Une équipe professionnelle et passionnée. Mon Porsche n'a jamais été aussi bien entretenu. Service impeccable, à la hauteur des meilleures maisons.",
    author: 'Alexandre M.',
    vehicle: 'Porsche 911 GT3',
    rating: 5,
  },
  {
    quote:
      'Detailing exceptionnel — la voiture est ressortie littéralement comme neuve. Précision et souci du détail absolument remarquables.',
    author: 'Sophie L.',
    vehicle: 'Mercedes-AMG C63',
    rating: 5,
  },
  {
    quote:
      "Diagnostic précis, devis transparent, délais respectés. Je ne confie plus mon véhicule qu'à Brabus Garage. Hautement recommandé.",
    author: 'Thomas B.',
    vehicle: 'BMW M5 Competition',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="bg-[#0d0d0d] py-28 px-[6vw]">

      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-px bg-neutral-700" />
          <p className="uppercase tracking-[0.35em] text-[10px] text-neutral-500 font-light">
            Témoignages
          </p>
        </div>
        <h2 className="text-[48px] font-extralight tracking-[-0.02em] text-white leading-tight">
          Ce que disent
          <br />
          <span className="font-semibold">nos clients</span>
        </h2>
      </div>

      {/* Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div key={r.author} className="border border-neutral-800 p-8 flex flex-col">

            {/* Stars */}
            <div className="flex gap-1 mb-7">
              {Array.from({ length: r.rating }).map((_, i) => (
                <span key={i} className="text-neutral-500 text-[11px]">★</span>
              ))}
            </div>

            {/* Quote */}
            <p className="text-neutral-300 text-[14px] leading-[1.85] font-light italic flex-1">
              "{r.quote}"
            </p>

            {/* Author */}
            <div className="border-t border-neutral-800 pt-6 mt-8">
              <p className="text-white text-[13px] font-light">{r.author}</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 mt-1 font-light">
                {r.vehicle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
