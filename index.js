document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.icons');
  const navLinks = document.querySelector('.navbar-nav');

  menuIcon.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });
});
