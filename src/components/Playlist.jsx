// src/components/Playlist.jsx
import React from 'react';
import PlayListItem from './PlayListItem';

const Playlist = ({ songs, selectedSongId, onSelectSong }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md overflow-y-auto max-h-[300px]">
      {songs.map((song) => (
        <PlayListItem
          key={song.id}
          song={song}
          isSelected={song.id === selectedSongId}
          onClick={() => onSelectSong(song)}
        />
      ))}
    </div>
  );
};

export default Playlist;
