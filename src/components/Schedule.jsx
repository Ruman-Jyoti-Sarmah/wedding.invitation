import { WEDDING_DATA } from "../data/weddingData";

export default function Schedule() {
  const { programme } = WEDDING_DATA;

  return (
    <section className="chapter programme" id="programme">
      <div className="programme__grid">
        <header className="programme__head reveal">
          <span className="label">{programme.label}</span>
          <h2>{programme.heading}</h2>
          <p>{programme.intro}</p>
        </header>

        {programme.items.map((item, index) => (
          <figure className="daycard reveal" key={item.title}>
            <div className="daycard__imgwrap">
              <img
                src={item.image}
                alt={`${item.title} — ${item.meta}`}
                loading="lazy"
                decoding="async"
                data-parallax="0.04"
              />
            </div>

            <figcaption>
              <span className="daycard__time">
                {item.timeEn}
                <em> · {item.time}</em>
              </span>
              <h3>
                <span className="daycard__num">{`0${index + 1}`}</span>
                {item.title}
              </h3>
              <p>{item.text}</p>
              <span className="label daycard__meta">{item.meta}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
