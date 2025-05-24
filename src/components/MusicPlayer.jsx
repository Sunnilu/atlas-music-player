// src/components/MusicPlayer.jsx
import CoverArt from './CoverArt';
import SongTitle from './SongTitle';
import PlayControls from './PlayControls';
import VolumeControls from './VolumeControls';
import PlayListItem from './PlayListItem';

export default function MusicPlayer() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <CoverArt />
      <SongTitle />
      <PlayControls />
      <VolumeControls />
      <PlayListItem />
    </div>
  );
}
