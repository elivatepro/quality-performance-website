"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const VIDEO_URL =
  "https://hutflemsxuoaeubrzzvu.supabase.co/storage/v1/object/sign/attachments/Dolly%20Shot%20Parked%20Vehicles%20Video.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80ZGZkYWNkMy00ZjBmLTQzZWItOThlMS05YmI4MzIzZTEwMjYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhdHRhY2htZW50cy9Eb2xseSBTaG90IFBhcmtlZCBWZWhpY2xlcyBWaWRlby5tcDQiLCJpYXQiOjE3NzUyNTk2MjcsImV4cCI6NDkyODg1OTYyN30.V4GTd4kqUwG_aARCizhOgBXcKSIEm7G1ZiInbFsfNb0";

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

    video.addEventListener("canplaythrough", handleCanPlay);

    return () => {
      video.removeEventListener("canplaythrough", handleCanPlay);
    };
  }, []);

  return (
    <>
      {/* Media layer — slightly scaled up to hide blur edges */}
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
          preload="auto"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
      </div>
      {/* Blur + color overlay — rendered by compositor, doesn't affect video playback */}
      <div className="absolute inset-0 backdrop-blur-[3px] bg-dark/60" />
    </>
  );
}
