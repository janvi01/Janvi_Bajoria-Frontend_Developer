import React from "react";

function DataGridCapsules({ capsulesdata }) {
  return (
    <div>
      <h1 className="font-bold text-4xl leading-7 text-center m-16 text-indigo-600">
        SpaceX Capsules
      </h1>
      <div className="grid grid-cols-3 gap-8 place-items-center m-8">
        {capsulesdata.map((capsule) => (
          <div class="block w-full h-full p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight dark:text-white">
              {capsule.capsule_serial}
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              {capsule.details}
            </p>
            <p class="font-normal text-xl text-white">
              <i>Capsule Type</i> : {capsule.type}
            </p>
            <p class="font-normal text-xl text-white">
              <i>Capsule Status</i> : {capsule.status}
            </p>
            <p class="font-normal text-xl text-white">
              <i>Capsule launch</i> : {capsule.original_launch}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataGridCapsules;
