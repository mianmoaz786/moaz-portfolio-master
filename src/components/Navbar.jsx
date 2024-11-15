import React, { useState, useEffect, useRef } from "react"

import { gsap } from "gsap"
import '../assets/responsiveCss/responsive-nav.css'
import '../assets/css/navbar.css'
import aboutIcon from "../assets/images/about.png"
import resumeIcon from "../assets/images/resume.png"
import contactIcon from "../assets/images/contact.png"

function Navbar({ headerRef, aboutRef, educationRef, skillsRef, experienceRef, projectRef, servicesRef, contactRef }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const logoRef = useRef(null)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const scrollToSection = ref => {
    ref.current.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false) // Close menu after clicking
  }

  useEffect(() => {
    if (menuOpen) {
      gsap.to(".menu", { duration: 1, x: 0, ease: "power1.out" })
      gsap.to(".burger-line", { duration: 0.5, rotation: 45, transformOrigin: "50% 50%", y: 5, ease: "power4.out" })
      gsap.to(".burger-line-2", { duration: 0.5, opacity: 0, ease: "power4.out" })
      gsap.to(".burger-line-3", { duration: 0.5, rotation: -45, transformOrigin: "50% 50%", y: -5, ease: "power4.out" })
      gsap.fromTo(
        ".menu ul li",
        { x: -100, opacity: 0 },
        { duration: 1.5, delay: 1.5, opacity: 1, x: 0, stagger: 0.3, ease: "power4.out" }
      )
    } else {
      gsap.to(".menu", { duration: 1, x: "-100%", ease: "power4.in" })
      gsap.to(".burger-line", { duration: 0.5, rotation: 0, transformOrigin: "50% 50%", y: 0, ease: "power4.in" })
      gsap.to(".burger-line-2", { duration: 0.5, opacity: 1, ease: "power4.in" })
      gsap.to(".burger-line-3", { duration: 0.5, rotation: 0, transformOrigin: "50% 50%", y: 0, ease: "power4.in" })
    }
  }, [menuOpen])

  return (
    <div className="navbar">
      <div className="logo " ref={logoRef}>
        <span id="logo" className="span"> &lt;/&gt; Moaz Raheem</span>
      </div>

      <div className="burger" onClick={toggleMenu}>
        <div className="burger-line"></div>
        <div className="burger-line-2"></div>
        <div className="burger-line-3"></div>
      </div>

      <div className={`menu ${menuOpen ? "open" : ""} lg:w-1/4 md:w-5/12`}>
        <ul>
          {/* <li><button id='menu-open-btn' onClick={() => scrollToSection(headerRef)}><img src={homeIcon} alt="Home" /> Home</button></li> */}
          <li>
            <button id="menu-open-btn" className="btn btn-primary" onClick={() => {scrollToSection(aboutRef);document.title='About Me'}}>
              <img src={aboutIcon} alt="About" /> About
            </button>
          </li>
          <li>
            <button id="menu-open-btn" className="btn btn-primary" onClick={() => {scrollToSection(educationRef); document.title='My Education'}}>
              <img src={resumeIcon} alt="Education" /> Education
            </button>
          </li>
          <li>
            <button id="menu-open-btn" className="btn btn-primary" onClick={() => {scrollToSection(skillsRef); document.title='My Skills'}}>
              <img src={resumeIcon} alt="Skills" /> Skills
            </button>
          </li>
          <li>
            <button id="menu-open-btn" className="btn btn-primary" onClick={() => {scrollToSection(experienceRef); document.title='My Experience'}}>
              <img src={resumeIcon} alt="Experience" /> Experience
            </button>
          </li>
          <li>
            <button id="menu-open-btn" className="btn btn-primary" onClick={() => {scrollToSection(projectRef);document.title='My Projects'}}>
              <img src={resumeIcon} alt="Projects" /> Projects
            </button>
          </li>
          <li>
            <button id="menu-open-btn" className="btn btn-primary" onClick={() => {scrollToSection(servicesRef); document.title='My Services'}}>
              <img src={resumeIcon} alt="Services" /> Services
            </button>
          </li>
          <li>
            <button id="menu-open-btn" className="btn btn-primary" onClick={() =>{ scrollToSection(contactRef);document.title='Contact Me'}}>
              <img src={contactIcon} alt="Contact" /> Contact
            </button>
          </li>
        </ul>
      </div>

      {/* Blur effect background */}
      <div className={`blur-wrapper ${menuOpen ? "show full-screen" : ""}`} />
    </div>
  )
}

export default Navbar
