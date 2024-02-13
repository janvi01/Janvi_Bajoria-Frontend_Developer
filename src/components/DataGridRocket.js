import React from "react";

function DataGridRocket({ rocketsData }) {
  return (
    <section id="rockets">
      <h1 className="font-bold text-4xl leading-7 text-center mt-16 text-indigo-600">
        SpaceX Rockets
      </h1>
      <p className="mt-4 text-lg leading-8 text-center text-gray-600">
        Explore a wide range of SpaceX rockets
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center m-4 md:m-8 lg:m-16">
        {rocketsData.map((rocket) => (
          <div
            key={rocket.id}
            className="max-w-md h-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-2xl dark:bg-gray-800 dark:border-gray-700"
          >
            <a href={rocket.wikipedia} target="_blank" rel="noreferrer">
              <img
                className="w-full h-48 object-cover object-center"
                src={rocket.flickr_images[0]}
                alt={rocket.rocket_name}
              />
            </a>
            <div className="p-5">
              <a href={rocket.wikipedia} target="_blank" rel="noreferrer">
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:underline">
                  {rocket.rocket_name}
                </h2>
              </a>
              <p className="mb-3 text-gray-700 dark:text-gray-400">
                {rocket.description}
              </p>
              <a
                href={rocket.wikipedia}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                about {rocket.rocket_name}
                <svg
                  className="rtl:rotate-180 w-4 h-4 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DataGridRocket;
