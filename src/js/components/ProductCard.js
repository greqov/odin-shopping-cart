import React, { useContext } from 'react';
import CartContext from '../context/CartContext';
import Count from './Count';

export default function ProductCard({ product }) {
  const { id, img, title, price } = product;
  const { cart, updateCart } = useContext(CartContext);

  const productInCart = cart.products.find((p) => p.id === id);
  const quantity = productInCart ? productInCart.quantity : 0;

  const setQuantity = (count) => updateCart({ id, price, quantity: count });

  return (
    <div className="p-3 border rounded">
      <img src={img.src} alt={img.alt} />
      <h3>{title}</h3>
      <div>price: {`$${price}`}</div>
      {quantity === 0 ? (
        <button
          type="button"
          onClick={() => {
            setQuantity(1);
          }}
        >
          Add to cart
        </button>
      ) : (
        <Count count={quantity} setCount={setQuantity} />
      )}
    </div>
  );
}
