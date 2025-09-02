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
        
        // Esta é a parte que foi corrigida
        const cards = cardsContainer.querySelectorAll('.card');
        if (cards.length > 0) {
            const firstCard = cards[0];
            const style = window.getComputedStyle(firstCard);
            const cardWidth = firstCard.offsetWidth;
            const cardMarginRight = parseFloat(style.marginRight) || 0;
            const containerGap = parseFloat(window.getComputedStyle(cardsContainer).gap) || 0;
            
            const scrollAmount = cardWidth + containerGap;

            leftArrow.addEventListener('click', () => {
                cardsContainer.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            });

            rightArrow.addEventListener('click', () => {
                cardsContainer.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            });
        }
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