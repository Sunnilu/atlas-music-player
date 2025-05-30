// src/api/types.ts
export interface Song {
  id: number;
  title: string;
  artist: string;
  genre: string;
  duration: string;
  cover: string;
  song: string;
}

export interface ApiResponse<T> {
  status: 'success' | 'error';
  data?: T;
  error?: string;
}