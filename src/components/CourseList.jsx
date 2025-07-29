// src/components/CourseList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays } from 'lucide-react';

const CourseList = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <div key={course.id} className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">{course.title}</h3>
          <p className="text-gray-500 mb-2">{course.instructor}</p>

          {/* Duration Line */}
          <div className="flex items-center text-sm text-gray-600 mb-4">
            <CalendarDays className="w-4 h-4 mr-1" />
            <span>
              {course.duration || "8 Weeks"} (Starts: {course.startDate || "18-08-2025"})
            </span>
          </div>

          {/* View Course Link */}
          <Link
            to={`/course/${course.id}`}
            className="text-blue-500 hover:underline text-sm"
          >
            View Course
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
