import experience from '../data/experience'
import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <section id="experience" className="section bg-slate-50">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {experience.map((e) => (
            <motion.article key={e.id} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-4 bg-white border rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-slate-100 rounded flex items-center justify-center">
                  {/* placeholder for logo */}
                  <img src={e.logo} alt={e.company} className="max-h-10 max-w-full" />
                </div>
                <div>
                  <div className="font-semibold">{e.role}</div>
                  <div className="text-sm text-slate-500">{e.company}</div>
                </div>
              </div>
              <div className="text-sm text-slate-600 mb-3">{e.description}</div>
              <div className="text-xs text-slate-400">{e.period}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
