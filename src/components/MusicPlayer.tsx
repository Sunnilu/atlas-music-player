// src/components/MusicPlayer.tsx
import { useEffect, useState } from 'react';
import CurrentlyPlaying from '@components/CurrentlyPlaying';
import Playlist from '@components/Playlist';
import Footer from '@components/Footer';
import { Song } from '@types';

export default function MusicPlayer() {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(70);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [shuffle, setShuffle] = useState<boolean>(false);

  // Fetch playlist data from API on mount
  useEffect(() => {
    fetch('http://localhost:3000/api/playlist')
      .then(res => res.json())
      .then(data => {
        const transformedData = data.map((song: Song) => ({
          ...song,
          duration: Number(song.duration),
        }));
        setPlaylist(transformedData);
        if (transformedData.length > 0) setCurrentSong(transformedData[0]);
      })
      .catch(console.error);
  }, []);

  const handlePlay = () => setIsPlaying(!isPlaying);
  const handleVolume = (v: number) => setVolume(v);
  const handleSelectSong = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 dark:bg-bg-dark dark:text-text-light font-custom">
      <main className="mx-auto w-full max-w-[896px] h-auto md:h-[640px] bg-white/5 rounded-2xl shadow-custom flex flex-col md:flex-row overflow-hidden backdrop-blur-md border border-white/10">
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-between">
          <CurrentlyPlaying
            song={currentSong}
            isPlaying={isPlaying}
            onPlay={handlePlay}
            volume={volume}
            onVolumeChange={handleVolume}
          />
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
