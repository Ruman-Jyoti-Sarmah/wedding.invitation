import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { MUSIC_VIDEO_ID } from "../data/weddingData";

const EMBED_URL =
  `https://www.youtube.com/embed/${MUSIC_VIDEO_ID}` +
  "?enablejsapi=1&autoplay=1&mute=1&loop=1&playsinline=1&controls=0&rel=0&modestbranding=1" +
  `&playlist=${MUSIC_VIDEO_ID}`;

export default function MusicControl() {
  const frameRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const send = (func, args = []) => {
    frameRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args }),
      "*"
    );
  };

  // The song starts muted (allowed by browsers) and is unmuted on the guest's
  // first interaction, so the invitation opens with music without a hard block.
  useEffect(() => {
    const start = () => {
      send("unMute");
      send("setVolume", [45]);
      send("playVideo");
      setPlaying(true);
    };

    const timer = setTimeout(start, 1200);
    const onFirstInteraction = () => {
      start();
      window.removeEventListener("pointerdown", onFirstInteraction);
      window.removeEventListener("keydown", onFirstInteraction);
      window.removeEventListener("scroll", onFirstInteraction);
    };

    window.addEventListener("pointerdown", onFirstInteraction);
    window.addEventListener("keydown", onFirstInteraction);
    window.addEventListener("scroll", onFirstInteraction, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("pointerdown", onFirstInteraction);
      window.removeEventListener("keydown", onFirstInteraction);
      window.removeEventListener("scroll", onFirstInteraction);
    };
  }, []);

  const toggle = () => {
    if (playing) {
      send("pauseVideo");
      setPlaying(false);
    } else {
      send("unMute");
      send("setVolume", [45]);
      send("playVideo");
      setPlaying(true);
    }
  };

  return (
    <div className="music">
      <iframe
        ref={frameRef}
        className="music__frame"
        src={EMBED_URL}
        title="বিয়াৰ গীত"
        allow="autoplay; encrypted-media"
        tabIndex={-1}
        aria-hidden="true"
      />

      <button
        type="button"
        className={`music__btn ${playing ? "is-on" : ""}`}
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? "সংগীত বন্ধ কৰক" : "সংগীত বজাওক"}
      >
        {playing ? (
          <Volume2 size={18} strokeWidth={1.7} aria-hidden="true" />
        ) : (
          <VolumeX size={18} strokeWidth={1.7} aria-hidden="true" />
        )}
      </button>

      <span className="music__hint" aria-hidden="true">
        {playing ? "সংগীত চলি আছে" : "সংগীত বজাওক"}
      </span>
    </div>
  );
}
