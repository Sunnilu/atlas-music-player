// src/components/PlayListItem.jsx
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export default function PlayListItem({ song, isSelected, onClick }) {
  return (
    <div
      className={clsx(
        'flex justify-between items-center p-4 rounded-lg cursor-pointer transition-colors',
        isSelected ? 'bg-gray-200' : 'hover:bg-gray-100'
      )}
      onClick={onClick}
    >
      <div>
        <p className="text-sm font-semibold text-gray-900">{song.title}</p>
        <p className="text-xs text-gray-500">{song.artist}</p>
      </div>
      <span className="text-sm text-gray-700">{song.duration}</span>
    </div>
  );
}

PlayListItem.propTypes = {
  song: PropTypes.shape({
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
  }).isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};
