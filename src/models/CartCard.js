import React from 'react';
import { addItemToCart}  from '../data/ShopingCart'
import ShopingCart from '../data/ShopingCart';

const CardOfCart = ({ product }) => {


  return (
    <div className="cartCard">
      <div className='img-cart'>
        <img src={product.image}  />
      </div>
      <div className='title-cart'>
        <a>{product.title}, {product.description}</a>
      </div>
      <div className='price-cart'>
        <a >{product.precio}€</a>
      </div>
    </div>
  );
};

export default CardOfCart;