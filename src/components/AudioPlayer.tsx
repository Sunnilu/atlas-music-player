// src/components/AudioPlayer.tsx
import React, { useEffect, useRef } from 'react';
import { Song } from '../types';

interface AudioPlayerProps {
  song?: Song;
  isPlaying: boolean;
  volume: number;
  playbackSpeed: number;
  onError?: (error: string) => void;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  song,
  isPlaying,
  volume,
  playbackSpeed,
  onError,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !song?.audio) return;

    // Update audio source
    audio.src = song.audio;
    audio.load();

    // Handle playback
    const tryPlay = async () => {
      try {
        await audio.play();
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Failed to play audio';
        console.error('Audio playback error:', error);
        onError?.(message);
      }
    };

    if (isPlaying) {
      tryPlay();
    } else {
      audio.pause();
    }
  }, [song, isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = Math.max(0, Math.min(100, volume)) / 100;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  return (
    <audio
      ref={audioRef}
      src={song?.audio || ''}
      className="hidden"
      preload="auto"
      crossOrigin="anonymous"
    />
  );
};