import React from "react";
import { FaEarthAmericas, FaCode, FaBriefcase, FaRightLeft, FaFutbol, FaPlane, FaBowlRice, FaCarRear } from "react-icons/fa6";

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

const Interests = [
  {
    id: 1,
    title: "Weekend Chef",
    subtitle: "Trying out my take on different cuisines on the weekends",
    description:
      "Whatever I see that makes my mouth water on my Instagram Discover Page or TikTok algo, I try to make it. To give an idea of how daring I am - I've made bao buns from scratch and prepare my own Salmon sashimi at home.",
    date: "Since 2019",
    icon: React.createElement(FaBowlRice),
  },
  {
    id: 2,
    title: "Formula One - McLaren Racing Team",
    subtitle: "What can I say? Drive To Survive is just THAT good....",
    description:
      "I've always admired the engineering that goes into making a Formula One car. I chose to support McLaren because that team has pedigree and I want to see them back on top! I'm excited to see Lando Norris put up a challenge for Max in the World Championship.",
    date: "Since 2020",
    icon: React.createElement(FaCarRear),
  },
  {
    id: 3,
    title: "Liverpool FC",
    subtitle: "You'll Never Walk Alone!",
    description:
      "I started following Liverpool FC because of their history and the fact that they were the underdogs. I've been a fan since 2018, when we lost to Real Madrid on the Champion's League Final. I've been through the highs and lows of the team. I hated seeing Jurgen Klopp leave, but I'm excited to see what the future holds for the team!",
    date: "Since 2018",
    icon: React.createElement(FaFutbol),
  },
  {
    id: 4,
    title: "Traveling",
    subtitle: "This has been a passion of mine even before I started working in the travel industry.",
    description:
      "I was born and raised in the Philippines, and I have always been fascinated by different cultures. I am also a self-proclaimed 'points hack' specialist, my latest steal was two Premium Comfort seats to Rome for ~60k points for me and my wife! I'm blessed to have visited beautiful places such as Paris, Nice, Barcelona and Priorat - but Gozo, Malta is what I consider to be paradise!",
    date: "",
    icon: React.createElement(FaPlane),
  },
];

export { ServiceINITIAL_VALUE, Experience, Interests };
