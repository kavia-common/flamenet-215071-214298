import { render, screen } from '@testing-library/react';
import App from './App';

test('renders View Docs button', () => {
  render(<App />);
  const btn = screen.getByText(/View Docs/i);
  expect(btn).toBeInTheDocument();
});
