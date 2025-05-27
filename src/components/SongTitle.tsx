const SongTitle = ({ song }) => {
  if (!song) return <p className="text-white">No song selected</p>;
  return (
    <div className="text-center text-white">
      <p className="font-bold">{song.title}</p>
      <p className="text-sm text-gray-300">{song.artist}</p>
    </div>
  );
};
