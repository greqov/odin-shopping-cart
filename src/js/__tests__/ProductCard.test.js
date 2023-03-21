import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from '../components/ProductCard';

describe('Product card', () => {
  test('has image, title and price', () => {
    const product = {
      img: {
        src: 'product.png',
        alt: 'product alt text',
      },
      title: 'product title',
      price: 20,
    };

    render(<ProductCard product={product} />);

    // TODO: not sure if src is a good attr to test
    expect(screen.getByRole('img')).toHaveAttribute('src', product.img.src);
    expect(screen.getByRole('heading')).toHaveTextContent(product.title);
    expect(screen.getByText(/\$20/i)).toBeInTheDocument();
  });
});
