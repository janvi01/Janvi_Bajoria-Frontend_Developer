import React from "react";
import NavBar from "./NavBar";

const imageUrls = [
  "https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png",
  "https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png",
  "https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png",
];

export default function HeroLayout() {
  return (
    <div className="bg-white h-max mb-24">
      <NavBar />

      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-3xl pt-32 pb-24 sm:pt-48 lg:pt-32">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              MAKING HUMANITY MULTIPLANETARY.{" "}
              <a
                href="https://www.spacex.com/vehicles/starship/"
                className="font-semibold text-indigo-600"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-6xl font-bold tracking-tight text-gray-900">
              <span className="font-semibold text-indigo-600">SpaceX</span>{" "}
              designs, manufactures and launches.
            </h1>
            <p className="mt-6 text-md leading-8 text-gray-600">
              Building on the achievements of Falcon 9 and Falcon Heavy, SpaceX
              is working on a next generation of fully reusable launch vehicles
              that will be the most powerful ever built.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://www.spacex.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="https://www.spacex.com/launches/"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row justify-center">
          {imageUrls.map((url, index) => (
            <div key={index} className={`mb-8 ${index !== 0 ? "md:mb-0" : ""}`}>
              <img
                className="inline-block mt-6 md:mt-0 md:p-8 lg:p-0 max-w-full h-auto"
                src={url}
                alt=""
              />
            </div>
          ))}
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
