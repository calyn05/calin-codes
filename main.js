import { app, db, collection, addDoc } from "./firebaseConfig.js";
import "./style.css";
import favicon from "./assets/images/calin.codes-favicon.jpg";
import logoDark from "./assets/images/calin.codes-logo-dark.jpg";

import {
  mobileMenuBtn,
  toggleMenu,
  textAnimation,
  animationContainer,
} from "./modulesJS/utility.js";

import { checkCanvas } from "./modulesJS/trailEffect.js";

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

// contact form
const contactDetails = document.getElementById("contact-details");
const contactForm = document.getElementById("contact-form");
if (contactForm !== null) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = getInputValue("contact-name");
    const email = getInputValue("contact-email");
    const subject = getInputValue("contact-subject");
    const message = getInputValue("contact-message");
    const data = {
      name,
      email,
      subject,
      message,
    };
    if (!validateEmail(email)) {
      const emailError = document.createElement("p");
      emailError.classList.add("error");
      emailError.textContent = "Please enter a valid email address";
      contactDetails.appendChild(emailError);
      setTimeout(() => {
        emailError.remove();
      }, 3000);
      return;
    } else {
      try {
        addDoc(collection(db, "messages"), data);
        const successMessage = document.getElementById("success-message");
        successMessage.setAttribute("data-visible", true);
        setTimeout(() => {
          successMessage.setAttribute("data-visible", false);
        }, 3200);
      } catch (e) {
        emailError.textContent = "Something went wrong. Please try again later";
        contactDetails.appendChild(emailError);
        setTimeout(() => {
          emailError.remove();
        }, 3000);
      } finally {
        contactForm.reset();
      }
    }
  });
}

function getInputValue(id) {
  return document.getElementById(id).value;
}

//validate form

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validateEmail(email) {
  return emailRegex.test(String(email).toLowerCase());
}

// text animation

function checkAnimationContainer() {
  if (animationContainer) {
    textAnimation();
  }
}

//calls
checkAnimationContainer();
checkCanvas();
