import React from 'react'
import { Menu, Search } from 'lucide-react'

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-[#0D1B2A]/60 bg-[#0D1B2A]/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-[#F77F00] flex items-center justify-center font-extrabold text-[#0D1B2A]">N</div>
          <span className="text-white font-semibold tracking-wide">Naubi Music</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#playlists" className="hover:text-white">Playlist</a>
          <a href="#genres" className="hover:text-white">Genre</a>
          <a href="#artists" className="hover:text-white">Artist</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
            <Search className="w-4 h-4 text-white/60" />
            <input placeholder="Search songs, artists, genres" className="bg-transparent outline-none text-sm text-white placeholder:text-white/40 w-56" />
          </div>
          <button className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10">
            <Menu className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
