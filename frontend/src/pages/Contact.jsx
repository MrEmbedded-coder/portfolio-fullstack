import { motion } from "framer-motion"
import { useState } from "react"

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })



  const [loading, setLoading] = useState(false)
  const [succes, setSuccess] = useState(false)
  const [error, setError] = useState("")
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    setError("")
    setSuccess(false)

    try {
      const response = await fetch(
        "https://portfolio-fullstack-ge9r.onrender.com/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      }
     )
     
     const data = await response.json()
     console.log(data)
     setSuccess(true)
     setFormData({
      name: "",
      email: "",
      message: ""
     })
    }

    catch(error){
      setError(error.message)
    }
    finally{
      setLoading(false)
    }
  }
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

            Contact

          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">

            Let's Work Together

          </h1>

          <p className="text-gray-700 dark:text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">

            Have a project idea, collaboration or question?
            Feel free to contact me anytime.

          </p>

        </motion.div>

        {/* Content */}

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side */}

          <motion.div

            initial={{ opacity: 0, x: -50 }}

            animate={{ opacity: 1, x: 0 }}

            transition={{ duration: 1 }}

            className="bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 rounded-3xl p-10 shadow-lg"
          >

            <h2 className="text-3xl font-bold mb-8">

              Contact Information

            </h2>

            <div className="space-y-6">

              <div>

                <p className="text-gray-600 dark:text-gray-500 mb-2">

                  Email

                </p>

                <p className="text-lg font-semibold">

                  adoum@example.com

                </p>

              </div>

              <div>

                <p className="text-gray-600 dark:text-gray-500 mb-2">

                  Location

                </p>

                <p className="text-lg font-semibold">

                  N'Djamena, Chad

                </p>

              </div>

              <div>

                <p className="text-gray-600 dark:text-gray-500 mb-2">

                  Availability

                </p>

                <p className="text-lg font-semibold">

                  Open for freelance & collaborations

                </p>

              </div>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.form
            onSubmit={handleSubmit}

            

            initial={{ opacity: 0, x: 50 }}

            animate={{ opacity: 1, x: 0 }}

            transition={{ duration: 1 }}

            className="bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 rounded-3xl p-10 shadow-lg space-y-6"
          >

            {/* Name */}

            <div>

              <label className="block mb-2 text-gray-700 dark:text-gray-400">

                Your Name

              </label>

              <input
                type="text"

                name = "name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"

                className="w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 transition"
              />

            </div>

            {/* Email */}

            <div>

              <label className="block mb-2 text-gray-700 dark:text-gray-400">

                Your Email

              </label>

              <input
                type="email"

                name="email"
                value={formData.email}
                onChange={handleChange}

                placeholder="Enter your email"

                className="w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 transition"
              />

            </div>

            {/* Message */}

            <div>

              <label className="block mb-2 text-gray-700 dark:text-gray-400">

                Message

              </label>

              <textarea

                rows="6"

                name="message"
                value={formData.message}
                onChange={handleChange}

                placeholder="Write your message"

                className="w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 transition resize-none"
              >

              </textarea>

            </div>

            {/* Button */}

            <button

              type="submit"

              className="w-full bg-black text-white dark:bg-white dark:text-black py-4 rounded-xl font-semibold hover:opacity-80 transition"
            >

              {loading ? "Sending..." : "Send Message"}

            </button>

            {
              succes && (
                <p className="text-green-500 text-center mt-4">
                  Message sent successfully
                </p>
              )
            }

            {
              error && (
                <p className="text-red-500 text-center mt-4">
                  {error}
                </p>
              )
            }

          </motion.form>

        </div>

      </div>

    </section>
  )
}

export default Contact