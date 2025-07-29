import React from "react";
import { FiSearch, FiBell, FiMessageSquare } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

const TopBar = () => {
    return (
        <div className="w-full bg-white shadow border-b border-gray-200 px-6 py-3 flex items-center justify-between">
            {/* Left: Logo */}
            <div className="flex items-center space-x-2">
                <FaGraduationCap className="text-[#008B8B] text-2xl" />
                <h1 className="text-xl font-bold text-[#008B8B] tracking-wide">LMS Course</h1>
            </div>

            {/* Center: Search bar */}
            <div className="flex-1 max-w-xl mx-6">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search for anything"
                        className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#008B8B]"
                    />
                    <FiSearch className="absolute top-2.5 left-3 text-gray-500" />
                </div>
            </div>

            {/* Right: Icons */}
            <div className="flex items-center space-x-5">
                <FiMessageSquare className="text-gray-600 text-xl hover:text-[#008B8B] cursor-pointer" />
                <FiBell className="text-gray-600 text-xl hover:text-[#008B8B] cursor-pointer" />
                <img
                    src="https://i.pravatar.cc/40"
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-[#008B8B] cursor-pointer"
                />
            </div>
        </div>
    );
};

export default TopBar;
