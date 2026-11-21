import { IMAGES, WEDDING_DATA } from "../data/weddingData";

export default function Hero() {
  const { hero, coupleShort, assameseDate, weekday } = WEDDING_DATA;

  return (
    <section className="hero" id="home" aria-label="The wedding invitation">
      <div
        className="hero__bg"
        data-parallax="0.16"
        style={{ backgroundImage: `url("${IMAGES.hero}")` }}
        aria-hidden="true"
      />
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
