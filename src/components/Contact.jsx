import { MessageCircle, Phone } from "lucide-react";
import { WEDDING_DATA } from "../data/weddingData";
import { SectionDecor, SectionHeading } from "./Ornaments";

export default function Contact() {
  const { contact } = WEDDING_DATA;

  return (
    <section className="section section--paper contact" id="contact">
      <SectionDecor />

      <div className="container">
        <SectionHeading
          kicker={contact.kicker}
          title={contact.heading}
          subtitle={contact.intro}
        />

        <div className="contact__card reveal" data-parallax="-0.04">
          <span className="contact__halo" aria-hidden="true" />

          <span className="contact__label">{contact.name}</span>

          <a className="contact__phone" href={contact.phoneHref}>
            {contact.phone}
          </a>

          <span className="contact__note">{contact.note}</span>

          <div className="contact__actions">
            <a className="btn btn--gold" href={contact.phoneHref}>
              <Phone size={15} strokeWidth={1.7} aria-hidden="true" />
              ফোন কৰক
            </a>
            <a
              className="btn btn--ghost"
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={15} strokeWidth={1.7} aria-hidden="true" />
              WhatsApp
            </a>
          </div>

          <p className="contact__couple">
            {WEDDING_DATA.coupleShort}
            <span aria-hidden="true"> · </span>
            {WEDDING_DATA.placeLabel}
          </p>
        </div>
      </div>
    </section>
  );
}
