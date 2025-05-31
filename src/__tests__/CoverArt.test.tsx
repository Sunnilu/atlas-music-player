import { describe, it, expect } from 'vitest';
import renderer from 'react-test-renderer';
import CoverArt from '../components/CoverArt';
import { Song } from '../types';

const mockSong: Song = {
  id: 1,
  title: 'Test Track',
  artist: 'Atlas',
  audio: '/test.mp3',
  image: '/cover.jpg', // ✅ Corrected
  duration: '3:00',
  lyrics: '',
  cover: undefined,
  author: ''
};

describe('CoverArt Snapshot', () => {
  it('renders with image and no lyrics', () => {
    const tree = renderer.create(<CoverArt song={mockSong} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

