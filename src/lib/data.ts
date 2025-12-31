import React from "react";
import {
  FaEarthAmericas,
  FaCode,
  FaBriefcase,
  FaRightLeft,
  FaFutbol,
  FaPlane,
  FaBowlRice,
  FaCarRear,
} from "react-icons/fa6";

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
    title: "AMEX Global Business Travel (GBT)",
    subtitle:
      "I work under the Global Partner Solutions (GPS) division, as a SWE for The OvationNetwork",
    description:
      "My most notable contribution is solving an organization-wide accounting issue that occurred when we were integrating into a new commission reconciliation program in our Unit4 (Agresso) CentralCommand setup. I am currently working on a dedicated CRM for host travel management companies (TMCs) that will enable their operations to scale in an organized and efficient manner.",
    date: "March 2023 - Present",
    icon: React.createElement(FaBriefcase),
  },
  {
    id: 2,
    title: "Codesmith Software Engineering Immersive Program",
    subtitle:
      "Learned how to securely piece a back-end to the front-end to make a full stack application",
    description:
      "Despite already having a deep understanding of concepts like OOP, closures and recursion, it was at Codesmith where I was able to learn how to apply these concepts in software engineering. The most valuable skill I learned was learning how to approach problems systematically. This was pre-LLMs so I deserve the street creds....",
    date: "2022-23",
    icon: React.createElement(FaCode),
  },
  {
    id: 3,
    title: "Career Change",
    subtitle: "From healthcare to tech",
    description:
      "It all started with a 'Hello, world' in Python..... Then started using libraries like pandas and matplotlib..... I was hooked.",
    date: "2019",
    icon: React.createElement(FaRightLeft),
  },
];

const Interests = [
  {
    id: 1,
    title: "Weekend Chef 🍳",
    subtitle: "Trying out my take on different cuisines on the weekends",
    description:
      "Whatever I see that makes my mouth water on my Instagram Discover Page or TikTok algo, I try to make it. To give an idea of how daring I am - I've made bao buns from scratch and prepare my own sashimi at home.",
    date: "Since 2019",
    icon: React.createElement(FaBowlRice),
  },
  {
    id: 2,
    title: "Formula One - McLaren Racing 🏎️",
    subtitle: "COVID-19 + Netflix's Drive To Survive.... It was inevitable....",
    description:
      "I've always admired the engineering that goes into making a Formula One car. I chose to support McLaren because that team has pedigree and I want to see them back on top! I'm excited to see Lando Norris and McLaren challenge Red Bull for the Drivers' and Constructors' Championships.",
    date: "Since 2020",
    icon: React.createElement(FaCarRear),
  },
  {
    id: 3,
    title: "Liverpool FC ⚽",
    subtitle: "You'll Never Walk Alone!",
    description:
      "I started following Liverpool FC because of their history and the fact that they were the underdogs. I've been a fan since 2018, when we lost to Real Madrid on the Champion's League Final. I've been through the highs and lows of the team. I hated seeing Jurgen Klopp leave, but I'm excited to see what the future holds for the team!",
    date: "Since 2018",
    icon: React.createElement(FaFutbol),
  },
  {
    id: 4,
    title: "Traveling 🌍 🛫",
    subtitle:
      "Working in the leisure travel definitely doesn't help with my travel bug....",
    description:
      "I grew up in the Philippines, moved to the US during my teen years and now live in NYC🗽. I am a self-proclaimed 'AMEX points redemption specialist' since I've been redeeming points for travel for the last five years. My latest steal were 2 Air France Premium Comfort seats to Rome for ~60k points! I'm blessed to have visited beautiful cities like Paris, Nice, Bordeaux, Barcelona, Priorat, Rome, Milan, etc. - but the tiny island of Gozo in Malta is what I consider to be paradise! 🌴🌤️",
    date: "Always been and always will be a nomad!",
    icon: React.createElement(FaPlane),
  },
];

export { ServiceINITIAL_VALUE, Experience, Interests };
