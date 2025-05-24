// src/components/VolumeControls.jsx
export default function VolumeControls() {
  return (
    <div className="mb-6">
      <input 
        type="range" 
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        min="0" 
        max="100"
      />
    </div>
  );
}
