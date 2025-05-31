// src/__tests__/PlayListItem.test.tsx
import { describe, it, expect } from 'vitest';
import renderer from 'react-test-renderer';
import PlayListItem from '../components/PlayListItem';
import { Song } from '../types';

const mockSongBase: Song = {
    id: 1,
    title: 'Moonlight Sonata',
    artist: 'Beethoven',
    author: 'L. van Beethoven',
    duration: '4:35',
    image: '',
    audio: '',
    lyrics: '',
    cover: undefined
};

describe('PlayListItem Snapshot', () => {
  it('renders as selected', () => {
    const tree = renderer
      .create(
        <PlayListItem song={mockSongBase} isSelected={true} onClick={() => {}} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders as not selected', () => {
    const tree = renderer
      .create(
        <PlayListItem song={mockSongBase} isSelected={false} onClick={() => {}} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with short duration', () => {
    const shortSong: Song = { ...mockSongBase, duration: '45' }; // 0:45 formatted
    const tree = renderer
      .create(
        <PlayListItem song={shortSong} isSelected={false} onClick={() => {}} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
