import "./style.css";
import favicon from "./assets/images/calin.codes-favicon.jpg";
import logoDark from "./assets/images/calin.codes-logo-dark.jpg";
import logoLight from "./assets/images/calin.codes-logo-light.jpg";
import { app } from "./firebaseConfig.js";

import {
  mobileMenuBtn,
  toggleMenu,
  textAnimation,
  animationContainer,
} from "./modulesJS/utility.js";

document.addEventListener("DOMContentLoaded", () => {
  app;
});

const faviconElement = document.getElementById("favicon");
faviconElement.href = favicon;

const logoElement = document.getElementById("logo");
logoElement.src = logoDark;

mobileMenuBtn.addEventListener("click", () => {
  toggleMenu();
});

// text animation

function checkAnimationContainer() {
  if (animationContainer) {
    textAnimation();
  }
}

window.addEventListener("load", () => {
  checkAnimationContainer();
});
