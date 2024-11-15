import React, { useEffect, useRef } from "react";
import { gsap } from "gsap"; // Import GSAP for animations
import AOS from "aos"; // Import AOS for scroll animations
import "aos/dist/aos.css"; // Import AOS styles
import EducImage from "../assets/images/educationimage.png";
import EducImage2 from "../assets/images/educationimage2.png";
import "../assets/css/educ.css";
import '../assets/responsiveCss/res-experience.css';

function Education() {
  const imageRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1500, // Reduced duration for performance
      once: true, // Animation only once for performance gain
    });

    const bounceAnimation = gsap.to(imageRef.current, {
      y: -20,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    return () => {
      bounceAnimation.kill(); // Clean up on unmount
    };
  }, []);

  return (
    <section className="education-section d-flex align-items-center justify-around lg:flex-row md:flex-col">
      {/* Tabs section comes from left */}
      <div className="educ-content d-flex gap-12 h-100 flex-column" data-aos="fade-left">
        <h1 className="md:pl-9 lg:text-[55px]" id="edu-heading">Education</h1>
        <div className="tabs d-flex flex-column gap-8">
          {/* Tab 1 */}
          <div className="tab-items lg:w-[809px] md:w-[700px] d-flex align-items-center lg:h-[144px] md:h-[144px]">
            <div className="circle-icon d-flex justify-content-center align-items-center">
              <i className="bi bi-mortarboard-fill" style={{ fontSize: "2rem" }}></i>
            </div>
            <div className="education-details d-flex flex-column gap-1">
              <p id="educ-date">2016-2018</p>
              <p id="educ-bachelor">Matric</p>
              <p id="edu-school">Royal Grammar School</p>
            </div>
          </div>

          {/* Tab 2 */}
          <div className="tab-items lg:w-[809px] d-flex align-items-center md:w-[700px] lg:h-[144px] md:h-[144px]">
            <div className="circle-icon d-flex justify-content-center align-items-center">
              <i className="bi bi-mortarboard-fill" style={{ fontSize: "2rem" }}></i>
            </div>
            <div className="education-details d-flex flex-column gap-1">
              <p id="educ-date">2018-2020</p>
              <p id="educ-bachelor">Fsc Pre-Engineering</p>
              <p id="edu-school">DPS & C</p>
            </div>
          </div>

          {/* Tab 3 */}
          <div className="tab-items lg:w-[809px] md:w-[700px] d-flex align-items-center lg:h-[144px] md:h-[144px]">
            <div className="circle-icon d-flex justify-content-center align-items-center">
              <i className="bi bi-mortarboard-fill" style={{ fontSize: "2rem" }}></i>
            </div>
            <div className="education-details d-flex flex-column gap-1">
              <p id="educ-date">2020-2024</p>
              <p className="lg:w-[8rem]" id="educ-bachelor">Bachelor in Software Engineering</p>
              <p id="edu-school">GCUF</p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section comes from right */}
      <div className="edu-image" data-aos="fade-right">
        <img src={EducImage} alt="Education Image" ref={imageRef} loading="lazy" />
      </div>
    </section>
  );
}

export default Education;
