"use client";

import { useRef, useState } from "react";
import { useLanguage } from "@/components/providers/language-provider";
import { audio } from "@/content/audio";
import { cn } from "@/lib/utils";

type Status = "idle" | "playing" | "error";

/**
 * Manual background-music control.
 *
 * Nothing plays until the visitor presses the button - the only behavior every
 * browser allows without a user gesture. The audio element lives in the root
 * layout, so playback continues across client-side navigation.
 */
export function MusicPlayer() {
  const { t } = useLanguage();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const toggle = async () => {
    const el = audioRef.current;
    if (!el || status === "error") return;

    if (status === "playing") {
      el.pause();
      setStatus("idle");
      return;
    }

    try {
      el.volume = audio.volume;
      await el.play();
      setStatus("playing");
    } catch {
      // Playback was rejected (blocked or unsupported source).
      setStatus("error");
    }
  };

  const playing = status === "playing";
  const errored = status === "error";

  return (
    <>
      <audio
        ref={audioRef}
        src={audio.src}
        loop={audio.loop}
        preload="none"
        onError={() => setStatus("error")}
        onEnded={() => setStatus("idle")}
      />

      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={
          errored
            ? t.music.unavailable
            : playing
              ? t.music.pause
              : t.music.play
        }
        title={
          errored
            ? t.music.unavailable
            : playing
              ? t.music.pause
              : t.music.play
        }
        disabled={errored}
        className={cn(
          "brutal-lift fixed right-4 bottom-4 z-40 inline-flex items-center gap-2 border-brutal px-3 py-2 font-mono text-xs uppercase shadow-hard hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-hard-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none disabled:cursor-not-allowed disabled:opacity-50 sm:right-6 sm:bottom-6",
          playing
            ? "bg-accent text-ink"
            : "bg-paper text-ink dark:bg-ink dark:text-paper",
        )}
      >
        {/* Speaker icon (functional control, not decoration) */}
        <span aria-hidden className="inline-flex h-4 w-4 items-center justify-center">
          {playing ? (
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <path
                d="M4 9v6h4l5 4V5L8 9H4z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <path
                d="M4 9v6h4l5 4V5L8 9H4z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="m16.5 9.5 5 5m0-5-5 5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          )}
        </span>
        <span className="hidden sm:inline">
          {errored ? t.music.unavailable : t.music.label}
        </span>
      </button>
    </>
  );
}
