import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductCard from '../components/ProductCard';

// NOTE: not sute if using setup fn is a great idea
const setup = () => {
  const product = {
    img: {
      src: 'product.png',
      alt: 'product alt text',
    },
    title: 'product title',
    price: 20,
    quantity: 0,
  };

  render(<ProductCard product={product} />);

  const img = screen.getByRole('img');
  const heading = screen.getByRole('heading');
  const price = screen.getByText(/\$20/i);

  return {
    product,
    img,
    heading,
    price,
  };
};

describe('Product card', () => {
  test('has image, title and price', () => {
    const { product, img, heading, price } = setup();

    // TODO: not sure if src is a good attr to test
    expect(img).toHaveAttribute('src', product.img.src);
    expect(heading).toHaveTextContent(product.title);
    expect(price).toBeInTheDocument();
  });

  // NOTE: this test seems obsolete because the next one starts with the same setup :
  test('shows "Add to cart" button by default', () => {
    const { product } = setup();

    expect(product.quantity).toBe(0);
    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
  });

  test('shows counter after clicking on "Add to cart" button', async () => {
    const user = userEvent.setup();
    const { product } = setup();

    expect(product.quantity).toBe(0);

    await user.click(screen.getByRole('button', { name: /add to cart/i }));

    expect(screen.queryByRole('button', { name: /add to cart/i })).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: /decrease button/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /product quantity/i })).toHaveValue('3');
  });
});
