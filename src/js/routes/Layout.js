import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import CartIcon from '../components/CartIcon';

export default function Layout() {
  const cart = useContext(CartContext);

  // TODO: count tax and discount in total price
  const total = cart.products.reduce((prev, curr) => prev + curr.quantily * curr.price, 0);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">
          <CartIcon price={total} />
        </Link>
      </nav>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
}
