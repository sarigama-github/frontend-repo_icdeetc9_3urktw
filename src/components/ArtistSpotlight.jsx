import React from 'react'
import { motion } from 'framer-motion'

const artists = [
  { id: 'a1', name: 'Nova Pulse', role: 'Electronic', avatar: 'https://images.unsplash.com/photo-1521123845560-14093637aa7a?q=80&w=1200&auto=format&fit=crop' },
  { id: 'a2', name: 'Echo Drive', role: 'Synthwave', avatar: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop' },
  { id: 'a3', name: 'Neon Drift', role: 'Ambient', avatar: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop' }
]

const ArtistSpotlight = () => {
  return (
    <section id="artists" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
      <div className="flex items-end justify-between">
        <h2 className="text-white text-2xl font-bold">Artist Spotlight</h2>
        <p className="text-white/60 text-sm">Featured artists of the week</p>
      </div>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {artists.map((a, i) => (
          <motion.div key={a.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05 }} className="p-5 rounded-2xl border border-white/10 bg-white/5 flex items-center gap-4">
            <img src={a.avatar} alt={a.name} className="w-16 h-16 rounded-xl object-cover" />
            <div>
              <p className="text-white font-semibold">{a.name}</p>
              <p className="text-white/70 text-sm">{a.role}</p>
            </div>
            <div className="ml-auto">
              <button className="px-3 py-2 rounded-lg bg-[#F77F00] text-[#0D1B2A] font-semibold hover:brightness-110">Follow</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ArtistSpotlight
