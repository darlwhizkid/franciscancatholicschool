document.addEventListener('DOMContentLoaded', function() {
  // Current Date Display
  updateDateDisplay();
  
  // Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navItems = document.querySelector('.nav-items');
  
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      navItems.classList.toggle('active');
    });
  }
  
  // Dropdown Menu for Mobile
  const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
  
  dropdownTriggers.forEach(trigger => {
    trigger.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const parent = this.parentElement;
        parent.classList.toggle('active');
      }
    });
  });
  
  // Nested Dropdown for Mobile
  const nestedTriggers = document.querySelectorAll('.nested-trigger');
  
  nestedTriggers.forEach(trigger => {
    trigger.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const parent = this.parentElement;
        parent.classList.toggle('active');
      }
    });
  });
  
  // Hero Carousel
  initCarousel();
  
  // Testimonial Slider
  initTestimonialSlider();
  
  // Scroll to Top Button
  const scrollToTopBtn = document.getElementById('scrollToTop');
  
  if (scrollToTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('active');
      } else {
        scrollToTopBtn.classList.remove('active');
      }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Navbar Scroll Effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
  
  // Program Accordion
  const expandBtns = document.querySelectorAll('.expand-btn');
  
  expandBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const content = this.parentElement.nextElementSibling;
      this.classList.toggle('active');
      
      if (this.classList.contains('active')) {
        this.innerHTML = '<i class="fas fa-minus"></i>';
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        this.innerHTML = '<i class="fas fa-plus"></i>';
        content.style.maxHeight = 0;
      }
    });
  });
});

// Update Date Display
function updateDateDisplay() {
  const dateElement = document.getElementById('currentDate');
  if (!dateElement) return;
  
  const now = new Date();
  const day = now.getDate();
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = monthNames[now.getMonth()];
  const year = now.getFullYear();
  
  const dayElement = dateElement.querySelector('.day');
  const monthElement = dateElement.querySelector('.month');
  const yearElement = dateElement.querySelector('.year');
  
  if (dayElement) dayElement.textContent = day;
  if (monthElement) monthElement.textContent = month + ',';
  if (yearElement) yearElement.textContent = year;
}

// Hero Carousel
function initCarousel() {
  const slides = document.querySelectorAll('.carousel-inner .slide');
  if (slides.length === 0) return;
  
  const prevBtn = document.querySelector('.carousel-arrow.prev');
  const nextBtn = document.querySelector('.carousel-arrow.next');
  const indicators = document.querySelectorAll('.carousel-indicators .indicator');
  let currentSlide = 0;
  let slideInterval;
  
  function updateSlide() {
    // Remove active class from all slides and indicators
    slides.forEach(slide => slide.classList.remove('active'));
    if (indicators.length > 0) {
      indicators.forEach(indicator => indicator.classList.remove('active'));
    }
    
    // Add active class to current slide and indicator
    slides[currentSlide].classList.add('active');
    if (indicators.length > 0 && indicators[currentSlide]) {
      indicators[currentSlide].classList.add('active');
    }
  }
  
  function startSlideshow() {
    // Clear any existing interval
    if (slideInterval) {
      clearInterval(slideInterval);
    }
    
    // Set new interval
    slideInterval = setInterval(function() {
      currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
      updateSlide();
    }, 5000);
  }
  
  // Start automatic slideshow
  startSlideshow();
  
  // Previous button click
  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      clearInterval(slideInterval);
      currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
      updateSlide();
      startSlideshow();
    });
  }
  
  // Next button click
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      clearInterval(slideInterval);
      currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
      updateSlide();
      startSlideshow();
    });
  }
  
  // Indicator clicks
  if (indicators.length > 0) {
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', function() {
        clearInterval(slideInterval);
        currentSlide = index;
        updateSlide();
        startSlideshow();
      });
    });
  }
}

