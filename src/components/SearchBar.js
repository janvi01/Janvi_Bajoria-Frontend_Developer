import React from "react";

function SearchBar({ searchCriteria, onInputChange, onClearFilter }) {
  // Check if searchCriteria is available
  if (!searchCriteria) {
    return null;
  }

  return (
    <div className="mb-8 w-full flex flex-wrap justify-center gap-4">
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
        <input
          type="text"
          placeholder="Status"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
          value={searchCriteria.status || ""}
          onChange={(e) => onInputChange("status", e.target.value)}
        />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
        <input
          type="text"
          placeholder="Original Launch"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
          value={searchCriteria.originalLaunch || ""}
          onChange={(e) => onInputChange("originalLaunch", e.target.value)}
        />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
        <input
          type="text"
          placeholder="Type"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
          value={searchCriteria.type || ""}
          onChange={(e) => onInputChange("type", e.target.value)}
        />
      </div>
      {Object.values(searchCriteria).some((value) => value) && (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
          <button
            className="w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            onClick={onClearFilter}
          >
            Clear Filter
          </button>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
