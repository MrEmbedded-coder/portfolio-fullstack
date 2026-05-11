import { motion } from "framer-motion"

const skills = [

  {
    name: "HTML",
    level: "90%",
  },

  {
    name: "CSS",
    level: "85%",
  },

  {
    name: "JavaScript",
    level: "80%",
  },

  {
    name: "React",
    level: "75%",
  },

  {
    name: "Tailwind CSS",
    level: "85%",
  },

  {
    name: "IoT / Arduino",
    level: "70%",
  },

]

function Skills() {
  return (

    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white px-6 py-32 transition-colors duration-500 overflow-hidden">

      <div className="max-w-6xl mx-auto">

        {/* Header */}

        <motion.div

          initial={{ opacity: 0, y: 50 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 1 }}

          className="text-center mb-20"
        >

          <p className="uppercase tracking-[0.3em] text-gray-600 dark:text-gray-500 mb-4">

            My Skills

          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">

            Technical Skills

          </h1>

          <p className="text-gray-700 dark:text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">

            Technologies and tools I use to create modern,
            responsive and interactive web applications.

          </p>

        </motion.div>

        {/* Skills Container */}

        <div className="grid md:grid-cols-2 gap-10">

          {
            skills.map((skill, index) => (

              <motion.div

                key={index}

                initial={{ opacity: 0, x: -50 }}

                animate={{ opacity: 1, x: 0 }}

                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}

                whileHover={{
                  scale: 1.02,
                }}

                className="bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-gray-400/20 dark:hover:shadow-cyan-500/10 transition-all duration-500"
              >

                {/* Top */}

                <div className="flex justify-between items-center mb-4">

                  <h2 className="text-2xl font-bold">

                    {skill.name}

                  </h2>

                  <span className="text-gray-700 dark:text-gray-400 font-semibold">

                    {skill.level}

                  </span>

                </div>

                {/* Progress Bar */}

                <div className="w-full h-4 bg-gray-300 dark:bg-gray-800 rounded-full overflow-hidden">

                  <motion.div

                    initial={{ width: 0 }}

                    animate={{ width: skill.level }}

                    transition={{
                      duration: 1.2,
                      delay: index * 0.2,
                    }}

                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                  >

                  </motion.div>

                </div>

              </motion.div>

            ))
          }

        </div>

      </div>

    </section>
  )
}

export default Skills