import Countdown from "./Countdown";
import { IMAGES, WEDDING_DATA } from "../data/weddingData";

export default function Celebration() {
  const { celebration } = WEDDING_DATA;

  return (
    <section className="chapter celebration" id="celebration">
      <div className="celebration__stage">
        <div className="celebration__media" aria-hidden="true">
          <img
            src={IMAGES.celebration}
            alt=""
            loading="lazy"
            decoding="async"
            data-parallax="0.06"
          />
        </div>

        <div className="celebration__overlay">
          <div className="celebration__content reveal">
            <span className="label">{celebration.label}</span>

            <h2>
              {celebration.titleA}
              <br />
              <em>{celebration.titleB}</em>
            </h2>

            <p>{celebration.body}</p>
            <p className="as" lang="as">
              {celebration.assamese}
            </p>

            <Countdown />

            <div className="celebration__date">
              <span>{celebration.date}</span>
              <span>{celebration.place}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
