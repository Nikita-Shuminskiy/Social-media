import React from 'react';
import {render, screen} from '@testing-library/react';
import {AppContainer} from './App';

test('renders learn react link', () => {
    render(<AppContainer/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
