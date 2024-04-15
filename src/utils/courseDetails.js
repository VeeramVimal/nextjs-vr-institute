import { keyIconUtils, CourseImage } from "@/utils/imageUtils";
const courseDetails = [
  {
    key: "Practical Training",
    url: keyIconUtils.practical_training,
    head: "",
    content: "Practical Training support",
  },
  {
    key: "",
    url: keyIconUtils.batch,
    head: "",
    content: "Weekday Weekend Batches",
  },
  {
    key: "",
    url: keyIconUtils.career_course,
    head: "",
    content: "Personalized Career Coach",
  },
  {
    key: "",
    url: keyIconUtils.doubt_solve,
    head: "",
    content: "Instant Doubt Solving",
  },
  {
    key: "",
    url: keyIconUtils.knowledge,
    head: "",
    // content: "Study App & Material"
    content: "Industrial Knowledge",
  },
  {
    key: "",
    url: keyIconUtils.case_study,
    head: "",
    content: "30+ Case studies & Projects",
  },
  {
    key: "",
    url: keyIconUtils.profile_build,
    head: "",
    content: "Profile Building Session",
  },
  {
    key: "",
    url: keyIconUtils.placement,
    head: "",
    content: "Placement Assistance",
  },
];

const CourseWithDetails = [
  {
    key: "MERN",
    // course_image:
    //   "https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg",
    course_image: CourseImage.full_stack_developer,
    course_head: "Full Stack Development",
    course_para: `
    NextJs DemoVR, the top-rated Full Stack Training Institute in Madurai, provides a Full Stack Developer Course. 
    This course assists students and professionals in acquiring the skills to create dynamic and responsive web applications by covering both frontend and backend technologies.`,
  },
  {
    key: "",
    // course_image:
    //   "https://tailus.io/sources/blocks/end-image/preview/images/ui-design.svg",
    course_image: CourseImage.front_end_developer,
    course_head: "Front-End Development",
    course_para: `
    NextJs DemoVR offers a comprehensive front-end development course, 
    teaching students the skills to design and build engaging user interfaces using HTML, CSS, and JavaScript.
    `,
  },
  {
    key: "",
    // course_image:
    //   "https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg",
    course_image: CourseImage.back_end_developer,
    course_head: "Backend Development",
    course_para: `
    NextJs DemoVR provides a backend development course, teaching skills in server-side components, database management, and RESTful API development. 
    The hands-on training prepares participants for backend development roles in the tech industry.`,
  },
  {
    key: "",
    // course_image:
    //   "https://tailus.io/sources/blocks/end-image/preview/images/ui-design.svg",
    course_image: CourseImage.Testing,
    course_head: "Software Testing",
    course_para: `
    NextJs DemoVR provides a thorough Software Testing course, encompassing both manual and automation testing. 
    Participants acquire practical skills in testing methodologies and tools for effective quality assurance in software development. `,
  },
  {
    key: "",
    // course_image:
    //   "https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg",
    course_image: CourseImage.app_developer,
    course_head: "App Development",
    course_para: `
    NextJs DemoVR provides courses in app development, focusing on Flutter and React Native. 
    The training offers practical skills for building cross-platform mobile applications, emphasizing versatility and high-performance development.`,
  },
  {
    key: "",
    // course_image:
    //   "https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg",
    course_image: CourseImage.SEO,
    course_head: "Digital Marketing",
    course_para: `
    NextJs DemoVR provides a Digital Marketing course covering online advertising, social media strategies, and SEO practices. 
    Students gain practical skills for successful digital campaigns and strategic online presence. `,
  },
];

export { courseDetails, CourseWithDetails };
