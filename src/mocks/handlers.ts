// src/mocks/handlers.ts
import { rest } from 'msw';

export const handlers = [
  rest.get('/api/v1/playlist', (_req, res, ctx) => {
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
