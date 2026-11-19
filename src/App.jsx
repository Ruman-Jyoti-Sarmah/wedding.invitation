import { useEffect, useState } from "react";
import IntroEnvelope from "./components/IntroEnvelope";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Invitation from "./components/Invitation";
import Countdown from "./components/Countdown";
import Rituals from "./components/Rituals";
import Schedule from "./components/Schedule";
import Venue from "./components/Venue";
import Gallery from "./components/Gallery";
import Share from "./components/Share";
import Closing from "./components/Closing";
import MusicControl from "./components/MusicControl";
import BackToTop from "./components/BackToTop";

export default function App() {
  const [entered, setEntered] = useState(
    () => typeof window !== "undefined" && Boolean(window.location.hash)
  );
  const [activeSection, setActiveSection] = useState("home");

  const handleEnter = () => {
    setEntered(true);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    document.body.style.overflow = entered ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [entered]);

  // Make deep links (/#venue) land on the right section after the intro.
  useEffect(() => {
    if (!entered) return;
    const id = window.location.hash.replace("#", "");
    if (!id || id === "home") return;

    const target = document.getElementById(id);
    if (!target) return;

    const header = document.querySelector(".nav");
    const offset = header ? header.offsetHeight : 0;
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - offset,
      behavior: "auto",
    });
  }, [entered]);

  // Reveal each section softly as it enters the viewport.
  useEffect(() => {
    if (!entered) return undefined;

    const elements = Array.from(document.querySelectorAll(".reveal"));

    if (typeof IntersectionObserver === "undefined") {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -4% 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [entered]);

  // Highlight the section currently in view in the navigation.
  useEffect(() => {
    if (!entered) return undefined;

    if (typeof IntersectionObserver === "undefined") return undefined;

    const sections = Array.from(document.querySelectorAll("section[id]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0, rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [entered]);

  return (
    <div className="app">
      <div className="grain" aria-hidden="true" />

      {!entered ? (
        <IntroEnvelope onFinish={handleEnter} />
      ) : (
        <>
          <Navbar activeSection={activeSection} />
          <main>
            <Hero />
            <Invitation />
            <Countdown />
            <Rituals />
            <Schedule />
            <Venue />
            <Gallery />
            <Share />
          </main>
          <Closing />
          <BackToTop />
          <MusicControl />
        </>
      )}
    </div>
  );
}
