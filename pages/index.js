import Hero from '../components/Hero'
import WhatIDo from '../components/WhatIDo'
import ProjectsGrid from '../components/ProjectsGrid'
import Experience from '../components/Experience'
import Achievements from '../components/Achievements'
import About from '../components/About'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIDo />
      <ProjectsGrid />
      <Experience />
      <Achievements />
      <About />
      {/* Skills component retained for fallback if needed */}
      {/* <Skills /> */}
      <Contact />
    </>
  )
}
