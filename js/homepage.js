// carousel
const carousels = document.querySelectorAll('.carousel');
carousels.forEach(carouselEl => {
  const carousel = new bootstrap.Carousel(carouselEl, {
    interval: 5000,    
    wrap: true,        // Loop back to first slide after last
    keyboard: false    // Already handled manually, extra safety
  });
});

// Wait until the DOM (HTML structure) is fully loaded
// Ensures all elements exist before trying to access them
document.addEventListener('DOMContentLoaded', function () {
    // --- Mobile Navigation Toggle ---
  // Get the button that toggles the navigation menu
  const navToggle = document.getElementById('navToggle');

  // Get the main navigation menu element
  const mainNav = document.querySelector('.main-nav');

  // Only proceed if both toggle button and nav menu exist
  if (navToggle && mainNav) {

    // Listen for click events on the nav toggle button
    navToggle.addEventListener('click', function () {

      // Check if the menu is currently expanded using aria-expanded attribute
      const expanded = this.getAttribute('aria-expanded') === 'true';

      // Toggle aria-expanded: flip true <-> false
      // Improves accessibility for screen readers
      this.setAttribute('aria-expanded', String(!expanded));

      // Toggle the "open" class on the main navigation
      // CSS will handle showing/hiding the menu
      mainNav.classList.toggle('open');
    });
}