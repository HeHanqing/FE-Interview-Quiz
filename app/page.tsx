import { useEffect, useRef } from "react";
import Hero from "./_components/Hero";
import Section from "./_components/Section";
import SectionWhite from "./_components/Section-white";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Section />
      <SectionWhite />
    </main>
  );
}
