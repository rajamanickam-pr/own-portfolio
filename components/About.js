import site from '../data/siteConfig'
export default function About() {
    return (
        <section id="about" className="section bg-slate-50">
            <div className="container">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                    <div className="md:col-span-1">
                        <div className="w-40 h-40 rounded-2xl overflow-hidden glass-card shadow-lg">
                            <img src={site.avatar} alt="Profile" className="w-full h-full object-cover object-top md:object-center" style={{ objectPosition: 'center 20%' }} />
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <h2 className="section-title">{site.sections.aboutTitle}</h2>
                        <p className="text-slate-700 max-w-3xl">{site.description}</p>
                        <div className="mt-4">
                            <a href={site.resume} className="px-4 py-2 bg-sky-600 text-white rounded">{site.ctas.downloadResume}</a>
                            <a href="#contact" className="ml-3 px-4 py-2 border rounded">{site.ctas.contactMe}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
