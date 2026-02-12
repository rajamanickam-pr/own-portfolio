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
                    <img src="./wave.svg" alt="developer wave" className="w-full h-full object-contain" />
                        
                </div>
            </div>
        </section>
    )
}
