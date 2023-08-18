import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TiltBox from './TiltBox';

test('renders TiltBox', () => {
  render(<TiltBox />);
  const tiltBoxElement = screen.getByText(/TiltBox/i);
  expect(tiltBoxElement).toBeInTheDocument();
});

test("user can mouse over the TiltBox and see the box tilt", () => {
  render(<TiltBox />);
  const tiltBoxElement = screen.getByText(/TiltBox/i);
  fireEvent.mouseOver(tiltBoxElement);
  expect(tiltBoxElement).toHaveStyle("transform: rotateX(10deg) rotateY(10deg)");
});
