import React from 'react';
import CartCard from './CartCard';

const ListCardsCart = ({ products }) => {
  return (
    <div className="products-cart">
    {products.map((product, index) => (
      <CartCard key={index} product={product} />
    ))}
  </div>
  );
};

export default ListCardsCart;