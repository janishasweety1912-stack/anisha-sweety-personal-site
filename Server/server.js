
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

require("dotenv").config();

const Contact = require("./models/Contact");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({origin: process.env.CLIENT_URL,})
);
app.use(express.json());

// Contact API rate limiter
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  message: {
    success: false,
    message: "Too many messages sent. Please try again after 15 minutes.",
  },
});

// Home route
app.get("/", (req, res) => {
  res.send("Portfolio Backend Server is Running!");
});

// Portfolio API
app.get("/api/portfolio", (req, res) => {
  res.json({
    name: "Anisha Sweety J",
    role: "Full Stack Developer",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB"
    ]
  });
});

// Contact API
app.post("/api/contact", contactLimiter, async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Check required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required."
      });
    }

    // Check field types
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string"
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields must contain valid text."
      });
    }

    // Remove unnecessary spaces
    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanSubject = subject.trim();
    const cleanMessage = message.trim();

    // Check empty values after trimming
    if (!cleanName || !cleanEmail || !cleanSubject || !cleanMessage) {
      return res.status(400).json({
        success: false,
        message: "Fields cannot contain only spaces."
      });
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address."
      });
    }

    // Limit field lengths
    if (
      cleanName.length > 100 ||
      cleanEmail.length > 150 ||
      cleanSubject.length > 150 ||
      cleanMessage.length > 2000
    ) {
      return res.status(400).json({
        success: false,
        message: "One or more fields exceed the allowed length."
      });
    }

    const newContact = new Contact({
      name: cleanName,
      email: cleanEmail,
      subject: cleanSubject,
      message: cleanMessage
    });

    await newContact.save();

    res.status(201).json({
      success: true,
      message: "Your message has been sent successfully!"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
});

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully!");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB Connection Failed:", error.message);
  });
