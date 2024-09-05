import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logop from '../assets/logop.png';
import homeImage from '../assets/home.png';

const HomePage: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student'); // Default role to 'student'
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const loginEndpoint = role === 'student' 
        ? 'http://localhost:5000/api/auth/student-login'
        : 'http://localhost:5000/api/auth/admin-login';

      const response = await axios.post(loginEndpoint, {
        studentId: role === 'student' ? userId : undefined,
        adminId: role === 'admin' ? userId : undefined,
        password
      });

      // Navigate to appropriate page depending on the role
      if (role === 'student') {
        navigate('/courses', { state: { studentId: response.data.studentId } });
      } else {
        navigate('/admin', { state: { adminId: response.data.adminId } });
      }
    } catch (error) {
      console.error('Login error', error);
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <nav className="w-full flex justify-between items-center p-6 bg-white shadow-md">
        <div className="flex items-center">
          <img src={logop} alt="Programming Pathshala Logo" className="h-10 w-8 mr-2" />
          <span className="text-xl font-bold" style={{color: '#444BAB'}}>Programming Pathshala</span>
        </div>
        <div className="space-x-6 mr-6">
          <a href="#" className="text-gray-600 hover:text-gray-800">Explore Courses</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Success Stories</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Hire From Us</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Campus Program</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Blogs</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Events</a>
        </div>
      </nav>

      <div className="flex flex-col md:flex-row items-center justify-center md:mt-24 md:px-24">
        <div className="flex flex-col items-center ml-auto pr-20 md:items-start mb-8 md:mb-0 md:mr-12">
          <img
            src={homeImage}
            alt="Student with laptop"
            className="w-180 h-auto mb-4"
          />
        </div>

        {/* Login Form */}
        <div style={{ backgroundColor: '#E4E5F3' }} className="rounded-lg shadow-md p-8 w-full md:w-96">
          <div className="flex justify-between mb-8">
            <button className="text-gray-800 border-b-2 border-purple-500 pb-2">LOG IN</button>
            <button className="text-gray-600 hover:text-gray-800">REGISTER</button>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">User ID</label>
              <input
                type="text"
                placeholder="Enter your User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              >
                <option value="student">Student</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <button
              type="submit"
              className="text-white bg-purple-700 font-bold py-2 px-4 rounded-full w-full"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
