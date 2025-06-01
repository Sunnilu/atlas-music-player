// src/mocks/handlers.ts
import { rest } from 'msw/node';

// Removed invalid handler definition

export const handlers = [
  rest.get(
    '/api/v1/playlist',
    (
      _req: any,
      res: (arg0: any, arg1: any) => any,
      ctx: {
        status: (arg0: number) => any;
        json: (
          arg0: {
            id: number;
            title: string;
            artist: string;
            image: string;
            audio: string;
            duration: string;
          }[]
        ) => any;
      }
    ) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: 1,
            title: 'Mock Song 1',
            artist: 'Mock Artist',
            image: '/mock.jpg',
            audio: '/mock.mp3',
            duration: '3:00',
          },
        ])
      );
    }
  ),
];
