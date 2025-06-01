import { describe, it, expect } from 'vitest';

describe('Mocked Playlist API', () => {
  it('returns playlist data from mock', async () => {
    const res = await fetch('/api/v1/playlist');
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(Array.isArray(data)).toBe(true);
    expect(data[0].title).toBe('Mock Song 1');
  });
});
