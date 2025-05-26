// src/components/Playlist.jsx
import React from 'react';
import PlayListItem from './PlayListItem';

const Playlist = ({ songs, selectedSongId, onSelectSong }) => {
  return (
    <div className="w-full h-full font-custom">
      <h2 className="text-xl font-semibold text-primary px-2 pb-2">Playlist</h2>
      <div className="rounded-xl bg-surface overflow-y-auto max-h-full space-y-2 p-2">
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

