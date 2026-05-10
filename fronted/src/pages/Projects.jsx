import { motion } from "framer-motion"

const projects = [

  {
    title: "Modern Portfolio",
    description:
      "A modern responsive portfolio built with React, Tailwind CSS and Framer Motion.",

    technologies: ["React", "Tailwind", "Framer Motion"],

    github: "#",
    live: "#",
  },

  {
    title: "IoT Dashboard",
    description:
      "A smart IoT dashboard for monitoring sensors and connected devices in real time.",

    technologies: ["React", "JavaScript", "IoT"],

    github: "#",
    live: "#",
  },

  {
    title: "Weather App",
    description:
      "A modern weather application with clean UI and responsive design.",

    technologies: ["React", "API", "CSS"],

    github: "#",
    live: "#",
  },

]

function Projects() {
  return (

    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white px-6 py-32 transition-colors duration-500 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <motion.div

          initial={{ opacity: 0, y: 50 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 1 }}

          className="text-center mb-20"
        >

          <p className="uppercase tracking-[0.3em] text-gray-600 dark:text-gray-500 mb-4">

            My Work

          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">

            Featured Projects

          </h1>

          <p className="text-gray-700 dark:text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">

            Here are some projects showcasing my frontend
            development skills, UI design approach and passion
            for modern web technologies.

          </p>

        </motion.div>

        {/* Projects Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {
            projects.map((project, index) => (

              <motion.div

                key={index}

                initial={{ opacity: 0, y: 40 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}

                whileHover={{
                  scale: 1.03,
                  y: -10,
                }}

                className="group relative bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-gray-400/20 dark:hover:shadow-cyan-500/10 transition-all duration-500"
              >

                {/* Glow Effect */}

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-transparent via-gray-300/20 dark:via-cyan-500/10 to-transparent"></div>

                {/* Fake Image */}

                <div className="h-52 bg-gradient-to-br from-gray-300 via-gray-200 to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-black flex items-center justify-center text-5xl font-bold text-gray-500 dark:text-gray-700">

                  {project.title.charAt(0)}

                </div>

                {/* Content */}

                <div className="p-8 relative z-10">

                  <h2 className="text-3xl font-bold mb-4">

                    {project.title}

                  </h2>

                  <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-6">

                    {project.description}

                  </p>

                  {/* Technologies */}

                  <div className="flex flex-wrap gap-3 mb-8">

                    {
                      project.technologies.map((tech, techIndex) => (

                        <span

                          key={techIndex}

                          className="px-4 py-2 rounded-full text-sm bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                        >

                          {tech}

                        </span>

                      ))
                    }

                  </div>

                  {/* Buttons */}

                  <div className="flex gap-4">

                    <a
                      href={project.github}

                      className="flex-1 text-center bg-black text-white dark:bg-white dark:text-black py-3 rounded-xl font-semibold hover:opacity-80 transition"
                    >

                      GitHub

                    </a>

                    <a
                      href={project.live}

                      className="flex-1 text-center border border-gray-400 dark:border-gray-700 py-3 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 transition"
                    >

                      Live Demo

                    </a>

                  </div>

                </div>

              </motion.div>

            ))
          }

        </div>

      </div>

    </section>
  )
}

export default Projects