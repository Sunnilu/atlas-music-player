// src/components/CoverArt.jsx
import { useState } from 'react';
import { Music } from 'react';

export default function CoverArt() {
  return (
    <div className="w-48 h-48 mx-auto mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
      <Music className="w-12 h-12 text-gray-400" />
    </div>
  );
}
