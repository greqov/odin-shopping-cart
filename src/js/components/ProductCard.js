import React from 'react';
import Count from './Count';

export default function ProductCard({ product }) {
  const { img, title, price } = product;

  return (
    <div className="p-3 border rounded">
      <img src={img.src} alt={img.alt} />
      <h3>{title}</h3>
      <div>price: {`$${price}`}</div>
      <div>counter here</div>
      <button type="button">Add to cart</button>
      <Count />
    </div>
  );
}
