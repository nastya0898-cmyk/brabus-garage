const team = [
  {
    name: 'Marc Dupont',
    role: 'Directeur Technique',
    bio: "18 ans d'expérience en mécanique haute performance et systèmes électroniques embarqués.",
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Lucas Favre',
    role: 'Expert Carrosserie',
    bio: "Spécialiste peinture et réparation, certifié constructeur, 14 ans au service de l'excellence.",
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Karim El Amine',
    role: 'Technicien Tuning',
    bio: 'Expert en optimisation moteur, reprogrammation ECU et préparations sportives sur mesure.',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop',
  },
]

export default function Team() {
  return (
    <section id="team" className="bg-[#f7f7f7] py-28 px-[6vw]">

      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-px bg-neutral-300" />
          <p className="uppercase tracking-[0.35em] text-[10px] text-neutral-400 font-light">
            Notre Équipe
          </p>
        </div>
        <h2 className="text-[48px] font-extralight tracking-[-0.02em] text-[#0d0d0d] leading-tight">
          Des experts
          <br />
          <span className="font-semibold">à votre écoute</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member) => (
          <div key={member.name}>
            <div className="overflow-hidden mb-6 aspect-[3/4]">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <h3 className="text-[17px] font-light text-[#0d0d0d] mb-1">{member.name}</h3>
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-3 font-light">
              {member.role}
            </p>
            <p className="text-[13px] text-neutral-500 font-light leading-relaxed">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
