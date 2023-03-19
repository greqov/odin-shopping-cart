import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from '../components/ProductCard';

describe('Product card', () => {
  test('renders correctly', () => {
    render(<ProductCard />);
    expect(screen.getByText(/such product/i)).toBeInTheDocument();
  });
});
