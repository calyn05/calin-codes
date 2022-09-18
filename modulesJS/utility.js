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

function textAnimation() {
  animationContainer.setAttribute("data-visible", true);
  setTimeout(() => {
    animationContainer.setAttribute("data-visible", false);
  }, 5000);
}

export { mobileMenuBtn, toggleMenu, textAnimation, animationContainer };

// Image tilt effect

const imageContainer = document.querySelector(".image-animation__container");

imageContainer.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  imageContainer.style.transform = `rotateX(${-y * 20}deg) rotateY(${
    -x * 20
  }deg)`;
});

imageContainer.addEventListener("mouseenter", (e) => {
  imageContainer.style.transition = ".2s ease";
});

imageContainer.addEventListener("mouseleave", (e) => {
  imageContainer.style.transition = "all 0.5s ease";
  imageContainer.style.transform = `perspective(75em) rotateX(18deg)`;
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

responsiveTextHover();
