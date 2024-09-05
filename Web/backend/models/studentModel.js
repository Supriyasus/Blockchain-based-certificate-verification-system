const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentId: { type: String, required: true, unique: true },
  studentName: { type: String, required: true },
  password: { type: String, required: true },
  courseId: { type: String, required: true },
  courseName: { type: String, required: true },
  courseStatus: { type: String, required: true },
}, { collection: 'students' });

module.exports = mongoose.model('Student', studentSchema);
