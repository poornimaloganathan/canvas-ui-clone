import React from 'react';
import Header from '../components/Header';
import courses from '../data/courses.json';
import CourseCard from '../components/CourseCard';
import TodoList from '../components/TodoList';

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      <div className="flex flex-col lg:flex-row gap-4 p-4">
        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>

        {/* To-Do List */}
        <div className="w-full lg:w-1/4">
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
