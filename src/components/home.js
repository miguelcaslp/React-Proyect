import React from 'react';
import ProductsData from '../data/Products';
import ListCardsHome from '../models/ListCardsHome'

const Home = () => {

  return (

    <div>
      <ListCardsHome products={ProductsData} />
    </div>
  );
};

export default Home;


