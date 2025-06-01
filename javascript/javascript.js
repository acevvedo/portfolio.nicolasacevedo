document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');
  const navLogo = document.querySelector('.nav-logo');

  navLogo.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible', 'fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  cards.forEach(card => {
    observer.observe(card);
  });

  window.addEventListener('scroll', function() {
  const navLogo = document.querySelector('.nav-logo');
  // Ajusta este valor según la altura de tu hero o cuando quieras que aparezca
  if (window.scrollY > 300) { // Por ejemplo, 300 píxeles
    navLogo.classList.add('visible');
  } else {
    navLogo.classList.remove('visible');
  }

  
  
});


  // Configuración de partículas.js
  particlesJS('particles-js', {
    particles: {
      number: { value: 50, density: { enable: true, value_area: 800 } },
      color: { value: "#3498db" },
      shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 } },
      opacity: { value: 0.7, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
      size: { value: 3, random: true, anim: { enable: true, speed: 2, size_min: 0.1, sync: false } },
      line_linked: { enable: true, distance: 150, color: "#3498db", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');

  // Toggle menú
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Cerrar menú al hacer clic en un enlace
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Cerrar menú al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.hamburger') && !e.target.closest('.nav-menu')) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
});
