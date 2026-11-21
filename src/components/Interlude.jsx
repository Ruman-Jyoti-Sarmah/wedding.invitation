import { WEDDING_DATA } from "../data/weddingData";
import { CornerFlourish, GoldDivider } from "./Ornaments";

const backdrop =
  "https://images.unsplash.com/photo-1635192592106-77a5aacbe1a3?q=80&w=2000&auto=format&fit=crop";

/** A full-bleed cinematic pause between the countdown and the rituals. */
export default function Interlude() {
  return (
    <section className="interlude" id="interlude" aria-label="আশীৰ্বাদ">
      <div
        className="interlude__bg"
        data-parallax="0.2"
        style={{ backgroundImage: `url("${backdrop}")` }}
        aria-hidden="true"
      />
      <div className="interlude__veil" aria-hidden="true" />

      <CornerFlourish className="interlude__corner interlude__corner--tl" />
      <CornerFlourish className="interlude__corner interlude__corner--br" />

      <div className="interlude__inner reveal">
        <span className="interlude__kicker">আশীৰ্বাদ</span>
        <blockquote>{WEDDING_DATA.closingQuote}</blockquote>
        <GoldDivider className="interlude__rule" />
        <span className="interlude__meta">
          {WEDDING_DATA.coupleShort}
          <i aria-hidden="true"> · </i>
          {WEDDING_DATA.dateLabel}
        </span>
      </div>
    </section>
  );
}
