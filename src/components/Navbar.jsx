import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Services', to: '/services', page: true },
  { label: 'À propos', to: '/#about', page: false },
  { label: 'Équipe', to: '/#team', page: false },
  { label: 'Galerie', to: '/#gallery', page: false },
  { label: 'Avis', to: '/avis', page: true },
  { label: 'Contact', to: '/contact', page: true },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/96 backdrop-blur-sm border-b border-neutral-100">
      <div className="flex items-center justify-between px-[6vw] h-16">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-[#0d0d0d] flex items-center justify-center flex-shrink-0">
            <span className="text-white text-[10px] font-semibold tracking-widest">BG</span>
          </div>
          <div className="flex flex-col leading-none gap-0.5">
            <span className="text-[11px] font-semibold tracking-[0.18em] text-[#0d0d0d]">BRABUS</span>
            <span className="text-[9px] font-light tracking-[0.22em] text-neutral-400">GARAGE</span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map(({ label, to, page }) =>
            page ? (
              <Link
                key={label}
                to={to}
                className={`text-[10px] uppercase tracking-[0.22em] font-light transition-colors duration-300 ${
                  pathname === to
                    ? 'text-[#0d0d0d]'
                    : 'text-neutral-400 hover:text-[#0d0d0d]'
                }`}
              >
                {label}
              </Link>
            ) : (
              <a
                key={label}
                href={to}
                className="text-[10px] uppercase tracking-[0.22em] text-neutral-400 font-light hover:text-[#0d0d0d] transition-colors duration-300"
              >
                {label}
              </a>
            )
          )}
        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden md:block px-5 py-2.5 bg-[#0d0d0d] text-white text-[10px] tracking-[0.22em] uppercase font-light hover:bg-neutral-800 transition-colors duration-300"
        >
          Prendre RDV
        </Link>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`w-5 h-px bg-[#0d0d0d] block transition-all duration-200 ${open ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`w-5 h-px bg-[#0d0d0d] block transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-px bg-[#0d0d0d] block transition-all duration-200 ${open ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-neutral-100 bg-white px-[6vw] py-7 flex flex-col gap-5">
          {navLinks.map(({ label, to, page }) =>
            page ? (
              <Link
                key={label}
                to={to}
                className="text-[11px] uppercase tracking-[0.22em] text-neutral-500 font-light"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ) : (
              <a
                key={label}
                href={to}
                className="text-[11px] uppercase tracking-[0.22em] text-neutral-500 font-light"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            )
          )}
          <Link
            to="/contact"
            className="mt-3 py-3 bg-[#0d0d0d] text-white text-[10px] tracking-[0.22em] uppercase font-light text-center"
            onClick={() => setOpen(false)}
          >
            Prendre RDV
          </Link>
        </div>
      )}
    </nav>
  )
}
