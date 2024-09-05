const express = require('express');
const { studentLogin, adminLogin } = require('../controllers/authController');
const router = express.Router();

// Login routes for students and admins
router.post('/student-login', studentLogin);
router.post('/admin-login', adminLogin);

module.exports = router;
