// import { ImageUtils } from "@/utils/imageUtils";
import { ImageUtils } from "../../utils/imageUtils";
import Image from "next/image";
import React from "react";

export default function Contacts() {
  return (
    <section
      className="max-w-screen-xl mt-2 px-8 xl:px-16 mx-auto"
      id="contact"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
        <div className="flex flex-wrap flex-col justify-center items-start row-start-2 sm:row-start-1">
          <h1 className="decoration-clone bg-gradient-to-r from-blue-500 via-fuchsia-600 to-pink-600 text-transparent bg-clip-text text-xl md:text-2xl xl:text-2xl font-bold leading-normal p-2">
            Let&apos;s connect.{" "}
            <span className="block w-full">We are just a click away!</span>
          </h1>
            <form className="max-w-md mx-auto mt-5 p-6 border rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Feedback Form</h2>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" for="name">
                  Mobile Number:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" for="email">
                  Full Name:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" for="email">
                  Email:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </form>
          
        </div>
        <div className="flex flex-wrap w-full">
          <div className="h-full w-full">
            <Image
              className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
              src={ImageUtils.static_illustation_1}
              alt="scriti-frame"
              quality={100}
              width={500}
              height={488}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
