import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from '../App';

// TODO: add before each setup?

describe('App component', () => {
  it('renders correctly', () => {
    render(<App />, { wrapper: BrowserRouter });

    expect(screen.getByRole('heading')).toHaveTextContent(/such app/i);
  });

  // TODO: update this basic test to make sure router is okayish
  test('shows Shop page after clicking on "shop" link', async () => {
    render(<App />, { wrapper: BrowserRouter });

    await userEvent.click(screen.getByText(/shop/i));

    expect(screen.getByRole('heading')).toHaveTextContent(/such shop/i);
  });

  test('has checkout page', () => {
    const route = '/checkout';

    render(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/checkout/i)).toBeInTheDocument();
  });

  test('has 404 page', () => {
    const badRoute = '/sh22p';

    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/nothing found/i)).toBeInTheDocument();
  });
});
