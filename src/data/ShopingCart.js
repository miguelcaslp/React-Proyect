let ShopingCart = [];

export const addItemToCart = (newItem) => {
    if (ShopingCart.indexOf(newItem) === -1) {
      ShopingCart.push(newItem)
    }
  };

export default ShopingCart;