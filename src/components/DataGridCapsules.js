import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import CapsulePopup from "./CapsulePopup";

function DataGridCapsules({ capsulesData }) {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredCapsules, setFilteredCapsules] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({
    status: "",
    originalLaunch: "",
    type: "",
  });
  const [selectedCapsule, setSelectedCapsule] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Initially, set filteredCapsules to capsulesData to show data when the user loads the page initially
    setFilteredCapsules(capsulesData);
  }, [capsulesData]);

  useEffect(() => {
    // Update filteredCapsules when search criteria change
    performSearch();
    // eslint-disable-next-line
  }, [searchCriteria]);

  const handleInputChange = (field, value) => {
    // Update the search criteria immediately on input value change
    setSearchCriteria((prevCriteria) => ({
      ...prevCriteria,
      [field]: value,
    }));
    // Reset to the first page when the search criteria change
    setCurrentPage(1);
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

  const handleClearFilter = () => {
    // Clear the search criteria and reset to the first page
    setSearchCriteria({
      status: "",
      originalLaunch: "",
      type: "",
    });
    setCurrentPage(1);
  };

  // Calculate indices for pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredCapsules.slice(startIndex, endIndex);

  const handleCardClick = (capsule) => {
    // Set the selected capsule and open the popup
    setSelectedCapsule(capsule);
    setIsPopupOpen(true);
  };

  if (!capsulesData) {
    return <div>Loading capsule...</div>;
  }

  return (
    <section id="capsules">
      <div className="container mx-auto p-4 sm:p-6 md:p-8">
        <h1 className="font-bold text-4xl leading-7 text-center mt-8 mb-4 text-indigo-600">
          SpaceX Capsules
        </h1>
        <p className="text-lg text-center leading-8 text-gray-600 mb-6">
          Search SpaceX capsules by entering specific capsule status, original
          launch, and type data below.
        </p>
        <SearchBar
          searchCriteria={searchCriteria}
          onInputChange={handleInputChange}
          onClearFilter={handleClearFilter}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {currentItems.length === 0 ? (
            <p className="text-red-500 font-bold col-span-full">
              No capsules found.
            </p>
          ) : (
            currentItems.map((capsule) => (
              <div
                key={capsule.capsule_serial}
                className="block w-full p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition duration-300"
                onClick={() => handleCardClick(capsule)}
              >
                <h2 className="mb-2 text-xl font-bold tracking-tight text-indigo-600">
                  {capsule.capsule_serial}
                </h2>
                <p className="font-normal text-lg text-gray-800">
                  <i>Capsule Type</i>: {capsule.type}
                </p>
                <p className="font-normal text-lg text-red-700">
                  <i className="text-gray-800">Capsule Status</i>:{" "}
                  {capsule.status}
                </p>
                <p className="font-normal text-lg text-gray-800">
                  <i>Capsule launch</i>:{" "}
                  {new Date(capsule.original_launch).toLocaleDateString()}
                </p>
              </div>
            ))
          )}
        </div>

        {isPopupOpen && (
          <CapsulePopup
            isOpen={isPopupOpen}
            capsule={selectedCapsule}
            onClose={() => setIsPopupOpen(false)}
          />
        )}

        <div className="flex justify-center mt-6">
          <button
            className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-lg font-bold mx-2">
            Page {currentPage} of{" "}
            {Math.ceil(filteredCapsules.length / itemsPerPage)}
          </span>
          <button
            className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={endIndex >= filteredCapsules.length}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default DataGridCapsules;
