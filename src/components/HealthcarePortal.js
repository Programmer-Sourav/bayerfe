import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons

const HealthcarePortal = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu

  const healthArticles = [
    {
      title: "COVID-19 Updates",
      content:
        "Stay informed about the latest COVID-19 guidelines and vaccination information.",
      link: "#",
    },
    {
      title: "Seasonal Flu Prevention",
      content:
        "Learn about steps you can take to prevent the seasonal flu and when to get vaccinated",
      link: "#",
    },
    {
      title: "Mental Health Awareness",
      content:
        "Explore resources and support options for maintaining good mental health",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <h1 className="text-2xl font-bold text-blue-600 mb-4 md:mb-0">
              Healthcare Portal
            </h1>

            {/* Hamburger Menu Icon for Mobile */}
            <div
              className="md:hidden flex items-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <FaTimes className="text-2xl text-gray-600" />
              ) : (
                <FaBars className="text-2xl text-gray-600" />
              )}
            </div>

            {/* Menu for Desktop and Mobile */}
            <div
              className={`flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 mt-4 md:mt-0 ${
                isMenuOpen ? "block" : "hidden"
              } md:block`} // Mobile and desktop logic
            >
              {["Home", "Health Topics", "Services", "Contact", "Login"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)} // Close the menu on click for mobile
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Latest Health Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthArticles.map((article, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-4">{article.content}</p>
              <a
                href={article.link}
                className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
              >
                Read More →
              </a>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HealthcarePortal;
