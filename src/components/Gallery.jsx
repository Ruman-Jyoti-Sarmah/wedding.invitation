import { useCallback, useEffect, useRef, useState } from "react";
import { WEDDING_DATA } from "../data/weddingData";

const OFFSTAGE = "translate(-135%, 3%) rotate(-14deg) scale(0.9)";
const POSITIONS = [
  "translate(0, 0) rotate(-1.6deg) scale(1)",
  "translate(16px, 14px) rotate(2.2deg) scale(0.965)",
  "translate(32px, 28px) rotate(4.4deg) scale(0.93)",
];

export default function Gallery() {
  const { gallery } = WEDDING_DATA;
  const images = gallery.items;
  const total = images.length;
  const [index, setIndex] = useState(0);
  const pointer = useRef({ x: 0, moved: false, active: false });

  const go = useCallback(
    (step) => setIndex((current) => (current + step + total) % total),
    [total]
  );

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const onPointerDown = (event) => {
    pointer.current = { x: event.clientX, moved: false, active: true };
  };

  const onPointerMove = (event) => {
    if (!pointer.current.active) return;
    if (Math.abs(event.clientX - pointer.current.x) > 12) {
      pointer.current.moved = true;
    }
  };

  const onPointerUp = (event) => {
    if (!pointer.current.active) return;

    const delta = event.clientX - pointer.current.x;
    pointer.current.active = false;

    if (Math.abs(delta) > 45) {
      go(delta < 0 ? 1 : -1);
      return;
    }

    if (!pointer.current.moved) go(1);
  };

  const stopDrag = () => {
    pointer.current.active = false;
  };

  const current = images[index];

  return (
    <section className="chapter album" id="gallery" aria-labelledby="album-title">
      <div className="album__inner">
        <header className="album__head reveal">
          <span className="label">{gallery.label}</span>

          <h2 id="album-title">
            {gallery.titleA}
            <br />
            <em>{gallery.titleB}</em>
          </h2>

          <p>{gallery.intro}</p>

          <div className="album__meta">
            <span className="album__count">
              {String(index + 1).padStart(2, "0")}
              <i> / {String(total).padStart(2, "0")}</i>
            </span>
            <span className="label">{gallery.countLabel}</span>
          </div>

          <div className="album__controls">
            <button
              type="button"
              className="album__nav"
              onClick={() => go(-1)}
              aria-label="Previous memory"
            >
              ←
            </button>
            <button
              type="button"
              className="album__nav"
              onClick={() => go(1)}
              aria-label="Next memory"
            >
              →
            </button>
            <span className="album__hint">{gallery.hint}</span>
          </div>
        </header>

        <div
          className="album__stage reveal"
          role="group"
          aria-roledescription="photo album"
          aria-label="Photographs from the wedding courtyard"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={stopDrag}
          onPointerLeave={stopDrag}
        >
          {images.map((image, itemIndex) => {
            const offset = (itemIndex - index + total) % total;
            const isFront = offset === 0;

            return (
              <article
                key={image.id}
                className={`memocard${isFront ? " memocard--front" : ""}`}
                style={{
                  transform: POSITIONS[offset] ?? OFFSTAGE,
                  opacity: offset > 2 ? 0 : 1,
                  zIndex: 30 - offset * 10,
                  pointerEvents: isFront ? "auto" : "none",
                }}
                aria-hidden={!isFront}
              >
                <div className="memocard__photo">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading={offset < 3 ? "eager" : "lazy"}
                    decoding="async"
                    draggable="false"
                  />
                </div>

                <div className="memocard__caption">
                  <span className="memocard__as" lang="as">
                    {image.caption}
                  </span>
                  <span className="memocard__note">{image.note}</span>
                </div>
              </article>
            );
          })}
        </div>

        <p className="visually-hidden" aria-live="polite">
          {`${current.note}, memory ${index + 1} of ${total}`}
        </p>
      </div>
    </section>
  );
}
