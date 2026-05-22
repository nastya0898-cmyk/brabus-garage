const images = [
  {
    src: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1400&auto=format&fit=crop',
    alt: 'Supercar en atelier',
  },
  {
    src: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=800&auto=format&fit=crop',
    alt: 'Porsche 911',
  },
  {
    src: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=800&auto=format&fit=crop',
    alt: 'Supercar détail',
  },
  {
    src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop',
    alt: 'Véhicule de luxe',
  },
  {
    src: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop',
    alt: 'Ferrari',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-28 px-[6vw]">

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-px bg-neutral-300" />
          <p className="uppercase tracking-[0.35em] text-[10px] text-neutral-400 font-light">
            Galerie
          </p>
        </div>
        <h2 className="text-[48px] font-extralight tracking-[-0.02em] text-[#0d0d0d] leading-tight">
          Nos
          <br />
          <span className="font-semibold">réalisations</span>
        </h2>
      </div>

      {/* Asymmetric grid — 3 columns */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

        {/* Large image — spans 2 cols */}
        <div className="col-span-2 overflow-hidden h-64 md:h-80">
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Medium image */}
        <div className="overflow-hidden h-64 md:h-80">
          <img
            src={images[1].src}
            alt={images[1].alt}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Bottom row — 3 equal */}
        {images.slice(2).map((img) => (
          <div key={img.src} className="overflow-hidden h-44 md:h-56">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
