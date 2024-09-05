import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import CourseList from '../components/CourseList';

const CoursePage: React.FC = () => {
  return (
    <div>
        <NavBar/>
        <div className='flex flex-row'>
            <SideBar/>
            <CourseList/>
        </div>
    </div>
  );
};

export default CoursePage;
