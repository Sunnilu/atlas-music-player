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

  // Attempt to play audio based on props
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !song?.audio) return;

    // Log audio URL
    console.log('🎵 Attempting to play audio:', song.audio);
    audio.src = song.audio;
    audio.load();

    const tryPlay = async () => {
      try {
        await audio.play();
        console.log('🎶 Playback started');
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

  // Update volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  // Update playback speed
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  return (
    <div className="hidden">
      <audio ref={audioRef} controls preload="auto" />
      {/* Debugging fallback manual trigger */}
      <button
        className="text-sm text-blue-500 underline mt-2"
        onClick={() => {
          const audio = audioRef.current;
          if (audio) {
            audio
              .play()
              .then(() => console.log('🔊 Manual play succeeded'))
              .catch((e) => console.error('Manual play failed:', e));
          }
        }}
      >
        ▶️ Try manual play
      </button>
    </div>
  );
};

export default AudioPlayer;
