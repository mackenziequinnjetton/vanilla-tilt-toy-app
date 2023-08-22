import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TiltBox from './TiltBox';

test("the angle element renders", () => {
  render(<TiltBox />);
  expect(screen.getByText("angle:")).toBeInTheDocument();
});

test("the percentX element renders", () => {
  render(<TiltBox />);
  expect(screen.getByText("percentX:")).toBeInTheDocument();
});

test("the percentY element renders", () => {
  render(<TiltBox />);
  expect(screen.getByText("percentY:")).toBeInTheDocument();
});

test("the tiltX element renders", () => {
  render(<TiltBox />);
  expect(screen.getByText("tiltX:")).toBeInTheDocument();
});
