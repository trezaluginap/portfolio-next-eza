# Background music

The music player is **manual only** - nothing plays until the visitor presses
the button in the bottom-right corner. This is the only behavior every browser
allows without a user gesture.

## Add your track

1. Put your audio file here as **`bgm.mp3`**:

   ```
   public/audio/bgm.mp3
   ```

2. That is it. The player reads the path from `content/audio.ts`.

To use a different filename or format, edit `content/audio.ts`:

```ts
export const audio = {
  src: "/audio/your-track.mp3",
  volume: 0.35,
  loop: true,
} as const;
```

## Keep it light

Audio is easy to bloat. A 4-minute track at 320 kbps is roughly 9 MB, which is
far too heavy for a portfolio. Aim for **under 2.5 MB** with ffmpeg:

```bash
# 128 kbps stereo (good quality, small)
ffmpeg -i input.mp3 -c:a libmp3lame -b:a 128k public/audio/bgm.mp3

# 96 kbps mono (even smaller, fine for background music)
ffmpeg -i input.mp3 -c:a libmp3lame -b:a 96k -ac 1 public/audio/bgm.mp3
```

> The player uses `preload="none"`, so the file is only downloaded when the
> visitor actually presses play. It never affects initial page load.
