import { Link } from 'react-router-dom'

const reviews = [
  {
    quote:
      "Une équipe professionnelle et passionnée. Mon Porsche n'a jamais été aussi bien entretenu. Service impeccable, à la hauteur des meilleures maisons.",
    author: 'Alexandre M.',
    vehicle: 'Porsche 911 GT3',
    service: 'Diagnostic & Entretien',
    rating: 5,
    date: 'Mars 2025',
  },
  {
    quote:
      "Detailing exceptionnel — la voiture est ressortie littéralement comme neuve. Précision et souci du détail absolument remarquables. Je recommande sans hésiter.",
    author: 'Sophie L.',
    vehicle: 'Mercedes-AMG C63',
    service: 'Detailing Signature',
    rating: 5,
    date: 'Février 2025',
  },
  {
    quote:
      "Diagnostic précis, devis transparent, délais respectés. Je ne confie plus mon véhicule qu'à Brabus Garage. Hautement recommandé à tous les amateurs de belles voitures.",
    author: 'Thomas B.',
    vehicle: 'BMW M5 Competition',
    service: 'Diagnostic',
    rating: 5,
    date: 'Janvier 2025',
  },
  {
    quote:
      "Stage 2 réalisé sur ma Golf R. Le résultat est bluffant — plus de 380ch sur le banc, la voiture est méconnaissable. Suivi sérieux, fichier d'origine conservé.",
    author: 'Julien R.',
    vehicle: 'Volkswagen Golf R',
    service: 'Tuning Stage 2',
    rating: 5,
    date: 'Décembre 2024',
  },
  {
    quote:
      "Réparation carrosserie suite à un accrochage. Résultat parfait, teinte identique à l'origine. Délais tenus, communication excellente tout au long du process.",
    author: 'Marie-Claire D.',
    vehicle: 'Audi A5 Sportback',
    service: 'Carrosserie & Peinture',
    rating: 5,
    date: 'Novembre 2024',
  },
  {
    quote:
      "Forfait detailing Premium avant livraison à un nouveau propriétaire. Résultat spectaculaire, la voiture valait CHF 2000 de plus après le traitement. Investissement largement rentabilisé.",
    author: 'Patrick V.',
    vehicle: 'Porsche Cayenne',
    service: 'Detailing Premium',
    rating: 5,
    date: 'Octobre 2024',
  },
]

const stats = [
  { value: '5.0', label: 'Note Google', sub: 'sur 5 étoiles' },
  { value: '98%', label: 'Satisfaction client', sub: 'sur 200+ avis' },
  { value: '3 000+', label: 'Véhicules traités', sub: 'depuis 2012' },
  { value: '12+', label: "Ans d'expertise", sub: 'à Lausanne' },
]

export default function AvisPage() {
  return (
    <div className="w-full bg-white">

      {/* Page Hero */}
      <div className="pt-32 pb-20 px-[6vw] border-b border-neutral-100">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-px bg-neutral-300" />
          <p className="uppercase tracking-[0.35em] text-[10px] text-neutral-400 font-light">
            Brabus Garage · Lausanne
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <h1 className="text-[64px] font-extralight tracking-[-0.03em] text-[#0d0d0d] leading-tight">
            Avis de<br />
            <span className="font-semibold">nos clients</span>
          </h1>
          <p className="text-neutral-400 text-[15px] leading-[1.85] font-light max-w-lg">
            La qualité de notre travail se mesure à la satisfaction de ceux qui nous font confiance. Voici ce que disent nos clients après chaque intervention.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="px-[6vw] py-16 grid grid-cols-2 md:grid-cols-4 gap-0 border-b border-neutral-100">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`py-8 px-6 ${i < stats.length - 1 ? 'border-r border-neutral-100' : ''}`}
          >
            <p className="text-[42px] font-extralight text-[#0d0d0d] leading-none">{s.value}</p>
            <p className="text-[12px] font-light text-[#0d0d0d] mt-2">{s.label}</p>
            <p className="text-[10px] text-neutral-400 font-light mt-0.5">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Reviews grid */}
      <div className="px-[6vw] py-24">
        <div className="flex items-center gap-4 mb-14">
          <div className="w-8 h-px bg-neutral-300" />
          <p className="uppercase tracking-[0.35em] text-[10px] text-neutral-400 font-light">
            Témoignages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.author} className="border border-neutral-100 p-8 flex flex-col">

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <span key={i} className="text-[#0d0d0d] text-[11px]">★</span>
                ))}
              </div>

              {/* Service tag */}
              <span className="text-[9px] uppercase tracking-[0.25em] text-neutral-400 font-light border border-neutral-200 px-3 py-1 self-start mb-6">
                {r.service}
              </span>

              {/* Quote */}
              <p className="text-neutral-600 text-[14px] leading-[1.85] font-light italic flex-1">
                "{r.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-neutral-100 pt-6 mt-8 flex items-end justify-between">
                <div>
                  <p className="text-[13px] font-light text-[#0d0d0d]">{r.author}</p>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-neutral-400 font-light mt-0.5">
                    {r.vehicle}
                  </p>
                </div>
                <p className="text-[10px] text-neutral-400 font-light">{r.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust block */}
      <div className="bg-[#f7f7f7] py-20 px-[6vw]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-400 font-light mb-6">
            Notre engagement
          </p>
          <h2 className="text-[38px] font-extralight tracking-[-0.02em] text-[#0d0d0d] leading-tight mb-8">
            La confiance se construit
            <br />
            <span className="font-semibold">intervention après intervention</span>
          </h2>
          <p className="text-neutral-500 text-[14px] leading-[1.85] font-light max-w-xl mx-auto mb-12">
            Chaque véhicule qui entre dans notre atelier est traité avec la même exigence, qu'il s'agisse d'une voiture de série ou d'un exemplaire de collection. Notre réputation repose sur la transparence, la précision et le respect de vos attentes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: 'Transparence totale',
                desc: 'Devis détaillé avant chaque intervention. Aucun travail supplémentaire sans votre accord explicite.',
              },
              {
                title: 'Garantie main-d\'œuvre',
                desc: "Tous nos travaux sont garantis. En cas de problème, nous le résolvons sans frais supplémentaires.",
              },
              {
                title: 'Suivi personnalisé',
                desc: 'Rapport d\'intervention fourni par email. Historique de votre véhicule conservé pour un suivi optimal.',
              },
            ].map((item) => (
              <div key={item.title}>
                <div className="w-4 h-px bg-[#0d0d0d] mb-4" />
                <h3 className="text-[14px] font-light text-[#0d0d0d] mb-2">{item.title}</h3>
                <p className="text-[12px] text-neutral-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-[#0d0d0d] py-20 px-[6vw] flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-light mb-3">
            Rejoignez nos clients satisfaits
          </p>
          <h2 className="text-[36px] font-extralight text-white leading-tight">
            Confiez-nous votre
            <br />
            <span className="font-semibold">véhicule</span>
          </h2>
        </div>
        <Link
          to="/contact"
          className="flex-shrink-0 px-10 py-4 border border-white text-white text-[11px] tracking-[0.25em] uppercase font-light hover:bg-white hover:text-[#0d0d0d] transition-colors duration-300"
        >
          Prendre rendez-vous
        </Link>
      </div>
    </div>
  )
}
