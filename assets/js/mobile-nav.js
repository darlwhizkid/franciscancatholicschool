document.addEventListener('DOMContentLoaded', function() {
  // Mobile navigation toggle
  const hamburger = document.querySelector('.hamburger');
  const navItems = document.querySelector('.nav-items');
  
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      navItems.classList.toggle('active');
    });
  }
  
  // Handle dropdown menus in mobile view
  const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
  const nestedTriggers = document.querySelectorAll('.nested-trigger');
  
  // Function to handle dropdown clicks
  function setupDropdownHandlers(triggers, isNested = false) {
    triggers.forEach(trigger => {
      trigger.addEventListener('click', function(e) {
        // Check if we're in mobile view (hamburger menu is visible)
        const isMobileView = window.getComputedStyle(hamburger).display !== 'none';
        
        if (isMobileView) {
          e.preventDefault(); // Prevent navigation on mobile
          
          // Toggle the active class on the dropdown content
          const dropdownContent = isNested 
            ? this.nextElementSibling // For nested dropdowns
            : this.parentElement.querySelector('.dropdown-content'); // For main dropdowns
          
          // Close other dropdowns at the same level
          const siblingDropdowns = isNested
            ? document.querySelectorAll('.nested-content')
            : document.querySelectorAll('.dropdown-content');
          
          siblingDropdowns.forEach(dropdown => {
            if (dropdown !== dropdownContent && dropdown.classList.contains('active')) {
              dropdown.classList.remove('active');
            }
          });
          
          // Toggle the current dropdown
          dropdownContent.classList.toggle('active');
          
          // Toggle the icon direction
          const icon = this.querySelector('i.fas');
          if (icon) {
            if (isNested) {
              icon.classList.toggle('fa-chevron-right');
              icon.classList.toggle('fa-chevron-down');
            } else {
              icon.classList.toggle('fa-chevron-down');
              icon.classList.toggle('fa-chevron-up');
            }
          }
        }
      });
    });
  }
  
  // Setup handlers for main and nested dropdowns
  setupDropdownHandlers(dropdownTriggers);
  setupDropdownHandlers(nestedTriggers, true);
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (navItems.classList.contains('active') && 
        !navItems.contains(e.target) && 
        !hamburger.contains(e.target)) {
      navItems.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });
  
  // Close dropdowns when window is resized to desktop view
  window.addEventListener('resize', function() {
    const isMobileView = window.getComputedStyle(hamburger).display !== 'none';
    if (!isMobileView) {
      // Reset all dropdowns when switching to desktop view
      document.querySelectorAll('.dropdown-content, .nested-content').forEach(dropdown => {
        dropdown.classList.remove('active');
      });
      
      // Reset all icons
      document.querySelectorAll('.dropdown-trigger i, .nested-trigger i').forEach(icon => {
        if (icon.classList.contains('fa-chevron-up')) {
          icon.classList.remove('fa-chevron-up');
          icon.classList.add('fa-chevron-down');
        }
        if (icon.classList.contains('fa-chevron-down') && icon.parentElement.classList.contains('nested-trigger')) {
          icon.classList.remove('fa-chevron-down');
          icon.classList.add('fa-chevron-right');
        }
      });
    }
  });
});
