import { motion } from 'motion/react'
import { TestimonialsColumn } from './ui/TestimonialsColumns'

const testimonials = [
  {
    text: "Un niveau d'expertise exceptionnel. Mon GT3 RS a été préparé avec une précision chirurgicale. Les gains de performance sont spectaculaires et les réglages parfaitement équilibrés pour la piste.",
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Jean-Philippe Rochat',
    vehicle: 'Porsche 911 GT3 RS',
  },
  {
    text: "Le package Ultimate a transformé ma GLE. La protection céramique est impeccable et l'attention portée aux détails témoigne d'un savoir-faire hors du commun. Résultat photographique.",
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Isabelle Favre',
    vehicle: 'Mercedes-AMG GLE 63 S',
  },
  {
    text: "Après un accrochage difficile, Brabus Garage a redonné à ma M5 son aspect d'origine. La teinte est indiscernable de la peinture d'usine. Travail d'orfèvre, suivi irréprochable.",
    image: 'https://randomuser.me/api/portraits/men/51.jpg',
    name: 'Marc-Antoine Blondel',
    vehicle: 'BMW M5 Competition',
  },
  {
    text: "Diagnostic ultra-précis sur ma Ferrari Roma. L'équipe maîtrise les architectures électroniques complexes avec une aisance remarquable. Rapport détaillé, transparent et professionnel.",
    image: 'https://randomuser.me/api/portraits/women/28.jpg',
    name: 'Nadia Guerreiro',
    vehicle: 'Ferrari Roma',
  },
  {
    text: "Stage 2 réalisé avec brio sur mon Huracán. Les modifications ont été pensées pour préserver la fiabilité tout en libérant le potentiel du moteur. Le ressenti sur piste est extraordinaire.",
    image: 'https://randomuser.me/api/portraits/men/67.jpg',
    name: 'Thomas Reymond',
    vehicle: 'Lamborghini Huracán Evo',
  },
  {
    text: "Une adresse de confiance absolue pour ma Continental GT. Ici, on comprend ce que représente un véhicule de cette valeur. Chaque intervention est traitée avec l'excellence qu'elle mérite.",
    image: 'https://randomuser.me/api/portraits/women/56.jpg',
    name: 'Céline Müller',
    vehicle: 'Bentley Continental GT',
  },
  {
    text: "Mon RS7 ressort toujours impeccable. Le detailing est d'une qualité rare en Suisse romande. Je ne confie plus mon véhicule qu'à cette équipe — et ce depuis trois ans maintenant.",
    image: 'https://randomuser.me/api/portraits/men/72.jpg',
    name: 'Laurent Chevalier',
    vehicle: 'Audi RS7 Sportback',
  },
  {
    text: "Rayure profonde sur le flanc de mon Cayenne Turbo GT. Réparation invisible, délai tenu, prix conforme au devis. Exactement ce qu'on attend d'un garage de cette réputation.",
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
    name: 'Sophie Ansermet',
    vehicle: 'Porsche Cayenne Turbo GT',
  },
  {
    text: "Brabus Garage est l'un des rares ateliers en Suisse à qui je confie ma Wraith sans appréhension. La discrétion, le soin et la compétence de l'équipe sont à la hauteur du véhicule.",
    image: 'https://randomuser.me/api/portraits/men/86.jpg',
    name: 'Alexandre Bonnet',
    vehicle: 'Rolls-Royce Wraith',
  },
]

const firstColumn  = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn  = testimonials.slice(6, 9)

export default function Testimonials() {
  return (
    <section className="bg-white py-28 overflow-hidden">

      {/* Header */}
      <div className="px-[6vw]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-neutral-300" />
            <p className="uppercase tracking-[0.35em] text-[10px] text-neutral-400 font-light">
              Témoignages
            </p>
          </div>
          <h2 className="text-[48px] font-extralight tracking-[-0.02em] text-[#0d0d0d] leading-tight">
            Ce que disent
            <br />
            <span className="font-semibold">nos clients</span>
          </h2>
        </motion.div>
      </div>

      {/* Scrolling columns with top/bottom fade mask */}
      <div className="flex justify-center gap-5 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[720px] overflow-hidden">
        <TestimonialsColumn testimonials={firstColumn} duration={18} />
        <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={23} />
        <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={20} />
      </div>

    </section>
  )
}
