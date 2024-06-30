// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');

    toggleButton.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
        toggleButton.classList.toggle('active');
    });
});

// carousel.js

document.addEventListener('DOMContentLoaded', () => {
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-image');

    let counter = 0;
    let size = carouselImages[0].clientWidth;

    function moveCarousel() {
        if (counter >= carouselImages.length) {
            counter = 0;
        }
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
        counter++;
    }

    // Automatic sliding
    setInterval(moveCarousel, 3000); // Change slide every 3 seconds

    // Add responsive support
    window.addEventListener('resize', () => {
        size = carouselImages[0].clientWidth;
        carouselSlide.style.transform = `translateX(${-size * counter+5}px)`;
    });
});
