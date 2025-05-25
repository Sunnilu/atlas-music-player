// src/components/Playlist.jsx
import React from 'react';
import PlayListItem from './PlayListItem';

const Playlist = ({ songs, selectedSongId, onSelectSong }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4 md:mt-0 w-full">
      <h2 className="text-lg font-bold mb-2">Playlist</h2>
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
