import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-[#0D1B2A]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/40 via-[#0D1B2A]/70 to-[#0D1B2A] pointer-events-none" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
          style={{ textShadow: '0 10px 30px rgba(247,127,0,0.25)' }}
        >
          Naubi Music — Beat Your Limits.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 max-w-2xl text-sm md:text-base text-white/80"
        >
          A sporty, futuristic platform for powerful beats and energetic flows.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#player" className="px-5 py-3 rounded-full bg-[#F77F00] text-[#0D1B2A] font-semibold shadow-lg shadow-[#F77F00]/30 hover:shadow-[#F77F00]/50 transition">
            Start Listening
          </a>
          <a href="#genres" className="px-5 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition">
            Explore Genres
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
