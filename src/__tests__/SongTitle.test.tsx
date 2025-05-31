import { describe, it } from 'vitest';
import renderer from 'react-test-renderer';
import SongTitle from '../components/SongTitle';

describe('SongTitle Snapshot', () => {
  it('renders with title and artist', () => {
    const tree = renderer
      .create(<SongTitle title="Sunrise" artist="Atlas" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with long text', () => {
    const tree = renderer
      .create(
        <SongTitle title="An Extraordinarily Long Song Title" artist="A Very Long Artist Name" />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
