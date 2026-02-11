import { motion } from 'framer-motion'
import projects from '../data/projects'
import site from '../data/siteConfig'
import ProjectCard from './ProjectCard'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 }
}

export default function ProjectsGrid() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-title">{site.sections.projectsTitle}</h2>
          <a href="#projects" className="text-sm text-sky-600">{site.ctas.viewAll}</a>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.div variants={item} key={p.id} className="glass-card rounded-xl p-4">
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
