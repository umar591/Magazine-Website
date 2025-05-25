// Dynamically load AdBox.html into a placeholder div
window.addEventListener('DOMContentLoaded', () => {
  fetch('./components/AdBox.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('ad-placeholder1').innerHTML = data;
    })
    .catch(err => console.error('Error loading component:', err));
});


window.addEventListener('DOMContentLoaded', () => {
  fetch('./components/AdBox.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('ad-placeholder2').innerHTML = data;
    })
    .catch(err => console.error('Error loading component:', err));
});
