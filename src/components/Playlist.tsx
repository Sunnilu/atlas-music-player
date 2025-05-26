// src/components/Playlist.tsx
import React from 'react';
import PlayListItem from '@components/PlayListItem';
interface Song {
  id: number;
  title: string;
  artist: string;
  duration: number;
  // Add other fields as necessary
}

interface PlaylistProps {
  songs: Song[];
  selectedSongId: number | undefined;
  onSelectSong: (song: Song) => void;
}

const Playlist: React.FC<PlaylistProps> = ({ songs, selectedSongId, onSelectSong }) => {
  return (
    <div className="w-full h-full font-custom text-gray-900 dark:text-text-light">
      <h2 className="text-xl font-semibold text-primary dark:text-text-light px-2 pb-2">
        Playlist
      </h2>
      <div className="rounded-xl bg-white dark:bg-surface overflow-y-auto max-h-full space-y-2 p-2 transition-all">
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
