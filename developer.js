
        // Mobile menu toggle
        function toggleMobileMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        }

        // Navbar background on scroll
        window.addEventListener('scroll', function () {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            } else {
                navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            }
        });
    

    //Teklif Butonu
    
        // Modal elementi
const modal = document.getElementById('offerModal');

// Tüm "Teklif Al" butonlarını seç ve tıklama olayına modal açmayı ekle
document.querySelectorAll('.btn-contact').forEach(button => {
  button.addEventListener('click', () => {
    modal.style.display = 'block';
  });
});

// Kapatma butonuna tıklayınca modalı kapat
function closeModal() {
  modal.style.display = 'none';
}

// Modal dışında bir yere tıklanırsa modal kapansın
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

    