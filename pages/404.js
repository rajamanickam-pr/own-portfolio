import site from '../data/siteConfig'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">{site.notFoundTitle}</h1>
        <p className="text-slate-600">{site.notFoundMessage}</p>
      </div>
    </div>
  )
}
