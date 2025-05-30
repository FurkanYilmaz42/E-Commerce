import {
  getFromLocalStorage,
  renderCartTotal,
  saveToLocalStorage,
  updateCartIcon,
} from "./helper.js";
import { renderCartItems } from "./ui.js";

let cart = getFromLocalStorage("cart");

const addToCart = (e, products) => {
  const productId = Number(e.target.dataset.id);

  const product = products.find((product) => product.id === productId);

  const exitingItem = cart.find((item) => item.id === productId);

  if (exitingItem) {
    exitingItem.quantity++;
  } else {
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    };

    cart.push(cartItem);
  }

  saveToLocalStorage("cart", cart);

  e.target.textContent = "Added";

  setTimeout(() => {
    e.target.textContent = "Add to cart";
  }, 2000);

  updateCartIcon(cart);
};

const removeFromCart = (e) => {
  const response = confirm("silme islemini onayliyor musunuz?");
  if (response) {
    const productId = parseInt(e.target.dataset.id);

    cart = cart.filter((item) => item.id != productId);

    saveToLocalStorage("cart", cart);

    renderCartItems(cart);

    updateCartIcon(cart);

    renderCartTotal(cart);
  }
};

const onQuantitiyChange = (e) => {
  const productId = +e.target.dataset.id;

  const newQuantity = e.target.value;

  if (newQuantity > 0) {
    const updatedItem = cart.find((item) => item.id === productId);
    updatedItem.quantity = newQuantity;
    saveToLocalStorage("cart", cart);
  } else {
    removeFromCart(e);
  }

  updateCartIcon(cart);

  renderCartTotal(cart);
};

export { addToCart, removeFromCart, onQuantitiyChange };
