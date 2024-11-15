import React, { useState, useEffect, useRef } from "react"
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn, FaWhatsapp, FaTelegramPlane } from "react-icons/fa"
import { gsap } from "gsap" // Import GSAP
import "../assets/css/header.css"
import logoImg from "../assets/images/logo.jpg"
import '../assets/responsiveCss/res-header.css'
import CV from '../assets/moaz-raheem-cv.pdf'

function Header({ contactRef }) { // Pass contactRef as prop
  const descriptions = ["ReactJS Developer", "MERN Stack Developer", "Android App Developer"]
  const [currentText, setCurrentText] = useState("")
  const [index, setIndex] = useState(0)
  const [isErasing, setIsErasing] = useState(false)

  const photoContainerRef = useRef(null)
  const iconsRef = useRef([]) // Ref to store icons
  const headerLeftRef = useRef(null) // Ref for header-left

  const scrollToSection = () => {
    // Scroll smoothly to the Contact section
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    const typeInterval = setInterval(() => {
      if (isErasing) {
        setCurrentText(prev => prev.slice(0, -1))
        if (currentText.length === 0) {
          setIsErasing(false)
          setIndex(prevIndex => (prevIndex + 1) % descriptions.length)
        }
      } else {
        setCurrentText(prev => descriptions[index].slice(0, prev.length + 1))
        if (currentText.length === descriptions[index].length) {
          setIsErasing(true)
        }
      }
    }, 150)

    return () => clearInterval(typeInterval)
  }, [currentText, isErasing, index, descriptions])

  useEffect(() => {
    const handleHover = () => {
      gsap.to(iconsRef.current, {
        y: -20, // Move up
        stagger: 0.3, // Delay each icon for wave effect
        duration: 0.6,
        delay: "0.4", // Duration to move up
        ease: "power2.out", // Use a smoother easing function
        onComplete: () => {
          // After moving up, move down after a delay
          gsap.to(iconsRef.current, {
            y: 0, // Return to original position
            stagger: 0.1, // Delay each icon for wave effect
            duration: 0.6, // Duration to move down
            ease: "power2.in", // Use a smoother easing function
            delay: 0.5 // Delay before coming down
          })
        }
      })
    }

    const headerLeft = headerLeftRef.current
    if (headerLeft) {
      headerLeft.addEventListener("mouseenter", handleHover)
    }

    return () => {
      if (headerLeft) {
        headerLeft.removeEventListener("mouseenter", handleHover)
      }
    }
  }, [])

  return (
    <section className="header-content d-flex justify-content-center position-relative">
      <div className="header-left h-full md:w-1/2 sm:w-full" ref={headerLeftRef}>
        {/* Social Media Icons */}
        <div className="social-icons flex justify-start items-end gap-6 h-[39rem] md:h-[39rem] pb-14 pl-6 md:gap-3">
          <a ref={el => (iconsRef.current[0] = el)} href="https://www.facebook.com/moaz.raheem.3" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-12 h-12 rounded-full transition duration-300">
            <FaFacebookF size={22} />
          </a>
          <a ref={el => (iconsRef.current[1] = el)} href="https://www.instagram.com/mianmoaz225/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-12 h-12 rounded-full transition duration-300">
            <FaInstagram size={22} />
          </a>
          <a ref={el => (iconsRef.current[2] = el)} href="https://github.com/mianmoaz786" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-12 h-12 rounded-full transition duration-300">
            <FaGithub size={22} />
          </a>
          <a ref={el => (iconsRef.current[3] = el)} href="www.linkedin.com/in/moaz-raheem-50a05528a" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-12 h-12 rounded-full transition duration-300">
            <FaLinkedinIn size={22} />
          </a>
          <a ref={el => (iconsRef.current[4] = el)} href="https://wa.me/03196451225" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-12 h-12 rounded-full transition duration-300">
            <FaWhatsapp size={22} />
          </a>
          <a ref={el => (iconsRef.current[5] = el)} href="https://t.me/MoazRaheem" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-12 h-12 rounded-full transition duration-300 lg:flex md:hidden sm:hidden">
            <FaTelegramPlane size={22} />
          </a>
        </div>
      </div>

      {/* Center Section - Profile Photo */}
      <div className="header-center flex justify-center items-center z-10 lg-h-[40rem]">
        <div className="profile-photo-container flex justify-center items-center rounded-full overflow-hidden">
          <img src={logoImg} alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="header-right md:pt-40 md:pb-40 md:px-8 md:w-1/2 w-full h-auto">
        <h2 className="fs-3 text-4xl md:text-5xl">Hi There!</h2>
        <h1 className="text-3xl md:text-4xl lg:text-5xl lg:font-bold">
          I’M Moaz Raheem
        </h1>

        <div className="description min-h-[40px]">
          <p className="desc-text lg:font-semibold text-4xl md:text-3xl lg:h-12">
            {currentText}
          </p>

          {/* Updated button container using flex */}
          <div className="btns-header flex items-center lg:gap-5  md:gap-6">
            <button className="btn cv" >
              <a href={CV} download="moaz-raheem-cv.pdf" className="">
                Download CV
              </a>
            </button>
            <button onClick={scrollToSection} className="btn contact transition-all duration-1000 ease delay-100 md:ml-0">Contact</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
