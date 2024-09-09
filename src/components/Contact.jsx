import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "../constant";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false); // Loading state

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          toast.success("Your message was sent successfully!");
          form.current.reset(); // Clear the form
          setLoading(false); // Stop loading
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Something went wrong!");
          setLoading(false); // Stop loading
        }
      );
  };

  return (
    <div name="contact" className="w-full bg-gray-100">
      <div className="flex flex-col p-4 justify-center max-w-screen-xl mx-auto h-full">
        <div className="flex justify-center">
          <p className="text-5xl font-bold inline border-b-4 p-1 text-black border-gray-500 mb-8">
            Contact Me
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form ref={form} className="flex flex-col w-full md:w-1/2" onSubmit={sendEmail}>
            <div className="flex gap-6 mb-4">
              <input
                type="text"
                name="from_name"
                placeholder="Enter Your Name"
                className="p-3 mb-2 w-1/2 bg-white border-2 border-red-500 rounded-md text-black focus:outline-none focus:border-blue-500"
                required
              />
              <input
                type="email"
                name="from_email"
                placeholder="Enter Your Email"
                className="p-3 mb-2 w-1/2 bg-white border-2 border-red-500 rounded-md text-black focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="flex gap-6 mb-4">
              <input
                type="text"
                name="mobile_number"
                placeholder="Enter Your Mobile Number"
                className="p-3 mb-2 bg-white border-2 border-red-500 rounded-md text-black focus:outline-none focus:border-blue-500 w-1/2"
              />
              <input
                type="text"
                name="city"
                placeholder="Enter Your City"
                className="p-3 mb-2 w-1/2 bg-white border-2 border-red-500 rounded-md text-black focus:outline-none focus:border-blue-500"
              />
            </div>
            <textarea
              name="message"
              placeholder="Enter your message"
              rows={9}
              className="p-3 bg-white border-2 border-red-500 rounded-md text-black focus:outline-none focus:border-blue-500"
              required
            ></textarea>
            
            <input
              className={`text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-4 mx-auto flex items-center rounded-md ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
              } transition-transform duration-300 cursor-pointer`}
              type="submit"
              value={loading ? "Sending..." : "Submit"}
              disabled={loading} // Disable button while loading
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
