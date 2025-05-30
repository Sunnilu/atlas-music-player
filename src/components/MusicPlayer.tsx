// src/components/MusicPlayer.tsx
import { useEffect, useState } from 'react';
import CurrentlyPlaying from './CurrentlyPlaying';
import Playlist from './Playlist';
import Footer from './Footer';
import LoadingSkeleton from './LoadingSkeleton';
import AudioPlayer from './AudioPlayer';
import { Song } from '../types';

export default function MusicPlayer() {
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch full playlist
        const playlistRes = await fetch('http://localhost:5173/api/v1/playlist');
        const playlistData = await playlistRes.json();
        console.log('✅ Raw playlist:', playlistData);

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

        // Try to find the featured song in the playlist
        const featuredId = 'cm3ixp4sy0thg0cmtdzukgg56';
        const featuredSong = songs.find((song) => String(song.id) === featuredId);

        if (featuredSong) {
          setCurrentSong(featuredSong);
        } else if (songs.length > 0) {
          setCurrentSong(songs[0]);
        }
      } catch (error) {
        console.error('❌ Failed to fetch playlist or song:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSelectSong = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

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
          <Playlist
            songs={playlist}
            selectedSongId={currentSong?.id}
            onSelectSong={handleSelectSong}
          />
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
