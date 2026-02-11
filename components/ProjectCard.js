import site from '../data/siteConfig'

export default function ProjectCard({ project }) {
  return (
    <article className="p-3">
      <div className="mb-3">
        <h3 className="font-semibold text-lg">{project.title}</h3>
        <div className="text-xs text-slate-500 mt-1">{project.tech.join(' - ')}</div>
      </div>
      <p className="text-sm text-slate-600 mb-4">{project.description}</p>
      <div className="flex items-center gap-3">
        <a href={project.link} className="text-sm text-sky-600 font-medium">{site.ctas.viewProject}</a>
        <a href={project.link} className="text-sm px-3 py-1 bg-white/60 border rounded">{site.ctas.demo}</a>
      </div>
    </article>
  )
}
