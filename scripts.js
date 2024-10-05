document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    const headerOffset = 60;  // Adjust this value based on your header height
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});
