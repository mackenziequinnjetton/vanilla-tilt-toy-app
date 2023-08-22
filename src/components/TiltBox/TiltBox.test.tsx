import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TiltBox from './TiltBox';

test("the angle element renders", () => {
  render(<TiltBox />);
  expect(screen.getByText("angle:")).toBeInTheDocument();
});

test("the percentageX element renders", () => {
  render(<TiltBox />);
  expect(screen.getByText("percentageX:")).toBeInTheDocument();
});

test("the percentageY element renders", () => {
  render(<TiltBox />);
  expect(screen.getByText("percentageY:")).toBeInTheDocument();
});

test("the tiltX element renders", () => {
  render(<TiltBox />);
  expect(screen.getByText("tiltX:")).toBeInTheDocument();
});

test("the tiltY element renders", () => {
  render(<TiltBox />);
  expect(screen.getByText("tiltY:")).toBeInTheDocument();
});
