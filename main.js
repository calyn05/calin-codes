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

import { canvas, mouse, animate } from "./modulesJS/trailEffect.js";

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

// trail effect

function checkCanvas() {
  if (canvas) {
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    window.addEventListener("mouseout", () => {
      mouse.x = undefined;
      mouse.y = undefined;
    });

    window.addEventListener("load", () => {
      animate();
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  checkCanvas();
});
