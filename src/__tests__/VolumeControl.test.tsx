import { describe, it } from 'vitest';
import renderer from 'react-test-renderer';
import VolumeControl from '../components/VolumeControl';

describe('VolumeControl Snapshot', () => {
  it('renders with mid volume', () => {
    const tree = renderer
      .create(<VolumeControl volume={50} onChange={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with mute', () => {
    const tree = renderer
      .create(<VolumeControl volume={0} onChange={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with max volume', () => {
    const tree = renderer
      .create(<VolumeControl volume={100} onChange={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
