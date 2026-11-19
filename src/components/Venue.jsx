import { QRCodeSVG } from "qrcode.react";
import { CalendarDays, Clock, MapPin, Navigation, QrCode } from "lucide-react";
import { WEDDING_DATA } from "../data/weddingData";
import { SectionDecor, SectionHeading } from "./Ornaments";

export default function Venue() {
  const { venue } = WEDDING_DATA;

  return (
    <section className="section section--green venue" id="venue">
      <SectionDecor dark />

      <div className="container">
        <SectionHeading
          light
          kicker={venue.kicker}
          title={venue.name}
          subtitle={venue.note}
        />

        <div className="venue__grid">
          <figure className="venue__media reveal" data-parallax="-0.05">
            <img
              src={venue.image}
              alt="অসমৰ পৰম্পৰাগত বিয়াঘৰ"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <MapPin size={14} strokeWidth={1.7} aria-hidden="true" />
              {venue.imageCaption}
            </figcaption>
          </figure>

          <div className="venue__card reveal reveal-delay-1">
            <span className="venue__label">ঠিকনা</span>
            <h3 className="venue__name">{venue.subtitle}</h3>
            <p className="venue__address">{venue.address}</p>

            <ul className="venue__facts">
              <li>
                <CalendarDays size={15} strokeWidth={1.6} aria-hidden="true" />
                {WEDDING_DATA.dateLabel} · {WEDDING_DATA.weekday}
              </li>
              <li>
                <Clock size={15} strokeWidth={1.6} aria-hidden="true" />
                {WEDDING_DATA.timeLabel}
              </li>
              <li>
                <MapPin size={15} strokeWidth={1.6} aria-hidden="true" />
                {WEDDING_DATA.assameseDate} · {WEDDING_DATA.placeLabel}
              </li>
            </ul>

            <div className="venue__actions">
              <a
                className="btn btn--gold"
                href={venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation size={15} strokeWidth={1.7} aria-hidden="true" />
                মেপত চাওক
              </a>
              <a
                className="btn btn--ghost"
                href={venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin size={15} strokeWidth={1.7} aria-hidden="true" />
                পথ নিৰ্দেশ
              </a>
            </div>

            <div className="venue__qr">
              <span className="venue__qr-box">
                <QRCodeSVG
                  value={venue.mapsUrl}
                  size={104}
                  bgColor="#FBF6EA"
                  fgColor="#0E2A20"
                  level="M"
                  title="বিয়াঘৰৰ অৱস্থান"
                />
              </span>
              <div>
                <strong>
                  <QrCode
                    size={14}
                    strokeWidth={1.7}
                    aria-hidden="true"
                    style={{ display: "inline", verticalAlign: "-2px", marginRight: 6 }}
                  />
                  স্কেন কৰি ঠাই চাওক
                </strong>
                <span>
                  এই QR কোডটো স্কেন কৰিলে Google Maps ত আমাৰ বিয়াঘৰৰ অৱস্থান খুলিব।
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
