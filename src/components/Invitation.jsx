import { WEDDING_DATA } from "../data/weddingData";

export default function Invitation() {
  const { intro } = WEDDING_DATA;

  return (
    <section className="chapter scene" id="invitation">
      <div className="intro">
        <div className="intro__stage">
          <figure className="intro__img1" data-parallax="0.05">
            <img
              src={intro.images[0].src}
              alt={intro.images[0].alt}
              loading="lazy"
              decoding="async"
            />
          </figure>

          <figure className="intro__img2" data-parallax="-0.06">
            <img
              src={intro.images[1].src}
              alt={intro.images[1].alt}
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className="intro__content reveal">
            <span className="label intro__label">{intro.label}</span>

            <h2 className="intro__title">
              {intro.titleA}
              <span className="intro__title-mid">
                <em>{intro.titleB}</em>
              </span>
            </h2>

            <p className="intro__body">{intro.body}</p>
            <p className="intro__body as" lang="as">
              {intro.assamese}
            </p>
            <p className="label intro__sign">{intro.signature}</p>
          </div>

          <div className="intro__captions" aria-hidden="true">
            <span>{intro.images[0].caption}</span>
            <span>{intro.images[1].caption}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
