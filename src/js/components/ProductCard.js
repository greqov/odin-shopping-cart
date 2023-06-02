import React, { useState } from 'react';
import Count from './Count';

export default function ProductCard({ product }) {
  const { img, title, price } = product;
  const [quantity, setQuantity] = useState(0);

  function addProduct() {
    setQuantity(quantity + 1);
  }

  return (
    <div className="p-3 border rounded">
      <img src={img.src} alt={img.alt} />
      <h3>{title}</h3>
      <div>price: {`$${price}`}</div>
      {quantity === 0 ? (
        <button type="button" onClick={addProduct}>
          Add to cart
        </button>
      ) : (
        <Count count={quantity} setCount={setQuantity} />
      )}
    </div>
  );
}
