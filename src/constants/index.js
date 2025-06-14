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
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: [CC1, CC2, CC3, CC4, CC5, CC6, CC7],
      source_code_link: "https://google.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: [figma,null],
      source_code_link: "https://github.com/",
    },
    
  ];
  
  export { technologies, projects };