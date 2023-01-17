import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

// TODO: add before each setup?

describe('App component', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading')).toHaveTextContent(/such app/i);
  });

  // TODO: update this basic test to make sure router is okayish
  test('click on "shop" link navigate to Shop page', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await userEvent.click(screen.getByText(/shop/i));

    expect(screen.getByRole('heading')).toHaveTextContent(/such shop/i);
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