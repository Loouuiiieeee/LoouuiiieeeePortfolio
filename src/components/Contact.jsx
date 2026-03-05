import { useToast } from "@inspectph/react-toast-sileo";
import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaExclamationTriangle,
  FaMapMarked,
  FaPhone,
} from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const { success, warning } = useToast();

  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const message = form.elements.message.value;

    const newErrors = {};

    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!message) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    console.log({ name, email, message });
    warning({
      title: "Warning!",
      description: "Temporary Disable !",
      fill: "white",
      duration: 5000,
      icon: <FaExclamationTriangle />,
      // icon: <FaCheckCircle />,
    });

    e.target.reset();
    setError({});
    setIsSubmit(false);
  };

  useEffect(() => {
    setIsSubmit(false);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1500 }); // animation duration
  }, []);

  return (
    <section className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-16">
          Contact <span className="text-violet-400">Me</span>
        </h1>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left Side - Contact Info */}
          <div className="flex-1 space-y-6" data-aos="fade-right">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-yellow-500">
              Let's Discuss Your Project
            </h3>

            <p className="text-gray-400">
              Feel free to reach out if you want to collaborate, have a project
              in mind, or just want to say hello.
            </p>

            <div className="space-y-4 pt-6">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-violet-400 text-xl" />
                <a
                  href="mailto:louiejimsky29@gmail.com"
                  className="hover:text-green-400 transition"
                >
                  louiejimsky29@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-violet-400 text-xl" />
                <span>0966 205 1163</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarked className="text-violet-400 text-xl" />
                <span>Obando, Bulacan, Philippines</span>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex-1 w-full" data-aos="fade-left">
            <form
              className="bg-gray-900 p-8 rounded-xl shadow-lg space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-violet-400"
                />
                {isSubmit && error.name && (
                  <span className="text-red-500 text-sm mt-1">
                    {error.name}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-400"
                />
                {isSubmit && error.email && (
                  <span className="text-red-500 text-sm mt-1">
                    {error.email}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Your Message"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-400"
                />
                {isSubmit && error.message && (
                  <span className="text-red-500 text-sm mt-1">
                    {error.message}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-violet-400 to-yellow-500 py-3 rounded-lg font-semibold transform transition duration-300 hover:scale-105 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
