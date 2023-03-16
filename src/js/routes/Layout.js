import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </nav>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
}
