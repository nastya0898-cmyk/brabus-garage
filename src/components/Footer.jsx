import { Link } from 'react-router-dom'

const pageLinks = [
  { label: 'Services', to: '/services' },
  { label: 'À propos', to: '/#about' },
  { label: 'Équipe', to: '/#team' },
  { label: 'Galerie', to: '/#gallery' },
  { label: 'Avis clients', to: '/avis' },
  { label: 'Contact', to: '/contact' },
]

const contactInfo = [
  'Route de la Gare 12, 1003 Lausanne',
  '+41 78 000 00 00',
  'brabusgaragelausanne@gmail.com',
  'Lun – Ven · 08:00 – 19:00',
]

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] py-16 px-[6vw]">
      <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-14">

        {/* Logo + tagline */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center gap-2.5 mb-5">
            <div className="w-7 h-7 bg-white flex items-center justify-center">
              <span className="text-[#0d0d0d] text-[10px] font-semibold tracking-widest">BG</span>
            </div>
            <div className="flex flex-col leading-none gap-0.5">
              <span className="text-[11px] font-semibold tracking-[0.18em] text-white">BRABUS</span>
              <span className="text-[9px] font-light tracking-[0.22em] text-neutral-500">GARAGE</span>
            </div>
          </Link>
          <p className="text-[12px] text-neutral-600 font-light leading-relaxed max-w-[200px]">
            Service automobile de prestige à Lausanne, Suisse.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3">
          <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-700 font-light mb-2">
            Navigation
          </p>
          {pageLinks.map(({ label, to }) =>
            to.startsWith('/#') ? (
              <a
                key={label}
                href={to}
                className="text-[12px] text-neutral-500 font-light hover:text-white transition-colors duration-300"
              >
                {label}
              </a>
            ) : (
              <Link
                key={label}
                to={to}
                className="text-[12px] text-neutral-500 font-light hover:text-white transition-colors duration-300"
              >
                {label}
              </Link>
            )
          )}
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-3">
          <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-700 font-light mb-2">
            Contact
          </p>
          {contactInfo.map((line) => (
            <p key={line} className="text-[12px] text-neutral-500 font-light">
              {line}
            </p>
          ))}
        </div>
      </div>

      <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-[11px] text-neutral-700 font-light">
          © {new Date().getFullYear()} Brabus Garage Lausanne. Tous droits réservés.
        </p>
        <p className="text-[11px] text-neutral-700 font-light">Lausanne · Suisse</p>
      </div>
    </footer>
  )
}
