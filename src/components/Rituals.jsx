import { useEffect, useRef } from "react";
import { WEDDING_DATA } from "../data/weddingData";

/**
 * The rituals travel sideways while the page keeps scrolling: the section is
 * one viewport tall plus the width of the rail, and the rail is pinned.
 * On smaller screens it becomes a swipeable row.
 */
export default function Rituals() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return undefined;

    const cine = window.matchMedia(
      "(min-width: 981px) and (prefers-reduced-motion: no-preference)"
    );

    let travel = 0;
    let frame = 0;

    const measure = () => {
      if (!cine.matches) {
        travel = 0;
        section.style.height = "";
        track.style.transform = "";
        return;
      }

      travel = Math.max(0, track.scrollWidth - window.innerWidth);
      section.style.height = `${window.innerHeight + travel}px`;
    };

    const update = () => {
      frame = 0;
      if (!cine.matches) {
        if (barRef.current) barRef.current.style.transform = "scaleX(0)";
        return;
      }

      const rect = section.getBoundingClientRect();
      const span = Math.max(1, section.offsetHeight - window.innerHeight);
      const p = Math.min(1, Math.max(0, -rect.top / span));

      track.style.transform = `translate3d(${(-p * travel).toFixed(1)}px, 0, 0)`;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p.toFixed(4)})`;
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    const onResize = () => {
      measure();
      update();
    };

    measure();
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("load", onResize);
    cine.addEventListener?.("change", onResize);

    const observer =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(onResize) : null;
    observer?.observe(track);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", onResize);
      cine.removeEventListener?.("change", onResize);
      observer?.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const { rituals } = WEDDING_DATA;

  return (
    <section className="rituals" id="rituals" ref={sectionRef}>
      <div className="rituals__pin">
        <header className="rituals__head">
          <span className="label">{rituals.label}</span>
          <h2>{rituals.heading}</h2>
          <p>{rituals.intro}</p>
        </header>

        <div className="rituals__viewport">
          <div className="rituals__track" ref={trackRef}>
            {rituals.items.map((ritual) => (
              <article className="ritual" key={ritual.id}>
                <div className="ritual__img">
                  <img
                    src={ritual.image}
                    alt={`${ritual.name} — ${ritual.caption}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="ritual__meta">
                  <span className="ritual__num">{ritual.number}</span>
                  <span className="ritual__kind">{ritual.caption}</span>
                </div>

                <h3 className="ritual__name">{ritual.name}</h3>
                <span className="ritual__english">{ritual.english}</span>
                <p className="ritual__text">{ritual.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="rituals__foot">
          <span className="rituals__progress" aria-hidden="true">
            <i ref={barRef} />
          </span>
          <span className="label rituals__count">{rituals.count}</span>
          <span className="label rituals__hint">{rituals.hint} →</span>
        </div>
      </div>
    </section>
  );
}
