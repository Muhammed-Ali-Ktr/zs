// developer-x.js

document.addEventListener('DOMContentLoaded', () => {
    // DOM tamamen yüklendiğinde çalışacak kod bloğu

    // Elementleri seçme
    const themeToggle = document.querySelector('.theme-toggle');
    const mobileMenuButton = document.querySelector('.mobile-menu');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const navLinks = document.querySelector('.nav-links'); // Mobil menü için ana navigasyon linkleri
    const modal = document.getElementById('offerModal');
    const closeBtn = document.querySelector('.close-btn');
    const contactBtn = document.querySelector('.btn-contact');

    // --- Tema Değiştirme İşlevselliği ---
    // Sayfa yüklendiğinde kaydedilmiş temayı uygula
    const applySavedTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Güneş ikonunu göster
        } else {
            document.body.classList.remove('dark-theme');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Ay ikonunu göster
        }
    };

    // Tema değiştirme butonuna tıklama olayı ekle
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Güneş ikonunu göster
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Ay ikonunu göster
        }
    });

    // Sayfa yüklendiğinde temayı uygula
    applySavedTheme();

    // --- Mobil Menü İşlevselliği ---
    // Mobil menü butonuna tıklama olayı ekle
    mobileMenuButton.addEventListener('click', () => {
        mobileMenuOverlay.classList.toggle('active'); // Overlay'i göster/gizle
        // Nav linklerini overlay içine taşı (sadece mobil görünümde)
        if (mobileMenuOverlay.classList.contains('active')) {
            mobileMenuOverlay.appendChild(navLinks.cloneNode(true)); // Klonlayarak ekle
            mobileMenuOverlay.querySelector('.nav-links').classList.add('mobile-active'); // Mobil stilini uygula
        } else {
            // Overlay kapanırken navLinks'i orijinal yerine geri taşı
            // Bu kısım karmaşık olabilir, basitçe overlay'in içini temizleyelim
            const clonedNavLinks = mobileMenuOverlay.querySelector('.nav-links.mobile-active');
            if (clonedNavLinks) {
                clonedNavLinks.remove();
            }
        }
    });

    // Mobil menü overlay'ine veya içindeki linklere tıklayınca menüyü kapat
    mobileMenuOverlay.addEventListener('click', (event) => {
        // Sadece overlay'in kendisine tıklanırsa veya bir linke tıklanırsa kapat
        if (event.target.classList.contains('mobile-menu-overlay') || event.target.tagName === 'A') {
            mobileMenuOverlay.classList.remove('active');
            const clonedNavLinks = mobileMenuOverlay.querySelector('.nav-links.mobile-active');
            if (clonedNavLinks) {
                clonedNavLinks.remove();
            }
        }
    });

    // --- Modal İşlevselliği ---
    // Modalı açma fonksiyonu
    window.openModal = () => {
        modal.classList.add('active'); // Modalı aktif hale getir (CSS'teki display: flex)
        document.body.style.overflow = 'hidden'; // Arka plan kaydırmayı engelle
    };

    // Modalı kapatma fonksiyonu
    window.closeModal = () => {
        modal.classList.remove('active'); // Modalı pasif hale getir
        document.body.style.overflow = ''; // Arka plan kaydırmayı tekrar etkinleştir
    };

    // "Teklif Almak İçin İletişime Geçin" butonuna tıklama olayı
    if (contactBtn) {
        contactBtn.addEventListener('click', openModal);
    }

    // Modal kapatma butonuna tıklama olayı
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Modal dışına tıklayınca kapatma
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Esc tuşuna basınca kapatma
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Navigasyon linklerine tıklandığında aktif sınıfını yönetme
    const navLinksList = document.querySelectorAll('.nav-links li a');

    navLinksList.forEach(link => {
        link.addEventListener('click', function() {
            // Tüm linklerden 'active' sınıfını kaldır
            navLinksList.forEach(item => item.classList.remove('active'));
            // Tıklanan linke 'active' sınıfını ekle
            this.classList.add('active');
        });
    });
});
