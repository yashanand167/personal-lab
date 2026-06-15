import { useState, useEffect, useRef, useCallback } from "react";
import type { SoundAsset, UseSoundOptions, SoundControls, UseSoundReturn, PlayFunction } from "./sound-types";

let audioContext: AudioContext | null = null;
const bufferCache = new Map<string, AudioBuffer>();

export function getAudioContext(): AudioContext {
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  return audioContext;
}

export async function decodeAudioData(dataUri: string): Promise<AudioBuffer> {
  const cached = bufferCache.get(dataUri);
  if (cached) return cached;

  const ctx = getAudioContext();
  const base64 = dataUri.split(",")[1];
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  const audioBuffer = await ctx.decodeAudioData(bytes.buffer.slice(0));
  bufferCache.set(dataUri, audioBuffer);
  return audioBuffer;
}

export interface PlaySoundOptions {
  volume?: number;
  playbackRate?: number;
  onEnd?: () => void;
}

export interface SoundPlayback {
  stop: () => void;
}

export async function playSound(
  dataUri: string,
  options: PlaySoundOptions = {}
): Promise<SoundPlayback> {
  const { volume = 1, playbackRate = 1, onEnd } = options;
  const ctx = getAudioContext();
  if (ctx.state === "suspended") {
    await ctx.resume();
  }

  const buffer = await decodeAudioData(dataUri);
  const source = ctx.createBufferSource();
  const gain = ctx.createGain();

  source.buffer = buffer;
  source.playbackRate.value = playbackRate;
  gain.gain.value = volume;

  source.connect(gain);
  gain.connect(ctx.destination);

  source.onended = () => {
    onEnd?.();
  };

  source.start(0);

  return {
    stop: () => {
      try {
        source.stop();
      } catch {
        // No-op if already stopped.
      }
    },
  };
}

export function useSound(
  sound: SoundAsset,
  options: UseSoundOptions = {}
): UseSoundReturn {
  const {
    volume = 1,
    playbackRate = 1,
    interrupt = false,
    soundEnabled = true,
    onPlay,
    onEnd,
    onStop,
  } = options;

  const [isPlaying, setIsPlaying] = useState(false);
  const playbackRef = useRef<{ stop: () => void } | null>(null);

  const stop = useCallback(() => {
    if (playbackRef.current) {
      playbackRef.current.stop();
      playbackRef.current = null;
      setIsPlaying(false);
      onStop?.();
    }
  }, [onStop]);

  const pause = useCallback(() => {
    stop();
  }, [stop]);

  const play: PlayFunction = useCallback(async (overrides = {}) => {
    if (!soundEnabled) return;

    if (interrupt) {
      stop();
    }

    onPlay?.();
    setIsPlaying(true);

    try {
      const playback = await playSound(sound.dataUri, {
        volume: overrides.volume ?? volume,
        playbackRate: overrides.playbackRate ?? playbackRate,
        onEnd: () => {
          setIsPlaying(false);
          onEnd?.();
        },
      });
      playbackRef.current = playback;
    } catch (err) {
      console.error("Failed to play sound:", err);
      setIsPlaying(false);
    }
  }, [sound.dataUri, soundEnabled, interrupt, volume, playbackRate, onPlay, onEnd, stop]);

  useEffect(() => {
    return () => {
      if (playbackRef.current) {
        playbackRef.current.stop();
      }
    };
  }, []);

  const controls: SoundControls = {
    stop,
    pause,
    isPlaying,
    duration: sound.duration,
    sound,
  };

  return [play, controls] as const;
}
