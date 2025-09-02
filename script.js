function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const leftArrow = carousel.querySelector('.left-arrow');
        const rightArrow = carousel.querySelector('.right-arrow');
        const cardsContainer = carousel.querySelector('.cards-container');
        let isTransitioning = false;

        const cards = cardsContainer.querySelectorAll('.card');
        if (cards.length > 0) {
            const firstCard = cards[0];
            const style = window.getComputedStyle(firstCard);
            const cardWidth = firstCard.offsetWidth;
            const containerGap = parseFloat(window.getComputedStyle(cardsContainer).gap) || 0;
            const scrollAmount = cardWidth + containerGap;

            // 👉 Clona primeiros e últimos para criar efeito infinito
            const cloneFirst = cards[0].cloneNode(true);
            const cloneLast = cards[cards.length - 1].cloneNode(true);
            cardsContainer.appendChild(cloneFirst);
            cardsContainer.insertBefore(cloneLast, cardsContainer.firstChild);

            // Posiciona no "primeiro real"
            cardsContainer.scrollLeft = scrollAmount;

            // Função mover
            function moveCarousel(direction) {
                if (isTransitioning) return;
                isTransitioning = true;

                cardsContainer.scrollBy({
                    left: direction * scrollAmount,
                    behavior: 'smooth'
                });

                setTimeout(() => {
                    if (direction === 1 && cardsContainer.scrollLeft >= (cards.length * scrollAmount)) {
                        // Se passou do último, volta pro primeiro real
                        cardsContainer.scrollLeft = scrollAmount;
                    } else if (direction === -1 && cardsContainer.scrollLeft <= 0) {
                        // Se passou do primeiro, volta pro último real
                        cardsContainer.scrollLeft = cards.length * scrollAmount;
                    }
                    isTransitioning = false;
                }, 400); // tempo parecido com smooth scroll
            }

            leftArrow.addEventListener('click', () => moveCarousel(-1));
            rightArrow.addEventListener('click', () => moveCarousel(1));
        }
    });
});

// 👇 tua animação de seções continua igual
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