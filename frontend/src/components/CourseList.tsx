import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

interface StudentData {
  studentId: string;
  studentName: string;
  courseId: string;
  courseName: string;
  courseStatus: 'completed' | 'in-progress';
}

const CourseList: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState<StudentData | null>(null);

  // Get studentId from location state
  const studentId = location.state?.studentId;

  useEffect(() => {
    if (!studentId) {
      // If no studentId, redirect back to login
      alert('No studentId found. Redirecting to login...');
      navigate('/');
      return;
    }

    const fetchStudentCourse = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming you're storing the token in localStorage
        const response = await axios.get(
          `http://localhost:5000/api/students/${studentId}/courses`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Add the token here
            },
          }
        );
        setStudentData(response.data);
      } catch (error) {
        console.error('Error fetching student course', error);
      }
    };
    

    fetchStudentCourse();
  }, [studentId, navigate]);

  if (!studentData) return <p>Loading...</p>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Hi {studentData.studentName}!</h1>
      <p>Here are the courses you’re enrolled in...</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        <div
          className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <h2 className="text-xl font-semibold mb-2" style={{ color: '#444BAB' }}>
            {studentData.courseName}
          </h2>
          <p
            className={`text-lg mb-4 ${
              studentData.courseStatus === 'completed' ? 'text-green-500' : 'text-red-500'
            }`}
          >
            Status: {studentData.courseStatus === 'completed' ? 'Completed' : 'Ongoing'}
          </p>
          <button
            className={`${
              studentData.courseStatus === 'completed' ? 'bg-purple-700 text-white' : 'bg-gray-300 text-gray-600'
            } px-4 py-2 rounded-full w-full font-bold focus:outline-none ${
              studentData.courseStatus === 'completed' ? 'hover:bg-purple-800' : 'cursor-not-allowed'
            }`}
            disabled={studentData.courseStatus !== 'completed'}
          >
            Get Certificate
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
