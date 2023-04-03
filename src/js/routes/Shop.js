import React from 'react';
import picAlpaca from '../../assets/products/alpaca.png';
import ProductCard from '../components/ProductCard';

const product = {
  img: {
    src: picAlpaca,
    alt: 'alpaca alt text',
  },
  title: 'Product title',
  price: 20,
  quantity: 0,
};

export default function Shop() {
  return (
    <>
      <h1>Such shop!</h1>
      <ProductCard product={product} />
    </>
  );
}
