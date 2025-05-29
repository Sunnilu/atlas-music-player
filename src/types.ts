// src/types.ts
export interface Song {
  id: number;
  title: string;
  author: string;      // 🔁 renamed from `artist`
  duration: string;
  image: string;
  lyrics?: string;
  audio: string;
}
export {};
