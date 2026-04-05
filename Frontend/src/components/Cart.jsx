import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Cart = ({ items }) => {
  const getTotalItems = () => items.length;
  const getTotalPrice = () => items.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);

  return (
    <div className="fixed bottom-0 right-0 m-4 p-4 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-2">Cart</h2>
      <div className="flex items-center mb-2">
        <FaShoppingCart className="mr-2" />
        <span>Total Items: {getTotalItems()}</span>
      </div>
      <p>Total Price: ${getTotalPrice()}</p>
    </div>
  );
};

export default Cart;
