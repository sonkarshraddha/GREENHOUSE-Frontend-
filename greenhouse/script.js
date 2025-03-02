// Smooth scroll functionality to the services section
function scrollToServices() {
    document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
  }
// Smooth scroll to sections when clicking navbar links
document.querySelectorAll('.navbar .nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Scroll to Services section when button in hero section is clicked
function scrollToServices() {
  document.querySelector('#services').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}
