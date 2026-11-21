import { useEffect, useState } from "react";
import { WEDDING_DATA } from "../data/weddingData";

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <a className="nav__logo" href="#home" aria-label="Back to top">
          {WEDDING_DATA.monogram}
        </a>

        <nav aria-label="Primary">
          <ul className="nav__links">
            {WEDDING_DATA.navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={activeSection === link.id ? "is-active" : ""}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          className="nav__book"
          href={WEDDING_DATA.rsvp.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          {WEDDING_DATA.rsvp.label}
        </a>

        <button
          type="button"
          className="nav__toggle"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? "Close" : "Menu"}
        </button>
      </header>

      {open && (
        <div className="nav__menu">
          {WEDDING_DATA.navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href={WEDDING_DATA.rsvp.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            {WEDDING_DATA.rsvp.label}
          </a>
        </div>
      )}
    </>
  );
}
