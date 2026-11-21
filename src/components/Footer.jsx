import { WEDDING_DATA } from "../data/weddingData";

export default function Footer() {
  const { footer, rsvp, dateLabel, placeLabel } = WEDDING_DATA;

  return (
    <footer className="footer" id="closing">
      <div className="footer__top">
        <div>
          <div className="footer__logo">{WEDDING_DATA.monogram}</div>
          <p className="label footer__tag">{footer.tagline}</p>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <h4 className="label">{footer.exploreTitle}</h4>
            <ul>
              {WEDDING_DATA.navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="label">{footer.reachTitle}</h4>
            <ul>
              <li>
                <a href={rsvp.whatsappHref} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={rsvp.phoneHref}>{rsvp.phone}</a>
              </li>
              <li>
                <address>
                  {WEDDING_DATA.venue.address}
                </address>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="label">{footer.dayTitle}</h4>
            <ul>
              {footer.dayLines.map((line) => (
                <li key={line}>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span>{footer.bottomLeft}</span>
        <span>
          {dateLabel} · {placeLabel}
        </span>
        <span>{footer.bottomRight}</span>
      </div>
    </footer>
  );
}
