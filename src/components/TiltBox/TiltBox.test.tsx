import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TiltBox from './TiltBox';

test('renders TiltBox', () => {
  render(<TiltBox />);
  const tiltBoxElement = screen.getByText(/TiltBox/i);
  expect(tiltBoxElement).toBeInTheDocument();
});
