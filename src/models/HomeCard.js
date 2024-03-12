import React from 'react';
import { addItemToCart } from '../data/ShopingCart'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const HomeCard = ({ product }) => {

  const handleClick = () => {
    addItemToCart(product.id);
    toast.success(product.title + ' añadido a la cesta!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };



  return (
    <div className="card-home">
      <img src={product.image} />
      <div className="card-home-body">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p >{product.precio}€</p>
        <button className='ComprarButton' onClick={handleClick} >Añadir a la Cesta</button>

        <ToastContainer />
      </div>
    </div>
  );
};

export default HomeCard;