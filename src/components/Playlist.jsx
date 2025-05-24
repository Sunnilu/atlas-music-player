// src/components/PlayList.jsx
import React from 'react';
import PlayListItem from './PlayListItem';

const songs = [
  { id: 1, title: "Song One", artist: "Artist One" },
  { id: 2, title: "Song Two", artist: "Artist Two" },
  { id: 3, title: "Song Three", artist: "Artist Three" },
];

const PlayList = ({ selectedSongId }) => {
  return (
    <div
      className="bg-black w-[245px] h-[33px] flex items-center justify-center font-inter font-medium text-sm leading-none tracking-normal"
      style={{ position: 'absolute', top: '-1148px', left: '-1828px' }}
    >
      <div className="overflow-y-auto">
        {songs.map(song => (
          <PlayListItem
            key={song.id}
            title={song.title}
            artist={song.artist}
            className={song.id === selectedSongId ? 'bg-gray-700 rounded-md p-2' : 'p-2'}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayList;
