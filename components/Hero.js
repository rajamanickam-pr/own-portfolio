import { motion } from 'framer-motion'
import site from '../data/siteConfig'

export default function Hero() {
    return (
        <section className="section">
            <div className="container grid gap-8 md:grid-cols-2 items-center">
                <div>
                    <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl font-extrabold mb-4">Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">{site.name}</span></motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg text-slate-600 mb-6 text-justify">{site.description}</motion.p>
                    <div className="flex items-center space-x-3">
                        <a href="#projects" className="inline-block px-5 py-2 bg-gradient-to-r from-sky-600 to-indigo-600 text-white rounded-lg shadow">{site.ctas.seeProjects}</a>
                        <a href="#contact" className="inline-block px-5 py-2 border rounded-lg">{site.ctas.contactMe}</a>
                    </div>
                </div>
                <div className="flex justify-center md:justify-end">
                    <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3 }} className="w-52 h-52 rounded-2xl overflow-hidden glass-card shadow-xl flex items-center justify-center p-6">
                       
                    {/* Developer illustration SVG placed in hero for modern look */}
                        <svg viewBox="0 0 120 120" width="100%" height="100%" aria-hidden>
                            <defs>
                                <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                                    <stop offset="0%" stopColor="#06b6d4" />
                                    <stop offset="100%" stopColor="#7c3aed" />
                                </linearGradient>
                            </defs>
                            <rect x="6" y="6" width="108" height="108" rx="18" fill="url(#g)" opacity="0.12" />
                            <g transform="translate(30,26)" fill="none" stroke="url(#g)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="30" cy="18" r="12" fill="#fff" fillOpacity="0.04" />
                                <path d="M12 44c0-8 18-8 36 0" strokeOpacity="0.9" />
                                <rect x="0" y="60" width="60" height="12" rx="2" fill="#fff" fillOpacity="0.03" />
                                <path d="M6 66h12M30 66h18" strokeOpacity="0.9" />
                                <path d="M6 48c6-6 18-6 24-2s18 6 24 2" strokeOpacity="0.9" />
                            </g>
                        </svg>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
