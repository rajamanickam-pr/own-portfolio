import '../styles/globals.css'
import Layout from '../components/Layout'
import { useState, useEffect } from 'react'
import PageLoader from '../components/PageLoader'

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900) // show loader briefly
    return () => clearTimeout(t)
  }, [])

  return (
    <Layout>
      {loading ? <PageLoader /> : <Component {...pageProps} />}
    </Layout>
  )
}
