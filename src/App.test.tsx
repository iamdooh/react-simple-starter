import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '@/App';

test('renders Google website link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Google/i);
  expect(linkElement).toBeInTheDocument();
});
