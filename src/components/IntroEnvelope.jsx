import { useEffect, useState } from "react";
import { IMAGES, WEDDING_DATA, WEDDING_VIDEO } from "../data/weddingData";

export default function IntroEnvelope({ onFinish }) {
  const [opening, setOpening] = useState(false);

  // Guests who prefer reduced motion keep the still photograph.
  const [showVideo, setShowVideo] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (event) => setShowVideo(!event.matches);
    reduce.addEventListener?.("change", onChange);
    return () => reduce.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    if (!opening) return undefined;
    const timer = setTimeout(onFinish, 900);
    return () => clearTimeout(timer);
  }, [opening, onFinish]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Enter" || event.key === "Escape") setOpening(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className={`gate ${opening ? "is-open" : ""}`}>
      <div className="gate__media" aria-hidden="true">
        {showVideo && (
          <video
            className="gate__video"
            src={WEDDING_VIDEO}
            poster={IMAGES.hero}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            tabIndex={-1}
            disablePictureInPicture
          />
        )}
        <div className="gate__veil" />
      </div>

      <div className="gate__glow" aria-hidden="true" />

      <div className="gate__inner">
        <span className="label gate__est">{WEDDING_DATA.hero.est}</span>

        <h1 className="gate__names">
          <span>{WEDDING_DATA.groom.name}</span>
          <em>&amp;</em>
          <span>{WEDDING_DATA.bride.name}</span>
        </h1>

        <span className="gate__rule" aria-hidden="true" />

        <p className="gate__date">
          {WEDDING_DATA.dateLabel} · {WEDDING_DATA.weekday}
        </p>
        <p className="gate__place">{WEDDING_DATA.placeLabel}</p>

        <button
          type="button"
          className="gate__seal"
          onClick={() => setOpening(true)}
          aria-label="Open the invitation"
        >
          <span className="gate__seal-mark">{WEDDING_DATA.monogram}</span>
          <span className="gate__seal-word">Open</span>
        </button>

        <p className="gate__note as" lang="as">
          মোহৰত টিপ দি নিমন্ত্ৰণীখন খোলক
        </p>
      </div>
    </div>
  );
}
