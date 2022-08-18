import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  it('renders correct heading', () => {
    render(<App />);
    expect(screen.getByRole('heading')).toHaveTextContent(/such app!/i);
  });
});
