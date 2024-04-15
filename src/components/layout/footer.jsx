// 'use client'
import React, { useState } from "react";
import Image from "next/image";
import { ContactIcon } from "@/utils/imageUtils";
import { PopularCourses, PopularTopics } from "@/utils/popular-courses.utils";
import { InputFieldValidate } from "@/components/errorValidation";
// import Config from "@/config/index";
// import serverConfig from "@/config/google-sheet/server.config";
import { sendContactForm } from "@/services";
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import 'react-toastify/dist/ReactToastify.css'

const Footer = () => {
  const [contact, setContact] = useState({
    mobile_number: "",
    full_name: "",
    email: "",
  });
  const [initialVal, setInitialVal] = useState({
    mobile_number_err: false,
    full_name_err: false,
    email_err: false,
  });
  const handleChange = (event) => {
    setContact((preProps) => ({
      ...preProps,
      [event.target.name]: event.target.value,
    }));
  };
  const isValidationCheck = () => {
    let isValid = true;
    if (contact.mobile_number == "" || contact.mobile_number === undefined) {
      isValid = false;
      setInitialVal((preProps) => ({
        ...preProps,
        mobile_number_err: "Mobile number is required",
      }));
    } else {
      setInitialVal((preProps) => ({ ...preProps, mobile_number_err: "" }));
    }
    if (contact.full_name == "" || contact.full_name === undefined) {
      isValid = false;
      setInitialVal((preProps) => ({
        ...preProps,
        full_name_err: "Name is required",
      }));
    } else {
      setInitialVal((preProps) => ({ ...preProps, full_name_err: "" }));
    }
    if (contact.email == "" || contact.email === undefined) {
      isValid = false;
      setInitialVal((preProps) => ({
        ...preProps,
        email_err: "Email is required",
      }));
    } else {
      setInitialVal((preProps) => ({ ...preProps, email_err: "" }));
    }
    return isValid;
  };
  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(payload)
    };
    const res = await fetch(
      "https://ctinstitute-contact-form-default-rtdb.firebaseio.com/Contacts.json",
      options
    )
      .then((res) => res.json())
      .then((data) => data && console.log("fetchdata-==============", data))
      .catch((err) => console.log("fetchdata err: ", err));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { full_name, email, mobile_number } = contact;
    const payload = {
      name: full_name,
      email: email,
      mobileNumber: mobile_number,
    };
    var isValid = isValidationCheck();
    if (isValid) {
      // const options = {
      //   method: "POST",
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(payload)
      // }
      // const res = await fetch("https://ctinstitute-contact-form-default-rtdb.firebaseio.com/Contacts.json", options);
      // if(res) console.log("asdfghjk-==============", res)
      // else console.log("error-=======error=======")
      // fetchData()
      const response = await sendContactForm(payload);
      if (response.code == 200) {
        await toast.success(response.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setContact({
          mobile_number: "",
          full_name: "",
          email: "",
        });
        if (typeof window !== "undefined" && window.localStorage) {
          localStorage.setItem("register", true);
        }
      }
      else {
        console.log({ error: response.error, message: response.message });
        await toast.error(response.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  };
  return (
    <footer
      className="px-3 pt-4 lg:px-9 border-t-2 text-white-500"
      style={{
        "background-image":
          "linear-gradient(to left bottom, #f87171, #f55979, #ee4085, #e12896, #cb18a9, #bd12b5, #aa16c1, #921fce, #881ed5, #7d1fdc, #6e21e3, #5c24eb)",
      }}
    >
      <div
        className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4"
        id="about-us"
      >
        <div className="sm:col-span-2">
          <a href="#" className="inline-flex items-center">
            {/* <Image src="https://mcqmate.com/public/images/logos/60x60.png" alt="logo" className="h-8 w-8"/> */}
            <span className="ml-2 text-xl font-bold tracking-wide text-white-500">
              NextJs DemoVR
            </span>
          </a>
          <div className="mt-6 lg:max-w-xl">
            <p className="text-sm">
              Join NextJs DemoVR Institute and embark on a transformative journey
              in coding. Our cutting-edge curriculum, crafted in collaboration
              with industry experts, focuses on high-demand fields like machine
              learning, data science, and full-stack development. Rated
              favorably by hundreds of students, our classroom courses at NextJs DemoVR
              Institute open doors to meaningful career opportunities. Be
              part of the next generation of coders shaping cities, countries,
              and the world.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <p className="text-base font-bold tracking-wide">Popular Courses</p>
          {PopularCourses &&
            PopularCourses.length &&
            PopularCourses.map((course, index) => (
              <a key={index} href={course.link}>{course.label}</a>
            ))}
          {/* <a href="#">UPSC - Union Public Service Commission</a>
          <a href="#">General Knowledge</a>
          <a href="#">MBA</a> */}
          <p className="text-base font-bold tracking-wide">Popular Topics</p>
          {PopularTopics &&
            PopularTopics.length &&
            PopularTopics.map((topic, index) => (
              <a key={index} href={topic.link}>{topic.label}</a>
            ))}
          {/* <a href="#">Human Resource Management</a>
          <a href="#">Operations Management</a>
          <a href="#">Marketing Management</a> */}
        </div>

        <div className="max-w-sm mx-auto">
          <h1 className="text-lg sm:text-xl font-bold mb-4">Register Now</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label
                for="input-6"
                className="block text-sm font-medium dark:text-gray-100"
              >
                Mobile Number
              </label>
              <div className="relative mt-1">
                <input
                  type="text"
                  id="input-6"
                  className={`
                  block w-full h-10 pl-8 pr-3 mt-1 text-sm text-black-200 border focus:outline-none rounded shadow-sm focus:border-blue-500
                  ${
                    initialVal.mobile_number_err &&
                    "border-b border-danger shadow-lg shadow-danger"
                  }`}
                  placeholder="phone no."
                  name="mobile_number"
                  value={contact.mobile_number}
                  onChange={(e) => handleChange(e)}
                  min={10}
                />
                <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-2">
                  <Image
                    src={ContactIcon.phoneIcon}
                    className="h-4 w-4"
                    // quality={100}
                    width={4}
                    height={4}
                  />
                </span>
              </div>
              {initialVal.mobile_number_err && (
                <div className="pl-1">
                  <text className="text-white-500 font-medium text-sm">
                    {initialVal.mobile_number_err}
                  </text>
                </div>
              )}
            </div>
            <div>
              <label
                for="input-6"
                className="block text-sm font-medium dark:text-grey-100"
              >
                Full Name
              </label>
              <div className="relative mt-1">
                <input
                  type="text"
                  id="input-6"
                  className={`
                  block w-full h-10 pl-8 pr-3 mt-1 text-sm text-black-200 border focus:outline-none rounded shadow-sm focus:border-blue-500
                  ${
                    initialVal.full_name_err &&
                    "border-b border-danger shadow-lg shadow-danger"
                  }`}
                  placeholder="user name"
                  name="full_name"
                  value={contact.full_name}
                  onChange={(e) => handleChange(e)}
                />
                <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-2">
                  <Image
                    src={ContactIcon.nameIcon}
                    className="h-4 w-4"
                    // quality={100}
                    width={4}
                    height={4}
                  />
                </span>
              </div>
              {initialVal.full_name_err && (
                <div className="pl-1">
                  <text className="text-white-500 font-medium text-sm">
                    {initialVal.full_name_err}
                  </text>
                </div>
              )}
            </div>
            <div>
              <label
                for="input-6"
                className="block text-sm font-medium dark:text-gray-100"
              >
                Email
              </label>
              <div className="relative mt-1">
                <input
                  type="email"
                  id="input-6"
                  className={`
                  block w-full h-10 pl-8 pr-3 mt-1 text-sm text-black-200 border focus:outline-none rounded shadow-sm focus:border-blue-500
                  ${
                    initialVal.email_err &&
                    "border-b border-danger shadow-lg shadow-danger"
                  }`}
                  placeholder="user@xyz.com"
                  name="email"
                  value={contact.email}
                  onChange={(e) => handleChange(e)}
                />
                <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-2">
                  <Image
                    src={ContactIcon.emailIcon}
                    className="h-4 w-4"
                    // quality={100}
                    width={4}
                    height={4}
                  />
                </span>
              </div>
              {initialVal.email_err && (
                <div className="pl-1">
                  <text className="text-white-500 font-medium text-sm">
                    {initialVal.email_err}
                  </text>
                </div>
              )}
            </div>
            <div className="p-2 w-full left-4">
              <div className="items-center justify-center">
                <button
                  type="submit"
                  className="flex items-center bg-white border border-grey-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-grey-500 hover:bg-grey-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 gap-2"
                >
                  Send
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 mr-2 gap-2"
                    width="800px"
                    height="800px"
                  >
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm ">
          {/* © Copyright 2023 Croggy Tech. All rights reserved. */}
          Copyright © {new Date().getFullYear()} All rights reserved by{" "}
              <a
                href="https://nexusdigitalia.com/"
                className="text-bold text-gray-600 hover:text-gray-900"
              >
                NextJs DemoVR
              </a>
              .
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="#"
              className="text-sm transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy &amp; Cookies Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Disclaimer
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
