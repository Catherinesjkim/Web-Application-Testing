// MAKE SURE THAT THE APP RENDERS
// MAKE SURE SOME HTML WORKS
// MAKE SURE DIFFERENT KINDS OF ELEMENTS ARE THERE

import React from 'react';
import { render, getByText } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  const { getByText }render(<App />);
  const linkElement = getBytext(/learn react/i)
  expect(linkElement).toBeInTheDocument();
});

describe('Scoreboard Display', () => {
  test('initial scoreboard is 0', () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('strike').innerHTML).toBe('0')
    expect(getByTestId('ball').innerHTML).toBe('0')
  })
