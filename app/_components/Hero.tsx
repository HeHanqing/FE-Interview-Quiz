"use client";

import { useEffect, useRef } from "react";
import NavbarComponents from "./Navbar";
import { Button } from "@nextui-org/button";
import MobileNavbar from "./MobileNavbar";
const Hero = () => {
  const interactiveRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

  function onMouseMove(event: MouseEvent) {
    const { clientX, clientY } = event;

    if (interactiveRef.current && interactiveRef.current.style) {
      interactiveRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
    }
  }

  useEffect(() => {
    bgRef.current?.addEventListener("mousemove", onMouseMove);

    return () => {
      bgRef.current?.removeEventListener("mousemove", onMouseMove);
    };
  });
  return (
    <div className="justify-center flex flex-col text-white items-center">
      <div className="sm:flex hidden">
        <NavbarComponents />
      </div>
      <div className="sm:hidden flex">
        <MobileNavbar />
      </div>
      <div className="absolute z-10 w-full h-full flex flex-col justify-center items-center pointer-events-none sm:gap-0 gap-10">
        <h1 className="z-10 text-center justify-self-center font-normal xl:text-[114px] sm:text-6xl text-4xl leading-tight pointer-events-none">
          Your Content Title
          <br /> Belongs Here
        </h1>
        <p className="z-10 2xl:w-1/3 sm:w-1/2 w-[300px] text-center sm:mt-10 opacity-70 sm:text-[22px] text-sm leading-normal pointer-events-none ">
          labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
          et accusam et justo duo dolores et ea rebum. Stet clita kasd
          gubergren..
        </p>
        <Button className="z-10 rounded-full sm:px-8 sm:py-6 py-4 px-6 sm:mt-20 bg-white sm:text-[16px] text-sm">
          Join Waitlist
        </Button>
      </div>
      <div className="gradient-bg" ref={bgRef}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive" ref={interactiveRef}></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
