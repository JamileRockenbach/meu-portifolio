function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const leftArrow = carousel.querySelector('.left-arrow');
        const rightArrow = carousel.querySelector('.right-arrow');
        const cardsContainer = carousel.querySelector('.cards-container');
        const cardWidth = 350; 

        leftArrow.addEventListener('click', () => {
            cardsContainer.scrollBy({
                left: -cardWidth,
                behavior: 'smooth'
            });
        });

        rightArrow.addEventListener('click', () => {
            cardsContainer.scrollBy({
                left: cardWidth,
                behavior: 'smooth'
            });
        });
    });
});

const secoes = document.querySelectorAll('.esconder');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animar');
        }
    });
}, {
    threshold: 0.1
});

secoes.forEach(secao => {
    observer.observe(secao);
});