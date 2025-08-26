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


// Toggle Section Function
function toggleSection(sectionId) {
  const hiddenItems = document.getElementById(sectionId + "-hidden");
  const button = document.querySelector(
    "button[onclick=\"toggleSection('" + sectionId + "')\"]"
  );

  if (hiddenItems.style.display === "block") {
    hiddenItems.style.display = "none";
    button.innerHTML = '<i class="fas fa-chevron-down"></i> Daha Fazlasını Gör';
  } else {
    hiddenItems.style.display = "block";
    button.innerHTML = '<i class="fas fa-chevron-up"></i> Daha Az Göster';

    // Fade-in animasyonu
    hiddenItems.querySelectorAll(".news-item").forEach((item, i) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(20px)";
      setTimeout(() => {
        item.style.transition = "all 0.5s ease";
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, i * 100); // sırayla açılma
    });
  }
}

// Newsletter Subscribe Function
function subscribeNewsletter(event) {
  event.preventDefault();
  const input = document.querySelector(".newsletter-input");
  const email = input.value.trim();

  if (email) {
    alert("🎉 Teşekkürler! " + email + " adresiyle abone oldunuz.");
    input.value = "";
  } else {
    alert("⚠️ Lütfen geçerli bir e-posta adresi giriniz.");
  }
}
