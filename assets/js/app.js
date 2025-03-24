// Date function
function updateDate() {
  const dateDisplay = document.querySelector(".date-display");
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();

  dateDisplay.innerHTML = `
        <span class="day">${day}</span>
        <div class="month-year">
            <span>${month},</span>
            <span>${year}</span>
        </div>
    `;
}

// Update date immediately and then every second
updateDate();
setInterval(updateDate, 1000);

// Mobile view navbar
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navItems = document.querySelector(".nav-items");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navItems.classList.toggle("active");
  });
});

// Carousel functionality
const carousel = document.querySelector('.carousel-inner');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;

function showSlide(index) {
  carousel.style.transform = `translateX(-${index * 33.333}%)`;
  
  // Remove active class from all slides
  slides.forEach(slide => slide.classList.remove('active'));
  
  // Add active class to current slide
  slides[index].classList.add('active');
}

prevButton.addEventListener('click', () => {
  currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
  showSlide(currentSlide);
});

nextButton.addEventListener('click', () => {
  currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
  showSlide(currentSlide);
});

// Show first slide initially
showSlide(0);

// Program section functionality
document.addEventListener('DOMContentLoaded', () => {
    const programHeaders = document.querySelectorAll('.program-header');
    const ethosImage = document.querySelector('.ethos-image');

    programHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const btn = header.querySelector('.expand-btn');
        const icon = btn.querySelector('i');

        // Close all other sections
        programHeaders.forEach(otherHeader => {
          if (otherHeader !== header) {
            const otherContent = otherHeader.nextElementSibling;
            const otherIcon = otherHeader.querySelector('.expand-btn i');
            otherContent.style.display = 'none';
            otherIcon.className = 'fas fa-plus';
          }
        });

        // Toggle current section
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
        icon.className = content.style.display === 'block' ? 'fas fa-minus' : 'fas fa-plus';
      
        // Zoom effect on image
        if (ethosImage) {
          ethosImage.style.transform = content.style.display === 'block' ? 'scale(1.2)' : 'scale(1)';
        }
      });
    });
});
// Scroll functionality
const scrollBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
if (window.pageYOffset > 300) {
  scrollBtn.classList.add("show");
} else {
  scrollBtn.classList.remove("show");
}
});

scrollBtn.addEventListener("click", () => {
scrollBtn.innerHTML = '<i class="fas fa-book"></i>';
window.scrollTo({
  top: 0,
  behavior: "smooth",
});

setTimeout(() => {
  scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
}, 1000);
});

// Dropdown icon functionality
document.querySelectorAll('.dropdown-trigger').forEach(trigger => {
  trigger.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const dropdownContent = trigger.nextElementSibling;
      dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
  });
});





