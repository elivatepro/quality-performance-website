"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const VIDEO_URL =
  "https://tbkdlwkmomsuzfwfofoy.supabase.co/storage/v1/object/public/site-images/5982894-hd_1920_1080_30fps.mp4";

const POSTER_URL =
  "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1920&q=80";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setReady(true);
      video.play().catch(() => {
        setReady(true);
      });
    };

    // Fires once enough has buffered to start; canplaythrough can never fire
    // on slow connections, which would strand the hero on the poster.
    video.addEventListener("canplay", handleCanPlay);
    if (video.readyState >= 3) handleCanPlay();

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  return (
    <>
      {/* Media layer, slightly scaled up to hide blur edges */}
      <div className="absolute inset-[-8px]">
        <Image
          src={POSTER_URL}
          alt="Premium vehicles"
          fill
          priority
          className={`object-cover transition-opacity duration-1000 ${
            ready ? "opacity-0" : "opacity-100"
          }`}
        />
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
      </div>
      {/* Blur + color overlay, rendered by compositor, doesn't affect video playback */}
      <div className="absolute inset-0 backdrop-blur-[3px] bg-dark/60" />
    </>
  );
}
