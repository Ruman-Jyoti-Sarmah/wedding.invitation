import { useEffect, useState } from "react";
import IntroEnvelope from "./components/IntroEnvelope";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Invitation from "./components/Invitation";
import Couple from "./components/Couple";
import Rituals from "./components/Rituals";
import Celebration from "./components/Celebration";
import Blessings from "./components/Blessings";
import Gallery from "./components/Gallery";
import Venue from "./components/Venue";
import Finale from "./components/Finale";
import Footer from "./components/Footer";
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

  // Deep links (/#venue) land on the right section after the intro.
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

  // Reveal sections and cards softly as they enter the viewport.
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
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
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
        if (rect.bottom < -300 || rect.top > viewport + 300) return;

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
      <Cursor />

      {!entered ? (
        <IntroEnvelope onFinish={handleEnter} />
      ) : (
        <>
          <Navbar activeSection={activeSection} />
          <main>
            <Hero />
            <Invitation />
            <Couple />
            <Rituals />
            <Celebration />
            <Blessings />
            <Gallery />
            <Venue />
          </main>
          <Finale />
          <Footer />
          <BackToTop />
          <MusicControl />
        </>
      )}
    </div>
  );
}
