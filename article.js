// 📌 Makale Verileri (örnek)
const articles = [
  {
    title: "🚀 Web Geliştirmede 2025 Trendleri",
    desc: "Yeni kütüphaneler, frameworkler ve teknolojilerle web geliştirme dünyasında neler değişiyor? Bu makalede keşfedin.",
    category: "web",
    views: 2100,
  },
  {
    title: "📱 Flutter ile Mobil Uygulama Geliştirme",
    desc: "Flutter kullanarak Android ve iOS için tek kod tabanıyla nasıl profesyonel uygulamalar geliştirebilirsiniz?",
    category: "mobile",
    views: 1800,
  },
  {
    title: "🤖 Yapay Zeka ile Tasarımın Geleceği",
    desc: "Yapay zeka destekli araçlar tasarımcıların işlerini nasıl kolaylaştırıyor ve geleceği nasıl şekillendiriyor?",
    category: "ai",
    views: 3400,
  },
  {
    title: "🎮 Unity ile Oyun Geliştirmeye Giriş",
    desc: "Oyun geliştirmeye başlamak isteyenler için Unity’nin sunduğu özellikler ve başlangıç ipuçları.",
    category: "game",
    views: 2700,
  },
  {
    title: "🌐 Blockchain Teknolojisinin Geleceği",
    desc: "Kripto paraların ötesinde blockchain teknolojisinin farklı alanlardaki kullanım senaryoları.",
    category: "blockchain",
    views: 1200,
  },
];

// 📌 Ayarlar
const perPage = 3;
let currentPage = 1;
let currentCategory = "all";
let searchQuery = "";

// 📌 DOM Seçiciler
const articlesGrid = document.getElementById("articles-grid");
const trendingArticlesContainer = document.getElementById("trending-articles");
const paginationContainer = document.getElementById("pagination");
const searchInput = document.getElementById("search-input");
const filterTags = document.querySelectorAll(".filter-tag");

// 📌 Makale Kartı Oluşturma
function createArticleCard(article) {
  return `
    <div class="article-card">
        <h3>${article.title}</h3>
        <p>${article.desc}</p>
        <span class="article-meta">Kategori: ${capitalize(article.category)} | ${article.views.toLocaleString()} Görüntülenme</span>
    </div>
  `;
}

// 📌 Makaleleri Listeleme
function renderArticles() {
  articlesGrid.innerHTML = "";

  // Filtreleme
  let filtered = articles.filter((a) => {
    const matchCategory = currentCategory === "all" || a.category === currentCategory;
    const matchSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Sayfalama
  const totalPages = Math.ceil(filtered.length / perPage);
  const start = (currentPage - 1) * perPage;
  const paginated = filtered.slice(start, start + perPage);

  // Kartları ekle
  if (paginated.length > 0) {
    articlesGrid.innerHTML = paginated.map(createArticleCard).join("");
  } else {
    articlesGrid.innerHTML = `<p style="text-align:center; color:#94a3b8;">❌ Aradığınız kriterlere uygun makale bulunamadı.</p>`;
  }

  renderPagination(totalPages);
}

// 📌 Trending Makaleler
function renderTrending() {
  // Görüntülenme sırasına göre en yüksek 3 makale
  const trending = [...articles].sort((a, b) => b.views - a.views).slice(0, 3);
  trendingArticlesContainer.innerHTML = trending.map(createArticleCard).join("");
}

// 📌 Sayfalama
function renderPagination(totalPages) {
  paginationContainer.innerHTML = "";

  if (totalPages <= 1) return;

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.classList.toggle("active", i === currentPage);
    btn.addEventListener("click", () => {
      currentPage = i;
      renderArticles();
    });
    paginationContainer.appendChild(btn);
  }
}

// 📌 Kategori Filtreleme
filterTags.forEach((tag) => {
  tag.addEventListener("click", () => {
    filterTags.forEach((t) => t.classList.remove("active"));
    tag.classList.add("active");
    currentCategory = tag.dataset.category;
    currentPage = 1;
    renderArticles();
  });
});

// 📌 Arama
function searchArticles() {
  searchQuery = searchInput.value.trim();
  currentPage = 1;
  renderArticles();
}

// Enter ile arama
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchArticles();
  }
});

// 📌 Newsletter Aboneliği
function subscribeNewsletter(event) {
  event.preventDefault();
  const email = event.target.querySelector("input").value;
  if (email) {
    alert(`✅ ${email} adresiyle başarıyla abone oldunuz!`);
    event.target.reset();
  }
}

// 📌 Yardımcı Fonksiyon
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// 📌 İlk Yükleme
renderArticles();
renderTrending();