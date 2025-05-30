// src/components/AudioPlayer.tsx
import React, { useEffect, useRef } from 'react';
import { Song } from '../types';

interface AudioPlayerProps {
  song: Song | null;
  isPlaying: boolean;
  volume: number;
  playbackSpeed: number;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  song,
  isPlaying,
  volume,
  playbackSpeed,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Handle audio source and playback
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
        console.warn('⚠️ Playback failed:', error);
      }
    };

    if (isPlaying) {
      tryPlay();
    } else {
      audio.pause();
    }
  }, [song, isPlaying]);

  // Handle volume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = Math.max(0, Math.min(100, volume)) / 100;
    }
  }, [volume]);

  // Handle playback speed changes
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

export default AudioPlayer;