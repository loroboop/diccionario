// script.js

let currentPage = 0;
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;

function showPage(pageIndex) {
    pages.forEach((page, index) => {
        page.style.display = (index === pageIndex) ? 'block' : 'none';
    });
    currentPage = pageIndex;
}

function nextPage() {
    if (currentPage < totalPages - 1) {
        showPage(currentPage + 1);
    }
}

function prevPage() {
    if (currentPage > 0) {
        showPage(currentPage - 1);
    }
}

function openBook() {
    document.querySelector('.cover').style.display = 'none';
    document.querySelector('.search-container').style.display = 'block';
    document.querySelector('.pages').style.display = 'block';
    showPage(0);
}

function searchTerm() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    pages.forEach(page => {
        const text = page.textContent.toLowerCase();
        page.style.display = text.includes(input) ? 'block' : 'none';
    });
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    pages.forEach(page => page.style.display = 'block');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    showPage(0);
});
