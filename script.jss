// Typed.js typing animation
new Typed('#typed', {
  strings: ['Software Developer', 'Full Stack Developer', 'Tech Enthusiast'],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

// Smooth scroll on link click (if not using Bootstrap's scroll)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
