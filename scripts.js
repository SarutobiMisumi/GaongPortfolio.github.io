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

document.addEventListener('DOMContentLoaded', function() {
  const textElement = document.querySelector('.screen .text');

  if (textElement) {
    // Type "Hello World" with a typing effect
    let textToType = "Hello World";
    let index = 0;

    function typeText() {
      if (index < textToType.length) {
        textElement.textContent += textToType[index];
        index++;
        setTimeout(typeText, 150); // Speed of typing effect
      } else {
        // Wait before starting the deletion
        setTimeout(deleteText, 1000);
      }
    }

    function deleteText() {
      if (index > 0) {
        textElement.textContent = textToType.substring(0, index - 1);
        index--;
        setTimeout(deleteText, 100); // Speed of deleting effect
      } else {
        // After deleting, type the new message
        setTimeout(typeNewMessage, 500);
      }
    }

    function typeNewMessage() {
      const messages = ["Welcome", "To", "Gaong Gaong Portfolio"];
      let messageIndex = 0;

      function typeLine() {
        if (messageIndex < messages.length) {
          textElement.innerHTML += messages[messageIndex] + "<br>";
          messageIndex++;
          setTimeout(typeLine, 500); // Speed of typing each line
        } else {
          // Wait before starting over
          setTimeout(() => {
            textElement.innerHTML = "";
            index = 0;
            typeText();
          }, 1000);
        }
      }

      typeLine();
    }

    // Start typing "Hello World"
    typeText();
  } else {
    console.error("Text element not found. Check the selector and make sure the HTML structure matches.");
  }
});
