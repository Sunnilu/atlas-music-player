// src/mocks/browser.ts
import { rest } from 'msw'
import { setupServer } from 'msw/node'

export const server = setupServer(
  rest.get('/api/v1/playlist', (req, res, ctx) => {
    return res(ctx.status(200))
  })
)