// === Design Gallery Filtreleme + Animasyon ===
document.addEventListener("DOMContentLoaded", () => {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");

    // İlk açılışta animasyonlu göster
    galleryItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("show");
        }, index * 150); // sırayla fade-in
    });

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Aktif sınıfı değiştir
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            galleryItems.forEach((item, index) => {
                if (filterValue === "all" || item.classList.contains(filterValue)) {
                    item.style.display = "block";
                    setTimeout(() => {
                        item.classList.add("show");
                    }, index * 150); // sırayla fade-in
                } else {
                    item.classList.remove("show");
                    setTimeout(() => {
                        item.style.display = "none";
                    }, 400);
                }
            });
        });
    });
});



// Filtreleme
const filterBtns = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".gallery-item");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        let filter = btn.getAttribute("data-filter");
        items.forEach(item => {
            if (filter === "all" || item.classList.contains(filter)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

// Arama
document.getElementById("searchBox").addEventListener("keyup", function () {
    let search = this.value.toLowerCase();
    items.forEach(item => {
        let title = item.querySelector("h3").textContent.toLowerCase();
        item.style.display = title.includes(search) ? "block" : "none";
    });
});

// Sıralama
document.getElementById("sortSelect").addEventListener("change", function () {
    let grid = document.querySelector(".gallery-grid");
    let sorted = Array.from(items).sort((a, b) => {
        let at = a.querySelector("h3").textContent;
        let bt = b.querySelector("h3").textContent;
        return this.value === "az" ? at.localeCompare(bt) : bt.localeCompare(at);
    });
    sorted.forEach(el => grid.appendChild(el));
});

// Lightbox (görsel büyütme)
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

document.querySelectorAll(".preview-img").forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "block";
        lightboxImg.src = img.src;
    });
});
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});