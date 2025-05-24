// src/components/MusicPlayer.jsx
import { useState } from 'react';
import CoverArt from './CoverArt';
import SongTitle from './SongTitle';
import PlayControls from './PlayControls';
import VolumeControls from './VolumeControls';
import PlayListItem from './PlayListItem';

export default function MusicPlayer() {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100);
  const [playlist, setPlaylist] = useState([
    { id: 1, title: 'Song 1', artist: 'Artist 1', duration: '3:45' },
    { id: 2, title: 'Song 2', artist: 'Artist 2', duration: '4:12' },
    { id: 3, title: 'Song 3', artist: 'Artist 3', duration: '3:30' }
  ]);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolume = (newVolume) => {
    setVolume(newVolume);
  };

  const handlePlayListItem = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <CoverArt song={currentSong} isPlaying={isPlaying} />
      <SongTitle song={currentSong} />
      <PlayControls isPlaying={isPlaying} onPlay={handlePlay} />
      <VolumeControls volume={volume} onVolumeChange={handleVolume} />
      {playlist.map(song => (
        <PlayListItem 
          key={song.id}
          song={song}
          isSelected={currentSong?.id === song.id}
          onClick={() => handlePlayListItem(song)}
        />
      ))}
    </div>
  );
}
