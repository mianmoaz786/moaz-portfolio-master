import React, { useState, useEffect } from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaNodeJs, FaDatabase, FaGit, FaGithub
} from "react-icons/fa";
import { SiExpress, SiAndroidstudio, SiFirebase, SiKotlin } from "react-icons/si";
import "../assets/css/skills.css";

const skills = [
  { icon: <FaHtml5 />, label: "HTML5", color: "rgb(16,19,20)" },
  { icon: <FaCss3Alt />, label: "CSS3", color: "rgb(16,19,20)" },
  { icon: <FaJs />, label: "JavaScript", color: "rgb(16,19,20)" },
  { icon: <FaReact />, label: "React", color: "rgb(16,19,20)" },
  { icon: <FaNodeJs />, label: "Node.js", color: "rgb(16,19,20)" },
  { icon: <SiExpress />, label: "Express", color: "rgb(16,19,20)" },
  { icon: <FaDatabase />, label: "MongoDB", color: "rgb(16,19,20)" },
  { icon: <SiAndroidstudio />, label: "Android Studio", color: "rgb(16,19,20)" },
  { icon: <SiKotlin />, label: "Kotlin", color: "rgb(16,19,20)" },
  { icon: <SiFirebase />, label: "Firebase", color: "rgb(16,19,20)" }
];

const Skills = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [skillsPerSlide, setSkillsPerSlide] = useState(4);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 480);

  const totalSlides = Math.ceil(skills.length / skillsPerSlide);

  const moveSlide = (direction) => {
    const newSlide = (currentSlide + direction + totalSlides) % totalSlides;
    setCurrentSlide(newSlide);
  };

  // Set up auto-slide interval if screen width is above 480px
  useEffect(() => {
    let interval;
    if (!isMobileView) {
      interval = setInterval(() => moveSlide(1), 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentSlide, isMobileView]);

  // Update layout based on screen width
  const updateViewMode = () => {
    setIsMobileView(window.innerWidth < 480);
    setSkillsPerSlide(window.innerWidth < 768 ? 2 : 4);
  };

  useEffect(() => {
    updateViewMode();
    window.addEventListener("resize", updateViewMode);
    return () => window.removeEventListener("resize", updateViewMode);
  }, []);

  return (
    <section className="skill h-[55rem] d-flex flex-col justify-center align-items-center">
      <h1 className="text-[55px] lg:font-bold">Skills</h1>
      {isMobileView ? (
        <div className="skills-vertical">
          {skills.map((skill, index) => (
            <div className="skill-box" key={index} style={{ backgroundColor: skill.color }}>
              <div className="skill-icon">{skill.icon}</div>
              <span>{skill.label}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="carousel">
          <div
            className="carousel-container"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div className="carousel-slide" key={slideIndex}>
                {skills.slice(slideIndex * skillsPerSlide, slideIndex * skillsPerSlide + skillsPerSlide).map((skill, index) => (
                  <div className="skill-box" key={index} style={{ backgroundColor: skill.color }}>
                    <div className="skill-icon">{skill.icon}</div>
                    <span>{skill.label}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <button className="carousel-button prev" onClick={() => moveSlide(-1)}>
            &#10094;
          </button>
          <button className="carousel-button next" onClick={() => moveSlide(1)}>
            &#10095;
          </button>
        </div>
      )}
    </section>
  );
};

export default Skills;
