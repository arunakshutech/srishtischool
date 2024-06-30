const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    // Toggle the active class to show/hide nav links
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
});
