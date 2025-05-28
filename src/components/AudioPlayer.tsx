// src/components/AudioPlayer.tsx
import React, { useEffect, useRef } from 'react';
import { Song } from '../types'; // plain relative import

interface AudioPlayerProps {
  song: Song | null;
  isPlaying: boolean;
  volume: number;
  playbackSpeed: number;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ song, isPlaying, volume, playbackSpeed }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio || !song?.audio) return;

    audio.src = song.audio;

    if (isPlaying) {
      audio.play().catch(console.error);
    } else {
      audio.pause();
    }
  }, [song, isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  return <audio ref={audioRef} hidden />;
};

export default AudioPlayer;
