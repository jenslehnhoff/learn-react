import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    render(<App/>);
    const title = screen.getByText(/My awesome website in React/i);
    expect(title).toBeInTheDocument();
});
