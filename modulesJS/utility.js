const mobileMenuBtn = document.querySelector(".hamburger-menu__btn");
const navigationOpen = document.querySelector(".primary-navigation");
let menuOpen = false;

function toggleMenu() {
  if (!menuOpen) {
    mobileMenuBtn.classList.add("open");
    navigationOpen.classList.add("open");
    menuOpen = true;
  } else {
    mobileMenuBtn.classList.remove("open");
    navigationOpen.classList.remove("open");
    menuOpen = false;
  }
}

// Start text animation

const animationContainer = document.querySelector(".text-animation__container");

const domLoadingTime = () => {
  const perfEntries = performance.getEntriesByType("navigation");
  const domTimeComplete = perfEntries[0].domComplete;
  return domTimeComplete;
};

const root = document.documentElement;

function textAnimation() {
  animationContainer.setAttribute("data-visible", true);
  if (domLoadingTime() < 3200) {
    setTimeout(() => {
      animationContainer.setAttribute("data-visible", false);
    }, 3200);
  } else {
    root.style.setProperty("--loading-timer", domLoadingTime() / 1000 + "s");
    setTimeout(() => {
      animationContainer.setAttribute("data-visible", false);
    }, domLoadingTime());
  }
}

// Loading animation

const loadingContainer = document.querySelector(".loading-animation");

function loadingAnimation() {
  loadingContainer.setAttribute("data-visible", true);

  root.style.setProperty("--loading-timer", domLoadingTime() / 1000 + "s");

  setTimeout(() => {
    loadingContainer.setAttribute("data-visible", false);
  }, domLoadingTime());
}

window.addEventListener("load", () => {
  if (loadingContainer !== null) {
    loadingAnimation();
  }
});

// Image tilt effect

const imageContainer = document.querySelector(".image-animation__container");

window.addEventListener("DOMContentLoaded", () => {
  if (imageContainer) {
    imageContainer.addEventListener("mousemove", (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      imageContainer.style.transform = `rotateX(${-y * 20}deg) rotateY(${
        -x * 20
      }deg)`;

      imageContainer.addEventListener("mouseenter", (e) => {
        imageContainer.style.transition = ".2s ease";
      });

      imageContainer.addEventListener("mouseleave", (e) => {
        imageContainer.style.transition = "all 0.5s ease";
        imageContainer.style.transform = `perspective(75em) rotateX(18deg)`;
      });
    });
  }
});

// Text hover effect

const introRoleText = document.querySelector("#intro-role");

function responsiveTextHover() {
  const letters = introRoleText.textContent.split("");
  introRoleText.textContent = introRoleText.getAttribute("data-text");

  letters.forEach((letter) => {
    if (letter !== " ") {
      const span = document.createElement("span");
      span.textContent = letter;
      span.classList.add("letter");
      introRoleText.append(span);
    } else {
      introRoleText.innerHTML += " ";
    }
  });
}
window.addEventListener("DOMContentLoaded", () => {
  if (introRoleText) {
    responsiveTextHover();
  }
});

// Reveal efect on scroll

const revealElements = document.querySelectorAll(".reveal");

function reveal() {
  for (let i = 0; i < revealElements.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = revealElements[i].getBoundingClientRect().top;
    const revealPoint = 50;

    if (revealTop < windowHeight - revealPoint) {
      revealElements[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);

export { mobileMenuBtn, toggleMenu, textAnimation, animationContainer };
