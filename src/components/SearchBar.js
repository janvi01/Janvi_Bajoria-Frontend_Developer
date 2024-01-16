import React from "react";

function SearchBar({ searchCriteria, onInputChange }) {
  // Check if searchCriteria is available
  if (!searchCriteria) {
    return null;
  }

  return (
    <div className="mb-8 w-full flex justify-center gap-4">
      <input
        type="text"
        placeholder="Status"
        className="block p-2 w-1/4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
        value={searchCriteria.status || ""}
        onChange={(e) => onInputChange("status", e.target.value)}
      />
      <input
        type="text"
        placeholder="Original Launch"
        className="block p-2 w-1/4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
        value={searchCriteria.originalLaunch || ""}
        onChange={(e) => onInputChange("originalLaunch", e.target.value)}
      />
      <input
        type="text"
        placeholder="Type"
        className="block p-2 w-1/4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
        value={searchCriteria.type || ""}
        onChange={(e) => onInputChange("type", e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
