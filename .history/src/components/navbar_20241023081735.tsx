"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
// import { Link, animateScroll as scroll } from "react-scroll";

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
  const [isScrollNavbar, setIsScrollNavbar] = useState(false);

  const currentSection = useIntersectionObserver([
    "about",
    "experience",
    "interests",
  ]);

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

  return (
    <>
      <nav className="absolute top-0 left-0 z-50 w-full h-16 bg-background isolate">
        <AnimatePresence>
          {isScrollNavbar && <ScrollNavbar currentSection={currentSection} />}
        </AnimatePresence>
      </nav>
    </>
  );
}

function ScrollNavbar({ currentSection }: { currentSection: string }) {
  const INITIAL_VALUE = [
    { id: 1, name: "about", link: "/#about" },
    { id: 2, name: "experience", link: "/#experience" },
    { id: 3, name: "interests", link: "/#interests" },
  ];

  return (
    <motion.nav className="fixed z-50 grid grid-cols-3 p-1 -translate-x-1/2 border rounded-full max-md:text-sm w-80 max-md:top-2 md:top-4 left-1/2 bg-black/80 backdrop-blur-sm [--scale-from:0%] [--scale-to:100%]">
      {INITIAL_VALUE.map((value) => (
        <a
          key={value.name}
          className={`relative inline-block py-2 text-center capitalize rounded-full isolate`}
          href={value.link}
        >
          {value.name}
          {currentSection === value.name && (
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
/* 
function ScrollNavbar() {
  const INITIAL_VALUE = [
    { id: 1, name: "about", link: "/#about" },
    { id: 2, name: "experience", link: "/#experience" },
    { id: 3, name: "interests", link: "/#interests" },
  ];

  const [currentSection, setCurrentSection] = useState("about");

  return (
    <motion.nav
      // variants={ScrollNavAnimation}
      // initial="hidden"
      // animate="visible"
      // exit="exit"
      className="fixed z-50 grid grid-cols-3 p-1 -translate-x-1/2 border rounded-full max-md:text-sm w-80 max-md:top-2 md:top-4 left-1/2 bg-black/80 backdrop-blur-sm [--scale-from:0%] [--scale-to:100%]"
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
 */

function useIntersectionObserver(elementIds: string[]) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    elementIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [elementIds]);

  return activeSection;
}
