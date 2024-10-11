document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    });
  });
  
  // Animation on form submit
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Your message has been sent!');
  });
  