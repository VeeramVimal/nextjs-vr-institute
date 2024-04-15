"use client";
import React, { useEffect, useState } from "react";
import { ImageUtils } from "@/utils/imageUtils";
import Image from "next/image";
import Link from "next/link";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../misc/ButtonOutline.";
import useDarkSide from "@/utils/useDarkSide";
import { navBarData, navBarDataMobile } from "@/components/layout/navbar-data";
const Header = (props) => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const [colorTheme, setTheme] = useDarkSide();
  const [darkMode, setDarkMode] = useState(false);
  const [getTheme, setFetchTheme] = useState("");
  // fetch the localstorage theme
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      let fetchTheme = localStorage.getItem("theme")
        ? localStorage.getItem("theme")
        : "light";
      setFetchTheme(fetchTheme);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  useEffect(() => {
    if (getTheme == "dark") setDarkMode(true);
    else if (getTheme == "light") setDarkMode(false);
  }, [colorTheme, getTheme]);

  // handle dark or light mode function
  const handleThemeMode = (modeType) => {
    if (modeType == "dark-mode") {
      setTheme("dark");
      setDarkMode(true);
    } else if (modeType == "light-mode") {
      setTheme("light");
      setDarkMode(false);
    }
    // setTheme(colorTheme)
  };
  const handleScroll = () => {};
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4 dark:bg-gray-800">
        {/* <nav className="px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4 dark:bg-gray-800">/ */}
          <div className="col-start-1 col-end-2 flex items-center">
            <Image
              src={ImageUtils.logo_img}
              alt="Vercel Logo"
              className="w-10 h-10"
              // width={10}
              priority
            />
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            {navBarData &&
              navBarData?.length &&
              navBarData.map((data, index) => (
                //   <Link
                //   href=""
                //   scroll={false}
                //   onScroll={() => {
                //     setActiveLink(data.activeLink);
                //   }}
                //   className={
                //     "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                //     (activeLink === data.activeLink
                //       ? " text-primary animation-active "
                //       : " text-black-500 hover:text-primary dark:text-white")
                //   }
                // >
                //   {data.name}
                // </Link>
                <LinkScroll
                  key={index}
                  activeClass="active"
                  to={data.link}
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink(data.activeLink);
                  }}
                  className={
                    "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                    (activeLink === data.activeLink
                      ? " text-primary animation-active "
                      : " text-black-500 hover:text-primary dark:text-white")
                  }
                >
                  {data.name}
                </LinkScroll>
              ))}
          </ul>
          <div>
            <div className="relative group">
              {darkMode ? (
                <button onClick={() => handleThemeMode("light-mode")}>
                  {/* light mode icon */}
                  {/* <i className="ri-sun-line ml-10 ri-lg w-14 text-blue-500"></i> */}
                </button>
              ) : (
                <button onClick={() => handleThemeMode("dark-mode")}>
                  {/* dark mode icon */}
                  {/* <i className="ri-moon-line ml-10 ri-lg w-14 text-blue-500"></i> */}
                </button>
              )}
            </div>
          </div>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            {/* <Link href="/">
              <span className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-primary transition-all">
               Get Carreer
              </span>
            </Link> */}
            <ButtonOutline>Get started</ButtonOutline>
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            {navBarDataMobile &&
              navBarDataMobile.length &&
              navBarDataMobile.map((data, index) => (
                <LinkScroll
                  key={index}
                  activeClass="active"
                  to={data.link}
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink(data.activeLink);
                  }}
                  className={
                    "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                    (activeLink === data.activeLink
                      ? " border-primary text-primary"
                      : " border-transparent")
                  }
                >
                  {data.image_svg}
                  {data.name}
                </LinkScroll>
              ))}

            {/*             
            <Link
              href=""
              scroll={false}
              onScroll={() => {
                setActiveLink("pricing");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "pricing"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Courses
            </Link>
            <Link
              href=""
              scroll={false}
              onScroll={() => {
                setActiveLink("feature");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "feature"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              Feature
            </Link> */}
          </ul>
        </div>
      </nav>

      {/* End Mobile Navigation */}
    </>
  );
};
export default Header;
