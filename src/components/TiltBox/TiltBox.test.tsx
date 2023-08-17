import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TiltBox from './TiltBox';

test('renders TiltBox', () => {
  render(<TiltBox />);
  const linkElement = screen.getByText(/TiltBox/i);
  expect(linkElement).toBeInTheDocument();
});
