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

  // Load and control playback
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !song?.audio) return;

    audio.src = song.audio;
    audio.load();

    const playAudio = async () => {
      try {
        await audio.play();
      } catch (err) {
        console.warn('Playback error:', err);
      }
    };

    if (isPlaying) {
      playAudio();
    } else {
      audio.pause();
    }
  }, [song, isPlaying]);

  // Volume control
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  // Playback speed control
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  return (
    <div className="flex flex-col items-center">
      {song?.image && (
        <img
          src={song.image}
          alt={song.title}
          className="w-32 h-32 object-cover rounded-xl mb-2"
        />
      )}
      <audio ref={audioRef} hidden controls preload="auto" />
    </div>
  );
};

export default AudioPlayer;
