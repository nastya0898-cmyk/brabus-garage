import { useState } from 'react'
import { Link } from 'react-router-dom'

const serviceOptions = [
  'Diagnostic électronique',
  'Carrosserie & Peinture',
  'Detailing Premium',
  'Tuning & Performance',
  'Autre',
]

const details = [
  {
    label: 'Adresse',
    value: 'Route de la Gare 12\n1003 Lausanne, Suisse',
  },
  {
    label: 'Téléphone',
    value: '+41 78 000 00 00',
    href: 'tel:+41780000000',
  },
  {
    label: 'Email',
    value: 'brabusgaragelausanne@gmail.com',
    href: 'mailto:brabusgaragelausanne@gmail.com',
  },
  {
    label: 'Horaires',
    value: 'Lun – Ven · 08:00 – 19:00\nSam – Dim · Fermé',
  },
]

export default function ContactPage() {
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
    <div className="pt-16">

      {/* Page hero */}
      <div className="bg-[#0d0d0d] px-[6vw] py-24">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-px bg-neutral-700" />
          <p className="uppercase tracking-[0.35em] text-[10px] text-neutral-500 font-light">
            Brabus Garage · Lausanne
          </p>
        </div>
        <h1 className="text-[56px] md:text-[72px] font-extralight tracking-[-0.03em] text-white leading-tight">
          Prendre
          <br />
          <span className="font-semibold">rendez-vous</span>
        </h1>
        <p className="text-neutral-400 text-[14px] font-light leading-[1.8] mt-8 max-w-lg">
          Remplissez le formulaire ou contactez-nous directement.
          Notre équipe vous répond sous 24 heures ouvrées.
        </p>
      </div>

      {/* Main content */}
      <div className="bg-white py-20 px-[6vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Left — details + info */}
          <div>
            <h2 className="text-[28px] font-extralight tracking-[-0.02em] text-[#0d0d0d] mb-10">
              Nos coordonnées
            </h2>

            <div className="space-y-8 mb-14">
              {details.map(({ label, value, href }) => (
                <div key={label} className="flex gap-8">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-light w-24 flex-shrink-0 pt-0.5">
                    {label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      className="text-[13px] text-neutral-700 font-light hover:text-[#0d0d0d] transition-colors whitespace-pre-line"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-[13px] text-neutral-700 font-light whitespace-pre-line">
                      {value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="bg-[#f7f7f7] aspect-[4/3] flex items-center justify-center">
              <div className="text-center">
                <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-400 font-light mb-2">
                  Lausanne, Suisse
                </p>
                <p className="text-[12px] text-neutral-400 font-light">
                  Route de la Gare 12 · 1003
                </p>
              </div>
            </div>

            {/* Services shortlinks */}
            <div className="mt-10 pt-10 border-t border-neutral-100">
              <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-light mb-5">
                Nos services
              </p>
              <div className="grid grid-cols-2 gap-3">
                {serviceOptions.slice(0, 4).map((s) => (
                  <Link
                    key={s}
                    to="/services"
                    className="text-[12px] text-neutral-500 font-light hover:text-[#0d0d0d] transition-colors flex items-center gap-2"
                  >
                    <span className="w-3 h-px bg-neutral-300 flex-shrink-0" />
                    {s}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {sent ? (
              <div className="h-full flex flex-col justify-center py-10">
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
      </div>

    </div>
  )
}
