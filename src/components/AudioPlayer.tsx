import React, { useEffect, useRef } from 'react';
import { Song } from '../types'; // Adjust the path if necessary

interface AudioPlayerProps {
  song: Song | null;
  isPlaying: boolean;
  volume: number;
  playbackSpeed: number;
}

/**
 * AudioPlayer component controls audio playback based on props.
 * - Adjusts volume and speed.
 * - Plays or pauses based on `isPlaying`.
 * - Changes source when song changes.
 */
const AudioPlayer: React.FC<AudioPlayerProps> = ({
  song,
  isPlaying,
  volume,
  playbackSpeed,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Handle song changes and play/pause logic
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

  // Adjust volume (0-100 scaled to 0.0-1.0)
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  // Set playback speed
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  return <audio ref={audioRef} hidden />;
};

export default AudioPlayer;
