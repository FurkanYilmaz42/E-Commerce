import { uiElements } from "./ui.js";

const saveToLocalStorage = (key, cart) => {
  localStorage.setItem(key, JSON.stringify(cart));
};

const getFromLocalStorage = (key) => {
  const strData = localStorage.getItem(key);

  return strData ? JSON.parse(strData) : [];
};

const updateCartIcon = (cart) => {
  const totalquantity = cart.reduce(
    (total, item) => total + parseInt(item.quantity),
    0
  );

  uiElements.cartIcon.setAttribute("data-quantity", totalquantity);
};

const calculateCartTotal = (cart) =>
  cart.reduce((total, product) => total + product.price * product.quantity, 0);

const renderCartTotal = (cart) => {
  const totalPrice = calculateCartTotal(cart);

  const cargoFee = 50.0;

  uiElements.cartTotal.textContent = totalPrice > 0 && totalPrice < 100 ? (cargoFee + Number(totalPrice)).toFixed(2) : Number(totalPrice.toFixed(2));
};

export {
  saveToLocalStorage,
  getFromLocalStorage,
  updateCartIcon,
  calculateCartTotal,
  renderCartTotal,
};
