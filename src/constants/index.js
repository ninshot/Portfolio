import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    carrent,
    CC1,
    CC2,
    CC3,
    CC4,
    CC5,
    CC6,
    CC7,
    WW1,
    WW2,
    WW3,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const technologies = [
    "Python",
    "Java",
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Node.js",
    "MySQL",
    "C#",
    "C",
    "Rust",
    "Docker"
  ];
  
  
  const projects = [
    {
      name: "Code Connect",
      description:
        "Web-based platform that allows users discuss programming queries by posting, replying, liking and disliking. It also allows users to create channels for specific topics, enabling focused discussions. Users can also search for channels, posts and allows user to bookmark important posts, making it easy to find relevant content.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "node.js",
          color: "blue-text-gradient",
        },
        {
          name: "docker",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
      ],
      image: [CC1, CC2, CC3, CC4, CC5, CC6, CC7],
      source_code_link: "https://github.com/ninshot/Coder-sBlog",
    },
    {
      name: "Wealth-wise",
      description:
        "A full-stack web application developed as part of a third-year Software Engineering group project. The app provides users with a suite of financial tools, including calculators for monthly car payments, house mortgage, vacation budgeting, daily and monthly expense tracking, and debt management. This was my first collaborative university project.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "node.js",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "docker",
          color: "pink-text-gradient",
        },
      ],
      image: [WW1, WW2, WW3],
      source_code_link: "https://github.com/ninshot/Wealthwise",
    },
    
  ];
  
  export { technologies, projects };