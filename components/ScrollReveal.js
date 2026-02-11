import { useEffect, useRef } from 'react'

export default function ScrollReveal({ children, className = '' }) {
  const ref = useRef()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('animate-fadeInUp')
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.15 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
