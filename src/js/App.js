import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './routes/Layout';
import Home from './routes/Home';
import Shop from './routes/Shop';
import Cart from './routes/Cart';
import Checkout from './routes/Checkout';
import NotFound from './routes/NotFound';
import CartContext from './context/CartContext';

const goods = [
  {
    id: 1,
    price: 5,
    quantity: 1,
  },
  {
    id: 2,
    price: 3,
    quantity: 4,
  },
];

export default function App() {
  const [cart, setCart] = useState({ products: goods, tax: 0, discount: 0 });

  const updateCart = (product) => {
    const products = [...cart.products].filter((p) => p.id !== product.id);

    if (product.quantity > 0) {
      products.push(product);
    }

    setCart({ ...cart, products });
  };

  return (
    <>
      <CartContext.Provider value={{ cart, updateCart }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </CartContext.Provider>
    </>
  );
}
