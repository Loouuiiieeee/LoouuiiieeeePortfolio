import { FaEnvelope, FaMapMarked, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-16">
          Contact <span className="text-violet-400">Me</span>
        </h1>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left Side - Contact Info */}
          <div className="flex-1 space-y-6">
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
          <div className="flex-1 w-full">
            <form className="bg-gray-900 p-8 rounded-xl shadow-lg space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-violet-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-400"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-400"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-violet-400 to-yellow-500 py-3 rounded-lg font-semibold transform transition duration-300 hover:scale-105"
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
