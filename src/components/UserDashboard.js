import React, { useState } from "react";
import ActivityMetrics from "./ActivityMatrix";

const UserDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar toggle state

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-white p-5 shadow-md transition-width duration-300 ease-in-out flex flex-col`}
      >
        {/* Sidebar Toggle Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-gray-500 focus:outline-none mb-6"
        >
          {isSidebarOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Sidebar Header */}
        {isSidebarOpen && (
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Bayer Health
          </h2>
        )}

        {/* Sidebar Menu */}
        <div className="space-y-4">
          <a
            href="#"
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 mr-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v14m7-7H5"
              />
            </svg>
            {isSidebarOpen && "Dashboard"}
          </a>
          <a
            href="#"
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 mr-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4h16M4 8h16M4 12h16M4 16h16M4 20h16"
              />
            </svg>
            {isSidebarOpen && "My Profile"}
          </a>
          <a
            href="#"
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 mr-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            {isSidebarOpen && "Wellness Goals"}
          </a>
          <a
            href="#"
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 mr-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
            {isSidebarOpen && "Messages"}
          </a>
          <a
            href="#"
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 mr-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.403 4.207a1 1 0 0 1-.885.608l-4.487-.512L12 21l-1.225-4.393-4.487.512a1 1 0 0 1-.885-.608L4 17h5m6-2V3a2 2 0 1 0-4 0v12a2 2 0 1 0 4 0z"
              />
            </svg>
            {isSidebarOpen && "Logout"}
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">
            Welcome, David
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <h3 className="text-left text-lg font-semibold mb-6 text-gray-700">
            Wellness Goals
          </h3>
        </div>

        <ActivityMetrics />

        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
          <h3 className="text-left text-lg font-semibold mb-3 text-gray-700">
            Preventive Care Reminders
          </h3>

          <ul className="text-left">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates,
            </li>
          </ul>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
          <h3 className="text-left text-lg font-semibold mb-3 text-gray-700">
            Health Tip of the Day
          </h3>

          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
