import { Link } from 'react-router-dom'

const services = [
  {
    id: 'diagnostic',
    number: '01',
    title: 'Diagnostic Électronique',
    subtitle: 'Expertise complète de votre véhicule',
    intro:
      "Notre diagnostic électronique vous offre une analyse exhaustive de l'ensemble des systèmes de votre véhicule. Grâce à des équipements de dernière génération compatibles avec tous les constructeurs premium, nous identifions avec précision chaque anomalie et vous fournissons un rapport détaillé.",
    details:
      "Que ce soit pour un voyant allumé, une perte de performance inexpliquée ou simplement un contrôle de routine, notre équipe prend le temps d'analyser chaque point et de vous expliquer les résultats dans un langage clair.",
    includes: [
      'Scan OBD complet — lecture de tous les calculateurs',
      'Analyse électronique moteur, boîte, châssis, confort',
      'Vérification des mises à jour logicielles disponibles',
      'Contrôle de la batterie 12V et du système de charge',
      'Rapport PDF détaillé envoyé par email',
      'Recommandations priorisées et devis fournis',
    ],
    process: [
      { step: '1', label: 'Réception', desc: "Prise en charge de votre véhicule à l'atelier" },
      { step: '2', label: 'Connexion', desc: 'Branchement sur notre banc de diagnostic' },
      { step: '3', label: 'Analyse', desc: 'Lecture de tous les modules électroniques' },
      { step: '4', label: 'Rapport', desc: 'Résultats expliqués et devis fourni' },
    ],
    price: 'CHF 150',
    unit: 'par véhicule',
    duration: '1 à 2 heures',
    image:
      'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'carrosserie',
    number: '02',
    title: 'Carrosserie & Peinture',
    subtitle: 'Restitution parfaite de votre véhicule',
    intro:
      "Notre atelier carrosserie est équipé des meilleurs outils de redressage et de peinture pour une restitution parfaite de votre véhicule. Chaque intervention est réalisée dans le respect des normes constructeur, avec des teintes mixées à la perfection.",
    details:
      "De la simple égratignure à la réparation structurelle, nos carrossiers diplômés traitent chaque cas avec la même exigence de qualité. Tous les travaux sont garantis et documentés.",
    includes: [
      'Débosselage sans peinture (PDR) pour petits impacts',
      'Redressage structurel avec banc de mesure laser',
      'Mastic, apprêt et préparation de surface',
      'Peinture teinte constructeur mixée sur mesure',
      'Vernis de protection haute durabilité',
      'Polissage final et contrôle qualité visuel',
    ],
    process: [
      { step: '1', label: 'Évaluation', desc: 'Inspection et devis gratuit sous 24h' },
      { step: '2', label: 'Démontage', desc: 'Préparation et protection des zones adjacentes' },
      { step: '3', label: 'Réparation', desc: 'Redressage, préparation de surface' },
      { step: '4', label: 'Finition', desc: 'Peinture, vernis, polissage et livraison' },
    ],
    price: 'dès CHF 90',
    unit: 'par heure',
    duration: 'Selon travaux',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'detailing',
    number: '03',
    title: 'Detailing Premium',
    subtitle: "Traitement complet et protection de l'état neuf",
    intro:
      "Le detailing est bien plus qu'un simple lavage. C'est un traitement minutieux, couche par couche, de chaque surface de votre véhicule. Nous utilisons exclusivement des produits professionnels de marques reconnues pour obtenir un résultat digne des concessions les plus exigeantes.",
    details:
      "Nos forfaits sont adaptés à vos besoins, qu'il s'agisse d'un entretien régulier ou d'une remise en état complète avant revente ou événement. Chaque véhicule est traité comme une pièce unique.",
    packages: [
      {
        name: 'Essentiel',
        price: 'CHF 199',
        items: [
          'Lavage extérieur à la main',
          'Nettoyage des jantes',
          'Aspiration intérieure complète',
          'Nettoyage des plastiques intérieurs',
          'Vitrages traités anti-pluie',
        ],
      },
      {
        name: 'Premium',
        price: 'CHF 399',
        items: [
          'Tout le forfait Essentiel',
          'Décontamination ferreux et goudron',
          'Polish une étape — correction légère',
          'Protection cire carnauba',
          'Soin cuir ou tissu intérieur',
        ],
        highlighted: true,
      },
      {
        name: 'Signature',
        price: 'CHF 799',
        items: [
          'Tout le forfait Premium',
          'Correction de peinture 2 étapes',
          'Application coating céramique 9H',
          'Protection garantie 2 ans',
          'Certificat de traitement fourni',
        ],
      },
    ],
    price: 'dès CHF 199',
    unit: '',
    duration: '4 à 10 heures',
    image:
      'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'tuning',
    number: '04',
    title: 'Tuning & Performance',
    subtitle: 'Optimisation sportive sur mesure',
    intro:
      "Le tuning chez Brabus Garage va au-delà de la simple reprogrammation. Nous concevons avec vous un programme d'optimisation sur mesure qui respecte la mécanique de votre véhicule tout en libérant son potentiel réel.",
    details:
      "Chaque intervention est documentée, réversible sur demande, et validée sur banc de puissance. Nos techniciens sont certifiés par les principaux acteurs du domaine et travaillent avec les outils reconnus par l'industrie.",
    stages: [
      {
        name: 'Stage 1',
        desc: 'Reprogrammation ECU seule, sans modification mécanique',
        gain: '+15 à +30%',
        note: 'Idéal pour le quotidien',
      },
      {
        name: 'Stage 2',
        desc: 'ECU + modifications admission et échappement',
        gain: '+30 à +50%',
        note: 'Performance track-day',
      },
      {
        name: 'Stage 3',
        desc: 'Préparation complète — turbo, injection, refroidissement',
        gain: '+50% et plus',
        note: 'Préparation compétition',
      },
    ],
    includes: [
      'Consultation préalable et bilan du véhicule',
      'Reprogrammation sur banc de puissance calibré',
      'Mesure avant / après et rapport de puissance',
      'Essai routier avec technicien',
      'Fichier original conservé — réversible sur demande',
      'Suivi et ajustements inclus pendant 30 jours',
    ],
    price: 'Sur devis',
    unit: '',
    duration: '1 à 3 jours',
    image:
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1400&auto=format&fit=crop',
  },
]

