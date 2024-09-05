import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import {Route, BrowserRouter, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/courses" element={<CoursePage/>}/>
          </Routes>
        </BrowserRouter>        
    </div>
  );
}

export default App;
