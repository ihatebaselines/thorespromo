"use client";

import { useEffect, useRef, useState } from "react";

const YOUTUBE_URL = "https://www.youtube.com/@thoresdpit";

export default function StoryVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [pausedWhileHovered, setPausedWhileHovered] = useState(false);
  const isPlaying = pinned || (hovered && !pausedWhileHovered);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      void video.play().catch(() => undefined);
      return;
    }

    video.pause();
    video.currentTime = 0;
  }, [isPlaying]);

  const togglePlayback = () => {
    if (pinned) {
      setPinned(false);
      setPausedWhileHovered(true);
      return;
    }
    setPausedWhileHovered(false);
    setPinned(true);
  };

  return (
    <div className={`story-video ${isPlaying ? "is-playing" : "is-idle"}`}>
      <button
        className="story-video-toggle"
        type="button"
        aria-label={pinned ? "Pause the Thores story video" : "Play the Thores story video"}
        aria-pressed={pinned}
        onMouseEnter={() => {
          setHovered(true);
          setPausedWhileHovered(false);
        }}
        onMouseLeave={() => {
          setHovered(false);
          setPausedWhileHovered(false);
        }}
        onFocus={() => setHovered(true)}
        onBlur={() => {
          setHovered(false);
          setPausedWhileHovered(false);
        }}
        onClick={togglePlayback}
      >
        <video
          ref={videoRef}
          className="story-video-media"
          src="/assets/thores-story.mp4"
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <span className="story-video-shade" aria-hidden="true" />
        <span className="story-video-play" aria-hidden="true">{isPlaying ? "Ⅱ" : "▶"}</span>
        <span className="story-video-hint">{pinned ? "Playing · click to pause" : "Hover to preview · click to play"}</span>
        <span className="story-video-caption"><span>THORES — OUR STORY</span><span>LOOPING FILM</span></span>
      </button>
      <a className="story-youtube-link" href={YOUTUBE_URL} target="_blank" rel="noreferrer">
        YouTube <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}
