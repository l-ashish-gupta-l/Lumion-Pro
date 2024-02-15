import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Features from './components/Features'
import Cards from './components/Cards'
import LocomotiveScroll from 'locomotive-scroll'
import Getreadyeye from './components/Getreadyeye'
import Footer from './components/Footer'
import MobileMenu from './components/MobileMenu'
function App() {
  // const locomotiveScroll = new LocomotiveScroll();
  const shouldInitializeLocomotiveScroll = window.innerWidth > 1024;
  const locomotiveScroll = shouldInitializeLocomotiveScroll ? new LocomotiveScroll() : null;
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavbarBtnClick = () => {
    setMenuOpen(!menuOpen);

  };

  const handleMobileMenuBtnClick = () => {
    setMenuOpen(false);

  }
  return (
    <div className="w-full min-h-screen text-[#212121] bg-[#F1F1F1]">
      <Navbar onNavbarBtnClick={handleNavbarBtnClick} />
      <MobileMenu isOpen={menuOpen} onMobileMenuBtnClick={handleMobileMenuBtnClick} />
      <Landingpage />
      <Marquee />
      <About />
      <Eyes />
      <Features />
      <Cards />
      <Getreadyeye />
      <Footer />
    </div>
  )
}

export default App