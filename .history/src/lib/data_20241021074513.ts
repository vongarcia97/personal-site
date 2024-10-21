import React from "react";
import { FaEarthAmericas, FaCode, FaBriefcase, FaRightLeft } from "react-icons/fa6";

const ServiceINITIAL_VALUE = [
  {
    id: 1,
    title: "Building Website",
    description: "Crafting captivating, functional websites.",
    icon: React.createElement(FaEarthAmericas),
  },
];

const Experience = [
  {
    id: 1,
    title: "Career Change",
    subtitle: "From healthcare to tech",
    description:
      "It all started with a 'Hello, world' in Python..... Then started using libraries like pandas and matplotlib..... I was hooked.",
    date: "2020",
    icon: React.createElement(FaRightLeft),
  },
  {
    id: 2,
    title: "Codesmith Software Engineering Immersive Program",
    subtitle: "Learned how to securely piece a back-end to the front-end to make a full stack application.",
    description:
      "Learned how to securely piece a back-end to the front-end to make a full stack application. It was my first time using libraries like Redux, Node.js, Express, and PostgreSQL. This was pre-AI so I deserve some street creds....",
    date: "2022",
    icon: React.createElement(FaCode),
  },
  {
    id: 3,
    title: "AMEX Global Business Travel",
    subtitle: "The OvationNetwork - luxury, leisure department of Ovation Travel Group",
    description:
      "Before starting, I had no idea what goes on after I click 'Book Now' when I purchase travel online. Now I know the ins and outs of the travel industry. I am currently working on a full stack app that my team (operations) can use as a CRM to keep us organized as we continue to scale. My most notable contrinution is solving an organization-wide accounting issue that occured when we were integrating Agresso software into a new commission processing firm.",
    date: "March 2023 - Present",
    icon: React.createElement(FaBriefcase),
  },
];

export { ServiceINITIAL_VALUE, Experience };
