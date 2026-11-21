import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const [mode, setMode] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) {
      return undefined;
    }

    document.body.classList.add("has-cursor");

    const dot = dotRef.current;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let frame = 0;

    const render = () => {
      x += (targetX - x) * 0.2;
      y += (targetY - y) * 0.2;
      if (dot) {
        dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
      frame = window.requestAnimationFrame(render);
    };

    const onMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const onOver = (event) => {
      const host = event.target.closest?.("[data-cursor]");
      setMode(host?.dataset.cursor ?? "");
    };

    frame = window.requestAnimationFrame(render);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });

    return () => {
      document.body.classList.remove("has-cursor");
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className={`cursor ${mode ? `cursor--${mode}` : ""}`}
      aria-hidden="true"
    >
      <span>{mode === "view" ? "View" : ""}</span>
    </div>
  );
}
