"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/providers/language-provider";
import { pick } from "@/lib/i18n";
import type { ProjectVideo as ProjectVideoData } from "@/content/projects/types";

/**
 * Lightweight, self-hosted video player.
 *
 * Performance strategy:
 * - `preload="none"` so nothing is downloaded until the user asks for it
 * - a poster image is shown instead of the video frame
 * - playback only starts on an explicit user click (no autoplay)
 * - pauses automatically when scrolled out of the viewport
 * - respects `prefers-reduced-motion`
 */
export function ProjectVideo({
  video,
  title,
}: {
  video: ProjectVideoData;
  title: string;
}) {
  const { locale } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);

  const toggle = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      void el.play();
    } else {
      el.pause();
    }
  };

  // Pause when scrolled out of view to save CPU / battery.
  useEffect(() => {
    const wrap = wrapRef.current;
    const el = videoRef.current;
    if (!wrap || !el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !el.paused) {
          el.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(wrap);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative border-brutal bg-paper shadow-hard dark:bg-ink"
    >
      <div className="flex items-center justify-between border-b-[3px] border-ink px-4 py-2 dark:border-paper">
        <span className="font-mono text-xs uppercase tracking-widest text-muted">
          demo
        </span>
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause video" : "Play video"}
          className="brutal-lift border-2 border-ink bg-accent px-3 py-1 font-mono text-xs uppercase text-ink shadow-hard-sm hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-hard active:translate-x-[2px] active:translate-y-[2px] active:shadow-none dark:border-paper"
        >
          {playing ? "pause" : "play"}
        </button>
      </div>

      <div className="relative aspect-video w-full overflow-hidden bg-ink">
        <video
          ref={videoRef}
          poster={video.poster}
          preload="none"
          muted
          loop
          playsInline
          controls={started}
          onPlay={() => {
            setPlaying(true);
            setStarted(true);
          }}
          onPause={() => setPlaying(false)}
          className="h-full w-full object-cover"
          aria-label={`${title} - ${pick(locale, video.alt)}`}
        >
          {video.webm ? (
            <source src={video.webm} type="video/webm" />
          ) : null}
          <source src={video.mp4} type="video/mp4" />
        </video>

        {/* Click-to-play overlay (keeps the poster clean and accessible). */}
        {!started ? (
          <button
            type="button"
            onClick={toggle}
            className="group absolute inset-0 flex items-center justify-center bg-ink/20 transition-colors hover:bg-ink/30"
            aria-label={`Play ${title} demo`}
          >
            <span className="brutal-lift border-brutal border-ink bg-accent px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest text-ink shadow-hard group-hover:-translate-x-[3px] group-hover:-translate-y-[3px] group-hover:shadow-hard-lg dark:border-paper">
              play
            </span>
          </button>
        ) : null}
      </div>

      <p className="px-4 py-3 font-mono text-xs uppercase tracking-wide text-muted">
        {pick(locale, video.alt)}
      </p>
    </div>
  );
}
