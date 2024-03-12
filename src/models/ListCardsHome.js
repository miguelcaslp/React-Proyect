import React from 'react';
import HomeCard from './HomeCard';

const ListCardsHome = ({ products }) => {
  return (
   

    <div className="product-list">
    {products.map((product, index) => (
      <HomeCard key={index} product={product} />
    ))}
  </div>
  );
};

export default ListCardsHome;
