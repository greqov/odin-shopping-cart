import { createContext } from 'react';

const goods = [
  {
    id: 1,
    quantily: 1,
    price: 5,
  },
  {
    id: 2,
    quantily: 4,
    price: 3,
  },
];

const CartContext = createContext({ products: goods, tax: 0, discount: 0 });

export default CartContext;
