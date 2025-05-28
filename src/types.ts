// src/types.ts

export interface Song {
  id: number;
  title: string;
  artist: string;
  duration: string;
  image: string;     // ✅ Required for album artwork
  lyrics?: string; 
  audio: string;  // ✅ Required for audio playback
}
export {};
