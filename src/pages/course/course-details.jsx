import React, { useEffect, useState } from "react";
// import { CourseWithDetails } from "@/utils/courseDetails";
import { CourseWithDetails } from "../../utils/courseDetails";
// import CourseWithDetails from "@/pages/course/courseDetails";

import Image from "next/image";

const CourseCardDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  // 30 seconds
  const interval = 5 * 1000; 
  useEffect(() => {
  const slideInterval = setInterval(() => {
    setCurrentIndex((prevSlide) => (prevSlide + 1) % CourseWithDetails.length);
    }, interval);
    // Clear the interval when the component is unmounted
    return () => clearInterval(slideInterval);
  }, [CourseWithDetails, interval]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? CourseWithDetails.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === CourseWithDetails.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24" id="courses">
        <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8" >
          <h2 className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 lg:mx-5 xl:mx-4 sm:text-5xl">
          Check out our courses
          </h2>

          <div className="mt-8 flex gap-4 lg:mt-0">
            <button
              aria-label="Previous slide"
              id="keen-slider-previous"
              className="rounded-full border border-primary p-3 text-primary transition hover:bg-primary hover:text-white-300"
              onClick={handlePrev}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button
              aria-label="Next slide"
              id="keen-slider-next"
              className="rounded-full border border-primary p-3 text-primary transition hover:bg-primary hover:text-white-300"
              // className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              onClick={handleNext}
            >
              <svg
                className="h-5 w-5 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center">
              {CourseWithDetails &&
                CourseWithDetails?.length > 0 &&
                CourseWithDetails.map((course, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 ${
                      index === currentIndex
                        ? "opacity-100"
                        : "opacity-0 hidden"
                    } transition-opacity duration-500 ease-in-out `}
                  >
                    <div className="mb-12 space-y-4">
                      <h3 className="text-2xl font-semibold text-purple-900">
                        {course.course_head}
                      </h3>
                      <p className="mb-6">{course.course_para}</p>
                      <a href="#" className="block font-medium text-purple-600">
                        Know more
                      </a>
                    </div>
                    <Image
                      src={course.course_image}
                      className="w-2/3 ml-auto -mb-12"
                      alt="illustration"
                      loading="lazy"
                      width="900"
                      height="600"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CourseCardDetails;
