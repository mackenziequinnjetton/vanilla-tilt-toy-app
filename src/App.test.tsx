import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const tiltBoxElement = screen.getByText(/TiltBox/i);
  expect(tiltBoxElement).toBeInTheDocument();
});
