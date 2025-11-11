import React from 'react'
import { Instagram, Youtube, Spotify } from 'lucide-react'

const Footer = () => {
  return (
    <footer id="contact" className="mt-16 border-t border-white/10 bg-[#0D1B2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/70 text-sm">© {new Date().getFullYear()} Naubi Music. Beat Your Limits.</p>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Instagram" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <Instagram className="w-5 h-5 text-white" />
          </a>
          <a href="#" aria-label="YouTube" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <Youtube className="w-5 h-5 text-white" />
          </a>
          <a href="#" aria-label="Spotify" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <Spotify className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
