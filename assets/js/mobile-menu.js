document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navItems = document.querySelector('.nav-items');
  
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      navItems.classList.toggle('active');
    });
  }
  
  // Handle dropdown toggles on mobile
  const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
  
  dropdownTriggers.forEach(trigger => {
    trigger.addEventListener('click', function(e) {
      // Only prevent default on mobile
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const dropdownContent = this.parentElement.querySelector('.dropdown-content');
        dropdownContent.classList.toggle('active');
      }
    });
  });
  
  // Handle nested dropdown toggles
  const nestedTriggers = document.querySelectorAll('.nested-trigger');
  
  nestedTriggers.forEach(trigger => {
    trigger.addEventListener('click', function(e) {
      // Only prevent default on mobile
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const nestedContent = this.nextElementSibling;
        nestedContent.classList.toggle('active');
      }
    });
  });
});
