import fetchProducts from "./api.js";
import { addToCart } from "./cart.js";
import {
  calculateCartTotal,
  getFromLocalStorage,
  renderCartTotal,
  updateCartIcon,
} from "./helper.js";
import { renderCartItems, renderProducts, uiElements } from "./ui.js";

uiElements.menuIcon.addEventListener("click", () => {
  uiElements.nav.classList.toggle("open");
});

document.addEventListener("DOMContentLoaded", () => {
  const cart = getFromLocalStorage("cart");

  

  if (window.location.pathname.includes("/cart.html")) {
    renderCartItems(cart);
    renderCartTotal(cart);
  } else {
    fetchProducts().then((products) => {
      renderProducts(products, (e) => {
        addToCart(e, products);
      });
    });
  }

  updateCartIcon(cart);
});
