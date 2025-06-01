// src/components/MusicPlayer.tsx
import { useEffect, useState } from 'react';
import CurrentlyPlaying from '@components/CurrentlyPlaying';
import Footer from '@components/Footer';
import LoadingSkeleton from '@components/LoadingSkeleton';
import { AudioPlayer } from '@components/AudioPlayer';
import { Song } from '@types';
import { useSongsApi } from '../api/services';

export default function MusicPlayer() {
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { fetchSong, fetchPlaylist } = useSongsApi();

  useEffect(() => {
    const initializePlayer = async () => {
      try {
        const playlistResponse = await fetchPlaylist();

        if (playlistResponse.status === 'success') {
          const normalizedPlaylist = (playlistResponse.data || []).map(
            (song: any) => ({
              id: Number(song.id),
              title: song.title,
              author: song.author ?? song.artist ?? '',
              artist: song.artist ?? song.author ?? '',
              genre: song.genre,
              duration: String(song.duration),
              image: song.image ?? song.cover ?? '',
              cover: song.cover ?? song.image ?? '',
              audio: song.audio ?? song.url ?? '',
            })
          );
          setPlaylist(normalizedPlaylist);

          const songId = 'cm3ixp4sy0thg0cmtdzukgg56';
          const songResponse = await fetchSong(songId);

          if (songResponse.status === 'success' && songResponse.data) {
            setCurrentSong({
              ...songResponse.data,
              author:
                songResponse.data.author ?? songResponse.data.artist ?? '',
              image: songResponse.data.image ?? songResponse.data.cover ?? '',
              audio: songResponse.data.audio ?? songResponse.data.url ?? '',
            });
          }
        }
      } catch (err) {
        const message =
          err instanceof Error ? err.message : 'An unknown error occurred';
        setError(message);
        console.error('Failed to initialize player:', err);
      } finally {
        setIsLoading(false);
      }
    };

    initializePlayer();
  }, []);

  const handlePlay = () => setIsPlaying(!isPlaying);
  const handleVolumeChange = (v: number) => setVolume(v);
  const handleSpeedChange = () =>
    setPlaybackSpeed((prev) => (prev === 2 ? 0.5 : prev === 1 ? 2 : 1));

  const handleNext = () => {
    if (!currentSong || playlist.length === 0) return;
    const currentIndex = playlist.findIndex(
      (song) => song.id === currentSong.id
    );
    const nextIndex = (currentIndex + 1) % playlist.length;
    setCurrentSong(playlist[nextIndex]);
  };

  const handlePrevious = () => {
    if (!currentSong || playlist.length === 0) return;
    const currentIndex = playlist.findIndex(
      (song) => song.id === currentSong.id
    );
    const prevIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    setCurrentSong(playlist[prevIndex]);
  };

  if (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white text-gray-900 dark:bg-bg-dark dark:text-text-light">
        <h2 className="mb-4 text-2xl font-semibold text-red-500">
          Error Loading Music Player
        </h2>
        <p className="text-gray-600 dark:text-gray-300">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="text-primary-foreground mt-4 rounded-md bg-primary px-4 py-2 transition-colors hover:bg-primary/90"
        >
          Reload Player
        </button>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-white font-custom text-gray-900 dark:bg-bg-dark dark:text-text-light">
      <main className="mx-auto flex h-auto w-full max-w-[896px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-custom backdrop-blur-md md:h-[640px] md:flex-row">
        <div className="flex w-full flex-col justify-between p-4 md:w-1/2">
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            <CurrentlyPlaying
              song={currentSong}
              isPlaying={isPlaying}
              onPlay={handlePlay}
              volume={volume}
              onVolumeChange={handleVolumeChange}
              playbackSpeed={playbackSpeed}
              onSpeedChange={handleSpeedChange}
              shuffle={false}
              onToggleShuffle={() => {}}
              onPrevious={handlePrevious}
              onNext={handleNext}
            />
          )}
        </div>
        <div className="w-full overflow-y-auto p-4 md:w-1/2">
          <h2 className="px-2 pb-2 text-xl font-semibold text-primary">
            Playlist
          </h2>
          <div className="max-h-full space-y-2 overflow-y-auto rounded-xl">
            {playlist.map((song) => (
              <div
                key={song.id}
                className={`flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 transition-colors ${
                  currentSong?.id === song.id
                    ? 'bg-blue-100'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                onClick={() => {
                  setCurrentSong(song);
                  console.log('🎧 Selected song:', song);
                }}
              >
                <div>
                  <p className="text-sm font-semibold">{song.title}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {song.author}
                  </p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  {Math.floor(Number(song.duration) / 60)}:
                  {String(Number(song.duration) % 60).padStart(2, '0')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <AudioPlayer
        song={currentSong ?? undefined}
        isPlaying={isPlaying}
        volume={volume}
        playbackSpeed={playbackSpeed}
      />
      <Footer />
    </div>
  );
}
