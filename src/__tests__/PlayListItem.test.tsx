import { describe, it } from 'vitest';
import renderer from 'react-test-renderer';
import PlayListItem from '../components/PlayListItem';

describe('PlayListItem Snapshot', () => {
  it('renders active track', () => {
    const tree = renderer
      .create(
        <PlayListItem
          title="Active Track"
          artist="Suntha"
          active={true}
          onClick={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders inactive track', () => {
    const tree = renderer
      .create(
        <PlayListItem
          title="Inactive Track"
          artist="Lucas"
          active={false}
          onClick={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
