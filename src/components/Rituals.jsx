import { WEDDING_DATA } from "../data/weddingData";
import { SectionDecor, SectionHeading } from "./Ornaments";

export default function Rituals() {
  return (
    <section className="section section--cream rituals" id="rituals">
      <SectionDecor />

      <div className="container">
        <SectionHeading
          kicker="ৰীতি-নীতি"
          title={WEDDING_DATA.ritualsHeading}
          subtitle={WEDDING_DATA.ritualsIntro}
        />

        <div className="rituals__grid">
          {WEDDING_DATA.rituals.map((ritual, index) => (
            <article
              className={`ritual reveal reveal-delay-${(index % 3) + 1}`}
              key={ritual.id}
            >
              <div className="ritual__media">
                <img
                  src={ritual.image}
                  alt={ritual.name}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="ritual__body">
                <span className="ritual__num">{ritual.number}</span>
                <h3 className="ritual__title">{ritual.name}</h3>
                <p className="ritual__text">{ritual.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
