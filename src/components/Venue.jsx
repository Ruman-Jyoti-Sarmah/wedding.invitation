import { QRCodeSVG } from "qrcode.react";
import { WEDDING_DATA } from "../data/weddingData";

export default function Venue() {
  const { venue, rsvp } = WEDDING_DATA;

  return (
    <section className="chapter location" id="venue">
      <div className="location__inner">
        <div className="location__title reveal">
          <span className="label">{venue.label}</span>

          <h2>
            {venue.titleA}
            <br />
            <em>{venue.titleB}</em>
          </h2>

          <p className="location__body">{venue.body}</p>

          <div className="location__facts">
            {venue.facts.map((fact) => (
              <div className="location__fact" key={fact.label}>
                <span className="label">{fact.label}</span>
                <span>{fact.value}</span>
              </div>
            ))}
          </div>

          <div className="location__actions">
            <a
              className="btn btn--solid"
              href={venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Plan Your Arrival
            </a>
            <a
              className="btn"
              href={rsvp.phoneHref}
              aria-label={`Call ${rsvp.phone}`}
            >
              Call Us
            </a>
          </div>

          <div className="location__qr">
            <span className="location__qr-tile">
              <QRCodeSVG
                value={venue.mapsUrl}
                size={92}
                bgColor="#f2ede3"
                fgColor="#0c0b09"
                level="M"
                title="Wedding venue location"
              />
            </span>
            <div>
              <strong>{venue.qrLabel}</strong>
              <span>{venue.qrNote}</span>
            </div>
          </div>
        </div>

        <figure className="location__map">
          <div className="location__mapwrap">
            <img
              src={venue.image}
              alt={venue.imageCaption}
              loading="lazy"
              decoding="async"
              data-parallax="0.04"
            />
          </div>
          <span
            className="location__pin"
            style={{ top: venue.mapPin.top, left: venue.mapPin.left }}
            aria-hidden="true"
          />
          <figcaption className="label">{venue.imageCaption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
