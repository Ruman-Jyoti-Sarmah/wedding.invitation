import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { WEDDING_DATA } from "../data/weddingData";
import { SectionDecor, SectionHeading } from "./Ornaments";

export default function Gallery() {
  const images = WEDDING_DATA.galleryImages;
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
      <section className="section section--paper gal" id="gallery">
        <SectionDecor />

        <div className="container">
          <SectionHeading
            kicker="ফটো"
            title={WEDDING_DATA.galleryHeading}
            subtitle={WEDDING_DATA.galleryIntro}
          />

          <div className="gal__grid">
            {images.map((image, index) => (
              <button
                type="button"
                key={image.id}
                className="gal__item reveal"
                onClick={() => setOpenIndex(index)}
                aria-label={`ডাঙৰ কৰি চাওক: ${image.caption}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                />
                <span className="gal__cap">{image.caption}</span>
                <span className="gal__expand" aria-hidden="true">
                  <Maximize2 size={12} strokeWidth={1.8} />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {isOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="ফটো চোৱাৰ স্থান"
          onClick={close}
        >
          <button
            type="button"
            className="lightbox__close"
            onClick={close}
            aria-label="বন্ধ কৰক"
          >
            <X size={20} strokeWidth={1.8} />
          </button>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            onClick={(event) => {
              event.stopPropagation();
              prev();
            }}
            aria-label="আগৰ ফটো"
          >
            <ChevronLeft size={22} strokeWidth={1.8} />
          </button>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
            aria-label="পৰৱৰ্তী ফটো"
          >
            <ChevronRight size={22} strokeWidth={1.8} />
          </button>

          <figure className="lightbox__figure" onClick={(event) => event.stopPropagation()}>
            <img
              key={images[openIndex].id}
              className="lightbox__img"
              src={images[openIndex].src}
              alt={images[openIndex].alt}
            />
            <figcaption className="lightbox__cap">
              {images[openIndex].caption} · {openIndex + 1} / {images.length}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
