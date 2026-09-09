import React from "react";
import {
  FaEarthAmericas,
  FaCode,
  FaBriefcase,
  FaRightLeft,
  FaPersonWalkingLuggage,
  FaLaptopCode,
  FaFutbol,
  FaPlane,
  FaBowlRice,
  FaCarRear,
  FaPerson,
  FaUserNurse,
} from "react-icons/fa6";

import { PiUserSwitchFill } from "react-icons/pi";

import { GiCook } from "react-icons/gi";

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
    title: "AMEX GBT - Ovation",
    subtitle:
      "Software Engineer for The OvationNetwork, a host travel management company (TMC) that specializes in luxury leisure travel.",
    description:
      "My most notable contribution is creating a solution to anorganization-wide accounting issue that occurred during Ovation's intergation into a new commission reconciliation program for Unit4 (Agresso) CentralCommand setup. I am currently working on a dedicated CRM for host travel management companies (TMCs) that will enable their operations to scale in an organized and efficient manner.",
    date: "March 2023 - Present",
    icon: React.createElement(FaPersonWalkingLuggage),
  },
  {
    id: 2,
    title: "Codesmith.io",
    subtitle: "Full Stack Software Engineering Immersive Program",
    description:
      "Despite already having a deep understanding of concepts like OOP, closures and recursion, it was at Codesmith where I was able to learn how to apply these concepts in software engineering. The most valuable skill I learned was learning how to approach problems systematically. This was pre-LLMs, and I feel very fortunate to have had the opportunity to learn in an environment that was not focused on the latest and greatest technologies and forced me to think critically and work collaboratively.",
    date: "2022-23",
    icon: React.createElement(FaLaptopCode),
  },
  {
    id: 3,
    title: "Career Change",
    subtitle: "From healthcare to tech",
    description:
      "I spent four years as a private home health aide. I was undocumented at the time, which ruled out both a normal college path and a normal job — so I worked, and I paid attention to the opportunities around technology. When my status changed I took three CS courses at Hunter College one summer, mostly to see whether I'd like it. Two \"Hello, world\"s later — Python, then C++ — I was teaching myself JavaScript on nights and weekends. I haven't stopped since.",
    date: "2021",
    icon: React.createElement(PiUserSwitchFill),
  },
  {
    id: 4,
    title: "Private Home Health Aide",
    subtitle: "Providing care to high net worth clients in their homes",
    description:
      "Worked as a private home health aide assisting high net worth individuals in their homes with activities of daily living (ADLs).",
    date: "2018-2022",
    icon: React.createElement(FaUserNurse),
  },
];

const Interests = [
  {
    id: 1,
    title: "Weekend Chef 🍳",
    subtitle:
      'I was not kidding when I said I felt comfortable in the "unknown"',
    description:
      "I cook whatever my TikTok or Instagram algorithm suggests that makes my mouth water. To give an idea of how daring I am - I've made bao buns from scratch and prepare my own sashimi at home.",
    date: "Since 2019",
    icon: React.createElement(GiCook),
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
