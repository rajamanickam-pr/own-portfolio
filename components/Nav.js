import { useState, useEffect } from 'react'
import site from '../data/siteConfig'
import { MenuIcon, CloseIcon } from './icons'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [dark])

  return (
    <header className="backdrop-blur-sm bg-white/60 dark:bg-slate-900/60 border-b sticky top-0 z-20">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center space-x-3">
          <div className="w-11 h-11 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-extrabold shadow">{site.name.split(' ').map(n => n[0]).slice(0,2).join('')}</div>
          <div className="font-semibold tracking-wide">{site.name}</div>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm text-slate-700 dark:text-slate-200">
          <a href="#about" className="hover:text-sky-600">About</a>
          <a href="#projects" className="hover:text-sky-600">Projects</a>
          <a href="#skills" className="hover:text-sky-600">Skills</a>
          <a href="#contact" className="hover:text-sky-600">Contact</a>
          <button onClick={() => setDark(d => !d)} className="ml-3 px-3 py-1 rounded bg-slate-100 dark:bg-slate-800">{dark ? 'Light' : 'Dark'}</button>
        </nav>

        {/* mobile */}
        <div className="md:hidden flex items-center space-x-2">
          <button onClick={() => setDark(d => !d)} className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-sm">{dark ? '??' : '??'}</button>
          <button onClick={() => setOpen(o => !o)} className="p-2 rounded bg-slate-100 dark:bg-slate-800">
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* mobile menu panel */}
      {open && (
        <div className="md:hidden bg-white/80 dark:bg-slate-900/80 border-t">
          <div className="container py-4 flex flex-col space-y-3 text-slate-700 dark:text-slate-200">
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
