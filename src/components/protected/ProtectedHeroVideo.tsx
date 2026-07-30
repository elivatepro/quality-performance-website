"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * Ambient background video for the /protected hero.
 *
 * Served through Cloudinary's transcoder rather than as the 41 MB source: the
 * eco profile at 1280px lands near 8 MB with no visible loss behind a scrim,
 * which matters because this page is typically opened on a phone in a
 * dealership parking lot. A poster frame from the same asset paints instantly
 * while the video buffers.
 *
 * Under prefers-reduced-motion the video is never loaded and the poster stands
 * in, so those users get a still image rather than a paused first frame.
 */

const CLOUD = "https://res.cloudinary.com/dwajqgdxw/video/upload";
const ASSET = "v1785443413/2053100-hd_1920_1080_30fps_cwiia1.mp4";

const VIDEO_URL = `${CLOUD}/q_auto:eco,w_1280,vc_auto/${ASSET}`;
const POSTER_URL = `${CLOUD}/so_2,q_auto:good,w_1280,f_jpg/${ASSET}`;

export default function ProtectedHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduced) return;

    const onCanPlay = () => {
      setReady(true);
      // Autoplay can still be refused; the poster simply stays in that case.
      video.play().catch(() => setReady(true));
    };

    video.addEventListener("canplay", onCanPlay);
    if (video.readyState >= 3) onCanPlay();
    return () => video.removeEventListener("canplay", onCanPlay);
  }, [reduced]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src={POSTER_URL}
        alt=""
        fill
        priority
        sizes="100vw"
        className={`object-cover transition-opacity duration-1000 ${
          ready ? "opacity-0" : "opacity-100"
        }`}
      />

      {!reduced && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          poster={POSTER_URL}
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
      )}

      {/* Scrim: the hero copy and the rotator both sit on top of this, so the
          footage has to stay a backdrop rather than compete for attention. */}
      <div className="absolute inset-0 bg-dark-deep/78" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-deep/70 via-transparent to-dark-deep" />
    </div>
  );
}
