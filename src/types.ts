  // src/types.ts
  export interface Song {
    id: number;
    title: string;
    artist: string;
    duration: string;
    image: string;    // Album artwork URL
    lyrics?: string;  // Optional lyrics field
  }
