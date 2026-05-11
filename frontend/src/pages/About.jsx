import { motion } from "framer-motion"

function About() {
  return (

    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white px-6 py-32 transition-colors duration-500">

      <div className="max-w-6xl mx-auto">

        {/* Title */}

        <motion.div

          initial={{ opacity: 0, y: 50 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 1 }}

          className="text-center mb-20"
        >

          <h1 className="text-5xl md:text-6xl font-bold mb-6">

            About Me

          </h1>

          <p className="text-gray-700 dark:text-gray-400 text-lg max-w-3xl mx-auto">

            Passionate frontend developer focused on building
            modern, responsive and interactive web experiences.

          </p>

        </motion.div>

        {/* Content */}

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <motion.div

            initial={{ opacity: 0, x: -50 }}

            animate={{ opacity: 1, x: 0 }}

            transition={{ duration: 1 }}

          >

            <div className="bg-gray-200 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 rounded-3xl p-10 shadow-lg">

              <h2 className="text-3xl font-bold mb-6">

                Who Am I?

              </h2>

              <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-6">

                I'm Adoum Moussa, a frontend developer passionate
                about creating beautiful and modern user interfaces
                with React, Tailwind CSS and JavaScript.

              </p>

              <p className="text-gray-700 dark:text-gray-400 leading-relaxed">

                I also love IoT and embedded systems, especially
                Arduino-based projects and smart technologies.

              </p>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div

            initial={{ opacity: 0, x: 50 }}

            animate={{ opacity: 1, x: 0 }}

            transition={{ duration: 1 }}

            className="grid grid-cols-2 gap-6"
          >

            {/* Card 1 */}

            <div className="bg-gray-200 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 rounded-2xl p-8 hover:scale-105 transition shadow-lg">

              <h3 className="text-4xl font-bold mb-2">
                2+
              </h3>

              <p className="text-gray-700 dark:text-gray-400">
                Years Learning
              </p>

            </div>

            {/* Card 2 */}

            <div className="bg-gray-200 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 rounded-2xl p-8 hover:scale-105 transition shadow-lg">

              <h3 className="text-4xl font-bold mb-2">
                10+
              </h3>

              <p className="text-gray-700 dark:text-gray-400">
                Projects Built
              </p>

            </div>

            {/* Card 3 */}

            <div className="bg-gray-200 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 rounded-2xl p-8 hover:scale-105 transition shadow-lg">

              <h3 className="text-4xl font-bold mb-2">
                React
              </h3>

              <p className="text-gray-700 dark:text-gray-400">
                Frontend Focus
              </p>

            </div>

            {/* Card 4 */}

            <div className="bg-gray-200 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 rounded-2xl p-8 hover:scale-105 transition shadow-lg">

              <h3 className="text-4xl font-bold mb-2">
                IoT
              </h3>

              <p className="text-gray-700 dark:text-gray-400">
                Embedded Systems
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default About