// Fungsi untuk mengarahkan skrol ke elemen tertentu dengan animasi
function animateToArticle(articleId) {
    // Mengambil elemen dengan ID yang sesuai
    const targetElement = document.getElementById(articleId);

    // Mengarahkan skrol dengan animasi smooth
    targetElement.scrollIntoView({ behavior: 'smooth' });
}

// Mendapatkan nilai parameter 'nama' dari URL
const params = new URLSearchParams(window.location.search);
const nama = params.get('nama');

// Membuat elemen <h1> baru
const heading = document.createElement('h1');

// Mengisi teks dari elemen <h1> dengan nilai 'nama'
heading.textContent = `Halo, ${nama}! Selamat datang `;

// Memasukkan elemen <h1> ke dalam header
const header = document.querySelector('header');
header.appendChild(heading);
