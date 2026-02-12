import achievements from '../data/achievements'
import { motion } from 'framer-motion'

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map(a => (
            <motion.div key={a.id} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-4 border rounded-lg bg-white shadow-sm">
              <div className="font-semibold mb-1">{a.title}</div>
              <div className="text-sm text-slate-500 mb-2">{a.issuer} {a.year}</div>
              <div className="text-sm text-slate-600">{a.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
