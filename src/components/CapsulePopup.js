import React from "react";

function CapsulePopup({ isOpen, capsule, onClose }) {
  if (!isOpen || !capsule) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">
          Capsule Details - {capsule.capsule_serial}
        </h2>
        <p className="font-normal text-gray-700 mb-4">{capsule.details}</p>
        <p className="font-normal text-xl text-black">
          <i>Capsule Type</i> : {capsule.type}
        </p>
        <p className="font-normal text-xl text-green-600">
          <i className="text-black">Capsule Status</i> : {capsule.status}
        </p>
        <p className="font-normal text-xl text-black">
          <i>Capsule launch</i> : {capsule.original_launch}
        </p>
        <p className="font-normal text-xl text-black">
          <i>Capsule ID</i> : {capsule.capsule_id}
        </p>
        <p className="font-normal text-xl text-black">
          <i>Capsule landings</i> : {capsule.landings}
        </p>
        <p className="font-normal text-xl text-black">
          <i>Capsule reuse count</i> : {capsule.reuse_count}
        </p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default CapsulePopup;
