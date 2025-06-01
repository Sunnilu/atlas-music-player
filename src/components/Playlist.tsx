// src/components/Playlist.tsx
import React from 'react';
import PlayListItem from '@components/PlayListItem';
import { Song } from '../types'; // plain relative import

interface PlaylistProps {
  songs: Song[];
  selectedSongId?: number;
  onSelectSong: (song: Song) => void;
}

const Playlist: React.FC<PlaylistProps> = ({
  songs,
  selectedSongId,
  onSelectSong,
}) => {
  return (
    <div className="h-full w-full font-custom text-gray-900 dark:text-text-light">
      <h2 className="px-2 pb-2 text-xl font-semibold text-primary">Playlist</h2>
      <p className="mb-2 text-center text-sm text-gray-500">
        Songs loaded: {songs.length}
      </p>

      <div className="max-h-full space-y-2 overflow-y-auto rounded-xl bg-surface p-2">
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
