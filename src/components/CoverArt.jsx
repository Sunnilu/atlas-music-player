import React from 'react';
import coverImage from '../assets/cover-placeholder.jpg'; // Update with actual file name if different

const CoverArt = () => {
  return (
    <div className="w-32 h-32 overflow-hidden rounded-md">
      <img
        src={coverImage}
        alt="Cover Art"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default CoverArt;
