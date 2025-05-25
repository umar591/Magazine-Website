const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const searchIcon = document.getElementById('searchIcon');
    const searchInput = document.getElementById('searchInput');

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Toggle search input field
    searchIcon.addEventListener('click', () => {
      searchInput.classList.toggle('display');
      searchInput.focus();
    });