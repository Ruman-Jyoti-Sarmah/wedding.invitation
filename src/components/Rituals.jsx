import { useEffect, useRef } from "react";
import { MoveRight } from "lucide-react";
import { WEDDING_DATA } from "../data/weddingData";
import { GoldDivider, SectionDecor } from "./Ornaments";

/**
 * The rituals are presented as a pinned, horizontally scrolling rail on
 * desktop: the page keeps scrolling down while the cards travel sideways.
 * On smaller screens (and with reduced motion) it becomes a normal stack.
 */
export default function Rituals() {
  const sectionRef = useRef(null);
  const railRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const rail = railRef.current;
    if (!section || !rail) return undefined;

    const cine = window.matchMedia(
      "(min-width: 981px) and (prefers-reduced-motion: no-preference)"
    );

    let frame = 0;

    const measure = () => {
      if (!cine.matches) {
        section.style.setProperty("--travel", "0px");
        return;
      }
      const travel = Math.max(0, rail.scrollWidth - window.innerWidth);
      section.style.setProperty("--travel", `${travel}px`);
    };

    const update = () => {
      frame = 0;
      if (!cine.matches) {
        section.style.setProperty("--p", "0");
        return;
      }

      const navHeight = document.querySelector(".nav")?.offsetHeight ?? 0;
      const rect = section.getBoundingClientRect();
      const span = section.offsetHeight - (window.innerHeight - navHeight);
      const raw = span > 0 ? (navHeight - rect.top) / span : 0;
      const p = Math.min(1, Math.max(0, raw));

      section.style.setProperty("--p", p.toFixed(4));
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("load", onResize);
    cine.addEventListener?.("change", onResize);

    const observer =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(measure)
        : null;
    observer?.observe(rail);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", onResize);
      cine.removeEventListener?.("change", onResize);
      observer?.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="rituals rituals--cine" id="rituals" ref={sectionRef}>
      <div className="rituals__pin">
        <SectionDecor />

        <header className="rituals__head">
          <div className="rituals__head-text">
            <span className="s-kicker">ৰীতি-নীতি</span>
            <h2>{WEDDING_DATA.ritualsHeading}</h2>
            <GoldDivider className="s-divider" />
            <p>{WEDDING_DATA.ritualsIntro}</p>
          </div>

          <span className="rituals__hint" aria-hidden="true">
            স্ক্ৰল কৰক
            <MoveRight size={16} strokeWidth={1.5} />
          </span>
        </header>

        <div className="rituals__viewport">
          <div className="rituals__rail" ref={railRef}>
            {WEDDING_DATA.rituals.map((ritual, index) => (
              <article
                className={`ritual reveal reveal-delay-${(index % 3) + 1}`}
                key={ritual.id}
              >
                <div className="ritual__media">
                  <img
                    src={ritual.image}
                    alt={`${ritual.name} — ${ritual.caption}`}
                    loading={index < 2 ? "eager" : "lazy"}
                    decoding="async"
                  />
                  <span className="ritual__num" aria-hidden="true">
                    {ritual.number}
                  </span>
                  <span className="ritual__caption">{ritual.caption}</span>
                </div>

                <div className="ritual__body">
                  <h3 className="ritual__title">{ritual.name}</h3>
                  <p className="ritual__text">{ritual.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="rituals__foot" aria-hidden="true">
          <span className="rituals__bar">
            <i ref={barRef} />
          </span>
          <span className="rituals__count">
            {WEDDING_DATA.rituals.length} টা ৰীতি
          </span>
        </div>
      </div>
    </section>
  );
}
