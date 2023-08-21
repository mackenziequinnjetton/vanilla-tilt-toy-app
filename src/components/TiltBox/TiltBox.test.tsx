import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TiltBox from './TiltBox';
import { hover } from '@testing-library/user-event/dist/hover';

test('renders TiltBox', () => {
  render(<TiltBox />);
  const tiltBoxElement = screen.getByText(/TiltBox/i);
  expect(tiltBoxElement).toBeInTheDocument();
});

test("when user hovers over the TiltBox element, transform styles are applied", () => {
  render(<TiltBox />);
  const tiltBoxElement = screen.getByText(/TiltBox/i);

  hover(tiltBoxElement, { clientX: 0, clientY: 0 });
  expect(tiltBoxElement).toHaveStyle("transform: perspective(1000px) rotateX(NaNdeg) rotateY(NaNdeg) scale3d(1, 1, 1);");
});
