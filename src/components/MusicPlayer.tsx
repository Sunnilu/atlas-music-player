// src/components/MusicPlayer.tsx
import { useEffect, useState } from 'react';
import CurrentlyPlaying from '@components/CurrentlyPlaying';
import Playlist from '@components/Playlist';
import Footer from '@components/Footer';
import LoadingSkeleton from '@components/LoadingSkeleton';
import { Song } from '@types';

export default function MusicPlayer() {
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/v1/playlist')
      .then((res) => res.json())
      .then((data) => {
        const songs: Song[] = data.map((song: any) => ({
          ...song,
          id: Number(song.id),
          duration: String(song.duration),
          image: song.image || '',
        }));
        setPlaylist(songs);
        if (songs.length > 0) setCurrentSong(songs[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load playlist:', err);
        setIsLoading(false);
      });
  }, []);

  const handleSelectSong = (song: Song) => {
    setCurrentSong(song);
  };

  return (
    <div className="flex flex-col min-h-screen font-custom bg-white dark:bg-bg-dark text-gray-900 dark:text-text-light">
      <main className="mx-auto w-full max-w-[896px] h-auto md:h-[640px] bg-white/5 rounded-2xl shadow-custom flex flex-col md:flex-row overflow-hidden backdrop-blur-md border border-white/10">
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-between">
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            <CurrentlyPlaying song={currentSong} isPlaying={false} onPlay={function (): void {
                throw new Error('Function not implemented.');
              } } volume={0} onVolumeChange={function (v: number): void {
                throw new Error('Function not implemented.');
              } } playbackSpeed={0} onSpeedChange={function (): void {
                throw new Error('Function not implemented.');
              } } shuffle={false} onToggleShuffle={function (): void {
                throw new Error('Function not implemented.');
              } } onPrevious={function (): void {
                throw new Error('Function not implemented.');
              } } onNext={function (): void {
                throw new Error('Function not implemented.');
              } } />
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
      <Footer />
    </div>
  );
}
