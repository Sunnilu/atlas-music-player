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

  // Fetch playlist data from the server
  useEffect(() => {
    fetch('http://localhost:3000/playlist')
      .then(res => res.json())
      .then(data => {
        const transformedData = data.map((song: any) => ({
          ...song,
          id: Number(song.id),
          duration: String(song.duration),
          image: song.image || '',
        })) as Song[];
        console.log('🎵 Transformed Playlist:', transformedData);
        setPlaylist(transformedData);
        if (transformedData.length > 0) setCurrentSong(transformedData[0]);
      })
      .catch(console.error);
  }, []);

  const handlePlay = () => setIsPlaying(!isPlaying);
  const handleVolume = (v: number) => setVolume(v);
  const handleSpeedChange = () => {
    setPlaybackSpeed((prev) => (prev === 2 ? 0.5 : prev === 1 ? 2 : 1));
  };
  const handleToggleShuffle = () => {
    setShuffle((prev) => !prev);
  };

  const handleSelectSong = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    if (!currentSong) return;
    const currentIndex = playlist.findIndex((s) => s.id === currentSong.id);
    if (currentIndex > 0) {
      const previousSong = playlist[currentIndex - 1];
      setCurrentSong(previousSong);
    }
  };

  const handleNext = () => {
    if (!currentSong || playlist.length === 0) return;

    if (shuffle) {
      const randomIndex = Math.floor(Math.random() * playlist.length);
      setCurrentSong(playlist[randomIndex]);
      return;
    }

    const currentIndex = playlist.findIndex((s) => s.id === currentSong.id);
    if (currentIndex < playlist.length - 1) {
      const nextSong = playlist[currentIndex + 1];
      setCurrentSong(nextSong);
    }
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
            playbackSpeed={playbackSpeed}
            onSpeedChange={handleSpeedChange}
            shuffle={shuffle}
            onToggleShuffle={handleToggleShuffle}
            onPrevious={handlePrevious}
            onNext={handleNext}
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
