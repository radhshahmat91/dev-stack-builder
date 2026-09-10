import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './styles.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechnologyCard from './components/TechnologyCard'
import StackPanel from './components/StackPanel'
import Footer from './components/Footer'

function App() {
  const [technologies, setTechnologies] = useState([])
  const [stack, setStack] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        setLoading(true)
        const response = await fetch('/data/technologies.json')
        if (!response.ok) throw new Error('Unable to load technology data')
        const data = await response.json()
        setTechnologies(data)
      } catch (error) {
        toast.error('Could not load technologies. Please refresh the page.')
      } finally {
        setLoading(false)
      }
    }
    loadTechnologies()
  }, [])

  const addToStack = (technology) => {
    if (stack.some(item => item.id === technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`)
      return
    }
    setStack(current => [...current, technology])
    toast.success(`${technology.name} added to your stack.`)
  }

  const removeFromStack = (id) => {
    const item = stack.find(tech => tech.id === id)
    setStack(current => current.filter(tech => tech.id !== id))
    if (item) toast.info(`${item.name} removed from your stack.`)
  }

  const removeAll = () => {
    if (!stack.length) return toast.info('Your stack is already empty.')
    setStack([])
    toast.info('All technologies removed from your stack.')
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section className="technologies-section" id="technologies">
          <div className="section-heading">
            <h2>Explore the <span>Technologies</span></h2>
            <p>Pick one technology per category to build your ideal stack.</p>
          </div>
          <div className="builder-layout">
            <div className="technology-grid" aria-live="polite">
              {loading ? (
                <div className="loading-state"><span className="spinner" /> Loading technologies...</div>
              ) : technologies.map(technology => (
                <TechnologyCard key={technology.id} technology={technology} added={stack.some(item => item.id === technology.id)} onAdd={addToStack} />
              ))}
            </div>
            <StackPanel stack={stack} onRemove={removeFromStack} onRemoveAll={removeAll} />
          </div>
        </section>
        <section className="sr-only" id="projects"><h2>Projects</h2><p>Build a stack tailored to your next project.</p></section>
        <section className="sr-only" id="about"><h2>About Dev Stack</h2><p>Dev Stack helps developers compare technologies and assemble a practical development toolkit.</p></section>
        <section className="sr-only" id="contact"><h2>Contact</h2><p>Questions about the project? Connect through the social links in the footer.</p></section>
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={2600} newestOnTop closeOnClick pauseOnFocusLoss theme="light" />
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
