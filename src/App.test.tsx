import React from 'react';
import { render, screen } from '@testing-library/react';
import GlobalAppComponent from './App';

test('renders learn react link', () => {
  render( <GlobalAppComponent/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
