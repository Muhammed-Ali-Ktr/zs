// Smooth scroll
document.querySelectorAll('.cta-buttons a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Hero yazısına typing efekti
const heroTitle = document.getElementById("hero-title");
const text = "Zift Studio";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    heroTitle.textContent = text.substring(0, index + 1);
    index++;
    setTimeout(typeEffect, 150);
  }
}

window.addEventListener("load", () => {
  heroTitle.textContent = "";
  typeEffect();
});

// Buton hover animasyonu (küçük titreşim)
document.querySelectorAll(".cta-buttons a").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.1)";
    btn.style.transition = "transform 0.2s ease";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});