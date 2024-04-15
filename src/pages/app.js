"use client"

import React, { useEffect } from "react";
// import AOS from "aos";
// import 'aos/dist/aos';
//** component imported */
import Layout from "@/components/layout/layout";
import About from "@/pages/about";
import CourseBanner from "@/pages/course/course-list";
import CourseBannerList from "@/pages/course/banner";
import CourseCardDetails from "@/pages/course/course-details";
import CourseRegister from "@/pages/register/register-form";
import ToastProvided from "@/utils/toast.provided";
import 'react-toastify/dist/ReactToastify.css'
// import TestimonialSlider from "@/pages/course/testimonal-course.jsx";
import Faq from "@/pages/faq";
// require("@/config/google-sheet/server.config")
// import Contacts from "@/pages/contact-form";
export default function HomeApp () {
    // useEffect(() => {
    //     AOS.init({
    //          duration: 800,
    //          once: false,
    //        })
    //  }, [])
return (
    <>
        <Layout>
        <ToastProvided>
        <About />
        <CourseRegister/>
        <CourseBannerList/>
        <CourseBanner/>
        <CourseCardDetails/>
        {/* <TestimonialSlider/> */}
        <Faq/>
        {/* <Contacts/> */}
        </ToastProvided>
      </Layout>

    </>
)
}