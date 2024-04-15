
import "@/styles/tailwind.css";
import "@/styles/icons.css";

//** component imported */
// import Layout from "@/components/layout/layout";
// import About from "@/pages/about";
// import CourseBanner from "@/pages/course/course-list";
// import { useEffect } from "react";
// export default function Home() {

//   return (
//     <>
//       <Layout>
//         <About />
//         <CourseBanner/>
//       </Layout>
//     </>
//   );
// }
import React from "react";
import HomePage from '@/pages/app';

export default function Home () {
  return <HomePage/>
}
