import React from "react";

const ActivityMetrics = () => {
  // Calculate progress percentages
  const stepsProgress = (3620 / 6000) * 100;
  const activeTimeProgress = (56 / 60) * 100;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-6 text-gray-700">
        Activity Metrics
      </h3>

      {/* Steps Section */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Steps</span>
          <span className="text-sm text-gray-500">3620 /6000 steps</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 rounded-full h-2 transition-all duration-300"
            style={{ width: `${stepsProgress}%` }}
          ></div>
        </div>
      </div>

      {/* Active Time Section */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Active Time</span>
          <span className="text-sm text-gray-500">56 /60 mins</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 rounded-full h-2 transition-all duration-300"
            style={{ width: `${activeTimeProgress}%` }}
          ></div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="p-3">
          <div className="text-xl font-semibold text-gray-800">1712</div>
          <div className="text-sm text-gray-500 mt-1">Kcal</div>
        </div>
        <div className="p-3">
          <div className="text-xl font-semibold text-gray-800">1.23</div>
          <div className="text-sm text-gray-500 mt-1">km</div>
        </div>
        <div className="p-3">
          <div className="text-xl font-semibold text-gray-800">
            6 hrs 30 mins
          </div>
          <div className="text-sm text-gray-500 mt-1">Duration</div>
        </div>
      </div>
    </div>
  );
};

export default ActivityMetrics;
