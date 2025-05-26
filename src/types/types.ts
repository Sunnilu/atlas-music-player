// src/types.ts
export interface Song {
    id: number;
    title: string;
    artist: string;
    duration: string;
    image: string;   // URL for album artwork
    lyrics?: string; // Optional lyrics field
  }
  