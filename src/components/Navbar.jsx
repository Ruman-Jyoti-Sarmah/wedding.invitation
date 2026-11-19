import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { WEDDING_DATA } from "../data/weddingData";

const LINKS = [
  { id: "invitation", label: "নিমন্ত্ৰণ" },
  { id: "rituals", label: "ৰীতি-নীতি" },
  { id: "schedule", label: "কাৰ্যসূচী" },
  { id: "venue", label: "বিয়াঘৰ" },
  { id: "gallery", label: "ফটো" },
  { id: "contact", label: "যোগাযোগ" },
];

export default function Navbar({ activeSection }) {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight || 1;
      setStuck(top > 40);
      setProgress(Math.min(1, Math.max(0, top / height)));
      if (top > 40) setOpen(false);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${stuck ? "is-stuck" : ""}`}>
      <div className="nav__inner">
        <a className="nav__brand" href="#home" aria-label="জয়ন্ত আৰু বন্দিতা — ওপৰলৈ">
          <span className="nav__monogram" aria-hidden="true">
            {WEDDING_DATA.groom.initial}
            <span className="nav__monogram-amp">·</span>
            {WEDDING_DATA.bride.initial}
          </span>
          <span className="nav__brand-text">
            {WEDDING_DATA.groom.name}
            <em> ♥ </em>
            {WEDDING_DATA.bride.name}
          </span>
        </a>

        <nav aria-label="মূল পথনিৰ্দেশনা">
          <ul className={`nav__links ${open ? "is-open" : ""}`}>
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  className={`nav__link ${
                    activeSection === link.id ? "is-active" : ""
                  }`}
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="nav__toggle"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "মেনু বন্ধ কৰক" : "মেনু খোলক"}
        >
          {open ? <X size={20} strokeWidth={1.6} /> : <Menu size={20} strokeWidth={1.6} />}
        </button>

        <span
          className="nav__progress"
          style={{ "--progress": progress }}
          aria-hidden="true"
        />
      </div>
    </header>
  );
}
