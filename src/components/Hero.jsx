import { CornerFlourish, GoldDivider } from "./Ornaments";
import { WEDDING_DATA } from "../data/weddingData";

const heroImage =
  "https://images.unsplash.com/photo-1661142175513-a5f0871f1ad1?q=80&w=2200&auto=format&fit=crop";

export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="শুভ বিবাহ">
      <div
        className="hero__bg"
        style={{ backgroundImage: `url("${heroImage}")` }}
        aria-hidden="true"
      />
      <div className="hero__veil" aria-hidden="true" />
      <div className="hero__frame" aria-hidden="true" />

      <CornerFlourish className="hero__corner hero__corner--tl" />
      <CornerFlourish className="hero__corner hero__corner--tr" />
      <CornerFlourish className="hero__corner hero__corner--bl" />
      <CornerFlourish className="hero__corner hero__corner--br" />

      <div className="hero__content">
        <span className="hero__eyebrow">{WEDDING_DATA.heroEyebrow}</span>

        <h1 className="hero__names">
          <span>{WEDDING_DATA.groom.name}</span>
          <em className="hero__amp">ও</em>
          <span>{WEDDING_DATA.bride.name}</span>
        </h1>

        <GoldDivider className="hero__rule" />

        <p className="hero__date">
          {WEDDING_DATA.dateLabel}
          <span>·</span>
          {WEDDING_DATA.weekday}
        </p>
        <p className="hero__place">
          {WEDDING_DATA.placeLabel} · {WEDDING_DATA.assameseDate}
        </p>

        <p className="hero__line">{WEDDING_DATA.heroLine}</p>

        <div className="hero__actions">
          <a className="btn btn--gold" href="#invitation">
            নিমন্ত্ৰণী চাওক
          </a>
          <a className="btn btn--ghost" href="#venue">
            বিয়াঘৰৰ ঠাই
          </a>
        </div>
      </div>

      <a className="hero__scroll" href="#invitation" aria-label="তললৈ যাওক">
        <span>তললৈ</span>
        <i aria-hidden="true" />
      </a>
    </section>
  );
}
