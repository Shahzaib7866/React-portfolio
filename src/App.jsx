import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'




function App() {

  return (
    <div className='w-full min-h-screen bg-gray-800'>
   <Navbar />
   <Hero />
   <About />
   <Projects />
   <Contact />

   <p>&copy: 2025 Profile </p>

    </div>
  )
}

export default App



