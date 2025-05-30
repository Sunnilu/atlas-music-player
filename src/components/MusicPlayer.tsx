// src/components/MusicPlayer.tsx
import { useEffect, useState } from 'react';
import CurrentlyPlaying from '@components/CurrentlyPlaying';
import Footer from '@components/Footer';
import LoadingSkeleton from '@components/LoadingSkeleton';
import AudioPlayer from '@components/AudioPlayer';
import { Song } from '@types';
import { useSongsApi } from '../api/services';

export default function MusicPlayer() {
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const { fetchSong, fetchPlaylist } = useSongsApi();

  useEffect(() => {
    const initializePlayer = async () => {
      try {
        const playlistResponse = await fetchPlaylist();

        if (playlistResponse.status === 'success') {
          setPlaylist(playlistResponse.data || []);

          const songId = 'cm3ixp4sy0thg0cmtdzukgg56';
          const songResponse = await fetchSong(songId);

          if (songResponse.status === 'success' && songResponse.data) {
            setCurrentSong({
              ...songResponse.data,
              author: songResponse.data.author ?? songResponse.data.artist ?? '',
              image: songResponse.data.image ?? songResponse.data.cover ?? '',
              audio: songResponse.data.audio ?? songResponse.data.url ?? '',
            });
          }
        }
      } catch (error) {
        console.error('Failed to initialize player:', error);
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

  return (
    <div className="flex flex-col min-h-screen font-custom bg-white dark:bg-bg-dark text-gray-900 dark:text-text-light">
      <main className="mx-auto w-full max-w-[896px] h-auto md:h-[640px] bg-white/5 rounded-2xl shadow-custom flex flex-col md:flex-row overflow-hidden backdrop-blur-md border border-white/10">
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-between">
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
              onPrevious={() => {}}
              onNext={() => {}}
            />
          )}
        </div>
        <div className="w-full md:w-1/2 p-4 overflow-y-auto">
          <h2 className="text-xl font-semibold text-primary px-2 pb-2">Playlist</h2>
          <div className="rounded-xl overflow-y-auto max-h-full space-y-2">
            {playlist.map((song) => (
              <div
                key={song.id}
                className={`flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer transition-colors ${
                  currentSong?.id === song.id ? 'bg-blue-100' : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                onClick={() => setCurrentSong(song)}
              >
                <div>
                  <p className="font-semibold text-sm">{song.title}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{song.author}</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  {Math.floor(Number(song.duration) / 60)}:{String(Number(song.duration) % 60).padStart(2, '0')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>

      <AudioPlayer
        song={currentSong}
        isPlaying={isPlaying}
        volume={volume}
        playbackSpeed={playbackSpeed}
      />

      <Footer />
    </div>
  );
}
