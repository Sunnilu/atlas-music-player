// src/components/Playlist.tsx
import React from 'react';
import PlayListItem from '@components/PlayListItem';
import { Song } from '@types';

interface PlaylistProps {
  songs: Song[];
  selectedSongId?: number;
  onSelectSong: (song: Song) => void;
}

const Playlist: React.FC<PlaylistProps> = ({ songs, selectedSongId, onSelectSong }) => {
  return (
    <div className="w-full h-full font-custom text-gray-900 dark:text-text-light">
      <h2 className="text-xl font-semibold text-primary px-2 pb-2">Playlist</h2>
      <p className="text-sm text-red-500 px-2">Songs loaded: {songs.length}</p>
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

