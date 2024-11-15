import React from "react";
import { FaCode, FaMobileAlt, FaDatabase, FaServer, FaBug, FaTools } from "react-icons/fa";
import "../assets/css/service.css";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description:
      "Professional web development using HTML, CSS, JavaScript, and modern frameworks to build responsive and user-friendly websites."
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description:
      "Native and hybrid mobile application development for Android platforms, delivering smooth and efficient user experiences."
  },
  {
    icon: <FaDatabase />,
    title: "Database Management",
    description:
      "Experienced in database design, implementation, and management with MongoDB and Firebase for efficient data handling."
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    description:
      "Developing scalable backend solutions using Node.js and Express to ensure robust server-side functionality."
  },
  {
    icon: <FaBug />,
    title: "Bug Fixing",
    description:
      "Identifying and resolving bugs in web and mobile applications to enhance performance and user experience."
  },
  {
    icon: <FaTools />,
    title: "Code Refactoring",
    description:
      "Improving existing codebases for better maintainability and performance, ensuring your applications run smoothly."
  },
  {
    icon: <FaCode />,
    title: "API Development",
    description:
      "Creating and integrating RESTful APIs for seamless communication between frontend and backend services."
  },
  {
    icon: <FaMobileAlt />,
    title: "Android App Optimization",
    description:
      "Optimizing Android applications for performance and responsiveness, ensuring a top-notch user experience."
  }
];

const Services = () => {
  return (
    <section className="services lg:mt-[3rem] lg:h-auto md:h-[150rem] ">
      <h2 className="md:mt-20 lg:pl-32 md:pl-24 ">Services</h2>
      <div className="container">
        <div className="parent-service md:ml-0 lg:ml-[0rem] lg:mr-[4rem]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[5rem]">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-box text-center mb-5"
              >
                <div className="service-icon" style={{ fontSize: "2rem" }}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
