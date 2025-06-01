// src/mocks/handlers.ts
import { rest, RestRequest, ResponseComposition, RestContext } from 'msw';

export const handlers = [
  rest.get(
    '/api/v1/playlist',
    (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: 1,
            title: 'Mock Song 1',
            artist: 'Mock Artist',
            audio: '/mock-song-1.mp3',
            image: '/mock-image-1.jpg',
            duration: '225',
            lyrics: 'Mock lyrics here',
          },
        ])
      );
    }
  ),
];
