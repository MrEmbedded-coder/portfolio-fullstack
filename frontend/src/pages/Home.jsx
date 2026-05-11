import { motion } from "framer-motion"



import profile from "../assets/myphoto.jpeg"

function Home() {
  return (

    <section className="relative bg-white text-black dark:bg-black dark:text-white min-h-screen flex items-center justify-center pt-24 px-6 overflow-hidden transition-colors duration-500">

      {/* Glow Effects */}

      <div className="absolute top-20 left-10 w-72 h-72 bg-gray-300 dark:bg-gray-700 rounded-full blur-3xl opacity-20"></div>

      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-400 dark:bg-gray-500 rounded-full blur-3xl opacity-10"></div>

      <motion.div
        className="text-center max-w-3xl"

        initial={{ opacity: 0, y: 50 }}

        animate={{ opacity: 1, y: 0 }}

        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        whileInView={{
          y: [0, -10, 0],
        }}
      >

        <p className="text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-4">
          Welcome to my portfolio
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">

          Hi, I'm

          <span className="bg-gradient-to-r from-black via-gray-600 to-gray-400 dark:from-white dark:via-gray-400 dark:to-gray-600 bg-clip-text text-transparent">
            {" "}Adoum Moussa Ramat
          </span>

        </h1>

        <p className="text-gray-700 dark:text-gray-500 text-lg md:text-xl mb-8">
          Frontend Developer building modern and responsive web experiences, with a growing interest in 
          IoT and embedded systems.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <button className="bg-black text-white dark:bg-white dark:text-black px-8 py-4 rounded-xl font-semibold hover:opacity-80 transition">

            View Projects

          </button>

          <button className="border border-gray-400 dark:border-gray-600 px-8 py-4 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-900 transition">

            Contact Me

          </button>

        </div>

      </motion.div>

      {/* Profile Image */}

      <motion.div

        initial={{ opacity: 0, scale: 0.8 }}

        animate={{ opacity: 1, scale: 1 }}

        transition={{ duration: 1 }}

        className="mt-16 flex justify-center"
      >

        <div className="relative group">

          {/* Glow Effect */}

          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition duration-500"></div>

          {/* Image Border */}

          <div className="relative p-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full">

            <img
              src={profile}

              alt="Adoum Moussa"

              className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-white dark:border-black shadow-2xl"
            />

          </div>

        </div>

      </motion.div>

 
      

    </section>
  )
}

export default Home