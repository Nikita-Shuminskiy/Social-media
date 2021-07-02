import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import store from './Redux/store';

test('renders learn react link', () => {
  render( <App  store={store}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
