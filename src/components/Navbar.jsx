import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Services', to: '/services', page: true },
  { label: 'À propos',  to: '/#about',   page: false },
  { label: 'Équipe',    to: '/#team',    page: false },
  { label: 'Galerie',   to: '/#gallery', page: false },
  { label: 'Avis',      to: '/avis',     page: true },
  { label: 'Contact',   to: '/contact',  page: true },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname }          = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // light = white navbar (after scroll); dark = glass over hero
  const light = scrolled

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        light
          ? 'bg-white/95 backdrop-blur-xl border-b border-neutral-100/80'
          : 'bg-black/8 backdrop-blur-md border-b border-white/8'
      }`}
    >
      <div className="flex items-center justify-between px-[6vw] h-16">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div
            className={`w-7 h-7 flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
              light ? 'bg-[#0d0d0d]' : 'bg-white/12 border border-white/18'
            }`}
          >
            <span className="text-white text-[10px] font-semibold tracking-widest">BG</span>
          </div>
          <div className="flex flex-col leading-none gap-0.5">
            <span
              className={`text-[11px] font-semibold tracking-[0.18em] transition-colors duration-500 ${
                light ? 'text-[#0d0d0d]' : 'text-white'
              }`}
            >
              BRABUS
            </span>
            <span
              className={`text-[9px] font-light tracking-[0.22em] transition-colors duration-500 ${
                light ? 'text-neutral-400' : 'text-white/45'
              }`}
            >
              GARAGE
            </span>
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
                    ? (light ? 'text-[#0d0d0d]' : 'text-white')
                    : (light
                        ? 'text-neutral-400 hover:text-[#0d0d0d]'
                        : 'text-white/45 hover:text-white')
                }`}
              >
                {label}
              </Link>
            ) : (
              <a
                key={label}
                href={to}
                className={`text-[10px] uppercase tracking-[0.22em] font-light transition-colors duration-300 ${
                  light
                    ? 'text-neutral-400 hover:text-[#0d0d0d]'
                    : 'text-white/45 hover:text-white'
                }`}
              >
                {label}
              </a>
            )
          )}
        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className={`hidden md:block px-5 py-2.5 text-[10px] tracking-[0.22em] uppercase font-light transition-all duration-300 ${
            light
              ? 'bg-[#0d0d0d] text-white hover:bg-neutral-800'
              : 'bg-white/10 text-white border border-white/18 hover:bg-white/18 backdrop-blur-sm'
          }`}
        >
          Prendre RDV
        </Link>

        {/* Burger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`w-5 h-px block transition-all duration-200 ${light ? 'bg-[#0d0d0d]' : 'bg-white'} ${
                i === 0 && open ? 'rotate-45 translate-y-[6px]' : ''
              } ${
                i === 1 && open ? 'opacity-0' : ''
              } ${
                i === 2 && open ? '-rotate-45 -translate-y-[6px]' : ''
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className={`md:hidden border-t px-[6vw] py-7 flex flex-col gap-5 ${
            light
              ? 'border-neutral-100 bg-white'
              : 'border-white/8 bg-black/75 backdrop-blur-xl'
          }`}
        >
          {navLinks.map(({ label, to, page }) =>
            page ? (
              <Link
                key={label}
                to={to}
                className={`text-[11px] uppercase tracking-[0.22em] font-light ${
                  light ? 'text-neutral-500' : 'text-white/60'
                }`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ) : (
              <a
                key={label}
                href={to}
                className={`text-[11px] uppercase tracking-[0.22em] font-light ${
                  light ? 'text-neutral-500' : 'text-white/60'
                }`}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            )
          )}
          <Link
            to="/contact"
            className={`mt-3 py-3 text-[10px] tracking-[0.22em] uppercase font-light text-center ${
              light
                ? 'bg-[#0d0d0d] text-white'
                : 'bg-white/10 text-white border border-white/15'
            }`}
            onClick={() => setOpen(false)}
          >
            Prendre RDV
          </Link>
        </div>
      )}
    </nav>
  )
}
