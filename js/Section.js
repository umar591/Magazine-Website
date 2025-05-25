window.addEventListener('DOMContentLoaded', () => {
  fetch('./components/Section.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('main-section-content-area').innerHTML = data;
    })
    .catch(err => console.error('Error loading component:', err));
});