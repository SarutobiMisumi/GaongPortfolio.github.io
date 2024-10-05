// Smooth Scroll Functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Toggle Dark/Light Theme
const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
  
  // Toggle dark theme for the header
  document.querySelector('header').classList.toggle('dark-theme');

  // Change button icon between sun and moon
  if (document.body.classList.contains('dark-theme')) {
    themeToggleButton.textContent = '☀️'; // Sun icon for light mode
  } else {
    themeToggleButton.textContent = '🌙'; // Moon icon for dark mode
  }
});

// Optional: Header background color change on scroll
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
