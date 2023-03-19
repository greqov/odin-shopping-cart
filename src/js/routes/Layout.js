import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import CartIcon from '../components/CartIcon';

export default function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">
          <CartIcon price="20" />
        </Link>
      </nav>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
}
