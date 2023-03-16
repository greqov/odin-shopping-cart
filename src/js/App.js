import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './routes/Layout';
import Home from './routes/Home';
import Shop from './routes/Shop';
import Checkout from './routes/Checkout';
import NotFound from './routes/NotFound';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
