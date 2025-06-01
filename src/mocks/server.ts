// src/mocks/server.ts
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

export const server = setupServer(...handlers);

// Optional: logs request start for debugging
server.events.on('request:start', ({ request }) => {
  console.log(`[MSW] Intercepting request: ${request.method} ${request.url}`);
});
