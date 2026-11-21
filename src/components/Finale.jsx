import { IMAGES, WEDDING_DATA } from "../data/weddingData";

export default function Finale() {
  const { finale, rsvp } = WEDDING_DATA;

  return (
    <section className="finale" aria-label="With love">
      <div className="finale__stage">
        <div
          className="finale__bg"
          style={{ backgroundImage: `url("${IMAGES.finale}")` }}
          aria-hidden="true"
        />
        <div className="finale__veil" aria-hidden="true" />

        <div className="finale__content">
          <span className="label finale__label">{finale.label}</span>

          <h2>
            {finale.titleA}
            <br />
            <em>{finale.titleB}</em>
          </h2>

          <p className="finale__quote as" lang="as">
            {finale.quote}
          </p>

          <div className="finale__cta">
            <a
              className="btn btn--solid"
              href={rsvp.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {finale.cta}
            </a>
            <span className="label finale__note">{finale.ctaNote}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
