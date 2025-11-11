import React from 'react'
import { motion } from 'framer-motion'

const playlists = [
  { id: 'p1', title: 'HIIT Power', artist: 'Various', cover: 'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?q=80&w=1200&auto=format&fit=crop' },
  { id: 'p2', title: 'Runner Flow', artist: 'Various', cover: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1200&auto=format&fit=crop' },
  { id: 'p3', title: 'Focus Bass', artist: 'Various', cover: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?q=80&w=1200&auto=format&fit=crop' },
  { id: 'p4', title: 'Sunrise Charge', artist: 'Various', cover: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop' }
]

const Playlists = () => {
  return (
    <section id="playlists" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
      <h2 className="text-white text-2xl font-bold">Playlists</h2>
      <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {playlists.map((p, i) => (
          <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <img src={p.cover} alt={p.title} className="w-full h-56 object-cover group-hover:scale-105 transition" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
              <div>
                <p className="text-white text-lg font-semibold leading-tight">{p.title}</p>
                <p className="text-white/70 text-sm">{p.artist}</p>
              </div>
              <button className="px-3 py-2 rounded-lg bg-[#F77F00] text-[#0D1B2A] font-semibold hover:brightness-110">Play Now</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Playlists
