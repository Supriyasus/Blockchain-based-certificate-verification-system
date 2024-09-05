const Student = require('../models/studentModel');

// Controller to get student and their courses by studentId
exports.getStudentCourses = async (req, res) => {
  const { studentId } = req.params;

  try {
    const student = await Student.findOne({ studentId });
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    // Return student details and courses
    res.status(200).json({
      studentName: student.studentName,
      courseId: student.courseId,
      courseName: student.courseName,
      courseStatus: student.courseStatus,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
