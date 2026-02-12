import whatIDo from '../data/whatIDo'
import site from '../data/siteConfig'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function WhatIDo() {
    function IconSVG({ icon, className = '' }) {
        // simple inline SVGs using currentColor so they pick up text color / hover
        const id = icon.id
        switch (id) {
            case 'html5':
                return (
                    <svg className={className} viewBox="0 0 24 24" aria-hidden focusable="false">
                        <path fill="currentColor" d="M2 3l1.8 16.2L12 21l8.2-1.8L22 3H2zm16.2 4.2l-.2 2.2H12v-2h6.2zM12 9v2.2H6.9l.6-6H12v3z" />
                    </svg>
                )
            case 'css3':
                return (
                    <svg className={className} viewBox="0 0 24 24" aria-hidden focusable="false">
                        <path fill="currentColor" d="M2 3l1.8 16.2L12 21l8.2-1.8L22 3H2zm14.6 13.8l-.6.2L12 18.6l-4-1.6-.3-3.6h2.2l.1 1.1L12 16.6l2.1-1 0.2-2H7.9L8.6 6.5H18l-.4 10.3z" />
                    </svg>
                )
            case 'js':
                return (
                    <svg className={className} viewBox="0 0 24 24" aria-hidden focusable="false">
                        <rect width="24" height="24" fill="none" />
                        <path fill="currentColor" d="M6.7 6.7h3l.6 6.6c0 .9-.5 1.5-1.4 1.5-.7 0-1.1-.4-1.4-1.1l-1.7.9c.5 1.6 1.9 2.9 4.1 2.9 2.6 0 4.2-1.5 4.2-4.1V6.7h3v7.8c0 3.9-2.8 6.6-7.2 6.6-3.9 0-6.6-2.2-7.5-5.3l1.9-1c.8 2.1 2.8 3.2 5.6 3.2 2.3 0 3.6-1 3.6-2.6V6.7H6.7z" />
                    </svg>
                )
            case 'react':
                return (
                    <svg className={className} viewBox="0 0 24 24" aria-hidden focusable="false">
                        <g fill="none" stroke="currentColor" strokeWidth="1.4">
                            <ellipse cx="12" cy="12" rx="6.5" ry="2.8" />
                            <ellipse cx="12" cy="12" rx="2.8" ry="6.5" transform="rotate(60 12 12)" />
                            <ellipse cx="12" cy="12" rx="2.8" ry="6.5" transform="rotate(120 12 12)" />
                            <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
                        </g>
                    </svg>
                )
            case 'node':
            case 'nodejs':
                return (
                    <svg className={className} viewBox="0 0 24 24" aria-hidden focusable="false">
                        <path fill="currentColor" d="M12 2l7 4v8l-7 4-7-4V6l7-4zm0 2.2L6.2 7v8L12 18.8 17.8 15V7L12 4.2z" />
                    </svg>
                )
            case 'python':
                return (
                    <svg className={className} viewBox="0 0 24 24" aria-hidden focusable="false">
                        <path fill="currentColor" d="M12 2c-2 0-4 1-4 3v2h6v1H8v2c0 2 1 3 4 3s4-1 4-3V5c0-2-2-3-4-3zM6 13v3c0 2 2 3 4 3s4-1 4-3v-2H8v-1h8v-2c0-2-2-3-4-3s-4 1-4 3v3H6z" />
                    </svg>
                )
            case 'docker':
                return (
                    <svg className={className} viewBox="0 0 24 24" aria-hidden focusable="false">
                        <path fill="currentColor" d="M3 10h18v2H3v-2zm2 4h14v2H5v-2zm2 4h10v2H7v-2zM8 4h2v2H8V4zm4 0h2v2h-2V4zm4 0h2v2h-2V4z" />
                    </svg>
                )
            case 'aws':
                return (
                    <svg className={className} viewBox="0 0 24 24" aria-hidden focusable="false">
                        <path fill="currentColor" d="M2 17s3-7 10-7 10 7 10 7H2z" />
                    </svg>
                )
            case 'sql':
                return (
                    <svg className={className} viewBox="0 0 24 24" aria-hidden focusable="false">
                        <ellipse cx="12" cy="6" rx="8" ry="2" fill="currentColor" />
                        <path fill="currentColor" d="M4 6v6c0 1 4 3 8 3s8-2 8-3V6" />
                    </svg>
                )
            case 'npm':
                return (
                    <svg className={className} viewBox="0 0 24 24" aria-hidden focusable="false">
                        <rect x="3" y="7" width="18" height="10" fill="currentColor" rx="1" />
                    </svg>
                )
            case 'dotnet':
                return (
                    <svg className={className} viewBox="0 0 24 24" aria-hidden focusable="false">
                        <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor" />
                    </svg>
                )
            case 'sass':
                return (
                    <svg className={className} viewBox="0 0 24 24" aria-hidden focusable="false">
                        <path fill="currentColor" d="M12 3c-4 0-7 3-7 7s3 7 7 7 7-3 7-7-3-7-7-7z" />
                    </svg>
                )
            case 'csharp':
                return (
                    <svg className={className} viewBox="0 0 24 24" aria-hidden focusable="false">
                        <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" />
                        <text x="12" y="16" textAnchor="middle" fontSize="9" fill="#fff" fontFamily="Arial">C#</text>
                    </svg>
                )
            case 'python':
                return (
                    <svg className={className} viewBox="0 0 24 24" aria-hidden focusable="false">
                        <path fill="currentColor" d="M12 2c-2 0-4 1-4 3v2h6v1H8v2c0 2 1 3 4 3s4-1 4-3V5c0-2-2-3-4-3zM6 13v3c0 2 2 3 4 3s4-1 4-3v-2H8v-1h8v-2c0-2-2-3-4-3s-4 1-4 3v3H6z" />
                    </svg>
                )
            case 'kubernetes':
            case 'kubernates':
                return (
                    <svg className={className} viewBox="0 0 24 24" aria-hidden focusable="false">
                        <path fill="currentColor" d="M12 2l3 2v3l3 1v3l-3 1v3l-3 2-3-2v-3l-3-1V7l3-1V4l3-2z" />
                    </svg>
                )
            case 'jquery':
                return (
                    <svg className={className} viewBox="0 0 24 24" aria-hidden focusable="false">
                        <path fill="currentColor" d="M2 12c2-6 10-6 12-3 1 2-2 4-4 3-3-1-6 0-8 3z" />
                    </svg>
                )
            case 'azure':
                return (
                    <svg className={className} viewBox="0 0 24 24" aria-hidden focusable="false">
                        <path fill="currentColor" d="M2 21h20L12 3 2 21z" />
                    </svg>
                )
            case 'github':
                return (
                    <svg className={className} viewBox="0 0 24 24" aria-hidden focusable="false">
                        <path fill="currentColor" d="M12 2C7.6 2 4 5.6 4 10c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1-2.7-1-.4-1-1-1.3-1-1.3-.8-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .8 1.4 2.3 1 2.9.8.1-.6.3-1 .6-1.3-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2 0 0 .7-.2 2.3.8.7-.2 1.5-.3 2.3-.3s1.6.1 2.3.3c1.6-1 2.3-.8 2.3-.8.5 1 .2 1.8.1 2 .5.5.8 1.2.8 2.1 0 3.1-1.9 3.8-3.6 4 .3.3.6.9.6 1.8v2.6c0 .2.1.5.6.4C19.7 16.5 22 13.5 22 10c0-4.4-3.6-8-10-8z" />
                    </svg>
                )
            default:
                // if icon has a src, fall back to that image
                if (icon && icon.src) {
                    return <img src={icon.src} alt={icon.label} className={className} />
                }
                return (
                    <svg className={className} viewBox="0 0 24 24" aria-hidden focusable="false">
                        <circle cx="12" cy="12" r="10" fill="currentColor" />
                    </svg>
                )
        }
    }
    const [activeCat, setActiveCat] = useState(whatIDo.categories?.[0]?.id || null)

    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.08 } }
    }
    const item = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }

    return (
        <section id="what-i-do" className="section bg-white">
            <div className="container md:grid md:grid-cols-2 gap-8 items-start">
                <div className="hidden md:flex items-center justify-center">
                    <img src="./images/illustration-dev.svg" alt="developer illustration" className="max-w-full h-auto" />
                </div>

                <div>
                    <h2 className="text-4xl font-semibold mb-3">{whatIDo.title}</h2>
                    <p className="text-slate-500 uppercase tracking-wider mb-6">{whatIDo.subtitle}</p>

                    {/* Category tabs */}
                    <div className="mb-6">
                        <div className="flex flex-wrap gap-3 items-center mb-4">
                            {whatIDo.categories.map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCat(cat.id)}
                                    className={`px-3 py-1 rounded-full text-sm font-medium transition ${activeCat === cat.id ? 'bg-gradient-to-br from-primary-start to-primary-end text-white shadow' : 'bg-white border text-muted'}`}
                                >
                                    {cat.title}
                                </button>
                            ))}
                        </div>

                        {/* Active category grid */}
                        {whatIDo.categories.map(cat => (
                            <div key={cat.id} className={`${activeCat === cat.id ? 'block' : 'hidden'}`}>
                                <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                    {cat.icons.map(icon => (
                                        <motion.div variants={item} key={icon.id} className="flex flex-col items-center text-center opacity-100">
                                            <motion.button
                                                className="w-20 h-20 flex items-center justify-center bg-slate-100 rounded-lg glass-card p-3 transition-all duration-200 group hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-start"
                                                whileHover={{ scale: 1.06, y: -6 }}
                                                whileTap={{ scale: 0.98 }}
                                                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                                                aria-label={icon.label}
                                            >
                                                <div className="w-full h-full flex items-center justify-center rounded-md ">
                                                    {icon.fa ? (
                                                        <i className={`${icon.fa} text-3xl`} aria-hidden></i>
                                                    ) : (
                                                        <IconSVG icon={icon} className="w-10 h-10 text-3xl" />
                                                    )}
                                                </div>
                                            </motion.button>
                                            <div className="text-sm text-slate-600 mt-3 font-medium">{icon.label}</div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="md:col-span-2 mt-8">
                    {/* Split bullets into two columns: first half in left column, rest in right column */}
                    {whatIDo.bullets && whatIDo.bullets.length > 0 && (
                        (() => {
                            const mid = Math.ceil(whatIDo.bullets.length / 2)
                            const left = whatIDo.bullets.slice(0, mid)
                            const right = whatIDo.bullets.slice(mid)
                            return (
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                                    <div className="md:col-span-6">
                                        <div className="space-y-4">
                                            {left.map((b, i) => (
                                                <div key={i} className="flex items-start gap-3 text-slate-700">
                                                    <div className="text-2xl text-amber-400">⚡</div>
                                                    <div>{b}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="md:col-span-6">
                                        <div className="space-y-4">
                                            {right.map((b, i) => (
                                                <div key={i} className="flex items-start gap-3 text-slate-700">
                                                    <div className="text-2xl text-amber-400">⚡</div>
                                                    <div>{b}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        })()
                    )}
                </div>

                {/* Education Section - span full width and show entries in two columns on md+ */}
                {whatIDo.education && (
                    <div className="md:col-span-2 mt-8">
                        <h3 className="text-xl font-semibold mb-3">Education</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {whatIDo.education.map((edu, idx) => (
                                <div key={idx} className="p-4 border rounded-lg bg-slate-50">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-sm text-slate-500">{edu.level}</div>
                                            <div className="font-medium">{edu.degree}</div>
                                            <div className="text-sm text-slate-600">{edu.institution}</div>
                                        </div>
                                        <div className="text-sm text-slate-500">{edu.year}</div>
                                    </div>
                                    {edu.details && <p className="mt-2 text-sm text-slate-600">{edu.details}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
