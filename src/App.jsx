import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

// Layout Components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// Section Components
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import ArticlesSection from './components/sections/ArticlesSection'
import EbooksSection from './components/sections/EbooksSection'
import ProjectGallery from './components/sections/ProjectGallery'
import GitHubProjects from './components/sections/GitHubProjects'
import YouTubeSection from './components/sections/YouTubeSection'
import ContactSection from './components/sections/ContactSection'

// Common Components
import ScrollToTop from './components/common/ScrollToTop'
import ThemeToggle from './components/common/ThemeToggle'
import LoadingScreen from './components/common/LoadingScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('home')
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    }

    return () => clearTimeout(timer)
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light')
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Fixed Elements */}
          <Header activeSection={activeSection} setActiveSection={setActiveSection} />
          <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <ScrollToTop />

          {/* Main Content */}
          <main className="relative">
            <HeroSection />
            <AboutSection />
            <ArticlesSection />
            <EbooksSection />
            <ProjectGallery />
            <GitHubProjects />
            <YouTubeSection />
            <ContactSection />
          </main>

          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App

