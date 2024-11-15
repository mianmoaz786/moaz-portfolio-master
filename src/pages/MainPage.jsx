import React, { useRef } from "react"
import Navbar from "../components/Navbar"
import CustomCursor from "../components/CustomCursor"
import Header from "../sections/Header"
import About from "../sections/About"
import Education from "../sections/Education"
import Skills from "../sections/Skills"
import Experience from "../sections/Experience"
import Project from "../sections/Projects"
import Services from "../sections/Services"
import Contact from "../sections/Contact"
import Footer from "../sections/Footer"
import "../assets/css/universal.css"

function MainPage() {
  const headerRef = useRef(null)
  const aboutRef = useRef(null)
  const educationRef = useRef(null)
  const skillsRef = useRef(null)
  const experienceRef = useRef(null)
  const projectRef = useRef(null)
  const servicesRef = useRef(null)
  const contactRef = useRef(null)
  const footerRef = useRef(null)

  return (
    <>
      <CustomCursor />
      <Navbar
        headerRef={headerRef}
        aboutRef={aboutRef}
        educationRef={educationRef}
        skillsRef={skillsRef}
        experienceRef={experienceRef}
        projectRef={projectRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
        footerRef={footerRef}
      />

      <div className="main-container" style={{ backgroundColor: "#101314" }}>
        <section ref={headerRef}>
          <Header contactRef={contactRef} />
        </section>

        <section className="bar-section">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="bar"></div>
        </section>

        <section ref={aboutRef}>
          <About />
        </section>
        <section ref={educationRef}>
          <Education />
        </section>
        <section ref={skillsRef}>
          <Skills />
        </section>
        <section ref={experienceRef}>
          <Experience />
        </section>
        <section ref={projectRef}>
          <Project />
        </section>
        <section ref={servicesRef}>
          <Services />
        </section>
        <section ref={contactRef}>
          <Contact />
        </section>
        <section ref={footerRef}>
          <Footer />
        </section>
      </div>
    </>
  )
}

export default MainPage
