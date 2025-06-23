import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/krishna-hothi-2bb75535a",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Angular",
    image: "angular.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Bootstrap",
    image: "bootstrap.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
   {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  // {
  //   skill_name: "React Native",
  //   image: "reactnative.png",
  //   width: 70,
  //   height: 70,
  // },
  // {
  //   skill_name: "Tauri",
  //   image: "tauri.png",
  //   width: 70,
  //   height: 70,
  // },
  // {
  //   skill_name: "Docker",
  //   image: "docker.png",
  //   width: 70,
  //   height: 70,
  // },

  // {
  //   skill_name: "Figma",
  //   image: "figma.png",
  //   width: 50,
  //   height: 50,
  // },
] as const;

export const OTHER_SKILL = [
  // {
  //   skill_name: "Go",
  //   image: "go.png",
  //   width: 60,
  //   height: 60,
  // },

] as const;

export const PROJECTS = [
  {
    title: "Taxi Booking System",
    description:
      'Worked on full-stack web development using the MEAN stack (MongoDB, Express.js, Angular, Node.js). Developed a small taxi booking application with separate user and admin panels. The backend was built with Node.js and the frontend with Angular. Designed and implemented RESTful APIs to handle ride bookings, confirmations, and trip completion for drivers.Integrated Stripe as a payment gateway to manage transactions. Also implemented Twilio for messaging services and Nodemailer for sending invoices and mobile verification emails. Gained experience in deploying applications on AWS using EC2 instances and S3 buckets for file storage.',
    image: "/projects/project-1.png",
    link: "https://example.com",
  },
  {
    title: "Order Analytics Project",
    description:
      'This data-driven web application is designed to monitor and analyze e-commerce order performance in real-time. Built for business teams and administrators, it transforms complex backend data into clear, interactive visual insights to support informed decision-making. It features a wide range of chart types including bar charts, line charts, column charts, pie charts, and more to visualize key business metrics such as order volume, revenue trends, category-wise performance, and payment method distribution. With a fully responsive user interface and advanced filtering capabilities, admin can explore order trends, assess pricing strategies, and identify patterns in customer behavior and operations. The application is developed using Angular on the frontend and Node.js with Express.js on the backend, with MongoDB as the database. Visualizations are implemented using Chart.js and ApexCharts for dynamic and interactive data representation. It is deployed on AWS and optimized through Cloudflare for fast, secure access.',
    image: "/projects/project-2.png",
    link: "https://example.com",
  },
  {
    title: "College Management Website",
    description:
      'A fully responsive static website built using HTML, CSS, JavaScript, and Bootstrap to represent a college or educational institution. It includes essential sections like Home, About Us, Courses, Faculty, Gallery, and Contact. The layout is clean and user-friendly, with responsive design for mobile and desktop. Interactive elements like dropdowns, image sliders, and contact forms are added using JavaScript. This project showcases front-end development skills with a focus on clean UI and responsive design.',
    image: "/projects/project-3.png",
    link: "https://example.com",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      // {
      //   name: "YouTube",
      //   icon: FaYoutube,
      //   link: "https://youtube.com",
      // },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/krishna16052002",
      },
      // {
      //   name: "Discord",
      //   icon: RxDiscordLogo,
      //   link: "https://discord.com",
      // },
    ],
  },
  {
    title: "Social Media",
    data: [
      // {
      //   name: "Instagram",
      //   icon: RxInstagramLogo,
      //   link: "https://instagram.com",
      // },
      // {
      //   name: "Twitter",
      //   icon: RxTwitterLogo,
      //   link: "https://twitter.com",
      // },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/krishna-hothi-2bb75535a",
      },
    ],
  },
  {
    title: "About",
    data: [
      // {
      //   name: "Become Sponsor",
      //   icon: null,
      //   link: "https://youtube.com",
      // },
      // {
      //   name: "Learning about me",
      //   icon: null,
      //   link: "https://example.com",
      // },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:krishnahothi049@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};
