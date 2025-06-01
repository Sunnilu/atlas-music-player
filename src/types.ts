import { ReactNode } from 'react';

// src/types.ts
export interface Song {
  artist: ReactNode;
  cover: string | undefined;
  id: number;
  title: string;
  author: string; // 🔁 renamed from `artist`
  duration: string;
  image: string;
  lyrics?: string;
  audio: string;
}
export {};