const faqs = [
  {
    q: "Puis-je venir sans rendez-vous ?",
    a: "Nous recommandons vivement de prendre rendez-vous pour garantir la disponibilité de notre équipe et des équipements nécessaires à votre intervention.",
  },
  {
    q: "Combien de temps dure un diagnostic complet ?",
    a: "En général entre 1 et 2 heures. Nous vous contactons dès la fin de l'analyse pour vous présenter les résultats.",
  },
  {
    q: "Utilisez-vous des pièces d'origine ?",
    a: "Oui, nous utilisons exclusivement des pièces certifiées constructeur ou équivalentes premium. Toutes les pièces montées sont documentées dans le rapport d'intervention.",
  },
  {
    q: "Proposez-vous un service de prise en charge à domicile ?",
    a: "Oui, dans un rayon de 30 km autour de Lausanne. Ce service est disponible sur réservation, sous réserve de disponibilité.",
  },
  {
    q: "La reprogrammation annule-t-elle la garantie constructeur ?",
    a: "Nous conservons toujours le fichier d'origine et pouvons effectuer un retour au stock avant tout passage en concession. Nous vous conseillons sur votre situation spécifique lors de la consultation.",
  },
]

function SectionHeader({ number, title, subtitle }) {
  return (
    <div className="flex items-start gap-6 mb-10">
      <span className="text-[10px] tracking-[0.3em] text-neutral-300 font-light pt-1 flex-shrink-0">
        {number}
      </span>
      <div>
        <h2 className="text-[38px] font-extralight tracking-[-0.02em] text-[#0d0d0d] leading-tight">
          {title}
        </h2>
        <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-light mt-2">
          {subtitle}
        </p>
      </div>
    </div>
  )
}

