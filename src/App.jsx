import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Features from './components/Features'
function App() {
  return (
    <div className="w-full min-h-screen text-white">
      <Navbar />
      <Landingpage />
      <Marquee />
      <About />
      <Eyes />
      <Features/>
    </div>
  )
}

export default App