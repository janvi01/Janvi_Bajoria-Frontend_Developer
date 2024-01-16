import React from "react";
import SearchBar from "./SearchBar";

export default function SearchLayout() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            SpaceX
          </h2>
          <p className="mt-2 text-7xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Wide Range of Rockets and Capsules
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            SpaceX has gained worldwide attention for a series of historic
            milestones. It is the only private company capable of returning a
            spacecraft from low-Earth orbit
          </p>
        </div>
        <SearchBar />
      </div>
    </div>
  );
}
