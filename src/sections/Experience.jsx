import React, { useEffect, useRef } from "react";
import { gsap } from "gsap"; // Import GSAP for animations
import AOS from "aos"; // Import AOS for scroll animations
import "aos/dist/aos.css"; // Import AOS styles
import FrotendImg from "../assets/images/front-end-programming.png";
import AndroidImg from "../assets/images/android-logo.png";
import BackendImg from "../assets/images/backend.png";
import ExperienceImg from "../assets/images/experience-image.png";
import "../assets/css/educ.css";
import '../assets/responsiveCss/res-experience.css';

function Experience() {
  const imageRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1500, // Reduced duration for smoother animations
      once: true, // Animate only once for better performance
    });

    const bounceAnimation = gsap.to(imageRef.current, {
      y: -20,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    return () => {
      bounceAnimation.kill(); // Clean up GSAP animation on unmount
    };
  }, []);

  return (
    <section className="education-section d-flex align-items-center justify-around lg:flex-row md:flex-col">
      {/* Tabs section comes from left */}
      <div className="educ-content d-flex justify-center w-70 gap-12 h-100 flex-column" data-aos="fade-left">
        <h1 className="md:pl-9 lg:text-[55px]" id="edu-heading">Experience</h1>
        <div className="tabs d-flex flex-column gap-8">
          {/* Tab 1 */}
          <div className="tab-items d-flex align-items-center lg:w-[809px] md:w-[700px] lg:h-[144px] md:h-[144px]">
            <div className="circle-icon d-flex justify-content-center align-items-center">
              <img src={FrotendImg} alt="Frontend Development Icon" loading="lazy" />
            </div>
            <div className="education-details d-flex flex-column gap-1">
              <p id="educ-date">2022-2023</p>
              <p id="educ-bachelor">Frontend Developer</p>
              <p id="edu-school">Pak Freelancer</p>
            </div>
          </div>

          {/* Tab 2 */}
          <div className="tab-items d-flex align-items-center lg:w-[809px] md:w-[700px] lg:h-[144px] md:h-[144px]">
            <div className="circle-icon d-flex justify-content-center align-items-center">
              <img src={AndroidImg} alt="Android Development Icon" loading="lazy" />
            </div>
            <div className="education-details d-flex flex-column gap-1">
              <p id="educ-date">2023-2024</p>
              <p id="educ-bachelor">Android Development</p>
              <p id="edu-school">YouTube (Self-Learning)</p>
            </div>
          </div>

          {/* Tab 3 */}
          <div className="tab-items d-flex align-items-center lg:w-[809px] md:w-[700px] lg:h-[144px] md:h-[144px]">
            <div className="circle-icon d-flex justify-content-center align-items-center">
              <img src={BackendImg} alt="Backend Development Icon" loading="lazy" />
            </div>
            <div className="education-details d-flex flex-column gap-1">
              <p id="educ-date">2024-Present</p>
              <p id="educ-bachelor">MERN Stack</p>
              <p id="edu-school">InnvoyTech</p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section comes from right */}
      <div className="edu-image" data-aos="fade-right">
        <img src={ExperienceImg} id="experienceImg" alt="Experience Illustration" ref={imageRef} loading="lazy" />
      </div>
    </section>
  );
}

export default Experience;
