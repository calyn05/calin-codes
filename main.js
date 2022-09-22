import "./style.css";
import favicon from "./assets/images/calin.codes-favicon.jpg";
import logoDark from "./assets/images/calin.codes-logo-dark.jpg";
import { app } from "./firebaseConfig.js";

import {
  mobileMenuBtn,
  toggleMenu,
  textAnimation,
  animationContainer,
} from "./modulesJS/utility.js";

import { checkCanvas } from "./modulesJS/trailEffect.js";

document.addEventListener("DOMContentLoaded", () => {
  app;
});

window.addEventListener("load", () => {
  const faviconElement = document.getElementById("favicon");
  const logoElement = document.getElementById("logo");
  logoElement.src = logoDark;
  if (faviconElement !== null) {
    faviconElement.href = favicon;
  }
});

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

// trail effect

window.addEventListener("DOMContentLoaded", () => {
  checkCanvas();
});
