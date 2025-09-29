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

        const cards = cardsContainer.querySelectorAll('.card');
        if (cards.length > 0) {
            const firstCard = cards[0];
            const style = window.getComputedStyle(firstCard);
            const cardWidth = firstCard.offsetWidth;
            const cardMarginRight = parseFloat(style.marginRight) || 0;
            const containerGap = parseFloat(window.getComputedStyle(cardsContainer).gap) || 0;

            const scrollAmount = cardWidth + containerGap;

            if (leftArrow) {
                leftArrow.addEventListener('click', () => {
                    cardsContainer.scrollBy({
                        left: -scrollAmount,
                        behavior: 'smooth'
                    });
                });
            }

            if (rightArrow) {
                rightArrow.addEventListener('click', () => {
                    cardsContainer.scrollBy({
                        left: scrollAmount,
                        behavior: 'smooth'
                    });
                });
            }
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

particlesJS("bem-vindo-fundo", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#7274c7"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#7b337e",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});