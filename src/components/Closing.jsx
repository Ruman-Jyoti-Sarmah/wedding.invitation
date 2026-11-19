import { WEDDING_DATA } from "../data/weddingData";
import { Crest, GoldDivider, SectionDecor } from "./Ornaments";

export default function Closing() {
  return (
    <footer className="closing" id="closing" aria-label="শেষৰ আশীৰ্বাদ">
      <SectionDecor dark />

      <div className="closing__inner">
        <Crest mark={WEDDING_DATA.coupleInitials} light className="reveal" />

        <p className="closing__quote reveal">{WEDDING_DATA.closingQuote}</p>

        <p className="closing__names reveal reveal-delay-1">
          {WEDDING_DATA.groom.name}
          <em>♥</em>
          {WEDDING_DATA.bride.name}
        </p>

        <p className="closing__sign reveal reveal-delay-2">
          {WEDDING_DATA.closingSignoff}
        </p>

        <p className="closing__date reveal reveal-delay-3">
          {WEDDING_DATA.dateLabel} · {WEDDING_DATA.weekday} ·{" "}
          {WEDDING_DATA.placeLabel}
        </p>

        <GoldDivider className="closing__rule reveal" />
      </div>

      <div className="closing__foot">{WEDDING_DATA.closingFooter}</div>
    </footer>
  );
}
