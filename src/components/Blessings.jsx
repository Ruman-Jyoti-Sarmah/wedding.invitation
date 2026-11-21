import { useEffect, useRef, useState } from "react";
import { WEDDING_DATA } from "../data/weddingData";

const STORAGE_KEY = "jb-blessings";
const PETALS_PER_TAP = 16;

let petalSeq = 0;

const makePetal = () => {
  petalSeq += 1;
  return {
    id: petalSeq,
    left: `${(Math.random() * 100).toFixed(2)}%`,
    delay: `${(Math.random() * 0.9).toFixed(2)}s`,
    duration: `${(3.2 + Math.random() * 2.4).toFixed(2)}s`,
    size: `${(7 + Math.random() * 9).toFixed(1)}px`,
    sway: `${(Math.random() * 22 - 11).toFixed(0)}vw`,
    spin: `${(Math.random() * 720 - 360).toFixed(0)}deg`,
  };
};

const readCount = () => {
  try {
    return Number(window.localStorage.getItem(STORAGE_KEY)) || 0;
  } catch {
    return 0;
  }
};

export default function Blessings() {
  const { joy } = WEDDING_DATA;
  const [petals, setPetals] = useState([]);
  const [shown, setShown] = useState(0);
  const [touched, setTouched] = useState(false);
  const [count, setCount] = useState(readCount);
  const timers = useRef([]);

  useEffect(
    () => () => {
      timers.current.forEach(window.clearTimeout);
    },
    []
  );

  const shower = () => {
    setTouched(true);
    setShown((index) => (index + 1) % joy.blessings.length);

    setCount((previous) => {
      const next = previous + 1;
      try {
        window.localStorage.setItem(STORAGE_KEY, String(next));
      } catch {
        /* a private window simply keeps the count for this visit */
      }
      return next;
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const batch = Array.from({ length: PETALS_PER_TAP }, makePetal);
    const ids = new Set(batch.map((petal) => petal.id));
    setPetals((current) => [...current, ...batch]);

    const timer = window.setTimeout(() => {
      setPetals((current) => current.filter((petal) => !ids.has(petal.id)));
    }, 4600);

    timers.current.push(timer);
  };

  const blessing = joy.blessings[shown];

  return (
    <section className="chapter joy" id="joy" aria-labelledby="joy-title">
      <div className="joy__glow" aria-hidden="true" />

      <div className="joy__petals" aria-hidden="true">
        {petals.map((petal) => (
          <span
            key={petal.id}
            className="petal"
            style={{
              left: petal.left,
              animationDelay: petal.delay,
              animationDuration: petal.duration,
              "--size": petal.size,
              "--sway": petal.sway,
              "--spin": petal.spin,
            }}
          />
        ))}
      </div>

      <div className="joy__inner">
        <span className="label reveal">{joy.label}</span>

        <h2 className="reveal" id="joy-title">
          {joy.titleA}
          <br />
          <em>{joy.titleB}</em>
        </h2>

        <p className="joy__intro reveal">{joy.intro}</p>

        <button type="button" className="joy__btn reveal" onClick={shower}>
          <svg className="joy__flower" viewBox="0 0 40 40" aria-hidden="true">
            <g fill="currentColor">
              {Array.from({ length: 12 }, (_, index) => (
                <ellipse
                  key={index}
                  cx="20"
                  cy="9.6"
                  rx="3.1"
                  ry="7.4"
                  opacity={0.55 + (index % 3) * 0.15}
                  transform={`rotate(${index * 30} 20 20)`}
                />
              ))}
            </g>
            <circle cx="20" cy="20" r="4.2" fill="#7a4a12" />
          </svg>
          <span>{touched ? joy.actionAgain : joy.action}</span>
        </button>

        <div className="joy__read" aria-live="polite">
          {touched ? (
            <>
              <p key={`as-${shown}`} className="joy__blessing as" lang="as">
                {blessing.as}
              </p>
              <p key={`en-${shown}`} className="joy__en">
                {blessing.en}
              </p>
            </>
          ) : (
            <p className="joy__en joy__hint">{joy.hint}</p>
          )}
        </div>

        <div className="joy__count">
          <span className="joy__count-num">
            {String(count).padStart(2, "0")}
          </span>
          <span className="label">{joy.countLabel}</span>
        </div>
      </div>
    </section>
  );
}
