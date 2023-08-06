  const navbarMenu = document.querySelector('.navbar-menu');

  function toggleMenu() {
    navbarMenu.classList.toggle('active');
  }

  document.querySelector('.navbar-container').addEventListener('click', toggleMenu);
