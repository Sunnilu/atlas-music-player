import { describe, it, expect, beforeAll, afterAll, afterEach } from 'vitest';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { rest } from 'msw';
import { server } from '../mocks/server';
import MusicPlayer from '@components/MusicPlayer';

// Mock playlist and song data
const mockPlaylist = [
  {
    id: 1,
    title: 'Test Song One',
    artist: 'Artist One',
    author: 'Artist One',
    genre: 'Pop',
    duration: '180',
    image: 'image1.jpg',
    cover: 'image1.jpg',
    audio: 'audio1.mp3',
  },
  {
    id: 2,
    title: 'Test Song Two',
    artist: 'Artist Two',
    author: 'Artist Two',
    genre: 'Rock',
    duration: '200',
    image: 'image2.jpg',
    cover: 'image2.jpg',
    audio: 'audio2.mp3',
  },
];

beforeAll(() => {
  server.use(
    rest.get('/api/v1/playlist', (req, res, ctx) =>
      res(ctx.status(200), ctx.json(mockPlaylist))
    ),
    rest.get('/api/v1/song/cm3ixp4sy0thg0cmtdzukgg56', (req, res, ctx) =>
      res(ctx.status(200), ctx.json(mockPlaylist[0]))
    )
  );
  server.listen();
});

afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('MusicPlayer Component', () => {
  it('renders and loads playlist with first song selected', async () => {
    render(<MusicPlayer />);
    await screen.findByText('Playlist');
    expect(screen.getByText('Test Song One')).toBeInTheDocument();
    expect(screen.getByText('Artist One')).toBeInTheDocument();
  });

  it('toggles play/pause button', async () => {
    render(<MusicPlayer />);
    await screen.findByText('Test Song One');

    const playButton = screen.getByRole('button', { name: /play/i });
    fireEvent.click(playButton);
    expect(playButton).toHaveAttribute('aria-label', 'Pause');

    fireEvent.click(playButton);
    expect(playButton).toHaveAttribute('aria-label', 'Play');
  });

  it('clicking second song in playlist changes current song', async () => {
    render(<MusicPlayer />);
    await screen.findByText('Test Song One');

    const secondSong = screen.getByText('Test Song Two');
    fireEvent.click(secondSong);

    expect(screen.getByText('Test Song Two')).toBeInTheDocument();
    expect(screen.getByText('Artist Two')).toBeInTheDocument();
  });

  it('toggles playback speed correctly', async () => {
    render(<MusicPlayer />);
    await screen.findByText('Playlist');

    const speedButton = screen.getByRole('button', { name: /speed/i });

    fireEvent.click(speedButton);
    expect(speedButton).toHaveTextContent('2x');

    fireEvent.click(speedButton);
    expect(speedButton).toHaveTextContent('0.5x');

    fireEvent.click(speedButton);
    expect(speedButton).toHaveTextContent('1x');
  });

  it('shows error message if API fails', async () => {
    server.use(
      rest.get('/api/v1/playlist', (req, res, ctx) =>
        res(ctx.status(500), ctx.json({ error: 'Server error' }))
      )
    );

    render(<MusicPlayer />);
    await waitFor(() =>
      expect(
        screen.getByText(/Error Loading Music Player/i)
      ).toBeInTheDocument()
    );
  });

  it('navigates forward and backward between songs', async () => {
    render(<MusicPlayer />);
    await screen.findByText('Test Song One');

    const forwardButton = screen.getByRole('button', { name: /forward/i });
    const backButton = screen.getByRole('button', { name: /back/i });

    fireEvent.click(forwardButton);
    expect(await screen.findByText('Test Song Two')).toBeInTheDocument();

    fireEvent.click(backButton);
    expect(await screen.findByText('Test Song One')).toBeInTheDocument();
  });
});
