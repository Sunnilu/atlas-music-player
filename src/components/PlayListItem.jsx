// src/components/Playlist.jsx
import { useState } from 'react';
import PlayListItem from './PlayListItem';

export default function Playlist() {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100);
  const [playlist, setPlaylist] = useState([
    { id: 1, title: 'Song 1', artist: 'Artist 1', duration: '3:45' },
    { id: 2, title: 'Song 2', artist: 'Artist 2', duration: '4:12' },
    { id: 3, title: 'Song 3', artist: 'Artist 3', duration: '3:30' },
    { id: 4, title: 'Song 4', artist: 'Artist 4', duration: '3:15' },
    { id: 5, title: 'Song 5', artist: 'Artist 5', duration: '4:45' }
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
    <div 
      className="fixed w-[896px] h-[640px] left-[1460px] top-[-637px] bg-white rounded-xl shadow-[0_4px_4px_0_#D5D7D840] md:max-w-[1024px] md:h-auto md:static md:rounded-none md:shadow-none"
    >
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Playlist</h2>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <button 
              className="w-12 h-12 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              onClick={handlePlay}
            >
              {isPlaying ? <Pause className="w-6 h-6 text-gray-600" /> : <Play className="w-6 h-6 text-gray-600" />}
            </button>
            <div>
              <p className="text-sm text-gray-600">Now Playing</p>
              {currentSong && (
                <p className="text-sm font-medium text-gray-900">{currentSong.title}</p>
              )}
            </div>
          </div>
          <VolumeControls volume={volume} onVolumeChange={handleVolume} />
        </div>
        <div className="overflow-y-auto">
          {playlist.map(song => (
            <PlayListItem 
              key={song.id}
              song={song}
              isSelected={currentSong?.id === song.id}
              onClick={() => handlePlayListItem(song)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}