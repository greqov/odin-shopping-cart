import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  it('renders correct heading', () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.getByRole('heading')).toHaveTextContent(/such app!/i);
  });
});
