// Import required modules
const express = require('express');
const mongoose = require('mongoose');

// Initialize Express app
const app = express();

// Define port
const port = 4000;

// Import course data
const coursesData = require('./courses.json');

// Import Course model
const Course = require("./model/coursesModel");

// Middleware to retrieve courses sorted alphabetically
app.get('/api/courses', async (req, res) => {
  try {
    // Retrieve all courses and sort alphabetically
    // Send response
  } catch (error) {
    // Handle errors
  }
});

// Middleware to retrieve all BSIS courses
app.get('/api/courses/bsis', (req, res) => {
  try {
    // Retrieve BSIS courses and sort alphabetically
    // Send response
  } catch (error) {
    // Handle errors
  }
});

// Middleware to retrieve all BSIT courses
app.get('/api/courses/bsit', (req, res) => {
  try {
    // Retrieve BSIT courses and sort alphabetically
    // Send response
  } catch (error) {
    // Handle errors
  }
});

// Middleware to retrieve all backend courses alphabetically
app.get('/api/backend-courses', async (req, res) => {
  try {
    // Retrieve backend courses and sort alphabetically
    // Send response
  } catch (error) {
    // Handle errors
  }
});

// Function to check if a course belongs to a backend course
function isBackendCourse(course) {
  // Implementation remains unchanged
}

// Function to extract course details
const extractCourseDetails = () => {
  // Implementation remains unchanged
};

// Middleware to retrieve course details
app.get('/api/course-details', (req, res) => {
  try {
    // Retrieve course details
    // Send response
  } catch (error) {
    // Handle errors
  }
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mongo-test')
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.error('Connection failed...', err));

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
