"use client"

import HeroPage from "./components/hero"
import About from "./components/about"
import Contact from "./components/contact"
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react"


function Home(){
  useEffect (()=>{
    AOS.init({
      easing: "ease-in-out",
      duration: 1200,
      delay: 160,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    })
  }, [])

  return (
    <div>
    <HeroPage/>
    <About/>
    <Contact/>

    </div>
  )
}

export default Home