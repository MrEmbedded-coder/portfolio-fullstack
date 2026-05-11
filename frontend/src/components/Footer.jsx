import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa"

function Footer() {
  return (

    <footer className="bg-gray-100 text-black dark:bg-gray-950 dark:text-white border-t border-gray-300 dark:border-gray-800 transition-colors duration-500">

      <div className="max-w-7xl mx-auto px-8 py-12">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Left Side */}

          <div className="text-center md:text-left">

            <h2 className="text-2xl font-bold mb-2">
              Adoum Moussa Ramat
            </h2>

            <p className="text-gray-700 dark:text-gray-400 max-w-md">
              Frontend Developer passionate about React,
              IoT and modern web technologies.
            </p>

          </div>

          {/* Social Links */}

          <div className="flex gap-6 text-2xl">

            <a
              href="#"
              className="hover:text-gray-500 dark:hover:text-gray-300 transition hover:scale-110"
            >

              <FaGithub />

            </a>

            <a
              href="#"
              className="hover:text-blue-500 transition hover:scale-110"
            >

              <FaLinkedin />

            </a>

            <a
              href="#"
              className="hover:text-red-500 transition hover:scale-110"
            >

              <FaEnvelope />

            </a>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-gray-300 dark:border-gray-800 mt-10 pt-6 text-center text-gray-600 dark:text-gray-500">

          © 2026 Adoum Moussa Ramat. All rights reserved.

        </div>

      </div>

    </footer>
  )
}

export default Footer