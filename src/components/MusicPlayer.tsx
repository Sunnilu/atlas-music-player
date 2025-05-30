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
        // Fetch playlist
        const playlistResponse = await fetchPlaylist();
        
        if (playlistResponse.status === 'success') {
          setPlaylist(playlistResponse.data || []);
          
          // Fetch initial song
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
          {/* Playlist component */}
          {playlist.map((song) => (
            <div key={song.id} className="flex items-center gap-4 p-4 border-b border-border">
              <img src={song.cover} alt={song.title} className="w-12 h-12 object-cover rounded-lg" />
              <div className="flex-grow">
                <h3 className="font-semibold">{song.title}</h3>
                <p className="text-sm text-muted-foreground">{song.artist}</p>
              </div>
            </div>
          ))}
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
