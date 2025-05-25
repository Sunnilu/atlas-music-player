// src/components/Playlist.jsx
import React from 'react';
import PlayListItem from './PlayListItem';

const Playlist = ({ songs, selectedSongId, onSelectSong }) => {
  return (
    <div className="w-full md:w-1/2 mt-4 md:mt-0">
      <h2 className="text-xl font-bold px-4 pb-2">Playlist</h2>
      <div className="rounded-lg overflow-hidden">
        {songs.map((song) => (
          <PlayListItem
            key={song.id}
            song={song}
            isSelected={song.id === selectedSongId}
            onClick={() => onSelectSong(song)}
          />
        ))}
      </div>
    </div>
  );
};

export default Playlist;
