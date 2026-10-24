"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { useInView, useReducedMotion } from "framer-motion";

const MAX_PLAYS = 5;

export default function ProductClip({ media, name }) {
  const videoRef = useRef(null);
  const completedPlays = useRef(0);
  const isInView = useInView(videoRef, { amount: 0.35 });
  const shouldReduceMotion = useReducedMotion();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isUserPaused, setIsUserPaused] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const syncPlayback = () => {
      if (!isInView || document.hidden || shouldReduceMotion !== false || isUserPaused || hasFinished) {
        video.pause();
        return;
      }
      video.play().catch(() => {
        // Autoplay can be declined by the browser. The play button remains usable.
      });
    };

    syncPlayback();
    document.addEventListener("visibilitychange", syncPlayback);
    return () => {
      document.removeEventListener("visibilitychange", syncPlayback);
      video.pause();
    };
  }, [isInView, shouldReduceMotion, isUserPaused, hasFinished]);

  const handleEnded = async () => {
    completedPlays.current += 1;
    if (completedPlays.current >= MAX_PLAYS || shouldReduceMotion || isUserPaused || document.hidden || !isInView) {
      setHasFinished(true);
      return;
    }
    try {
      videoRef.current.currentTime = 0;
      await videoRef.current.play();
    } catch {
      setIsPlaying(false);
    }
  };

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      setIsUserPaused(true);
      video.pause();
      return;
    }
    try {
      if (hasFinished) {
        completedPlays.current = 0;
        video.currentTime = 0;
        setHasFinished(false);
      }
      setIsUserPaused(false);
      await video.play();
    } catch {
      setHasError(true);
    }
  };

  return (
    <div className="product-clip">
      <video
        ref={videoRef}
        src={media.video}
        poster={media.src}
        aria-label={media.alt}
        width={media.width}
        height={media.height}
        muted
        playsInline
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={handleEnded}
        onError={() => setHasError(true)}
      />
      {!hasError && (
        <button type="button" className="clip-toggle" onClick={togglePlayback} aria-label={`${isPlaying ? "Pause" : "Play"} ${name} demo`}>
          {isPlaying ? <Pause size={13} /> : <Play size={13} />}
          <span>{isPlaying ? "Pause demo" : "Play demo"}</span>
        </button>
      )}
      {hasError && <span className="clip-error">Demo unavailable</span>}
    </div>
  );
}
