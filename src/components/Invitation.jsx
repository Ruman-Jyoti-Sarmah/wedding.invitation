import { WEDDING_DATA } from "../data/weddingData";
import { GamosaBand, GoldDivider, SectionDecor } from "./Ornaments";

export default function Invitation() {
  return (
    <section className="section section--paper invite" id="invitation">
      <SectionDecor />

      <div className="container">
        <div className="invite__paper reveal" data-parallax="-0.03">
          <GamosaBand className="invite__band" />

          <div className="invite__inner">
            <span className="invite__kicker">{WEDDING_DATA.invitationKicker}</span>

            <h2 className="invite__title">{WEDDING_DATA.invitationTo}</h2>

            <p className="invite__lede">{WEDDING_DATA.invitationLede}</p>

            <p className="invite__body">{WEDDING_DATA.invitationBody}</p>

            <GoldDivider className="invite__divider" />

            <p className="invite__names">
              {WEDDING_DATA.groom.name}
              <em>♥</em>
              {WEDDING_DATA.bride.name}
            </p>

            <p className="invite__meta">
              {WEDDING_DATA.dateLabel} · {WEDDING_DATA.weekday} ·{" "}
              {WEDDING_DATA.placeLabel}
            </p>

            <p className="invite__sign">আন্তৰিকতাৰে — আমাৰ পৰিয়াল</p>
          </div>

          <GamosaBand className="invite__band" />
        </div>
      </div>
    </section>
  );
}
