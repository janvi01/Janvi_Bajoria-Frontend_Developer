import React from "react";

function DataGridRocket({ rocketsdata }) {
  return (
    <div>
      <h1 className="font-bold text-4xl leading-7 text-center m-16 text-indigo-600">
        SpaceX Rockets
      </h1>
      <div className="grid grid-cols-4 gap-8 place-items-center m-16">
        {rocketsdata.map((rocket) => (
          <div class="max-w-md h-full bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <a href={rocket.wikipedia}>
              <img
                className="rounded-t-lg h-max"
                src={rocket.flickr_images[0]}
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#home">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {rocket.rocket_name}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {rocket.description}
              </p>
              <a
                href={rocket.wikipedia}
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataGridRocket;
