import React, { useEffect, useRef, useState } from "react";
import "./Preloader.css";

export default function Preloader({ fade }) {
  const videoRef = useRef(null);
  const [audioAllowed, setAudioAllowed] = useState(false);

  // Enable audio after first user interaction (browser restriction)
  useEffect(() => {
    const enableAudio = () => {
      if (videoRef.current && !audioAllowed) {
        videoRef.current.muted = false;
        videoRef.current.play().catch(() => {});
        setAudioAllowed(true);
        document.removeEventListener("click", enableAudio);
      }
    };

    document.addEventListener("click", enableAudio);
    return () => document.removeEventListener("click", enableAudio);
  }, [audioAllowed]);

  return (
    <div className={`video-loader ${fade ? "fade-out" : ""}`}>
      <video
        ref={videoRef}
        className="loader-bg-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="loading.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
