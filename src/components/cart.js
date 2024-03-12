import React from 'react';
import Products from '../data/Products';
import ShopingCart from '../data/ShopingCart';
import ListCardsCart from '../models/ListCardsCart';

const Cart = () => {
  let total=0
  
  const productsInCart = [];
  ShopingCart.forEach(id => {
      const product = Products.find(objeto => objeto.id === id);
      
      if (product) {
        productsInCart.push(product);
        total+=product.precio
      }
  });
  
  return (
  <div className='cart'>
    <h2>Cesta</h2>
    <ListCardsCart products={productsInCart} />
    <h3>Total de Productos: {total}€</h3>
 </div>
  );
};

// Exportar el componente Home para que pueda ser utilizado en otros archivos
export default Cart;
