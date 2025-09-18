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