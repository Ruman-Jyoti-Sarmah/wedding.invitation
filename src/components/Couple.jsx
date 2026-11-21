import { IMAGES, WEDDING_DATA } from "../data/weddingData";

export default function Couple() {
  const { couple } = WEDDING_DATA;

  return (
    <section className="chapter arch" id="couple">
      <div className="arch__media">
        <div className="arch__frame">
          <img
            src={IMAGES.couple}
            alt="The couple, wrapped in the garland ceremony"
            loading="lazy"
            decoding="async"
            data-parallax="0.06"
          />
        </div>

        <div className="arch__caption reveal">
          <span className="label">{couple.label}</span>
          <h3>{couple.title}</h3>
        </div>

        <figure className="arch__detail reveal">
          <img
            src={IMAGES.coupleDetail}
            alt="Garlands prepared for the wedding"
            loading="lazy"
            decoding="async"
            data-parallax="-0.05"
          />
          <figcaption>{couple.detailCaption}</figcaption>
        </figure>
      </div>

      <div className="arch__facts">
        {couple.facts.map((fact) => (
          <div className="reveal" key={fact.label}>
            <span className="label">{fact.label}</span>
            <h4>{fact.title}</h4>
            <p>{fact.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
