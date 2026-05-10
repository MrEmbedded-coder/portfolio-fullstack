const express = require("express")
const cors = require("cors")
const nodemailer = require("nodemailer")
require("dotenv").config()


const app = express()

// Middlewares

app.use(cors())

app.use(express.json())


//Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

// Route test

app.get("/", (req, res) => {

  res.send("Backend server is running 🚀")

})

//Contact route
app.post("/contact", async (req, res) => {

  const { name, email, message } = req.body

  try {

    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      subject: `New message from ${name}`,

      html: `

        <h2>New Contact Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong> ${message}</p>

      `

    })

    res.status(200).json({

      success: true,

      message: "Email sent successfully"

    })

  }

  catch (error) {

    console.log(error)

    res.status(500).json({

      success: false,

      message: "Failed to send email"

    })

  }

})

// Port

const PORT = 5000

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`)

})