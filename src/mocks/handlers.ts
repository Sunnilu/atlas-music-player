// src/mocks/handlers.ts
import { rest } from 'msw/node';

export const handlers = [
  rest.get('/api/v1/playlist', (_req: any, res: (arg0: any, arg1: any) => any, ctx: { status: (arg0: number) => any; json: (arg0: { id: number; title: string; artist: string; audio: string; image: string; duration: string; lyrics: string; }[]) => any; }) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          title: 'Mock Song 1',
          artist: 'Mock Artist',
          audio: '/mock-song-1.mp3',
          image: '/mock-image-1.jpg',
          duration: '3:45',
          lyrics: 'Mock lyrics here',
        },
      ])
    );
  }),
];
