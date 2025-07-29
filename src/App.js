import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './pages/Dashboard';
import CourseDetail from './pages/CourseDetail';
import Courses from './pages/Courses';
import Calendar from './pages/Calendar';
import Inbox from './pages/Inbox';
import Help from './pages/Help';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />

      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-6 bg-gray-100">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/help" element={<Help />} />
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="*" element={<div className="p-6 text-red-500">404 Not Found</div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
