import React from 'react'
import { motion } from 'framer-motion'

const GENRES = [
  'Workout Beats',
  'Chill & Focus',
  'Running Mode',
  'Power Pump',
  'Morning Energy'
]

const Genres = ({ selected, onSelect }) => {
  return (
    <section id="genres" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
      <h2 className="text-white text-2xl font-bold">Genres</h2>
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {GENRES.map((g, idx) => (
          <motion.button
            key={g}
            whileHover={{ y: -4 }}
            className={`px-4 py-10 rounded-xl border text-center font-semibold transition ${selected===g ? 'bg-[#F77F00] text-[#0D1B2A] border-[#F77F00]' : 'bg-white/5 text-white border-white/10 hover:bg-white/10'}`}
            onClick={() => onSelect(g)}
          >
            {g}
          </motion.button>
        ))}
      </div>
    </section>
  )
}

export default Genres
