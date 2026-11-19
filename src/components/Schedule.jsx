import { WEDDING_DATA } from "../data/weddingData";
import { SectionDecor, SectionHeading } from "./Ornaments";

export default function Schedule() {
  return (
    <section className="section section--paper sched" id="schedule">
      <SectionDecor />

      <div className="container">
        <SectionHeading
          kicker="কাৰ্যসূচী"
          title={WEDDING_DATA.scheduleHeading}
          subtitle={WEDDING_DATA.scheduleDate}
        />

        <div className="sched__list">
          {WEDDING_DATA.schedule.map((item, index) => (
            <div
              className={`sched__item reveal reveal-delay-${(index % 4) + 1}`}
              key={item.title}
            >
              <div className="sched__time">{item.time}</div>

              <div className="sched__marker" aria-hidden="true">
                <span />
              </div>

              <div className="sched__card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="sched__meta">{item.meta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
