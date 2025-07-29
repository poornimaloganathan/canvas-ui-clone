// src/pages/CourseDetail.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import courses from "../data/courses.json";

const tabs = ["overview", "assignments", "grades"];

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id.toString() === id);
  const [activeTab, setActiveTab] = useState("overview");

  if (!course) return <div className="p-4">Course not found.</div>;

  return (
    <div className="flex min-h-screen bg-gray-50">

      <main className="flex-1 p-6">
        <Link to="/courses" className="text-sm text-blue-500 hover:underline block mb-4">
          ← Back to Courses
        </Link>

        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-1">
          Dashboard &gt; Course &gt; Module
        </div>

        {/* Title & Instructor */}
        <h1 className="text-2xl font-semibold">{course.title}</h1>
        <p className="text-gray-600 mb-4">Dr. {course.instructor}</p>

        {/* Tabs */}
        <div className="flex border-b space-x-4 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`pb-2 capitalize ${activeTab === tab
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-black"
                }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === "overview" && (
          <div>
            <h2 className="text-lg font-medium mb-2">Course Information</h2>
            <p>This is a course about {course.subject || "web development"}.</p>
          </div>
        )}

        {activeTab === "assignments" && (
          <div>
            <h2 className="text-lg font-medium mb-2">Assignments</h2>
            <table className="w-full bg-white shadow rounded overflow-hidden">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="p-2">Assignment</th>
                  <th className="p-2">Due Date</th>
                  <th className="p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {course.assignments?.map((a, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="p-2">{a.name}</td>
                    <td className="p-2">{a.due}</td>
                    <td className="p-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${a.status === "Open"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-gray-200 text-gray-600"
                          }`}
                      >
                        {a.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "grades" && (
          <div>
            <h2 className="text-lg font-medium mb-2">Grades</h2>
            <table className="w-full bg-white shadow rounded overflow-hidden">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="p-2">Assignment</th>
                  <th className="p-2">Score</th>
                </tr>
              </thead>
              <tbody>
                {course.grades?.map((g, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="p-2">{g.assignment}</td>
                    <td className="p-2">{g.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
};

export default CourseDetail;
