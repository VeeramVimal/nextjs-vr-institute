"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import getScrollAnimation from "@/utils/getScrollAnimation";
// import ScrollAnimationWrapper from "@/components/layout/ScrollAnimationWrapper";
// import { IconsUtils } from "@/utils/imageUtils";
// import { courseDetails } from "@/utils/courseDetails";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../components/layout/ScrollAnimationWrapper";
import { IconsUtils } from "../../utils/imageUtils";
import { courseDetails } from "../../utils/courseDetails";
import { getHiddenAndVisible } from "../../utils/apperance-anime";
// import ButtonPrimary from "@/components/misc/ButtonPrimary";
// import courseDetails  from "@/pages/course/courseDetails";

export const IconsConstant = [
  { key: "HTML-Icon", url: IconsUtils.Html },
  { key: "React-Icon", url: IconsUtils.react_1 },
  { key: "Docker-Icon", url: IconsUtils.docker },
  { key: "Java-Icon", url: IconsUtils.java },
  { key: "Android-Icon", url: IconsUtils.android },
  { key: "Angular-Icon", url: IconsUtils.angular },
  { key: "Testing-Icon", url: IconsUtils.testing },
  { key: "Css-Icon", url: IconsUtils.css },
  { key: "TypeScrit-Icon", url: IconsUtils.typescript },
  { key: "JavaScrit-Icon", url: IconsUtils.javascript },
  { key: "python-Icon", url: IconsUtils.python },
  { key: "My_SQL-Icon", url: IconsUtils.my_sql },
  { key: "Seo-Icon", url: IconsUtils.seo },
  // { id: 4, key: "JavaScrit-Icon", url: IconsUtils.javascript},
];
function CourseBanner() {
  // const ref_1 = useRef();
  // const isVisible_one = useIsVisible(ref_1);
  // const isVisible = useMemo(() => getHiddenAndVisible(), []);
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <>
      <section
        className="py-7 sm:px-2 md:px-8 lg:px-16 xl:px-32 "
        style={{ backgroundColor: "#F5F5FF", overflow: "hidden" }}
        id="learn"
      >
        {/* <div className="container"> */}
        <div className="px-2 px-md-5 mb-5 pb-4" >
          <ScrollAnimationWrapper>
            <motion.div className="" variants={scrollAnimation}>
              <h2 className="text-center decoration-clone bg-gradient-to-r from-blue-500 via-fuchsia-600 to-pink-600 text-transparent bg-clip-text text-3xl md:text-5xl font-bold leading-normal break-words">
                Modern Work Experience-Based Learning Approach
              </h2>
              <p className="mt-4 text-center px-2 text-xl text-black-500">
                you learn and grow exactly how you would on a real job.&nbsp;
                {/* You will start from the fundamentals, receive support from our mentors and community, and build your way to the top - through professional work-like Full-stack and Backend web development projects.you learn and grow exactly how you would on a real job. You will start from the fundamentals, receive support from our mentors and community, and build your way to the top - through professional work-like  */}
                Full-stack and Backend web development projects.
              </p>
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div
              className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap"
              variants={scrollAnimation}
            >
              {/* <Netflix className="h-18 w-auto" /> */}
              {IconsConstant.map((icon, index) => (
                <Image
                  key={index}
                  src={icon.url}
                  className="h-10 w-auto mt-4 lg:mt-2 text-primary"
                  alt={icon.key}
                  width={50}
                />
              ))}
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        {/* </div> */}
      </section>

      {/* <section className="text-gray-700 body-font"> */}
      <section className="space-y-6 bg-slate-50 py-8 mx-auto md:py-12 lg:py-24">
        <ScrollAnimationWrapper>
          <motion.div
            className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center"
            variants={scrollAnimation}
          >
            <h2 className="font-heading text-black-500 text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Key Highlights
            </h2>
            {/* <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Discover the amazing features offered by web hosting companies to
            enhance your online presence.
          </p> */}
          </motion.div>
        </ScrollAnimationWrapper>

        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            {courseDetails.map((data, index) => (
              <div className="p-4 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full" key={index}>
                {/* <ScrollAnimationWrapper>
                  <motion.div
                    className="border border-gray-300 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110"
                    key={index}
                    custom={{ duration: 2 + index }}
                    variants={scrollAnimation}
                  > */}
                <div className="border border-gray-300 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                  {/* {data.img} */}
                  <Image
                    key={index}
                    src={data.url}
                    className="w-12 h-12 mb-3 inline-block"
                    alt={data.key}
                    width={40}
                  />
                  <h2 className="font-semibold text-lg text-center text-gray-800 mt-2">
                    {data.content}
                  </h2>
                </div>
                {/* </motion.div>
                </ScrollAnimationWrapper> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default CourseBanner;
