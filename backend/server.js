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

  try {

    const { name, email, message } = req.body

    console.log("Received data:", req.body)

    const mailOptions = {

      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      subject: `Portfolio Message from ${name}`,

      text: `
Name: ${name}

Email: ${email}

Message:
${message}
      `,
    }

    console.log("Sending email...")

    const info = await transporter.sendMail(mailOptions)

    console.log("Email sent:", info.response)

    res.status(200).json({
      message: "Message sent successfully",
    })

  } catch (error) {

    console.log("EMAIL ERROR:", error)

    res.status(500).json({
      message: "Failed to send email",
    })

  }

})


    

// Port

const PORT = 5000

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`)

})