// Testimonial Slider
function initTestimonialSlider() {
  const testimonials = document.querySelectorAll('.testimonial-card');
  if (testimonials.length === 0) return;
  
  const prevBtn = document.querySelector('.testimonial-arrow.prev');
  const nextBtn = document.querySelector('.testimonial-arrow.next');
  const dots = document.querySelectorAll('.testimonial-dots .dot');
  let currentTestimonial = 0;
  
  function updateTestimonial() {
    // Remove active class from all testimonials and dots
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    if (dots.length > 0) {
      dots.forEach(dot => dot.classList.remove('active'));
    }
    
    // Add active class to current testimonial and dot
    testimonials[currentTestimonial].classList.add('active');
    if (dots.length > 0 && dots[currentTestimonial]) {
      dots[currentTestimonial].classList.add('active');
    }
  }
  
  // Previous button click
  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      currentTestimonial = (currentTestimonial === 0) ? testimonials.length - 1 : currentTestimonial - 1;
      updateTestimonial();
    });
  }
  
  // Next button click
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      currentTestimonial = (currentTestimonial === testimonials.length - 1) ? 0 : currentTestimonial + 1;
      updateTestimonial();
    });
  }
  
  // Dot clicks
  if (dots.length > 0) {
    dots.forEach((dot, index) => {
      dot.addEventListener('click', function() {
        currentTestimonial = index;
        updateTestimonial();
      });
    });
  }
  
  // Auto rotate testimonials
  setInterval(function() {
    currentTestimonial = (currentTestimonial === testimonials.length - 1) ? 0 : currentTestimonial + 1;
    updateTestimonial();
  }, 7000);
}

// Add this to the existing JavaScript file

// Tab functionality for Welcome page
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabBtns.length === 0) return;
    
    tabBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        // Remove active class from all buttons and contents
        tabBtns.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Show corresponding content
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
      });
    });
  }
  
  // Call the function when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Existing code...
    
    // Initialize tabs
    initTabs();
  });

  // Add this to the existing JavaScript file

// Accordion functionality for About page
function initAccordion() {
    const accordionItems = document.querySelectorAll('.ethos-item');
    
    if (accordionItems.length === 0) return;
    
    accordionItems.forEach(item => {
      const header = item.querySelector('.ethos-header');
      
      header.addEventListener('click', function() {
        const isActive = item.classList.contains('active');
        
        // Close all items
        accordionItems.forEach(accItem => {
          accItem.classList.remove('active');
        });
        
        // If the clicked item wasn't active, open it
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });
    
    // Open the first item by default
    if (accordionItems.length > 0) {
      accordionItems[0].classList.add('active');
    }
  }
  
  // Call the function when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Existing code...
    
    // Initialize tabs
    initTabs();
    
    // Initialize accordion
    initAccordion();
  });

// Add this to the existing JavaScript file

// Testimonials slider functionality
function initTestimonialsSlider() {
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.testimonial-dots .dot');
  const prevBtn = document.querySelector('.testimonial-arrow.prev');
  const nextBtn = document.querySelector('.testimonial-arrow.next');
  
  if (testimonialCards.length === 0) return;
  
  let currentIndex = 0;
  
  function showTestimonial(index) {
    // Hide all testimonials
    testimonialCards.forEach(card => {
      card.classList.remove('active');
    });
    
    // Remove active class from all dots
    dots.forEach(dot => {
      dot.classList.remove('active');
    });
    
    // Show the selected testimonial and activate corresponding dot
    testimonialCards[index].classList.add('active');
    dots[index].classList.add('active');
  }
  
  // Next button click
  nextBtn.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % testimonialCards.length;
    showTestimonial(currentIndex);
  });
  
  // Previous button click
  prevBtn.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(currentIndex);
  });
  
  // Dot clicks
  dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
      currentIndex = index;
      showTestimonial(currentIndex);
    });
  });
  
  // Auto-advance testimonials every 5 seconds
  setInterval(function() {
    currentIndex = (currentIndex + 1) % testimonialCards.length;
    showTestimonial(currentIndex);
  }, 5000);
}

// Call the function when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Existing code...
  
  // Initialize testimonials slider
  initTestimonialsSlider();
});

// Add this to the existing JavaScript file

// FAQ functionality
function initFAQs() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  if (faqItems.length === 0) return;
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const toggle = item.querySelector('.faq-toggle');
    const answer = item.querySelector('.faq-answer');
    
    question.addEventListener('click', function() {
      // Close all other FAQs
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.querySelector('.faq-answer').classList.remove('active');
          otherItem.querySelector('.faq-toggle').classList.remove('active');
        }
      });
      
      // Toggle current FAQ
      answer.classList.toggle('active');
      toggle.classList.toggle('active');
    });
  });
}

