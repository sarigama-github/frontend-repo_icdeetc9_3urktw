import React, { useState } from 'react'
import { motion } from 'framer-motion'

const initialComments = [
  { id: 'c1', user: 'Alex', message: 'This track fuels my morning runs!', time: '2m ago' },
  { id: 'c2', user: 'Jamie', message: 'Loving the bass on this one.', time: '8m ago' }
]

const Comments = () => {
  const [comments, setComments] = useState(initialComments)
  const [input, setInput] = useState('')
  const [user, setUser] = useState('You')

  const add = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    setComments([{ id: crypto.randomUUID(), user, message: input.trim(), time: 'just now' }, ...comments])
    setInput('')
  }

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
      <h3 className="text-white text-xl font-bold mb-4">Comments</h3>
      <form onSubmit={add} className="flex items-center gap-3">
        <input value={user} onChange={(e)=>setUser(e.target.value)} className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm w-32" />
        <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Write a comment..." className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm" />
        <button className="px-4 py-2 rounded-lg bg-[#F77F00] text-[#0D1B2A] font-semibold">Post</button>
      </form>

      <div className="mt-6 space-y-3">
        {comments.map((c, i) => (
          <motion.div key={c.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.03 }} className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#F77F00] to-amber-400 text-[#0D1B2A] font-bold flex items-center justify-center">
              {c.user.slice(0,1).toUpperCase()}
            </div>
            <div className="flex-1 p-3 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2">
                <p className="text-white font-medium text-sm">{c.user}</p>
                <span className="text-white/40 text-xs">{c.time}</span>
              </div>
              <p className="text-white/90 text-sm mt-1">{c.message}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Comments
