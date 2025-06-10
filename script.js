// Bouton retour en haut
const scrollTopButton = document.createElement('button');
scrollTopButton.textContent = '↑';
scrollTopButton.style.position = 'fixed';
scrollTopButton.style.bottom = '20px';
scrollTopButton.style.right = '20px';
scrollTopButton.style.padding = '10px 15px';
scrollTopButton.style.backgroundColor = '#a03d5e';
scrollTopButton.style.color = 'white';
scrollTopButton.style.border = 'none';
scrollTopButton.style.borderRadius = '50%';
scrollTopButton.style.cursor = 'pointer';
scrollTopButton.style.display = 'none';
scrollTopButton.style.zIndex = '1000';
document.body.appendChild(scrollTopButton);

scrollTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopButton.style.display = 'block';
  } else {
    scrollTopButton.style.display = 'none';
  }
});

// Défilement fluide vers les sections via navigation
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
// Animation de la barre de progression
const progressBar = document.createElement('div');