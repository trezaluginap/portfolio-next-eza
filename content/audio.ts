/**
 * Background music configuration.
 *
 * Drop your track at `public/audio/bgm.mp3` (see README). The player is
 * manual-only: nothing plays until the visitor presses the button, which is
 * the only behavior every browser allows without a user gesture.
 */
export const audio = {
  /** Path to the track under /public. */
  src: "/audio/bgm.mp3",
  /** Playback volume (0 to 1). Kept low so it stays a background layer. */
  volume: 0.35,
  /** Loop the track forever. */
  loop: true,
} as const;
