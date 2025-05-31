// src/__tests__/VolumeControl.test.tsx
import { describe, it, expect } from 'vitest';
import renderer from 'react-test-renderer';
import VolumeControls from '../components/VolumeControls';

describe('VolumeControls Snapshot', () => {
  it('renders the volume slider with default configuration', () => {
    const tree = renderer.create(<VolumeControls />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
