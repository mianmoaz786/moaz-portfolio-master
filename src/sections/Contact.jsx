import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "..//assets/css/contact.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update this URL to point to the Firebase Realtime Database with the appropriate endpoint
      await axios.post("https://portfolio-986e8-default-rtdb.firebaseio.com/contacts.json", formData);
      toast.success("Message sent successfully!"); // Show success toast
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("There was an error sending the message", error);
      toast.error("There was an error sending your message."); // Show error toast
    }
  };

  return (
    <section id="contact-section" className="w-full lg:h-[70rem] d-flex lg:flex-row lg:justify-around md:justify-center sm:flex-col md:h-[95rem] md:pt-40">
      {/* Toast Container for notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {/* Left div for form */}
      <div className="contact-form lg:w-[45%] md:w-[80%]">
        <h1 className="sm-text-small lg:font-bold">Contact Me</h1>
        <form
          style={{ width: "100%" }}
          id="form"
          className="d-flex justify-center flex-col align-middle gap-16"
          onSubmit={handleSubmit}
        >
          <input
            required
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            className="" // Preserving existing classes
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            className="" // Preserving existing classes
          />
          <textarea
            placeholder="Enter Your Message"
            name="message"
            className=""
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ resize: "none", overflow: "hidden" }} // Preserving existing styles
          ></textarea>
          <button style={{ cursor: "none" }} type="submit" className="form-btn">
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>Send</span>
          </button>
        </form>
      </div>
      {/* Left div end here */}

      {/* Right div for map */}
      <div className="map custom-map-container lg:w-2/5 md:w-4/5 md:h-[43rem]">
        <iframe
          className="mt-4 md:h-[40rem]"
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27309.287678358272!2d73.07276943268693!3d31.45036523678716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922683999b27329%3A0xf531d2e80f20507a!2sFaisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1664822130209!5m2!1sen!2s"
          width="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
