// src/mocks/server.ts
import { setupServer } from 'msw/node'; // keep this line
import { handlers } from './handlers';

export const server = setupServer(...handlers);

// Debugging hooks (optional)
server.events.on('request:start', ({ request }) => {
  console.log(`[MSW] Intercepting request: ${request.method} ${request.url}`);
});

server.events.on('request:match', ({ request }) => {
  console.log(`[MSW] Matched request: ${request.method} ${request.url}`);
});

server.events.on('request:unhandled', ({ request }) => {
  console.warn(`[MSW] Unhandled request: ${request.method} ${request.url}`);
});
