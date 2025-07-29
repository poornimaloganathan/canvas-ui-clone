import React from 'react';
import { useNavigate } from 'react-router-dom';

const colorVariants = [
  'bg-blue-100 text-blue-800',
  'bg-[#B2DFDB] text-gray-800',
  'bg-indigo-100 text-indigo-800',
  'bg-pink-100 text-pink-800',
  'bg-[#FAEBD7] text-black-800',
  'bg-purple-100 text-purple-800',
];

const progressBarColors = [
  'bg-blue-500',
  'bg-[#009688]',
  'bg-indigo-500',
  'bg-pink-500',
  'bg-[#D2691E]',
  'bg-purple-500',
];


const CourseCard = ({ course, index }) => {
  const navigate = useNavigate();
  const bgColor = colorVariants[index % colorVariants.length];
  const barColor = progressBarColors[index % progressBarColors.length];

  return (
    <div className={`rounded-2xl shadow-sm p-4 ${bgColor}`}>
      <h2 className="text-lg font-semibold mb-1">{course.title}</h2>
      <p className="text-sm mb-3">{course.instructor}</p>
      <div className="h-2 bg-gray-300 rounded-full mb-2 overflow-hidden">
        <div
          className={`h-2 ${barColor} rounded-full`}
          style={{ width: `${course.progress}%` }}
        />
      </div>
      <div className="flex justify-between items-center text-sm font-medium">
        <button
          className="underline"
          onClick={() => navigate(`/course/${course.id}`)}
        >
          Go to course
        </button>
        <span>{course.progress}%</span>
      </div>
    </div>
  );
};

export default CourseCard;
