// src/__tests__/SongTitle.test.tsx
import { describe, it, expect } from 'vitest';
import renderer from 'react-test-renderer';
import SongTitle from '../components/SongTitle';

describe('SongTitle Snapshot', () => {
  it('renders with standard title and artist', () => {
    const tree = renderer
      .create(<SongTitle title="Ocean Eyes" artist="Billie Eilish" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with long title and artist', () => {
    const tree = renderer
      .create(
        <SongTitle
          title="A Very Long Song Title That Might Break Lines"
          artist="An Even Longer Artist Name That Might Wrap"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with empty title and artist', () => {
    const tree = renderer
      .create(<SongTitle title="" artist="" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
