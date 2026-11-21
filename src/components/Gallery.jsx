import { useCallback, useEffect, useState } from "react";
import { WEDDING_DATA } from "../data/weddingData";

export default function Gallery() {
  const { gallery } = WEDDING_DATA;
  const images = gallery.items;
  const [openIndex, setOpenIndex] = useState(null);
  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );
  const prev = useCallback(
    () =>
      setOpenIndex((i) =>
        i === null ? null : (i - 1 + images.length) % images.length
      ),
    [images.length]
  );

  useEffect(() => {
    if (!isOpen) return undefined;

    document.body.classList.add("lightbox-open");
    const onKey = (event) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.classList.remove("lightbox-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, next, prev]);

  return (
    <>
      <section className="chapter gallery" id="gallery">
        <header className="gallery__head reveal">
          <span className="label">{gallery.label}</span>
          <h2>{gallery.heading}</h2>
          <p>{gallery.intro}</p>
        </header>

        <div className="gallery__flow">
          {images.map((image, index) => (
            <figure className={`gitem gitem--${index + 1} reveal`} key={image.id}>
              <button
                type="button"
                data-cursor="view"
                onClick={() => setOpenIndex(index)}
                aria-label={`View ${image.note} larger`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                />
              </button>
              <figcaption>
                {image.caption} <span>· {image.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <div
        className={`lightbox ${isOpen ? "lightbox--open" : ""}`}
        role="dialog"
        aria-modal={isOpen ? "true" : "false"}
        aria-label="Photographs"
        onClick={close}
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          className="lightbox__close"
          onClick={close}
          aria-label="Close"
        >
          Close
        </button>

        <button
          type="button"
          className="lightbox__nav lightbox__nav--prev"
          onClick={(event) => {
            event.stopPropagation();
            prev();
          }}
          aria-label="Previous photograph"
        >
          ←
        </button>

        <button
          type="button"
          className="lightbox__nav lightbox__nav--next"
          onClick={(event) => {
            event.stopPropagation();
            next();
          }}
          aria-label="Next photograph"
        >
          →
        </button>

        {isOpen && (
          <figure
            className="lightbox__stage"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={images[openIndex].src} alt={images[openIndex].alt} />
            <figcaption className="lightbox__caption">
              <span className="label">
                {images[openIndex].caption} · {images[openIndex].note}
              </span>
              <span className="lightbox__count">
                {`${String(openIndex + 1).padStart(2, "0")} / ${String(
                  images.length
                ).padStart(2, "0")}`}
              </span>
            </figcaption>
          </figure>
        )}
      </div>
    </>
  );
}
