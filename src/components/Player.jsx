import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, SkipBack, SkipForward, Volume2, Music2, Video, Radio } from 'lucide-react'

const demoTracks = [
  {
    id: 't1',
    title: 'Power Surge',
    artist: 'Nova Pulse',
    genre: 'Power Pump',
    cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    video: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4'
  },
  {
    id: 't2',
    title: 'Runner High',
    artist: 'Echo Drive',
    genre: 'Running Mode',
    cover: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4'
  },
  {
    id: 't3',
    title: 'Focus Stream',
    artist: 'Neon Drift',
    genre: 'Chill & Focus',
    cover: 'https://images.unsplash.com/photo-1526401485004-2fda9f4e33cc?q=80&w=1200&auto=format&fit=crop',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    video: 'https://samplelib.com/lib/preview/mp4/sample-15s.mp4'
  }
]

const Player = ({ selectedGenre }) => {
  const [mode, setMode] = useState('audio') // 'audio' | 'video'
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.8)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef(null)
  const videoRef = useRef(null)

  const tracks = useMemo(() => {
    if (!selectedGenre || selectedGenre === 'All') return demoTracks
    return demoTracks.filter(t => t.genre === selectedGenre)
  }, [selectedGenre])

  useEffect(() => {
    setCurrentIndex(0)
    setIsPlaying(false)
  }, [selectedGenre])

  useEffect(() => {
    const media = mode === 'audio' ? audioRef.current : videoRef.current
    if (!media) return
    media.volume = volume
  }, [volume, mode])

  useEffect(() => {
    const media = mode === 'audio' ? audioRef.current : videoRef.current
    if (!media) return
    const handler = () => setProgress(media.currentTime / media.duration || 0)
    media.addEventListener('timeupdate', handler)
    media.addEventListener('ended', () => next())
    return () => media.removeEventListener('timeupdate', handler)
  }, [mode, currentIndex])

  const playPause = () => {
    const media = mode === 'audio' ? audioRef.current : videoRef.current
    if (!media) return
    if (isPlaying) {
      media.pause()
      setIsPlaying(false)
    } else {
      media.play()
      setIsPlaying(true)
    }
  }

  const prev = () => {
    const idx = (currentIndex - 1 + tracks.length) % tracks.length
    setCurrentIndex(idx)
    setIsPlaying(false)
    setProgress(0)
    setTimeout(() => setIsPlaying(true), 50)
  }

  const next = () => {
    const idx = (currentIndex + 1) % tracks.length
    setCurrentIndex(idx)
    setIsPlaying(false)
    setProgress(0)
    setTimeout(() => setIsPlaying(true), 50)
  }

  const seek = (value) => {
    const media = mode === 'audio' ? audioRef.current : videoRef.current
    if (!media || !media.duration) return
    media.currentTime = value * media.duration
    setProgress(value)
  }

  const current = tracks[currentIndex]

  return (
    <section id="player" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="grid md:grid-cols-2 gap-6 items-center">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <img src={current.cover} alt={current.title} className="w-full h-64 md:h-[22rem] object-cover" />
          {mode === 'video' && (
            <video ref={videoRef} src={current.video} className="absolute inset-0 w-full h-full object-cover" autoPlay={isPlaying} muted={false} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
            <div>
              <p className="text-white/70 text-xs">{current.genre}</p>
              <h3 className="text-white text-xl font-semibold">{current.title}</h3>
              <p className="text-white/70 text-sm">{current.artist}</p>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${mode==='audio' ? 'bg-[#F77F00] text-[#0D1B2A]' : 'bg-white/10 text-white'}`}>Audio</span>
              <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${mode==='video' ? 'bg-[#F77F00] text-[#0D1B2A]' : 'bg-white/10 text-white'}`}>Video</span>
            </div>
          </div>
        </div>
        <div className="p-5 rounded-2xl border border-white/10 bg-[#0D1B2A]/60 backdrop-blur">
          <div className="flex items-center gap-3">
            <button onClick={() => setMode('audio')} className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm ${mode==='audio' ? 'bg-[#F77F00] text-[#0D1B2A] border-[#F77F00]' : 'bg-white/5 text-white border-white/10'}`}>
              <Music2 className="w-4 h-4" />
              <span>Listen to Audio</span>
            </button>
            <button onClick={() => setMode('video')} className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm ${mode==='video' ? 'bg-[#F77F00] text-[#0D1B2A] border-[#F77F00]' : 'bg-white/5 text-white border-white/10'}`}>
              <Video className="w-4 h-4" />
              <span>Watch Video</span>
            </button>
          </div>

          <div className="mt-5">
            {mode === 'audio' && (
              <audio ref={audioRef} src={current.audio} autoPlay={isPlaying} />
            )}

            <div className="flex items-center gap-3 mt-4">
              <button onClick={prev} className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10">
                <SkipBack className="w-5 h-5 text-white" />
              </button>
              <button onClick={playPause} className="p-4 rounded-full bg-[#F77F00] text-[#0D1B2A] hover:brightness-110">
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </button>
              <button onClick={next} className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10">
                <SkipForward className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="mt-4">
              <input type="range" min="0" max="1" step="0.01" value={progress} onChange={(e) => seek(parseFloat(e.target.value))} className="w-full accent-[#F77F00]" />
              <div className="flex items-center gap-3 mt-3">
                <Volume2 className="w-4 h-4 text-white/70" />
                <input type="range" min="0" max="1" step="0.01" value={volume} onChange={(e)=>setVolume(parseFloat(e.target.value))} className="w-full accent-[#F77F00]" />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {tracks.map((t, i) => (
                <button key={t.id} onClick={() => {setCurrentIndex(i); setIsPlaying(true)}} className={`group relative overflow-hidden rounded-xl border ${i===currentIndex ? 'border-[#F77F00]' : 'border-white/10'} bg-white/5`}> 
                  <img src={t.cover} alt={t.title} className="w-full h-24 object-cover group-hover:scale-105 transition" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-2 text-left">
                    <p className="text-white text-xs font-medium leading-tight">{t.title}</p>
                    <p className="text-white/70 text-[10px]">{t.artist}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-white/60">
              <Radio className="w-4 h-4" />
              <span>Now Playing Queue adapts to selected genre.</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Player
