"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";

import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { Text, textVariants } from "./ui/text";
import { Box } from "./ui/box";

// Icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

import { ServiceINITIAL_VALUE } from "@/lib/data";
import { ServicePopupAnimation } from "@/lib/animation";

type Props = {};

export default function Navbar({}: Props) {
  const [isNavbar, setIsNavbar] = useState(false);
  const [isScrollNavbar, setIsScrollNavbar] = useState(false);
  const [isService, setIsService] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrollNavbar(scrollPosition >= 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrollNavbar]);

  // console.log(isScrollNavbar);

  return (
    <>
      <nav className="absolute top-0 left-0 z-50 w-full h-16 bg-background isolate">
        <AnimatePresence>{isScrollNavbar && <ScrollNavbar />}</AnimatePresence>
      </nav>
    </>
  );
}

const ScrollNavAnimation: Variants = {
  hidden: {
    scale: "var(--scale-from, 100%)",
    x: "var(--y-from, -50%)",
  },
  visible: {
    scale: "var(--scale-to, 100%)",
  },
  exit: {
    scale: "var(--scale-from, 100%)",
  },
};

function ScrollNavbar() {
  const INITIAL_VALUE = [
    { id: 1, name: "about", link: "/#about" },
    { id: 2, name: "project", link: "/#experience" },
    { id: 3, name: "experience", link: "/#experience" },
  ];

  const [currentSection, setCurrentSection] = useState("about");

  return (
    <motion.nav
      // variants={ScrollNavAnimation}
      // initial="hidden"
      // animate="visible"
      // exit="exit"
      className="fixed z-50 grid grid-cols-3 p-1 -translate-x-1/2 border rounded-full max-md:text-sm w-80 max-md:bottom-4 md:top-4 left-1/2 bg-black/80 backdrop-blur-sm [--scale-from:0%] [--scale-to:100%]"
    >
      {INITIAL_VALUE.map((value) => (
        <a
          key={value.id}
          className={`relative inline-block py-2 text-center capitalize rounded-full isolate`}
          onClick={() => setCurrentSection(value.name)}
          href={value.link}
        >
          {value.name}
          {currentSection == value.name && (
            <motion.div
              layoutId="scroll-nav"
              className="absolute inset-0 rounded-full bg-accents-2/60 -z-10"
            />
          )}
        </a>
      ))}
    </motion.nav>
  );
}
