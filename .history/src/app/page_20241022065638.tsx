"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { Container, containerVariants } from "@/components/ui/container";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import NumberGradient from "@/components/number-gradient";

// Icons
import TechIcon from "@/assets/Tech.icon";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiTwotoneCalendar,
  AiOutlineMail,
} from "react-icons/ai";

import { Experience, Interests } from "@/lib/data";

export default function Home() {
  const [gradientColor, setGradientColor] = useState(1);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the gradientColor value here
      setGradientColor((prevColor) => (prevColor % 3) + 1);
    }, 2000); // 1000 milliseconds = 1 second

    // To stop the looped function when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    (async () => {
      // @ts-ignore
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  useEffect(() => {
    const splitTypes = document.querySelectorAll("#reveal-text");

    splitTypes.forEach((char: any) => {
      const text = new SplitType(char, { types: "chars, words" });

      gsap
        .from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: "top 80%",
            end: "top: 0%",
            // scrub: true,
          },
          color: "black",
          opacity: 1,
          stagger: 0.2,
        })
        .duration(1.5);
    });
  }, []);

  return (
    <main>
      <header
        className={containerVariants({
          size: "xl",
          className:
            "flex flex-col items-center justify-center max-md:py-20 max-md:mt-16 md:h-dvh overflow-hidden",
        })}
        data-scroll
        data-scroll-speed=".5"
      >
        <Image
          src="/profilePhoto.png"
          width={50}
          height={50}
          alt="logo"
          className="rounded"
        />
        <h1 className="max-w-4xl my-4 text-4xl text-center md:text-5xl lg:text-6xl">
          Full-stack developer in NYC experienced in{" "}
          <span
            className={`text-transparent bg-gradient-to-tr bg-clip-text ${
              gradientColor === 1
                ? "from-gradient-1-from to-gradient-1-to"
                : gradientColor === 2
                ? "from-gradient-2-from to-gradient-2-to"
                : "from-gradient-3-from to-gradient-3-to"
            }`}
          >
            React.js
          </span>{" "}
          &{" "}
          <span
            className={`text-transparent bg-gradient-to-tr bg-clip-text ${
              gradientColor === 2
                ? "from-gradient-1-from to-gradient-1-to"
                : gradientColor === 1
                ? "from-gradient-2-from to-gradient-2-to"
                : "from-gradient-3-from to-gradient-3-to"
            }`}
          >
            Node.js
          </span>{" "}
          frameworks.
        </h1>
        <Text
          variant={"muted-lg"}
          size={20}
          className="mb-8 text-center max-md:text-base"
        >
          I have a strong foundation in JavaScript, HTML, and CSS paired with
          extensive knowledge developing complex back-end services using Node.js
          + Express.js.
        </Text>
      </header>

      <div className="px-6 space-y-32">
        <section className="flex flex-col items-center space-y-6">
          <Text variant={"section-name"}>explore about me</Text>
          <NumberGradient gradient={1} number={1} title="About" />
          <Text
            variant={"muted-lg"}
            size={20}
            className="max-w-3xl mb-8 text-center max-md:text-base"
            id="reveal-text"
          >
            I&apos;m Von Garcia! I&apos;ve got 3+ years of dev experience,
            building fullstack applications with React.js. Currently, I am an
            employee of AMEX-GBT working for{" "}
            <a className="text-teal-400" href="https://theovationnetwork.com/">
              The OvationNetwork
            </a>{" "}
            - in the luxurious world of leisure travel!
          </Text>
        </section>

        <section className="flex flex-col items-center space-y-6">
          <Text variant={"section-name"}>Current Stack of Choice</Text>
          <TechIcon />
        </section>

        <section className="space-y-20">
          <NumberGradient gradient={2} number={2} title="My Experience" />
          <VerticalTimeline lineColor="">
            {Experience.map((value) => (
              <React.Fragment key={value.id}>
                <VerticalTimelineElement
                  contentStyle={{
                    background: "#0A0A0A",
                    border: "0.5px solid rgba(255, 255, 255, .20)",
                    boxShadow: "none",
                    borderRadius: "12px",
                  }}
                  contentArrowStyle={{
                    display: "none",
                  }}
                  date={value.date}
                  icon={value.icon}
                  iconStyle={{
                    background: "black",
                    fontSize: "15rem",
                    boxShadow: "none",
                  }}
                  dateClassName="date"
                >
                  <Text as="h3" size={24}>
                    {value.title}
                  </Text>
                  <Text variant={"muted-sm"} className="!mt-1 !text-xs">
                    {value.subtitle}
                  </Text>
                  <Text
                    className="!mt-2 !text-sm !leading-6"
                    variant={"muted-sm"}
                  >
                    {value.description}
                  </Text>
                </VerticalTimelineElement>
              </React.Fragment>
            ))}
          </VerticalTimeline>
        </section>

        <section className="space-y-20">
          <NumberGradient
            gradient={3}
            number={3}
            title="Hobbies and Interests"
          />
          <VerticalTimeline lineColor="">
            {Interests.map((value) => (
              <React.Fragment key={value.id}>
                <VerticalTimelineElement
                  contentStyle={{
                    background: "#0A0A0A",
                    border: "0.5px solid rgba(255, 255, 255, .20)",
                    boxShadow: "none",
                    borderRadius: "12px",
                  }}
                  contentArrowStyle={{
                    display: "none",
                  }}
                  date={value.date}
                  icon={value.icon}
                  iconStyle={{
                    background: "black",
                    fontSize: "15rem",
                    boxShadow: "none",
                  }}
                  dateClassName="date"
                >
                  <Text as="h3" size={24}>
                    {value.title}
                  </Text>
                  <Text variant={"muted-sm"} className="!mt-1 !text-xs">
                    {value.subtitle}
                  </Text>
                  <Text
                    className="!mt-2 !text-sm !leading-6"
                    variant={"muted-sm"}
                  >
                    {value.description}
                  </Text>
                </VerticalTimelineElement>
              </React.Fragment>
            ))}
          </VerticalTimeline>
        </section>
      </div>

      <Container
        size={"2xl"}
        className="relative mt-32 overflow-hidden isolate"
      >
        <div className="absolute top-0 left-0 z-20 w-full h-px bg-gradient-to-l from-transparent via-white to-transparent" />
        <div
          className="absolute inset-0 w-full h-full -z-10 opacity-10"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 0,rgba(255, 255, 255,.5) 0,rgba(255, 255, 255,0) 100%)",
          }}
        />
        <Container
          size={"xl"}
          className="grid items-center gap-8 py-32 text-center md:text-start md:grid-cols-3"
        >
          <div className="flex flex-col items-center gap-2 md:items-start md:col-span-2">
            <Text
              className={`max-w-4xl text-center text-5xl lg:text-6xl text-transparent bg-gradient-to-tr bg-clip-text ${
                gradientColor === 1
                  ? "from-gradient-1-from to-gradient-1-to"
                  : gradientColor === 2
                  ? "from-gradient-2-from to-gradient-2-to"
                  : "from-gradient-3-from to-gradient-3-to"
              }`}
            >
              Want to connect?
            </Text>
            <Text size={20} variant={"muted-sm"} className="font-normal">
              I&apos;m always open to hearing interesting ideas, new
              opportunities, and meeting new people! Feel free to reach out to
              me if you have any questions or just want to chat.
            </Text>
          </div>
          {/* <div className="flex flex-col items-center gap-2 md:gap-4 md:items-end">
            <Button size={"lg"} className="w-32 px-0">
              Check out
            </Button>
            <div className="p-0.5 rounded bg-gradient-to-r from-gradient-1-from to-gradient-1-to w-40 px-0"> */}
          <div className="flex flex-col gap-2 md:gap-4 md:items-end justify-around">
            <div className="w-full md:w-32 px-0 mx-auto">
              <Link href={"https://www.calendly.com/vongarcia97/calendar"}>
                <Button
                  variant={"primary"}
                  size={"lg"}
                  className="max-md:w-auto max-md:max-w-md mx-auto"
                >
                  Schedule
                  <AiTwotoneCalendar />
                </Button>
              </Link>
            </div>
            <div className="w-full md:w-32 px-0 mx-auto">
              <Link href={"mailto:vongarcia97@gmail.com"}>
                <Button
                  size={"lg"}
                  className="max-md:w-auto max-md:max-w-md mx-auto"
                >
                  Email
                  <AiOutlineMail />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
        <Text
          variant={"section-name"}
          className="mb-10 flex flex-row justify-center text-[8px] md:text-lg items-center"
        >
          Von Garcia | New York, NY |{" "}
          <Link href="https://github.com/vongarcia97">
            <AiFillGithub className="mx-2" size="lg" />
          </Link>{" "}
          |
          <Link href="https://linkedin.com/in/vongarcia97">
            <AiFillLinkedin className="mx-2" />
          </Link>
        </Text>
      </Container>
    </main>
  );
}
