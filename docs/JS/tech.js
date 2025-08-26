document.addEventListener('DOMContentLoaded', () => {
    // Mobil menü ve tema değiştirme butonları
    const mobileMenuButton = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    // Mobil menü açma/kapama
    mobileMenuButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuButton.classList.toggle('active');
        mobileMenuOverlay.classList.toggle('active');
    });

    // Mobil menü dışına tıklayarak menüyü kapatma
    mobileMenuOverlay.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuButton.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
    });

    // Tema değiştirme (açık/koyu)
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const isDark = body.classList.contains('dark-theme');
        themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // Sayfa yüklendiğinde temayı kontrol et
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    // "Daha Fazla İçerik Gör" butonları için JavaScript
    document.querySelectorAll('.load-more-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionName = e.target.getAttribute('data-section');
            alert(`${sectionName} bölümü için daha fazla içerik yükleniyor...`);
            // Burada gerçek bir AJAX isteği veya daha fazla HTML içeriği ekleme mantığı eklenebilir.
        });
    });

    // Form gönderimi (yalnızca bilgilendirme amaçlı, backend kodu olmadan çalışmaz)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            console.log('Form verileri:', data);
            alert('Mesajınız başarıyla gönderildi!');
            contactForm.reset();
        });
    }

    // Scroll Animasyonları (Opsiyonel, daha akıcı bir kullanıcı deneyimi için)
    const fadeInElements = document.querySelectorAll('.news-item, .contact-content, .hero-content');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});