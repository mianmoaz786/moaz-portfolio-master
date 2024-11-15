import React, { useEffect } from "react";
import { gsap } from "gsap";
import TextutilsImg from "../assets/images/text-image2.png";
import ShapelyDemo from "../assets/images/shapely_demo.png";
import "../assets/css/project.css";

const Projects = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.05, duration: 0.2 });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, duration: 0.2 });
      });
    });

    // Clean up event listeners on unmount
    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <section className="project lg:h-auto md:h-[160rem] " data-aos="fade-up">
      <h1
        style={{ color: "rgb(233,107,58)", paddingLeft: "4rem", fontSize: "55px" }}
        className="lg:font-bold md:text-center lg:w-16 md:w-96 md:ml-16"
      >
        Projects
      </h1>
      <div className="container md:min-h-screen lg:gap-[20px] md:gap-8">
        {/* Card 1 */}
        <div className="card md:mb-[3rem] md:mt-0  sm:mb-9" data-aos="fade-up">
          <div className="front">
            <img src={TextutilsImg} alt="Textutils" />
            <h2>TextUtils</h2>
            <p>
              A web-based text manipulation tool that allows users to perform operations such as converting text to
              uppercase, lowercase, clearing text, and analyzing text statistics like word count and character count.
            </p>
          </div>
          <div className="back">
            <div className="buttons">
              <button
                onClick={() => window.open("https://textutils-text-analyzer-app.netlify.app/", "_blank")}
                className="button demo-button"
              >
                Demo
              </button>
              <button
                onClick={() => window.open("https://github.com/mianmoaz786/textutils", "_blank")}
                className="button code-button"
              >
                Code
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div  className="card card-2 md:mb-4 md:mt-[2rem] sm:mb-9" data-aos="fade-up">
          <div className="front">
            <img id="shapely-demo" src={ShapelyDemo} alt="ShapelyDemo" />
            <h2>Shapely Demo</h2>
            <p>
              A responsive web template designed to adapt to various screen sizes and devices. It features a clean and
              modern design, built using HTML, CSS, and JavaScript. The template includes various sections ...
            </p>
          </div>
          <div className="back">
            <div className="buttons">
              <button
                onClick={() => window.open("https://mianmoaz786.github.io/", "_blank")}
                className="button demo-button"
              >
                Demo
              </button>
              <button
                onClick={() => window.open("https://github.com/mianmoaz786/mianmoaz786.github.io", "_blank")}
                className="button code-button"
              >
                Code
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card  md:mt-[4rem] " data-aos="fade-up">
          <div className="front d-flex justify-center flex-col gap-20">
            <h2 className="mb-24">Lorem ipsum dolor sit amet consectetur.</h2>
            <p className="mb-16">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At,Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="back">
            <div className="buttons">
              <button
                onClick={() => window.open("https://example.com", "_blank")}
                className="button demo-button"
              >
                Demo
              </button>
              <button
                onClick={() => window.open("https://example.com", "_blank")}
                className="button code-button"
              >
                Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
