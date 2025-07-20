import React, { useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Particle from "./components/Particle"
import Aos from "aos"
import 'aos/dist/aos.css'
import Skills from "./components/Skills"
import Language from "./components/Language"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

export default function App() {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
    })
  })
  return (
    <>
      <Navbar />
      <Hero />
      <Particle />
      <Skills />
      <Language />
      <Projects />
      <Contact />
    </>
    
  )
}