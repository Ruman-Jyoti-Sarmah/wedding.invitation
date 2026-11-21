import { useEffect, useState } from "react";
import { IMAGES, WEDDING_DATA } from "../data/weddingData";

const HERO_VIDEO = "/media/wedding-hero.mp4";

export default function Hero() {
  const { hero, coupleShort, assameseDate, weekday } = WEDDING_DATA;
  // Guests who prefer reduced motion get the still photograph instead.
  const [showVideo, setShowVideo] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (event) => setShowVideo(!event.matches);
    reduce.addEventListener?.("change", onChange);
    return () => reduce.removeEventListener?.("change", onChange);
  }, []);

  return (
    <section className="hero" id="home" aria-label="The wedding invitation">
      <div
        className="hero__bg"
        data-parallax="0.16"
        style={{ backgroundImage: `url("${IMAGES.hero}")` }}
        aria-hidden="true"
      >
        {showVideo && (
          <video
            className="hero__video"
            src={HERO_VIDEO}
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
      </div>
      <div className="hero__veil" aria-hidden="true" />

      <div className="hero__content">
        <span className="label hero__est">{hero.est}</span>
        <span className="hero__names">{hero.names}</span>

        <h1 className="hero__title">
          <span className="tr-line">
            <span className="tr-inner">{hero.titleA}</span>
          </span>
          <span className="tr-line">
            <span className="tr-inner">
              <em>{hero.titleB}</em>
            </span>
          </span>
        </h1>

        <div className="hero__bottom">
          <div className="hero__support">
            <p>{hero.support}</p>
            <p className="as" lang="as">
              {hero.assamese}
            </p>
          </div>

          <div className="hero__meta">
            <span>{coupleShort}</span>
            <span>{hero.date}</span>
            <span>
              {assameseDate} · {weekday}
            </span>
          </div>

          <a className="hero__scroll" href="#invitation">
            <span>{hero.scroll}</span>
            <i className="hero__scroll-line" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
