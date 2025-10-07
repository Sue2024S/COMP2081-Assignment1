
// Ensures all elements exist before trying to access them
document.addEventListener('DOMContentLoaded', function () {

  //Mobile Navigation Toggle
  
  const navToggle = document.getElementById('navToggle');

  const mainNav = document.getElementById('mainNav');

  // Only proceed if both toggle button and nav menu exist
  if (navToggle && mainNav) {

    // Listen for click events on the nav toggle button
    navToggle.addEventListener('click', function () {

      const expanded = this.getAttribute('aria-expanded') === 'true';

      // Improved accessibility for screen readers using aria
      this.setAttribute('aria-expanded', String(!expanded));
      mainNav.classList.toggle('open');
    });
  }

  //Carousel Accessibility 
  
  const carousels = document.querySelectorAll('.carousel');

  // Loop through each carousel
  carousels.forEach(carousel => {
    // Listen for keydown events
    carousel.addEventListener('keydown', function (e) {
      // If left or right arrow keys are pressed, prevent default behavior
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault();
      }
    });
  });

});
