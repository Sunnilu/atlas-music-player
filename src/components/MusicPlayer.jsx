// src/components/MusicPlayer.jsx
import { useState } from 'react';
import CurrentlyPlaying from './CurrentlyPlaying';
import Playlist from './Playlist';
import Footer from './Footer';

export default function MusicPlayer() {
  const [currentSong, setCurrentSong] = useState({
    id: 1,
    title: 'Painted in Blue',
    artist: 'Soul Canvas',
    duration: '5:55',
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);

  const playlist = [
    { id: 1, title: 'Painted in Blue', artist: 'Soul Canvas', duration: '5:55' },
    { id: 2, title: 'Tidal Drift', artist: 'Echoes of the Sea', duration: '8:02' },
    { id: 3, title: 'Fading Shadows', artist: 'The Emberlight', duration: '3:01' },
    { id: 4, title: 'Cosmic Drift', artist: 'Solar Flare', duration: '5:01' },
    { id: 5, title: 'Urban Serenade', artist: 'Midnight Groove', duration: '4:54' },
    { id: 6, title: 'Whispers in the Wind', artist: 'Rust & Ruin', duration: '6:13' },
    { id: 7, title: 'Electric Fever', artist: 'Neon Jungle', duration: '8:41' },
    { id: 8, title: 'Edge of the Abyss', artist: 'Steel Horizon', duration: '2:27' },
    { id: 9, title: 'Golden Haze', artist: 'Velvet Waves', duration: '3:15' },
    { id: 10, title: 'Shatter the Silence', artist: 'Thunderclap Echo', duration: '8:22' },
  ];

  const handlePlay = () => setIsPlaying(!isPlaying);
  const handleVolume = (v) => setVolume(v);
  const handleSelectSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <main className="mx-auto w-full max-w-[896px] h-auto md:h-[640px] bg-white rounded-xl shadow-custom flex flex-col md:flex-row overflow-hidden">
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
