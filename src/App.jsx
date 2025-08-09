import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'




function App() {

  return (
    <div className='w-full h-screen bg-gray-800'>
   <Navbar />
   <Hero />
   <Projects />
   <Contact />

   <p>&copy: 2025 Profile </p>

    </div>
  )
}

export default App



