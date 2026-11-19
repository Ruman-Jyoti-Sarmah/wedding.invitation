import { useEffect, useState } from "react";
import { WEDDING_DATA, WEDDING_DATE } from "../data/weddingData";
import { padAssamese, toAssameseDigits } from "../data/assamese";
import { SectionHeading } from "./Ornaments";

const TARGET = new Date(WEDDING_DATE).getTime();

const getRemaining = () => {
  const diff = TARGET - Date.now();
  if (diff <= 0) {
    return { days: "০", hours: "০০", minutes: "০০", seconds: "০০", done: true };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days: toAssameseDigits(days),
    hours: padAssamese(hours),
    minutes: padAssamese(minutes),
    seconds: padAssamese(seconds),
    done: false,
  };
};

export default function Countdown() {
  const [time, setTime] = useState(getRemaining);

  useEffect(() => {
    const timer = setInterval(() => setTime(getRemaining()), 1000);
    return () => clearInterval(timer);
  }, []);

  const cells = [
    { value: time.days, label: "দিন" },
    { value: time.hours, label: "ঘণ্টা" },
    { value: time.minutes, label: "মিনিট" },
    { value: time.seconds, label: "ছেকেণ্ড" },
  ];

  return (
    <section className="section section--green count" id="countdown">
      <div className="container">
        <SectionHeading
          light
          kicker="শুভক্ষণ"
          title={WEDDING_DATA.countdownHeading}
          subtitle="আমাৰ জীৱনৰ এই মাংগলিক ক্ষণলৈ আৰু অলপ সময় বাকী — আপোনাৰ আগমনৰ বাট চাই আছোঁ।"
        />

        <div className="count__grid reveal" aria-live="off">
          {cells.map((cell) => (
            <div className="count__cell" key={cell.label}>
              <span className="count__num">{cell.value}</span>
              <span className="count__label">{cell.label}</span>
            </div>
          ))}
        </div>

        <p className="count__note">
          {time.done ? (
            <>শুভ বিবাহ সম্পন্ন হ&apos;ল — আপোনালোকৰ আশীৰ্বাদৰ বাবে ধন্যবাদ।</>
          ) : (
            <>
              <strong>{WEDDING_DATA.dateLabel}</strong> · {WEDDING_DATA.weekday} ·{" "}
              {WEDDING_DATA.placeLabel}
            </>
          )}
        </p>
      </div>
    </section>
  );
}
