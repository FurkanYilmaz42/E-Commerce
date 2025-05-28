import { uiElements } from "./ui.js";

uiElements.menuIcon.addEventListener("click", () => {
  uiElements.nav.classList.toggle("open");
});
