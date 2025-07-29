import React, { useEffect, useState } from 'react';
import CourseList from '../components/CourseList';
import coursesData from '../data/courses.json';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        setCourses(coursesData);
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">All Courses</h2>
            <CourseList courses={courses} />
        </div>
    );
};

export default Courses;
