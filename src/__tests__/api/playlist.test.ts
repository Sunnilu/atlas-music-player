// src/mocks/handlers.ts
import { rest } from 'msw'
import { setupServer } from 'msw/node'

export const handlers = [
  rest.get('/api/v1/playlist', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          title: 'Mock Song 1',
          artist: 'Mock Artist',
          duration: 180
        }
      ])
    )
  })
]

export const server = setupServer(...handlers)