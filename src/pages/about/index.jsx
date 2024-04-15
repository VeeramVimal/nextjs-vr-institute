"use client";

import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "@/utils/getScrollAnimation";
import ScrollAnimationWrapper from "@/components/layout/ScrollAnimationWrapper";
import ButtonPrimary from "@/components/misc/ButtonPrimary";
import Image from "next/image";
import { ImageUtils } from "@/utils/imageUtils";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ListIcons = [
  {
    name: "Case Studies & Projects",
    number: "10",
    icon: require("@/assets/Images/Icon/heroicons_sm-user.svg"),
  },
  {
    name: "Languages & Tools",
    number: "10",
    icon: require("@/assets/Images/Icon/gridicons_location.svg"),
  },
  {
    name: "Offline Sessions",
    number: "50",
    icon: require("@/assets/Images/Icon/bx_bxs-server.svg"),
  },
];
const About = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-8 px-8 xl:px-16 mx-auto" id="home">
    {/* <ToastContainer/> */}
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 py-2"
          // className="grid grid-flow-row sm:grid-flow-col grid-cols-1 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
          initial="offscreen"
          animate="onscreen"
        >
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            {/* <h1 className="decoration-clone bg-gradient-to-r from-blue-500 via-fuchsia-600 to-pink-600 text-transparent bg-clip-text text-3xl md:text-5xl xl:text-5xl font-bold leading-normal p-2">
              Programming in{" "}
              <span className="block w-full">Software Development</span>
              <span className="block w-full">
                <strong>Croggy Technologish</strong>.
              </span>
            </h1> */}
             <h1 className="decoration-clone bg-gradient-to-r from-blue-500 via-fuchsia-600 to-pink-600 text-transparent bg-clip-text text-3xl md:text-5xl xl:text-5xl font-bold leading-normal p-2">
             Master Your Skills&#44; 
             <br/>Get Certified&#44; and
              <span className="block w-full">Make a Big Impact -</span>
              <span className="block w-full">
              Let&apos;s Do This!
              </span>
            </h1>
            <span className="mx-2">
              <h4 className="my-8 text-xl text-gray-500">
                Elevate Your Career with NextJs DemoVR Training 
               <br/>and Certifications. Program Your Path to Success.
              </h4>
              <ButtonPrimary>Get Career Guidance</ButtonPrimary>
            </span>
          </div>
          <div className="flex w-full">
            <motion.div 
            // className="sm:h-md sm:w-md" 
            className="h-full w-full" 
            variants={scrollAnimation}>
              <Image
                className="transition-all duration-300 ease-in-out hover:scale-105"
                src={ImageUtils.static_illustation_1}
                alt="scriti-frame"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative w-full flex">
        <ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {ListIcons &&
            ListIcons.length &&
            ListIcons.map((listUsers, index) => {
              return (
                <motion.div
                  className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
                  key={index}
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                >
                  <div className="flex mx-auto w-40 sm:w-auto">
                    <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                      <Image
                        src={listUsers.icon}
                        className="h-6 w-6"
                        // quality={100}
                        width={10}
                        height={10}
                        alt={listUsers.name}
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-xl text-black-600 font-bold">
                        {listUsers.number}+
                      </p>
                      <p className="text-lg text-black-500">{listUsers.name}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </ScrollAnimationWrapper>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};
export default About;
