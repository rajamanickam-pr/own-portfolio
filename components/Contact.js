import site from '../data/siteConfig'
import { GitHubIcon, LinkedInIcon, TwitterIcon, MailIcon } from './icons'

export default function Contact() {

  const socials = [
    { id: 'github', label: 'GitHub', href: site.socials.find(s => s.id === 'github')?.href || 'https://github.com/your-username', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.79 0c2.2-1.5 3.17-1.18 3.17-1.18.62 1.57.23 2.73.11 3.02.74.8 1.18 1.82 1.18 3.08 0 4.43-2.7 5.4-5.28 5.68.41.35.77 1.05.77 2.12 0 1.53-.01 2.77-.01 3.15 0 .3.2.66.79.55A11.52 11.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" fill="currentColor" />
      </svg>
    ) },
    { id: 'linkedin', label: 'LinkedIn', href: site.socials.find(s => s.id === 'linkedin')?.href || 'https://linkedin.com/in/your-username', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zm.02 7.5H2v10h3V11zm7.5 0h-2.8v10h2.8v-5.6c0-3.2 4.2-3.46 4.2 0V21h2.8v-6.8c0-6.5-7.1-6.25-9-3.1V11z" fill="currentColor" />
      </svg>
    ) },
    { id: 'twitter', label: 'Twitter', href: site.socials.find(s => s.id === 'twitter')?.href || 'https://twitter.com/your-username', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M22 5.92c-.66.3-1.35.5-2.08.6.75-.45 1.33-1.17 1.6-2.02-.7.42-1.47.72-2.29.88A3.6 3.6 0 0 0 12.1 8c0 .28.03.55.1.81C8.1 8.75 5.1 6.9 3 4.1c-.3.5-.5 1.06-.5 1.67 0 1.15.58 2.16 1.46 2.75-.6 0-1.17-.18-1.66-.45v.05c0 1.64 1.16 3 2.7 3.3-.28.08-.57.12-.88.12-.22 0-.44-.02-.65-.06.45 1.4 1.72 2.42 3.24 2.45A7.22 7.22 0 0 1 2 19.54a10.2 10.2 0 0 0 5.52 1.62c6.62 0 10.25-5.5 10.25-10.26v-.47c.7-.5 1.3-1.12 1.77-1.83-.64.28-1.33.46-2.04.54.74-.44 1.3-1.12 1.57-1.94z" fill="currentColor" />
      </svg>
    ) },
    { id: 'mail', label: 'Email', href: site.socials.find(s => s.id === 'mail')?.href || 'mailto:you@example.com', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11zM4 7v.8l8 5 8-5V7l-8 5-8-5z" fill="currentColor" />
      </svg>
    ) }
  ]

  return (
    <section id="contact" className="section">
      <div className="container max-w-xl">
        <h2 className="section-title">Contact</h2>
        <p className="text-slate-700 mb-4">Want to work together? Send me a message or download my resume. You can also find me on the platforms below.</p>

        <div className="flex items-center space-x-3">
          <a href={site.email} className="px-4 py-2 bg-sky-600 text-white rounded shadow">{site.ctas.emailMe}</a>
          <a href={site.resume} className="px-4 py-2 border rounded">{site.ctas.downloadResume}</a>
        </div>

        <div className="mt-6">
          <p className="text-sm text-slate-600 mb-3">Or find me on</p>
          <div className="flex items-center gap-3">
            {socials.map(s => (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/60 dark:bg-slate-800 text-slate-800 dark:text-slate-200 shadow hover:scale-110 transform transition duration-200 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-sky-400"
              >
                {s.id === 'github' ? <GitHubIcon /> : s.id === 'linkedin' ? <LinkedInIcon /> : s.id === 'twitter' ? <TwitterIcon /> : <MailIcon />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
