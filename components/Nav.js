import { useState, useEffect } from 'react'
import site from '../data/siteConfig'
import { MenuIcon, CloseIcon } from './icons'

export default function Nav() {
  const [open, setOpen] = useState(false)
  // remove dark mode toggle (not used)
  const [dark, setDark] = useState(false)

  return (
    <header className="backdrop-blur-sm bg-white/60 border-b sticky top-0 z-20">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center space-x-3">
          <div className="w-11 h-11 bg-gradient-to-br from-primary-start to-primary-end rounded-full flex items-center justify-center text-white font-extrabold shadow">{site.name.split(' ').map(n => n[0]).slice(0,2).join('')}</div>
          <div className="font-semibold tracking-wide">{site.name}</div>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm text-muted">
          <a href="#about" className="hover:text-primary-start">About</a>
          <a href="#projects" className="hover:text-primary-start">Projects</a>
          <a href="#skills" className="hover:text-primary-start">Skills</a>
          <a href="#contact" className="hover:text-primary-start">Contact</a>
          {/* dark mode removed */}
        </nav>

        {/* mobile */}
        <div className="md:hidden flex items-center space-x-2">
          <button onClick={() => setOpen(o => !o)} className="p-2 rounded bg-slate-100 text-sm">
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* mobile menu panel */}
      {open && (
        <div className="md:hidden bg-white/80 border-t">
          <div className="container py-4 flex flex-col space-y-3 text-slate-700">
            {site.nav.map(item => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
