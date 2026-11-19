import { useEffect, useState } from "react";
import { CornerFlourish, GoldDivider } from "./Ornaments";
import { WEDDING_DATA } from "../data/weddingData";

export default function IntroEnvelope({ onFinish }) {
  const [opening, setOpening] = useState(false);

  useEffect(() => {
    if (!opening) return undefined;
    const timer = setTimeout(onFinish, 820);
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
    <div className={`intro ${opening ? "is-open" : ""}`}>
      <div className="intro__glow" aria-hidden="true" />
      <div className="intro__frame" aria-hidden="true" />

      <CornerFlourish className="intro__corner intro__corner--tl" />
      <CornerFlourish className="intro__corner intro__corner--tr" />
      <CornerFlourish className="intro__corner intro__corner--bl" />
      <CornerFlourish className="intro__corner intro__corner--br" />

      <div className="intro__inner">
        <span className="intro__eyebrow">শুভ বিবাহ</span>

        <h1 className="intro__names">
          {WEDDING_DATA.groom.name}
          <em>ও</em>
          {WEDDING_DATA.bride.name}
        </h1>

        <GoldDivider className="intro__rule" />

        <p className="intro__date">
          {WEDDING_DATA.dateLabel} · {WEDDING_DATA.weekday}
        </p>

        <button
          type="button"
          className="intro__seal"
          onClick={() => setOpening(true)}
          aria-label="নিমন্ত্ৰণীখন খোলক"
        >
          <span>
            <span className="intro__seal-mark">
              {WEDDING_DATA.groom.initial}
              <em> ♥ </em>
              {WEDDING_DATA.bride.initial}
            </span>
            <small>খোলক</small>
          </span>
        </button>

        <p className="intro__hint">মোহৰত টিপ দি নিমন্ত্ৰণীখন খোলক</p>

        <button
          type="button"
          className="intro__skip"
          onClick={() => setOpening(true)}
        >
          পাছত চাওঁ
        </button>
      </div>
    </div>
  );
}
