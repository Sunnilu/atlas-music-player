import { rest } from 'msw';
// This file defines the mock API handlers for the playlist endpoint.
export const handlers = [
  rest.get('/api/v1/playlist', (req, res, ctx) => {
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
        {
          id: 2,
          title: 'Mock Song 2',
          artist: 'Mock Artist 2',
          image: '/mock2.jpg',
          audio: '/mock2.mp3',
          duration: '2:30',
        },
      ])
    );
  }),
];
