async function renderPage(pagePath = './Components/Navbar/Navbar.html') {
  const app = document.getElementById('app');
  try {
    const pageHTML = await loadHTML(pagePath);
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = pageHTML;

    await injectComponents(tempDiv); // Inject all components
    app.innerHTML = tempDiv.innerHTML; // Render to the page
  } catch (err) {
    app.innerHTML = `<p>Error: ${err.message}</p>`;
  }
}

renderPage(); // By default, load home.html
