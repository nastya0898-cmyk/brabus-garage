import { useState } from 'react'

const serviceOptions = [
  'Diagnostic électronique',
  'Carrosserie & Peinture',
  'Detailing Premium',
  'Tuning & Performance',
  'Autre',
]

const info = [
  { label: 'Adresse', value: 'Route de la Gare 12, 1003 Lausanne' },
  { label: 'Téléphone', value: '+41 78 000 00 00' },
  { label: 'Email', value: 'brabusgaragelausanne@gmail.com' },
  { label: 'Horaires', value: 'Lun – Ven · 08:00 – 19:00' },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    service: '',
    date: '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', phone: '', email: '', vehicle: '', service: '', date: '', message: '' })
  }

  return (
    <section id="contact" className="bg-white py-28">
      <div className="px-[6vw] grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* Left — Info */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-neutral-300" />
            <p className="uppercase tracking-[0.35em] text-[10px] text-neutral-400 font-light">
              Contact & Réservation
            </p>
          </div>

          <h2 className="text-[48px] font-extralight tracking-[-0.02em] text-[#0d0d0d] leading-tight mb-10">
            Prenez
            <br />
            <span className="font-semibold">rendez-vous</span>
          </h2>

          <p className="text-neutral-400 text-[14px] leading-[1.8] mb-14 font-light max-w-sm">
            Contactez-nous pour toute demande de renseignement ou pour réserver
            votre créneau. Réponse garantie sous 24 heures.
          </p>

          <div className="space-y-6">
            {info.map(({ label, value }) => (
              <div key={label} className="flex gap-8">
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-light w-20 flex-shrink-0 pt-0.5">
                  {label}
                </span>
                <span className="text-[13px] text-neutral-700 font-light">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div>
          {sent ? (
            <div className="h-full flex flex-col justify-center py-16">
              <div className="w-10 h-10 border border-[#0d0d0d] flex items-center justify-center mb-8">
                <span className="text-[#0d0d0d] text-xl font-light">✓</span>
              </div>
              <h3 className="text-[24px] font-light text-[#0d0d0d] mb-4">Demande envoyée</h3>
              <p className="text-[13px] text-neutral-400 font-light leading-relaxed max-w-sm">
                Merci pour votre message. Notre équipe vous contactera dans les 24 heures pour confirmer votre rendez-vous.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-10 self-start text-[10px] tracking-[0.2em] uppercase font-light text-neutral-400 hover:text-[#0d0d0d] transition-colors border-b border-neutral-300 pb-0.5"
              >
                Nouvelle demande →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-light mb-2">
                    Nom complet *
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jean-Marc Dupont"
                    className="w-full border border-neutral-200 px-4 py-3 text-[13px] text-[#0d0d0d] font-light focus:outline-none focus:border-[#0d0d0d] transition-colors bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-light mb-2">
                    Téléphone *
                  </label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+41 78 000 00 00"
                    className="w-full border border-neutral-200 px-4 py-3 text-[13px] text-[#0d0d0d] font-light focus:outline-none focus:border-[#0d0d0d] transition-colors bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-light mb-2">
                  Email *
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="vous@email.com"
                  className="w-full border border-neutral-200 px-4 py-3 text-[13px] text-[#0d0d0d] font-light focus:outline-none focus:border-[#0d0d0d] transition-colors bg-white"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-light mb-2">
                    Véhicule
                  </label>
                  <input
                    type="text"
                    name="vehicle"
                    value={form.vehicle}
                    onChange={handleChange}
                    placeholder="BMW M3, Porsche 911…"
                    className="w-full border border-neutral-200 px-4 py-3 text-[13px] text-[#0d0d0d] font-light focus:outline-none focus:border-[#0d0d0d] transition-colors bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-light mb-2">
                    Service souhaité
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full border border-neutral-200 px-4 py-3 text-[13px] text-neutral-500 font-light focus:outline-none focus:border-[#0d0d0d] transition-colors bg-white appearance-none"
                  >
                    <option value="">Choisir…</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-light mb-2">
                  Date souhaitée
                </label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full border border-neutral-200 px-4 py-3 text-[13px] text-neutral-500 font-light focus:outline-none focus:border-[#0d0d0d] transition-colors bg-white"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-light mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Décrivez votre demande…"
                  className="w-full border border-neutral-200 px-4 py-3 text-[13px] text-[#0d0d0d] font-light focus:outline-none focus:border-[#0d0d0d] transition-colors bg-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#0d0d0d] text-white text-[11px] tracking-[0.25em] uppercase font-light hover:bg-neutral-800 transition-colors duration-300"
              >
                Envoyer la demande
              </button>

              <p className="text-[10px] text-neutral-400 font-light text-center">
                Réponse sous 24h · Lun – Ven, 08:00 – 19:00
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
