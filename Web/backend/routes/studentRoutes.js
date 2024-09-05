const express = require('express');
const { getStudentCourses } = require('../controllers/studentController');
const verifyToken = require('../middleware/authMiddleware'); // Import the middleware
const router = express.Router();

// Protect this route with JWT verification middleware
router.get('/:studentId/courses', getStudentCourses);

module.exports = router;
