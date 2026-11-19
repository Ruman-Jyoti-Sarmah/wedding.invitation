import { WEDDING_DATA } from "../data/weddingData";

const Star = () => <i aria-hidden="true">✦</i>;

/**
 * A slow, endlessly drifting band of the wedding details.
 * Purely decorative — the same information is available in the page text.
 */
export default function Marquee({ reverse = false, dark = false }) {
  const words = WEDDING_DATA.marqueeWords;
  const group = [...words, ...words, ...words];

  return (
    <div
      className={`marquee ${reverse ? "marquee--reverse" : ""} ${
        dark ? "marquee--dark" : ""
      }`}
      aria-hidden="true"
    >
      <div className="marquee__track">
        {[0, 1].map((copy) => (
          <div className="marquee__group" key={copy}>
            {group.map((word, index) => (
              <span key={`${copy}-${index}`}>
                {word}
                <Star />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
