import { useEffect, useState } from "react";
import { WEDDING_DATE } from "../data/weddingData";

const TARGET = new Date(WEDDING_DATE).getTime();

const pad = (value) => String(value).padStart(2, "0");

const getRemaining = () => {
  const diff = TARGET - Date.now();
  if (diff <= 0) {
    return { days: "00", hours: "00", minutes: "00", seconds: "00", done: true };
  }

  const total = Math.floor(diff / 1000);
  return {
    days: pad(Math.floor(total / 86400)),
    hours: pad(Math.floor((total % 86400) / 3600)),
    minutes: pad(Math.floor((total % 3600) / 60)),
    seconds: pad(total % 60),
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
    { value: time.days, label: "Days" },
    { value: time.hours, label: "Hours" },
    { value: time.minutes, label: "Minutes" },
    { value: time.seconds, label: "Seconds" },
  ];

  return (
    <div className="count" aria-live="off">
      {cells.map((cell) => (
        <div className="count__cell" key={cell.label}>
          <span className="count__num">{cell.value}</span>
          <span className="count__label">{cell.label}</span>
        </div>
      ))}
    </div>
  );
}
