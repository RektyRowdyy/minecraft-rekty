import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import Achievements from './components/Achievements/Achievements'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Achievements />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
