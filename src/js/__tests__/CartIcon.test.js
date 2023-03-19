import React from 'react';
import { render, screen } from '@testing-library/react';
import CardIcon from '../components/CartIcon';

describe('Cart icon', () => {
  test('renders correctly', () => {
    render(<CardIcon />);
    expect(screen.getByLabelText(/go to cart page/i)).toBeInTheDocument();
  });

  test('shows total price', () => {
    render(<CardIcon price="12" />);
    expect(screen.getByText(/\$12/i)).toBeInTheDocument();
  });

  test('does not show total price for empty cart', () => {
    render(<CardIcon price="0" />);
    expect(screen.queryByText(/\$0/i)).not.toBeInTheDocument();
  });
});
