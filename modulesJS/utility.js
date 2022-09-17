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

// Mouse trail effect

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particlesArray = [];
let hue = 0;

const mouse = {
  x: null,
  y: null,
};

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;

  for (let i = 0; i < 2; i++) {
    particlesArray.push(new Particle());
  }
});

class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 1 - 1.5;
    this.speedY = Math.random() * 2 - 1.5;
    this.color = `hsl(${hue}, 100%, 50%)`;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function handleParticles() {
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
    for (let j = i; j < particlesArray.length; j++) {
      const dx = particlesArray[i].x - particlesArray[j].x;
      const dy = particlesArray[i].y - particlesArray[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 80) {
        ctx.beginPath();
        ctx.strokeStyle = particlesArray[i].color;
        ctx.lineWidth = 0.2;
        ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
        ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
        ctx.stroke();
        ctx.closePath();
      }
    }
    if (particlesArray[i].size <= 0.3) {
      particlesArray.splice(i, 1);
      i--;
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  hue += 2;
  requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

window.addEventListener("mouseout", () => {
  mouse.x = undefined;
  mouse.y = undefined;
});

window.addEventListener("DOMContentLoaded", () => {
  animate();
});
