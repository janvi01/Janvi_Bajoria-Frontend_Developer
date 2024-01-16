import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

function DataGridCapsules({ capsulesData }) {
  const [filteredCapsules, setFilteredCapsules] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({
    status: "",
    originalLaunch: "",
    type: "",
  });

  useEffect(() => {
    // Initially, display and set filteredCapsules to capsulesData before user search
    setFilteredCapsules(capsulesData);
  }, [capsulesData]);

  useEffect(() => {
    // Update filteredCapsules when search criteria change
    performSearch();
  }, [searchCriteria]);

  const handleInputChange = (field, value) => {
    // Update the search criteria immediately on change of value
    setSearchCriteria((prevCriteria) => ({
      ...prevCriteria,
      [field]: value,
    }));
  };

  const performSearch = () => {
    const { status, originalLaunch, type } = searchCriteria;

    // Check if capsulesData is available
    if (!capsulesData) {
      setFilteredCapsules([]);
      return;
    }

    const filtered = capsulesData.filter((capsule) => {
      const statusMatch =
        capsule.status &&
        capsule.status.toLowerCase().includes(status.toLowerCase());

      const originalLaunchMatch =
        capsule.original_launch &&
        capsule.original_launch.includes(originalLaunch);

      const typeMatch =
        capsule.type && capsule.type.toLowerCase().includes(type.toLowerCase());

      return statusMatch && originalLaunchMatch && typeMatch;
    });

    setFilteredCapsules(filtered);
  };

  return (
    <div>
      <h1 className="font-bold text-4xl leading-7 text-center mt-16 text-indigo-600">
        SpaceX Capsules
      </h1>
      <p className="m-8 text-lg text-center leading-8 text-gray-600">
        Search SpaceX capsules by entering specific capsule status, original
        launch and type data below.
      </p>
      <SearchBar
        searchCriteria={searchCriteria}
        onInputChange={handleInputChange}
      />

      <div className="grid grid-cols-3 gap-8 place-items-center m-8">
        {filteredCapsules.map((capsule) => (
          <div
            key={capsule.capsule_serial}
            className="block w-full h-full p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
              {capsule.capsule_serial}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {capsule.details}
            </p>
            <p className="font-normal text-xl text-white">
              <i>Capsule Type</i> : {capsule.type}
            </p>
            <p className="font-normal text-xl text-white">
              <i>Capsule Status</i> : {capsule.status}
            </p>
            <p className="font-normal text-xl text-white">
              <i>Capsule launch</i> : {capsule.original_launch}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataGridCapsules;
