"use client"
import React from 'react'
import NavBar from './components/navBar/navBar'
import HeroMain from './components/heroSection/heroMain'
import AboutSection from './components/about/About'
import Contact from './components/contact/contact'
import { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Project from './components/project/project'

function Page() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])
  return (
    <main className='flex min-h-screen  flex-col bg-[#121212] '>

      <HeroMain />
      <div data-aos="fade-up"
        data-aos-duration="600">

        <AboutSection />
      </div>
      <Project/>
      <div data-aos="zoom-in">
        <Contact />
      </div>
      
    </main>
  )
}

export default Page