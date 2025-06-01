// src/components/VolumeControls.jsx
export default function VolumeControls() {
  return (
    <div className="mb-6">
      <input
        type="range"
        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
        min="0"
        max="100"
      />
    </div>
  );
}
