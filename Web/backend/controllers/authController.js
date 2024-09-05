const Student = require('../models/studentModel');
const Admin = require('../models/adminModel');
const jwt = require('jsonwebtoken');

// Login for Students
exports.studentLogin = async (req, res) => {
    const { studentId, password } = req.body;
  
    console.log("Received studentId:", studentId);
    console.log("Received password:", password);
  
    try {
      const student = await Student.findOne({ studentId });
  
      if (!student) {
        console.log('Student not found');
        return res.status(404).json({ message: 'Student not found' });
      }
  
      console.log('Found student:', student);
      console.log('Stored password:', student.password);
  
      if (student.password !== password) {
        console.log('Password mismatch');
        return res.status(401).json({ message: 'Incorrect password' });
      }
  
      const token = jwt.sign({ id: student._id, role: 'student' }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return res.status(200).json({ token, studentId: student.studentId });
    } catch (error) {
      console.error('Server error:', error);
      return res.status(500).json({ message: 'Server error' });
    }
  };
  
  // Login for Admins
  exports.adminLogin = async (req, res) => {
    const { adminId, password } = req.body;
  
    console.log("Received adminId:", adminId);
    console.log("Received password:", password);
  
    try {
      const admin = await Admin.findOne({ adminId });
  
      if (!admin) {
        console.log('Admin not found');
        return res.status(404).json({ message: 'Admin not found' });
      }
  
      console.log('Found admin:', admin);
      console.log('Stored password:', admin.password);
  
      if (admin.password !== password) {
        console.log('Password mismatch');
        return res.status(401).json({ message: 'Incorrect password' });
      }
  
      const token = jwt.sign({ id: admin._id, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return res.status(200).json({ token, adminId: admin.adminId });
    } catch (error) {
      console.error('Server error:', error);
      return res.status(500).json({ message: 'Server error' });
    }
};
  
