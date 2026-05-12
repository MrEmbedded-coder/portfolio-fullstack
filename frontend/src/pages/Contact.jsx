import { useState } from "react"
import { motion } from "framer-motion"

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  // gérer changement des champs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // envoyer formulaire
  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setSuccess("")
    setError("")

    try {

      const response = await fetch(
        "https://portfolio-fullstack-ge9r.onrender.com/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      )

      const data = await response.json()

      if (response.ok) {

        setSuccess("Message sent successfully!")

        setFormData({
          name: "",
          email: "",
          message: "",
        })

      } else {

        setError(data.message || "Something went wrong")

      }

    } catch (err) {

      setError("Server connection error")

    }

    setLoading(false)
  }

  return (

    <section className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 py-24 transition-all duration-500">

      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <div className="text-center mb-20">

          <h1 className="text-5xl font-bold mb-6">
            Contact Me
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Let’s work together on your next project.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* left side */}
          <div className="bg-gray-100 dark:bg-zinc-900 p-8 rounded-3xl border border-gray-200 dark:border-zinc-800">

            <h2 className="text-3xl font-bold mb-8">
              Contact Information
            </h2>

            <div className="space-y-8">

              <div>
                <p className="text-gray-500 mb-2">Email</p>
                <h3 className="text-xl font-semibold">
                  adoum@example.com
                </h3>
              </div>

              <div>
                <p className="text-gray-500 mb-2">Location</p>
                <h3 className="text-xl font-semibold">
                  N'Djamena, Chad
                </h3>
              </div>

              <div>
                <p className="text-gray-500 mb-2">Availability</p>
                <h3 className="text-xl font-semibold">
                  Open for freelance & collaborations
                </h3>
              </div>

            </div>

          </div>

          {/* right side */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-100 dark:bg-zinc-900 p-8 rounded-3xl border border-gray-200 dark:border-zinc-800"
          >

            <div className="mb-6">

              <label className="block mb-2 font-medium">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl bg-white dark:bg-black border border-gray-300 dark:border-zinc-700 outline-none"
              />

            </div>

            <div className="mb-6">

              <label className="block mb-2 font-medium">
                Your Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl bg-white dark:bg-black border border-gray-300 dark:border-zinc-700 outline-none"
              />

            </div>

            <div className="mb-6">

              <label className="block mb-2 font-medium">
                Message
              </label>

              <textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl bg-white dark:bg-black border border-gray-300 dark:border-zinc-700 outline-none resize-none"
              ></textarea>

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-xl font-semibold hover:opacity-80 transition"
            >

              {loading ? "Sending..." : "Send Message"}

            </button>

            {success && (
              <p className="text-green-500 mt-6 text-center">
                {success}
              </p>
            )}

            {error && (
              <p className="text-red-500 mt-6 text-center">
                {error}
              </p>
            )}

          </form>

        </div>

      </motion.div>

    </section>

  )
}

export default Contact