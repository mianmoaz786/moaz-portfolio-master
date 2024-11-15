import React, { useEffect, useState } from "react"
import "../assets/css/footer.css"

function Footer() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <>
      <footer className="lg:h-auto">
        <div className="footer-content md:h-[15rem]">
          <h1>FIND ME ON</h1>
          <p>
            Feel free to <span>connect</span> with me
          </p>
        </div>

        <div className="footer-links md:gap-10">
          <div className="d-flex justify-content-center wrapper">
            <div className="icon facebook">
              <span className="tooltip text-primary">Facebook</span>
              <a href="https://www.facebook.com/moaz.raheem.3" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
            </div>
            <div className="icon github">
              <span className="tooltip text-dark">GitHub</span>
              <a href="https://github.com/mianmoaz786" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github"></i>
              </a>
            </div>
            <div className="icon instagram">
              <span className="tooltip text-danger">Instagram</span>
              <a href="https://www.instagram.com/mianmoaz225/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
            <div className="icon linkedin">
              <span className="tooltip text-primary">LinkedIn</span>
              <a href="www.linkedin.com/in/moaz-raheem-50a05528a" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
            <div className="icon whatsapp">
              <span className="tooltip text-success">WhatsApp</span>
              <a href="https://wa.me/03196451225" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="copyright text-white lg:block md:hidden sm:hidden">
            <span>Copyright © 2024. All rights reserved. Designed & developed by Moaz Developer.</span>
          </div>
        </div>

        {showButton && (
          <button id="top" className="back-to-top" onClick={scrollToTop}>
            <svg className="svgIcon" viewBox="0 0 384 512">
              <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
            </svg>
          </button>
        )}
      </footer>
    </>
  )
}

export default Footer