// Call the function when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Existing code...
  
  // Initialize testimonials slider
  initTestimonialsSlider();
  
  // Initialize FAQs
  initFAQs();
});

// Add this to the existing JavaScript file

// Initialize the testimonials slider for the PreSchool page
function initTestimonialsSlider() {
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.testimonial-dots .dot');
  const prevBtn = document.querySelector('.testimonial-arrow.prev');
  const nextBtn = document.querySelector('.testimonial-arrow.next');
  
  if (testimonialCards.length === 0) return;
  
  let currentIndex = 0;
  
  // Function to show a specific testimonial
  function showTestimonial(index) {
    // Hide all testimonials
    testimonialCards.forEach(card => {
      card.classList.remove('active');
    });
    
    // Remove active class from all dots
    dots.forEach(dot => {
      dot.classList.remove('active');
    });
    
    // Show the selected testimonial and activate corresponding dot
    testimonialCards[index].classList.add('active');
    dots[index].classList.add('active');
    
    currentIndex = index;
  }
  
  // Event listeners for dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showTestimonial(index);
    });
  });
  
  // Event listeners for arrows
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      let newIndex = currentIndex - 1;
      if (newIndex < 0) newIndex = testimonialCards.length - 1;
      showTestimonial(newIndex);
    });
    
    nextBtn.addEventListener('click', () => {
      let newIndex = currentIndex + 1;
      if (newIndex >= testimonialCards.length) newIndex = 0;
      showTestimonial(newIndex);
    });
  }
  
  // Auto-rotate testimonials every 5 seconds
  setInterval(() => {
    let newIndex = currentIndex + 1;
    if (newIndex >= testimonialCards.length) newIndex = 0;
    showTestimonial(newIndex);
  }, 5000);
}

// Document ready function
document.addEventListener('DOMContentLoaded', function() {
  // Update current date in the navbar
  updateCurrentDate();
  
  // Initialize mobile menu
  initMobileMenu();
  
  // Initialize testimonials slider
  initTestimonialsSlider();
  
  // Initialize scroll to top button
  initScrollToTop();
  
  // Add smooth scrolling to all links
  initSmoothScroll();
});

// Function to update current date in the navbar
function updateCurrentDate() {
  const dateDisplay = document.getElementById('currentDate');
  if (!dateDisplay) return;
  
  const now = new Date();
  const day = now.getDate();
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = monthNames[now.getMonth()];
  const year = now.getFullYear();
  
  const dayElement = dateDisplay.querySelector('.day');
  const monthElement = dateDisplay.querySelector('.month');
  const yearElement = dateDisplay.querySelector('.year');
  
  if (dayElement) dayElement.textContent = day;
  if (monthElement) monthElement.textContent = month;
  if (yearElement) yearElement.textContent = year;
}

// Function to initialize mobile menu
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navItems = document.querySelector('.nav-items');
  
  if (!hamburger || !navItems) return;
  
  hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navItems.classList.toggle('active');
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!hamburger.contains(event.target) && !navItems.contains(event.target) && navItems.classList.contains('active')) {
      hamburger.classList.remove('active');
      navItems.classList.remove('active');
    }
  });
}

