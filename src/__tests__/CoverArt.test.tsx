import { describe, it, expect } from 'vitest';
import renderer from 'react-test-renderer';
import CoverArt from '../components/CoverArt';
import { Song } from '../types'; // Adjust if needed

const mockSongBase: Song = {
    id: 1,
    title: 'Test Track',
    artist: 'Test Artist',
    audio: '/test.mp3',
    image: '/cover.jpg',
    duration: '3:00',
    lyrics: '',
    cover: undefined,
    author: ''
};

describe('CoverArt Snapshot', () => {
  it('renders with image and no lyrics', () => {
    const tree = renderer
      .create(<CoverArt song={mockSongBase} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with lyrics on hover', () => {
    const songWithLyrics: Song = {
      ...mockSongBase,
      lyrics: 'Line 1\nLine 2',
    };

    const tree = renderer
      .create(<CoverArt song={songWithLyrics} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with missing image', () => {
    const songNoImage: Song = {
      ...mockSongBase,
      image: '',
    };

    const tree = renderer
      .create(<CoverArt song={songNoImage} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
