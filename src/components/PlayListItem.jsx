// src/components/PlayListItem.jsx
export default function PlayListItem() {
  return (
    <div className="flex justify-between py-3 border-t border-gray-200">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-gray-100 rounded-lg" />
        <div>
          <h3 className="text-sm font-medium text-gray-900">Song Title</h3>
          <p className="text-sm text-gray-600">Artist Name</p>
        </div>
      </div>
      <span className="text-sm text-gray-500">3:45</span>
    </div>
  );
}
