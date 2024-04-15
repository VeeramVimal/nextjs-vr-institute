import React, { useState } from "react";
import { CourseWithDetails } from "@/utils/courseDetails";
// import CourseWithDetails from "@/pages/cou";
import Image from "next/image";

const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "John Doe",
    position: "CEO, Company Inc.",
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "Doe",
    position: "COO, Company Inc.",
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "John",
    position: "CTO, Company Inc.",
  },
  // Add more testimonials as needed
];
const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : CourseWithDetails.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < CourseWithDetails.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="container mx-auto px-6">
      <div className="flex items-center justify-between mb-4">
        <button onClick={handlePrev} className="text-gray-500">
          Previous
        </button>
        <button onClick={handleNext} className="text-gray-500">
          Next
        </button>
      </div>
      <div className="flex items-center justify-center">
        {CourseWithDetails &&
          CourseWithDetails?.length > 0 &&
          CourseWithDetails.map((course, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 ${
                index === currentIndex ? "opacity-100" : "opacity-0 hidden"
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
  );
};

export default TestimonialSlider;
