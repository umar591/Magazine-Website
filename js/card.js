const cards = [
  {
    image: "https://picsum.photos/id/1015/800/600",
    button: "Explore",
    title: "Mountain View",
    description: "Peaceful and relaxing",
    size: "large"
  },
  {
    image: "https://picsum.photos/id/1016/800/600",
    button: "Book Now",
    title: "Beach Paradise",
    description: "Sunny beach resort",
    size: "small"
  },
  {
    image: "https://picsum.photos/id/1019/800/600",
    button: "Visit",
    title: "City Lights",
    description: "Nightlife and energy",
    size: "small"
  }
];

async function loadCards(containerId, data = cards) {
  const container = document.getElementById(containerId);
  const res = await fetch("components/Card.html");
  const template = await res.text();

  data.forEach(card => {
    let cardHTML = template
      .replace("{{image}}", card.image)
      .replace("{{button}}", card.button)
      .replace("{{title}}", card.title)
      .replace("{{description}}", card.description)
      .replace("{{size}}", card.size);

    container.innerHTML += cardHTML;
  });
}

window.addEventListener("DOMContentLoaded", () => {
  loadCards("card-container");
});
