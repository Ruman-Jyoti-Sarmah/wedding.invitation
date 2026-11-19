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
import Marquee from "./components/Marquee";
import Contact from "./components/Contact";
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

  // Depth pass: elements marked with data-parallax drift as the page scrolls.
  useEffect(() => {
    if (!entered) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const nodes = Array.from(document.querySelectorAll("[data-parallax]"));
    if (!nodes.length) return undefined;

    let frame = 0;

    const update = () => {
      frame = 0;
      const viewport = window.innerHeight;

      nodes.forEach((node) => {
        const host = node.parentElement ?? node;
        const rect = host.getBoundingClientRect();
        if (rect.bottom < -260 || rect.top > viewport + 260) return;

        const speed = Number(node.dataset.parallax) || 0.1;
        const centre = rect.top + rect.height / 2 - viewport / 2;
        node.style.setProperty("--parallax", `${(-centre * speed).toFixed(1)}px`);
      });
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
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
            <Marquee dark />
            <Contact />
          </main>
          <Closing />
          <BackToTop />
          <MusicControl />
        </>
      )}
    </div>
  );
}
