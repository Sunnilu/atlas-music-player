// src/components/MusicPlayer.jsx
import { useState } from 'react';
import CurrentlyPlaying from './CurrentlyPlaying';
import Playlist from './Playlist';

export default function MusicPlayer() {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100);
  const [playlist, setPlaylist] = useState([
    { id: 1, title: 'Song 1', artist: 'Artist 1', duration: '3:45' },
    { id: 2, title: 'Song 2', artist: 'Artist 2', duration: '4:12' },
    { id: 3, title: 'Song 3', artist: 'Artist 3', duration: '3:30' }
  ]);

  const handlePlay = () => setIsPlaying(!isPlaying);
  const handleVolume = (newVolume) => setVolume(newVolume);
  const handlePlayListItem = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 max-w-6xl mx-auto md:flex md:space-x-6">
      <div className="md:w-1/2">
        <CurrentlyPlaying
          song={currentSong}
          isPlaying={isPlaying}
          onPlay={handlePlay}
          volume={volume}
          onVolumeChange={handleVolume}
        />
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <Playlist
          selectedSongId={currentSong?.id}
          onSelectSong={handlePlayListItem}
          songs={playlist}
        />
      </div>
    </div>
  );
}
