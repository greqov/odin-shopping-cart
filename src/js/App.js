import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Shop from './routes/Shop';
import NotFound from './routes/NotFound';

export default function App() {
  return (
    <>
      <nav>
        navigation here
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      footer
    </>
  );
}
