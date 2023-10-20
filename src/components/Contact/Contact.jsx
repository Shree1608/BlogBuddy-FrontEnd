import React from "react";
// import './contact.css'
import {SiGmail} from 'react-icons/si'
import { FaWhatsapp} from 'react-icons/fa' ;

import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4upmftc",
        "template_q6oz66e",
        form.current,
        "Cx6_fO2tZGH8Lq30V"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    alert("thanks for sending the message.");
  };

  return (
    <section id="contact" className="md:mt-30 lg:my-8 lg:mx-10 md:my-20 my-20 about-scroll">
      <h5 className="text-2xl font-bold text-slate-500 mx-auto w-fit">Get in Touch!</h5>
      <h1 className="text-2xl font-bold  mx-auto w-fit">Contact Me </h1>
 
      <div className="flex lg:mx-[20%] my-5 md:my-8 gap-7 justify-between flex-col md:flex-row">

        <div className="flex flex-col gap-2 w-full md:w-fit">

          <article className="bg-cyan-00 border-2 border-cyan-600 hover:shadow-md flex flex-col items-center w-full md:w-64 p-7 lg:p-5 text-lg rounded-md">
            <SiGmail className="contact__option-icon" />
            <h4 className="font-bold">Email</h4>
            <h5 className="font-medium text-base">bhagyashree8220@gmail.com</h5>
            <a href="mailto:bhagyashree8220@gmail.com" target="_blank" className="text-sm hover:text-cyan-700 font-medium">
              Send a message
            </a>
          </article>

          <article className="bg-cyan-00 border-2 border-cyan-600 hover:shadow-md flex flex-col items-center w-full md:w-64 p-5 py-10 lg:py-8 rounded-md text-lg">
            <FaWhatsapp className="contact__option-icon" />
            <h4 className="font-bold">WhatsApp</h4>
            <a
              href="https://api.whatsapp.com/send?phone=9723022525"
              target="_blank"
              className="text-sm hover:text-cyan-700 font-medium"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} className="flex gap-2 flex-col w-full">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            className="border-cyan-600 border-2 hover:shadow-md p-3 rounded-md focus:outline-none"
          />
          <input type="text" name="email" placeholder="Your Email" required className="border-cyan-600 border-2 p-3 rounded-md focus:outline-none hover:shadow-md"/>
          <textarea
            className="p-3 border-cyan-600 border-2 rounded-md focus:outline-none hover:shadow-md"
            name="message"
            rows="6"
            placeholder="Your Message"
            required

          ></textarea>
          <button type="submit" className="p-3 rounded-md font-medium hover:shadow-md hover:font-bold  bg-cyan-500 border-2 border-cyan-600">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;