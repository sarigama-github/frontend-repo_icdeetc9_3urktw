import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Player from './components/Player'
import Genres from './components/Genres'
import Playlists from './components/Playlists'
import ArtistSpotlight from './components/ArtistSpotlight'
import Comments from './components/Comments'

function App() {
  const [selectedGenre, setSelectedGenre] = useState('All')

  return (
    <div className="min-h-screen bg-[#0D1B2A]">
      <Header />
      <Hero />

      <main className="relative -mt-10 md:-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="p-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03]">
            <div className="flex items-center justify-between">
              <h2 className="text-white text-xl font-bold">Quick Filters</h2>
              <button onClick={() => setSelectedGenre('All')} className="text-sm text-white/70 hover:text-white">Reset</button>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {['All','Workout Beats','Chill & Focus','Running Mode','Power Pump','Morning Energy'].map(g => (
                <button key={g} onClick={()=>setSelectedGenre(g)} className={`px-3 py-1.5 rounded-full text-xs border ${selectedGenre===g ? 'bg-[#F77F00] text-[#0D1B2A] border-[#F77F00]' : 'bg-white/5 text-white border-white/10'}`}>{g}</button>
              ))}
            </div>
          </motion.div>
        </div>

        <Genres selected={selectedGenre} onSelect={setSelectedGenre} />
        <Player selectedGenre={selectedGenre} />
        <Playlists />
        <ArtistSpotlight />
        <Comments />
      </main>
    </div>
  )
}

export default App
