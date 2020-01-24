// MAKE SURE THAT THE APP RENDERS
// MAKE SURE SOME HTML WORKS
// MAKE SURE DIFFERENT KINDS OF ELEMENTS ARE THERE

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('rtl renders without crashing', () => {
  render (<App />);
});

test('resets scoreboard is 0', () => {
  const { getByTestId, getByText } = render(<App />)
  fireEvent.click(getByText(/hit/i))
  expect(getByTestId('count').innerHTML).toBe('0')
  expect(getByTestId('outs').innerHTML).toBe('0')
  });

test('balls and strikes label in included', () => {
  const { getByText } = render(<App />);
  getByText(/balls/i);
  getByText(/strikes/i);
})

test('When Strike is 1, a Foul changes it to 2', () => {
  const { getByTestId, getAllByText, getByText } = render(<App />)
  const foulBtn = getByText(/foul/i)
  const strikeBtn = getAllByText(/strike/i)[1]
  fireEvent.click(strikeBtn)
  fireEvent.click(foulBtn)
  expect(getByTestId('outs').innerHTML).toBe('2')
})