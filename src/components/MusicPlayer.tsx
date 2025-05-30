// src/components/MusicPlayer.tsx
import { useEffect, useState } from 'react';
import CurrentlyPlaying from '@components/CurrentlyPlaying';
import Footer from '@components/Footer';
import LoadingSkeleton from '@components/LoadingSkeleton';
import AudioPlayer from '@components/AudioPlayer';
import { Song } from '@types';

export default function MusicPlayer() {
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const res = await fetch('http://localhost:5173/api/v1/songs/cm3ixp4sy0thg0cmtdzukgg56');
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();

        const normalizedSong: Song = {
          id: data.id,
          title: data.title,
          author: data.artist,
          genre: data.genre,
          duration: String(data.duration),
          image: data.cover,
          audio: data.song,
        };

        const playlistRes = await fetch('http://localhost:5173/api/v1/playlist');
const playlistData = await playlistRes.json();

const songs: Song[] = playlistData.map((song: any) => ({
  id: Number(song.id),
  title: song.title,
  author: song.artist,
  genre: song.genre,
  duration: String(song.duration),
  image: song.cover,
  audio: song.song,
}));

setPlaylist(songs);


        setCurrentSong(normalizedSong);
      } catch (error) {
        console.error('Failed to fetch song:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSong();
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
          {/* Playlist removed since we're loading a single song */}
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

