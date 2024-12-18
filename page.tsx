'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, Sun, X } from 'lucide-react'
import Image from "next/image"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Skills } from "./components/Skills"
import { Experience } from "./components/Experience"
import { Projects } from "./components/Projects"
import { Contact } from "./components/Contact"

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-background/80 backdrop-blur-sm">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          onClick={toggleTheme}
        >
          <Sun className="h-5 w-5" />
          <span className="sr-only">Toggle theme</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </header>

      {/* Menu */}
      {isMenuOpen && (
        <nav className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center space-y-4">
          {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
            <Button
              key={section}
              variant="ghost"
              className={`text-lg ${activeSection === section ? 'text-primary' : ''}`}
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Button>
          ))}
        </nav>
      )}

      {/* Main Content */}
      <main className="space-y-4">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  )
}

