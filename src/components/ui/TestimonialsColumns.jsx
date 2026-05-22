import React from 'react'
import { motion } from 'motion/react'

export const TestimonialsColumn = ({ className, testimonials, duration = 10 }) => {
  return (
    <div className={className}>
      <motion.div
        animate={{ y: '-50%' }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="flex flex-col gap-5 pb-5 bg-white"
      >
        {[...Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, vehicle }, i) => (
              <div
                key={i}
                className="p-7 border border-neutral-100 bg-white max-w-[300px] w-full"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <span key={s} className="text-[#0d0d0d] text-[10px]">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[13px] text-neutral-600 font-light leading-[1.85] italic">
                  &ldquo;{text}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-5 pt-5 border-t border-neutral-100 flex items-center gap-3">
                  <img
                    width={36}
                    height={36}
                    src={image}
                    alt={name}
                    className="h-9 w-9 rounded-full object-cover grayscale flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="text-[13px] font-light text-[#0d0d0d] leading-tight truncate">
                      {name}
                    </p>
                    <p className="text-[9px] uppercase tracking-[0.18em] text-neutral-400 font-light leading-tight mt-0.5 truncate">
                      {vehicle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  )
}
