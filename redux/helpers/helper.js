export const addQty = (cart, myItem) => {
  const selectedProduct = cart.find((item) => item.id === myItem.id);
  let newCart = cart;
  if (selectedProduct) {
    newCart = cart.map((item) => {
      if (item.id === myItem.id) {
        item.qty += 1;
      }
      return item;
    });
  }
  return newCart;
};

export const subQty = (cart, myItem) => {
  const selectedProduct = cart.find((item) => item.id === myItem.id);
  console.log(selectedProduct);
  let newCart = cart;
  if (selectedProduct) {
    newCart = cart.map((item) => {
      if (item.id === myItem.id) {
        item.qty === 0 ? 0 : (item.qty -= 1);
      }
      return item;
    });
  }
  return newCart;
};

export const totalCost = (cart, myItem, type) => {
  const newCart = type === 'add' ? addQty(cart, myItem) : subQty(cart, myItem);
  console.log("new cart after",newCart)
  let quantity = 0;
  let total = 0;
  newCart.map((item) => {
    quantity += item.qty;
    total += item.qty * item.cost;
  });
  return { quantity, total, newCart };
};
