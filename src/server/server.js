const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');  // Importing CORS middleware

// Initialize Express app
const app = express();

// Enable CORS for your frontend (e.g., localhost:3000)
app.use(cors({
  origin: 'http://localhost:3000',  // Your frontend's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));

// Middleware to parse request body
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/contact-form', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Define the contact schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  services: String,
  budget: String,
  message: String,
});

// Create the model
const Contact = mongoose.model('Contact', contactSchema);

// Define the POST route for saving contact form data
app.post('/api/contact', async (req, res) => {
  const { name, email, services, budget, message } = req.body;

  if (!name || !email || !services || !budget || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newContact = new Contact({
      name,
      email,
      services,
      budget,
      message,
    });

    await newContact.save(); // Save the form data to MongoDB

    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ message: "Error saving data. Please try again later." });
  }
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
