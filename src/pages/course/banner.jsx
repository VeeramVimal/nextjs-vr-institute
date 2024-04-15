import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import getScrollAnimation from "@/utils/getScrollAnimation";
import ScrollAnimationWrapper from "@/components/layout/ScrollAnimationWrapper";
import { ImageUtils } from "@/utils/imageUtils";

// const programs = [
//   "Language Funtamentals.",
//   "Development Essentials",
//   "Data Structure & Algorithms.",
//   "Programming Languages.",
//   "Web Development.",
//   "Software Testing Program.",
// ];

const programs = [
  "Master the Basics of Language.",
  "Essential Development Insights.",
  "Navigate Data Structures & Algorithms.",
  "Dive into Programming Languages.",
  "Unlock the World of Web Development.",
  "Experience a Comprehensive Software Testing Program.",
];
const CourseBannerList = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto" id="feature">
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper>
          <motion.div className="h-full w-full" variants={scrollAnimation}>
            {/* <Image
              src={ImageUtils.static_illustation_5}
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            /> */}
            <Image
              className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
              src={ImageUtils.static_illustation_3}
              //   className="h-6 w-6"
              alt="script Illustrasi"
              layout="responsive"
              quality={100}
              height={100}
              width={150}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        {/* courses demo list */}
         
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col items-end justify-center ml-auto mt-12 w-full lg:w-9/12"
            variants={scrollAnimation}
          >
            <h3 className="decoration-clone bg-gradient-to-r from-blue-500 via-fuchsia-600 to-pink-600 text-transparent bg-clip-text text-3xl lg:text-4xl font-medium leading-relaxed">
              {/* We Provide Many Features You Can Use */}
              Discover Countless Features Tailored for You
            </h3>
            <p className="my-2 text-black-500">
              {/* You can explore the features that we provide with fun and have
              their own functions each feature. */}
              Embark on a journey through our diverse features, 
              each designed to add a touch of excitement and functionality to your experience.
            </p>
            <ul className="text-black-500 self-start list-inside ml-8">
              {programs.map((program, index) => (
                <motion.li
                  className="relative circle-check custom-list"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={program}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                    filter: [
                      "hue-rotate(0) contrast(100%)",
                      "hue-rotate(360deg) contrast(200%)",
                      "hue-rotate(45deg) contrast(300%)",
                      "hue-rotate(0) contrast(100%)",
                    ],
                    color: "#3761EE",
                    colorScheme: "dark",
                  }}
                >
                  {program}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};
export default CourseBannerList;
