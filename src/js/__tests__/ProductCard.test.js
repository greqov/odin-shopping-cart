import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartContext from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const product = {
  id: 101,
  img: {
    src: 'product.png',
    alt: 'product alt text',
  },
  title: 'product title',
  price: 20,
};

const Wrapper = () => {
  const [cart, setCart] = useState({ products: [] });

  // NOTE: this mock feels wrong; it mocks only adding a product
  // is it make sense to mock/test removing a product?
  const updateCart = (item) => {
    setCart({ products: [...cart.products, item] });
  };

  return (
    <CartContext.Provider value={{ cart, updateCart }}>
      <ProductCard product={product} />
    </CartContext.Provider>
  );
};

const setup = () => {
  render(<Wrapper />);

  const img = screen.getByRole('img');
  const heading = screen.getByRole('heading');
  const price = screen.getByText(/\$20/i);

  return {
    img,
    heading,
    price,
  };
};

describe('Product card', () => {
  test('has image, title and price', () => {
    const { img, heading, price } = setup();

    // TODO: not sure if src is a good attr to test
    expect(img).toHaveAttribute('src', product.img.src);
    expect(heading).toHaveTextContent(product.title);
    expect(price).toBeInTheDocument();
  });

  // NOTE: this test seems obsolete because the next one starts with the same setup :
  test('shows "Add to cart" button by default', () => {
    setup();
    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
  });

  test('shows counter after clicking on "Add to cart" button', async () => {
    const user = userEvent.setup();
    setup();

    await user.click(screen.getByRole('button', { name: /add to cart/i }));

    expect(screen.queryByRole('button', { name: /add to cart/i })).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: /decrease button/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /product quantity/i })).toHaveValue('1');
  });
});
