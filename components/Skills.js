export default function Skills() {
  const skills = ['JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS']
  return (
    <section id="skills" className="section bg-slate-50">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map(s => (
            <span key={s} className="px-3 py-1 bg-white border rounded text-sm">{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
