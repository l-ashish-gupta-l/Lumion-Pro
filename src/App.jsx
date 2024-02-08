import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Features from './components/Features'
import Cards from './components/Cards'
import LocomotiveScroll from 'locomotive-scroll';
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen text-[#212121] bg-[#F1F1F1]">
      <Navbar />
      <Landingpage />
      <Marquee />
      <About />
      <Eyes />
      <Features />
      <Cards />
    </div>
  )
}

export default App