// Function to initialize scroll to top button
function initScrollToTop() {
  const scrollToTopBtn = document.getElementById('scrollToTop');
  
  if (!scrollToTopBtn) return;
  
  // Show/hide button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });
  
  // Scroll to top when button is clicked
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Function to initialize smooth scrolling
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href === '#') return;
      
      const targetElement = document.querySelector(href);
      
      if (targetElement) {
        e.preventDefault();
        
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // Gallery Tab Navigation
  const galleryTabs = document.querySelectorAll('.gallery-tab');
  const gallerySections = document.querySelectorAll('.gallery-section');
  
  galleryTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active class from all tabs
      galleryTabs.forEach(t => t.classList.remove('active'));
      // Add active class to clicked tab
      this.classList.add('active');
      
      // Hide all sections
      gallerySections.forEach(section => section.classList.remove('active'));
      // Show the selected section
      const targetSection = document.getElementById(this.dataset.target);
      if (targetSection) {
        targetSection.classList.add('active');
      }
    });
  });
  
  // Gallery Filtering
  const filterCategory = document.getElementById('filter-category');
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  if (filterCategory) {
    filterCategory.addEventListener('change', function() {
      const selectedCategory = this.value;
      
      galleryItems.forEach(item => {
        if (selectedCategory === 'all' || item.dataset.category === selectedCategory) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }
  
  // Past Events Filtering
  const pastEventsYear = document.getElementById('past-events-year');
  const pastEventsCategory = document.getElementById('past-events-category');
  const pastEventCards = document.querySelectorAll('.past-event-card');
  
  function filterPastEvents() {
    const selectedYear = pastEventsYear ? pastEventsYear.value : 'all';
    const selectedCategory = pastEventsCategory ? pastEventsCategory.value : 'all';
    
    pastEventCards.forEach(card => {
      const yearMatch = selectedYear === 'all' || card.dataset.year === selectedYear;
      const categoryMatch = selectedCategory === 'all' || card.dataset.category === selectedCategory;
      
      if (yearMatch && categoryMatch) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }
  
  if (pastEventsYear) {
    pastEventsYear.addEventListener('change', filterPastEvents);
  }
  
  if (pastEventsCategory) {
    pastEventsCategory.addEventListener('change', filterPastEvents);
  }
  
  // Gallery Modal
  const galleryModal = document.getElementById('galleryModal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalDate = document.getElementById('modalDate');
  const modalClose = document.querySelector('.modal-close');
  const modalPrev = document.querySelector('.modal-prev');
  const modalNext = document.querySelector('.modal-next');
  
  // Gallery zoom buttons
  const galleryZoomButtons = document.querySelectorAll('.gallery-zoom');
  let currentImageIndex = 0;
  
  galleryZoomButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
      const galleryItem = this.closest('.gallery-item');
      const image = galleryItem.querySelector('img');
      const title = galleryItem.querySelector('.gallery-info h3').textContent;
      const description = galleryItem.querySelector('.gallery-info p').textContent;
      const date = galleryItem.querySelector('.gallery-info .gallery-date').textContent;
      
      modalImage.src = image.src;
      modalTitle.textContent = title;
      modalDescription.textContent = description;
      modalDate.textContent = date;
      
      galleryModal.style.display = 'flex';
      currentImageIndex = index;
      
      // Disable body scroll when modal is open
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Close modal
  modalClose.addEventListener('click', function() {
    galleryModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
  
  // Close modal when clicking outside the image
  galleryModal.addEventListener('click', function(event) {
    if (event.target === galleryModal) {
      galleryModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
  
  // Navigate through images in modal
  modalPrev.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex - 1 + galleryZoomButtons.length) % galleryZoomButtons.length;
    updateModalContent(currentImageIndex);
  });
  
  modalNext.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % galleryZoomButtons.length;
    updateModalContent(currentImageIndex);
  });
  
  function updateModalContent(index) {
    const galleryItem = galleryZoomButtons[index].closest('.gallery-item');
    const image = galleryItem.querySelector('img');
    const title = galleryItem.querySelector('.gallery-info h3').textContent;
    const description = galleryItem.querySelector('.gallery-info p').textContent;
    const date = galleryItem.querySelector('.gallery-info .gallery-date').textContent;
    
    modalImage.src = image.src;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalDate.textContent = date;
  }
  
  // Keyboard navigation for modal
  document.addEventListener('keydown', function(event) {
    if (galleryModal.style.display === 'flex') {
      if (event.key === 'Escape') {
        galleryModal.style.display = 'none';
        document.body.style.overflow = 'auto';
      } else if (event.key === 'ArrowLeft') {
        currentImageIndex = (currentImageIndex - 1 + galleryZoomButtons.length) % galleryZoomButtons.length;
        updateModalContent(currentImageIndex);
      } else if (event.key === 'ArrowRight') {
        currentImageIndex = (currentImageIndex + 1) % galleryZoomButtons.length;
        updateModalContent(currentImageIndex);
      }
    }
  });
  
  // Calendar functionality
  const calendarPrev = document.querySelector('.calendar-prev');
  const calendarNext = document.querySelector('.calendar-next');
  const calendarMonth = document.querySelector('.calendar-month');
  const calendarDates = document.querySelector('.calendar-dates');
  
  // Sample events data (in a real application, this would come from a database)
  const events = [
    { date: '2025-03-15', title: 'Annual Science Fair', category: 'academic' },
    { date: '2025-03-22', title: 'Parent-Teacher Meeting', category: 'academic' },
    { date: '2025-04-05', title: 'Easter Celebration', category: 'religious' },
    { date: '2025-04-22', title: 'Sports Day', category: 'sports' },
    { date: '2025-05-10', title: 'Parent-Teacher Conference', category: 'academic' },
    { date: '2025-06-05', title: 'Cultural Day', category: 'cultural' },
    { date: '2025-07-20', title: 'Graduation Ceremony', category: 'academic' }
  ];
  
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();
  
  function renderCalendar() {
    if (!calendarDates) return;
    
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    // Update month display
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    calendarMonth.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    
    // Clear previous calendar
    calendarDates.innerHTML = '';
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDay; i++) {
      const emptyCell = document.createElement('div');
      emptyCell.classList.add('calendar-date', 'empty');
      calendarDates.appendChild(emptyCell);
    }
    
    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateCell = document.createElement('div');
      dateCell.classList.add('calendar-date');
      dateCell.textContent = day;
      
      // Check if there are events on this day
      const dateString = `${currentYear}-${(currentMonth + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      const dayEvents = events.filter(event => event.date === dateString);
      
      if (dayEvents.length > 0) {
        dateCell.classList.add('has-event');
        
        // Add event indicators
        const eventIndicators = document.createElement('div');
        eventIndicators.classList.add('event-indicators');
        
        dayEvents.forEach(event => {
          const indicator = document.createElement('span');
          indicator.classList.add('event-indicator', event.category);
          indicator.title = event.title;
          eventIndicators.appendChild(indicator);
        });
        
        dateCell.appendChild(eventIndicators);
        
        // Add click event to show event details
        dateCell.addEventListener('click', function() {
          alert(`Events on ${dateString}:\n${dayEvents.map(e => e.title).join('\n')}`);
        });
      }
      
      calendarDates.appendChild(dateCell);
    }
  }
  
  if (calendarPrev && calendarNext) {
    calendarPrev.addEventListener('click', function() {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      renderCalendar();
    });
    
    calendarNext.addEventListener('click', function() {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      renderCalendar();
    });
    
    // Initial render
    renderCalendar();
  }
  
  // Pagination functionality
  const paginationPrev = document.querySelectorAll('.pagination-prev');
  const paginationNext = document.querySelectorAll('.pagination-next');
  const paginationNumbers = document.querySelectorAll('.pagination-number');
  
  paginationNumbers.forEach(number => {
    number.addEventListener('click', function() {
      const parent = this.closest('.pagination-numbers');
      parent.querySelectorAll('.pagination-number').forEach(num => {
        num.classList.remove('active');
      });
      this.classList.add('active');
      
      // In a real application, this would load the corresponding page of content
      // For now, we'll just show an alert
      alert(`Loading page ${this.textContent}`);
    });
  });
  
  paginationPrev.forEach(button => {
    button.addEventListener('click', function() {
      const parent = this.closest('.gallery-pagination, .past-events-pagination');
      const activeNumber = parent.querySelector('.pagination-number.active');
      const prevNumber = activeNumber.previousElementSibling;
      
      if (prevNumber && prevNumber.classList.contains('pagination-number')) {
        activeNumber.classList.remove('active');
        prevNumber.classList.add('active');
        // In a real application, this would load the previous page
        alert(`Loading previous page: ${prevNumber.textContent}`);
      }
    });
  });
  
  paginationNext.forEach(button => {
    button.addEventListener('click', function() {
      const parent = this.closest('.gallery-pagination, .past-events-pagination');
      const activeNumber = parent.querySelector('.pagination-number.active');
      const nextNumber = activeNumber.nextElementSibling;
      
      if (nextNumber && nextNumber.classList.contains('pagination-number')) {
        activeNumber.classList.remove('active');
        nextNumber.classList.add('active');
        // In a real application, this would load the next page
        alert(`Loading next page: ${nextNumber.textContent}`);
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Update current date in navbar
  updateCurrentDate();
  
  // Initialize mobile menu
  initMobileMenu();
  
  // Contact Form Validation and Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic form validation
      let isValid = true;
      const fullName = document.getElementById('fullName');
      const email = document.getElementById('email');
      const subject = document.getElementById('subject');
      const message = document.getElementById('message');
      
      // Reset previous error states
      resetFormErrors(contactForm);
      
      // Validate full name
      if (fullName.value.trim() === '') {
        showError(fullName, 'Please enter your full name');
        isValid = false;
      } else {
        showSuccess(fullName);
      }
      
      // Validate email
      if (email.value.trim() === '') {
        showError(email, 'Please enter your email address');
        isValid = false;
      } else if (!isValidEmail(email.value.trim())) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
      } else {
        showSuccess(email);
      }
      
      // Validate subject
      if (subject.value.trim() === '') {
        showError(subject, 'Please enter a subject');
        isValid = false;
      } else {
        showSuccess(subject);
      }
      
      // Validate message
      if (message.value.trim() === '') {
        showError(message, 'Please enter your message');
        isValid = false;
      } else {
        showSuccess(message);
      }
      
      // If form is valid, submit it
      if (isValid) {
        // Show loading state
        const submitBtn = contactForm.querySelector('.submit-btn');
        submitBtn.classList.add('loading');
        
        // Simulate form submission (replace with actual AJAX submission)
        setTimeout(() => {
          submitBtn.classList.remove('loading');
          contactForm.reset();
          
          // Show success modal
          const modal = document.getElementById('successModal');
          if (modal) {
            document.getElementById('modalTitle').textContent = 'Message Sent Successfully!';
            document.getElementById('modalMessage').textContent = 'Thank you for contacting us. We will get back to you as soon as possible.';
            modal.style.display = 'flex';
          }
        }, 1500);
      }
    });
  }
  
  // Appointment Form Validation and Submission
  const appointmentForm = document.getElementById('appointmentForm');
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic form validation
      let isValid = true;
      const parentName = document.getElementById('parentName');
      const childName = document.getElementById('childName');
      const appointmentEmail = document.getElementById('appointmentEmail');
      const appointmentPhone = document.getElementById('appointmentPhone');
      const preferredDate = document.getElementById('preferredDate');
      const preferredTime = document.getElementById('preferredTime');
      const visitPurpose = document.getElementById('visitPurpose');
      
      // Reset previous error states
      resetFormErrors(appointmentForm);
      
      // Validate required fields
      if (parentName.value.trim() === '') {
        showError(parentName, 'Please enter parent\'s name');
        isValid = false;
      } else {
        showSuccess(parentName);
      }
      
      if (childName.value.trim() === '') {
        showError(childName, 'Please enter child\'s name');
        isValid = false;
      } else {
        showSuccess(childName);
      }
      
      if (appointmentEmail.value.trim() === '') {
        showError(appointmentEmail, 'Please enter your email address');
        isValid = false;
      } else if (!isValidEmail(appointmentEmail.value.trim())) {
        showError(appointmentEmail, 'Please enter a valid email address');
        isValid = false;
      } else {
        showSuccess(appointmentEmail);
      }
      
      if (appointmentPhone.value.trim() === '') {
        showError(appointmentPhone, 'Please enter your phone number');
        isValid = false;
      } else {
        showSuccess(appointmentPhone);
      }
      
      if (preferredDate.value === '') {
        showError(preferredDate, 'Please select a preferred date');
        isValid = false;
      } else {
        showSuccess(preferredDate);
      }
      
      if (preferredTime.value === '') {
        showError(preferredTime, 'Please select a preferred time');
        isValid = false;
      } else {
        showSuccess(preferredTime);
      }
      
      if (visitPurpose.value === '') {
        showError(visitPurpose, 'Please select purpose of visit');
        isValid = false;
      } else {
        showSuccess(visitPurpose);
      }
      
      // If form is valid, submit it
      if (isValid) {
        // Show loading state
        const submitBtn = appointmentForm.querySelector('.submit-btn');
        submitBtn.classList.add('loading');
        
        // Simulate form submission (replace with actual AJAX submission)
        setTimeout(() => {
          submitBtn.classList.remove('loading');
          appointmentForm.reset();
          
          // Show success modal
          const modal = document.getElementById('successModal');
          if (modal) {
            document.getElementById('modalTitle').textContent = 'Appointment Booked Successfully!';
            document.getElementById('modalMessage').textContent = 'Thank you for booking an appointment. We will confirm your appointment shortly.';
            modal.style.display = 'flex';
          }
        }, 1500);
      }
    });
  }
  
  // Newsletter Form Submission
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = document.getElementById('newsletterEmail');
      
      if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value.trim())) {
        emailInput.style.borderColor = '#e74c3c';
      } else {
        // Show loading state
        const submitBtn = newsletterForm.querySelector('.newsletter-btn');
        const originalIcon = submitBtn.innerHTML;
        submitBtn.innerHTML = '<div class="spinner"></div>';
        
        // Simulate form submission
        setTimeout(() => {
          submitBtn.innerHTML = originalIcon;
          newsletterForm.reset();
          
          // Show success modal
          const modal = document.getElementById('successModal');
          if (modal) {
            document.getElementById('modalTitle').textContent = 'Subscription Successful!';
            document.getElementById('modalMessage').textContent = 'Thank you for subscribing to our newsletter. You will now receive updates from us.';
            modal.style.display = 'flex';
          }
        }, 1500);
      }
    });
  }
  
  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      item.classList.toggle('active');
    });
  });
  
  // Modal Close Button
  const closeModal = document.querySelector('.close-modal');
  const modal = document.getElementById('successModal');
  const modalBtn = document.getElementById('modalBtn');
  
  if (closeModal && modal) {
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }
  
  if (modalBtn && modal) {
    modalBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }
  
  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    if (modal && e.target === modal) {
      modal.style.display = 'none';
    }
  });
  
  // Initialize date picker for appointment form
  const preferredDateInput = document.getElementById('preferredDate');
  if (preferredDateInput) {
    // Set min date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const formattedTomorrow = formatDate(tomorrow);
    preferredDateInput.min = formattedTomorrow;
    
    // Set max date to 3 months from now
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);
    const formattedMaxDate = formatDate(maxDate);
    preferredDateInput.max = formattedMaxDate;
  }
  
  // Scroll to top button
  const scrollToTopBtn = document.getElementById('scrollToTop');
  if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Helper Functions
  function updateCurrentDate() {
    const dateDisplay = document.getElementById('currentDate');
    if (dateDisplay) {
      const now = new Date();
      const day = now.getDate();
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const month = monthNames[now.getMonth()];
      const year = now.getFullYear();
      
      const dayElement = dateDisplay.querySelector('.day');
      const monthElement = dateDisplay.querySelector('.month');
      const yearElement = dateDisplay.querySelector('.year');
      
      if (dayElement) dayElement.textContent = day;
      if (monthElement) monthElement.textContent = month;
      if (yearElement) yearElement.textContent = year;
    }
  }
  
  function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navItems = document.querySelector('.nav-items');
    
    if (hamburger && navItems) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navItems.classList.toggle('active');
      });
    }
    
    // Handle dropdown menus on mobile
    const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
    dropdownTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        if (window.innerWidth <= 992) {
          e.preventDefault();
          const parent = trigger.parentElement;
          parent.classList.toggle('active');
        }
      });
    });
    
    // Handle nested dropdowns on mobile
    const nestedTriggers = document.querySelectorAll('.nested-trigger');
    nestedTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        if (window.innerWidth <= 992) {
          e.preventDefault();
          const parent = trigger.parentElement;
          parent.classList.toggle('active');
        }
      });
    });
  }
  
  function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.classList.add('error');
    
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.textContent = message;
    
    formGroup.appendChild(errorMessage);
  }
  
  function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.classList.add('success');
  }
  
  function resetFormErrors(form) {
    const formGroups = form.querySelectorAll('.form-group');
    formGroups.forEach(group => {
      group.classList.remove('error', 'success');
      const errorMessage = group.querySelector('.error-message');
      if (errorMessage) {
        errorMessage.remove();
      }
    });
  }
  
  function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
});


