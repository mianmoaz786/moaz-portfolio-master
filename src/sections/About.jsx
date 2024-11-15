import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Aboutimg from "../assets/images/experience-image.png";
import "../assets/css/about.css";
import '../assets/responsiveCss/res-about.css';

function About() {
  useEffect(() => {
    // Initialize ScrollReveal
    const sr = ScrollReveal({
      distance: "50px",
      duration: 1000,
      delay: 200,
      easing: "ease-out",
      reset: true
    });

    sr.reveal(".content", {
      origin: "left",
      opacity: 0,
      scale: 0.5
    });

    sr.reveal("#aboutimg", {
      origin: "right",
      opacity: 0,
      scale: 0.5,
      duration: 1500,
      delay: 300
    });
  }, []);

  return (
    <section className="About-section flex lg:flex-row flex-wrap md:justify-center lg:h-[60rem] md:h-[70rem] sm:flex-col">
      <div className="content flex flex-col justify-center items-start gap-6 w-full md:w-1/2">
        <h1 className="text-white text-4xl lg:font-semibold">LET ME INTRODUCE MYSELF</h1>
        <p className="text-white text-lg leading-relaxed">
          I fell in love with programming and have learned a lot along the way—though I still have much to explore! I am
          fluent in technologies like{" "}
          <span className="text-[rgb(233,100,55)] lg:font-bold text-xl">React.js</span>,{" "}
          <span className="text-[rgb(233,100,55)] lg:font-bold text-xl">Android Development</span>,{" "}
          <span className="text-[rgb(233,100,55)] lg:font-bold text-xl">JavaScript</span>, and full-stack development with the{" "}
          <span className="text-[rgb(233,100,55)] lg:font-bold text-xl">MERN stack</span> (MongoDB, Express.js, React.js, Node.js). My primary interest lies in building dynamic{" "}
          <span className="text-[rgb(233,100,55)] lg:font-bold text-xl">React applications</span>{" "}
          and developing robust{" "}
          <span className="text-[rgb(233,100,55)] lg:font-bold text-xl">Android apps</span>. Whenever possible, I also apply my passion for creating polished portfolios and responsive web applications,
          such as{" "}
          <span className="text-[rgb(233,100,55)] lg:font-bold text-xl">Textutils</span>.
        </p>
      </div>
      <div className="img flex justify-center items-center lg:w-auto md:w-1/2">
        <img id="aboutimg" src={Aboutimg} alt="aboutimg" className="w-full h-auto max-w-md filter brightness-0 invert" loading="lazy" />
      </div>
    </section>
  );
}

export default About;