export default function ServicesPage() {
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
            Nos<br />
            <span className="font-semibold">Services</span>
          </h1>
          <p className="text-neutral-400 text-[15px] leading-[1.85] font-light max-w-lg">
            Quatre domaines d'expertise, une seule exigence : la perfection. Chaque véhicule qui entre dans notre atelier bénéficie de l'attention et du soin qu'il mérite.
          </p>
        </div>
      </div>

      {/* Services — one per section */}
      {services.map((s, i) => (
        <div
          key={s.id}
          id={s.id}
          className={`py-24 px-[6vw] ${i % 2 === 1 ? 'bg-[#f7f7f7]' : 'bg-white'}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Text — alternates sides */}
            <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
              <SectionHeader number={s.number} title={s.title} subtitle={s.subtitle} />

              <p className="text-neutral-500 text-[14px] leading-[1.85] font-light mb-5">
                {s.intro}
              </p>
              <p className="text-neutral-400 text-[13px] leading-[1.85] font-light mb-10">
                {s.details}
              </p>

              {/* Includes list */}
              {s.includes && (
                <div className="mb-10">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-light mb-5">
                    Ce qui est inclus
                  </p>
                  <div className="space-y-3">
                    {s.includes.map((item) => (
                      <div key={item} className="flex items-start gap-4">
                        <div className="w-4 h-px bg-[#0d0d0d] mt-[9px] flex-shrink-0" />
                        <p className="text-[13px] text-neutral-600 font-light">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Stages (Tuning) */}
              {s.stages && (
                <div className="mb-10">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-light mb-5">
                    Niveaux de préparation
                  </p>
                  <div className="space-y-4">
                    {s.stages.map((stage) => (
                      <div key={stage.name} className="border border-neutral-200 p-5">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[13px] font-medium text-[#0d0d0d]">{stage.name}</span>
                          <span className="text-[12px] font-light text-neutral-500 bg-neutral-100 px-3 py-1">
                            {stage.gain}
                          </span>
                        </div>
                        <p className="text-[12px] text-neutral-500 font-light">{stage.desc}</p>
                        <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400 font-light mt-1">
                          {stage.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Detailing packages */}
              {s.packages && (
                <div className="mb-10">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-light mb-5">
                    Nos forfaits
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {s.packages.map((pkg) => (
                      <div
                        key={pkg.name}
                        className={`p-6 border ${
                          pkg.highlighted
                            ? 'border-[#0d0d0d] bg-[#0d0d0d] text-white'
                            : 'border-neutral-200'
                        }`}
                      >
                        <p
                          className={`text-[10px] uppercase tracking-[0.2em] font-light mb-1 ${
                            pkg.highlighted ? 'text-neutral-400' : 'text-neutral-400'
                          }`}
                        >
                          Forfait
                        </p>
                        <p
                          className={`text-[17px] font-light mb-1 ${
                            pkg.highlighted ? 'text-white' : 'text-[#0d0d0d]'
                          }`}
                        >
                          {pkg.name}
                        </p>
                        <p
                          className={`text-[20px] font-extralight mb-5 ${
                            pkg.highlighted ? 'text-white' : 'text-[#0d0d0d]'
                          }`}
                        >
                          {pkg.price}
                        </p>
                        <div className="space-y-2">
                          {pkg.items.map((item) => (
                            <div key={item} className="flex items-start gap-2">
                              <div
                                className={`w-3 h-px mt-[9px] flex-shrink-0 ${
                                  pkg.highlighted ? 'bg-neutral-500' : 'bg-neutral-300'
                                }`}
                              />
                              <p
                                className={`text-[11px] font-light leading-relaxed ${
                                  pkg.highlighted ? 'text-neutral-300' : 'text-neutral-500'
                                }`}
                              >
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Process */}
              {s.process && (
                <div className="mb-10">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-light mb-5">
                    Notre processus
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {s.process.map((p) => (
                      <div key={p.step}>
                        <span className="text-[10px] tracking-[0.3em] text-neutral-300 font-light">
                          {p.step}
                        </span>
                        <p className="text-[13px] font-light text-[#0d0d0d] mt-1 mb-1">{p.label}</p>
                        <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
                          {p.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Price + CTA */}
              <div className="flex items-center justify-between pt-8 border-t border-neutral-100">
                <div>
                  <p className="text-[28px] font-extralight text-[#0d0d0d]">{s.price}</p>
                  <div className="flex gap-6 mt-1">
                    {s.unit && (
                      <p className="text-[10px] text-neutral-400 font-light">{s.unit}</p>
                    )}
                    <p className="text-[10px] text-neutral-400 font-light">Durée : {s.duration}</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="px-7 py-3 bg-[#0d0d0d] text-white text-[10px] tracking-[0.22em] uppercase font-light hover:bg-neutral-800 transition-colors duration-300"
                >
                  Prendre RDV
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* FAQ */}
      <div className="py-24 px-[6vw] bg-[#f7f7f7]">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-neutral-300" />
            <p className="uppercase tracking-[0.35em] text-[10px] text-neutral-400 font-light">
              Questions fréquentes
            </p>
          </div>
          <h2 className="text-[40px] font-extralight tracking-[-0.02em] text-[#0d0d0d] leading-tight mb-14">
            Vous avez<br />
            <span className="font-semibold">des questions ?</span>
          </h2>

          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <div key={i} className="border-t border-neutral-200 py-7">
                <p className="text-[15px] font-light text-[#0d0d0d] mb-3">{faq.q}</p>
                <p className="text-[13px] text-neutral-500 font-light leading-[1.8]">{faq.a}</p>
              </div>
            ))}
            <div className="border-t border-neutral-200" />
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-[#0d0d0d] py-20 px-[6vw] flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-light mb-3">
            Prêt à commencer ?
          </p>
          <h2 className="text-[36px] font-extralight text-white leading-tight">
            Réservez votre
            <br />
            <span className="font-semibold">rendez-vous</span>
          </h2>
        </div>
        <Link
          to="/contact"
          className="flex-shrink-0 px-10 py-4 border border-white text-white text-[11px] tracking-[0.25em] uppercase font-light hover:bg-white hover:text-[#0d0d0d] transition-colors duration-300"
        >
          Nous contacter
        </Link>
      </div>
    </div>
  )
}
