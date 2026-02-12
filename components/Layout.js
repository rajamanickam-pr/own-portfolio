import Head from 'next/head'
import Nav from './Nav'
import site from '../data/siteConfig'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{site.title}</title>
        <meta name="description" content={site.description} />
        {/* Google Fonts - Poppins to match DeveloperFolio */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-slate-50 to-white">
        <Nav />
        <main className="flex-1">
          {children}
        </main>
        <footer className="bg-slate-50 border-t mt-12">
          <div className="container py-6 text-center text-sm text-slate-600">(c) {new Date().getFullYear()} {site.name} - {site.footerSuffix}</div>
        </footer>
      </div>
    </>
  )
}
