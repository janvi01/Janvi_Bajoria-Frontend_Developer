import React from "react";

function SearchBar({ searchCriteria, onInputChange }) {
  // Check if searchCriteria is available
  if (!searchCriteria) {
    return null;
  }

  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Status"
        value={searchCriteria.status || ""}
        onChange={(e) => onInputChange("status", e.target.value)}
      />
      <input
        type="text"
        placeholder="Original Launch"
        value={searchCriteria.originalLaunch || ""}
        onChange={(e) => onInputChange("originalLaunch", e.target.value)}
      />
      <input
        type="text"
        placeholder="Type"
        value={searchCriteria.type || ""}
        onChange={(e) => onInputChange("type", e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
