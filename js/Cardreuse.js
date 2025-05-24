const cardDatas = [
  {
    backgroundImage: "https://picsum.photos/id/1015/800/600",
    buttonText: "Explore",
    heading: "Mountain Serenity",
    subheading: "Peaceful views for your soul",
    description: "Experience the calmness of nature with stunning mountain vistas."
  },
  {
    backgroundImage: "https://picsum.photos/id/1016/800/600",
    buttonText: "Book Now",
    heading: "Beach Paradise",
    subheading: "Sun, sand, and sea",
    description: "Relax at the beautiful beach resort and enjoy endless sunshine."
  },
  {
    backgroundImage: "https://picsum.photos/id/1019/800/600",
    buttonText: "Visit",
    heading: "City Lights",
    subheading: "The city that never sleeps",
    description: "Discover the vibrant nightlife and dazzling cityscape."
  }
];

function createCard(cardInfo) {
  const card = document.createElement("div");
  card.className = "card";

  // Image container
  const imageDiv = document.createElement("div");
  imageDiv.className = "card-image";
  imageDiv.style.backgroundImage = `url('${cardInfo.backgroundImage}')`;

  // Button on image
  const button = document.createElement("button");
  button.className = "card-button";
  button.textContent = cardInfo.buttonText;

  imageDiv.appendChild(button);
  card.appendChild(imageDiv);

  // Text container below image
  const textContainer = document.createElement("div");
  textContainer.className = "card-text";

  const h2 = document.createElement("h2");
  h2.textContent = cardInfo.heading;

  const h6 = document.createElement("h6");
  h6.textContent = cardInfo.subheading;

  const p = document.createElement("p");
  p.textContent = cardInfo.description;

  textContainer.appendChild(h2);
  textContainer.appendChild(h6);
  textContainer.appendChild(p);

  card.appendChild(textContainer);

  return card;
}

function renderCards(cards) {
  const container = document.getElementById("cardre-container1");
  container.innerHTML = "";
  cards.forEach(cardInfo => {
    container.appendChild(createCard(cardInfo));
  });
}





renderCards(cardDatas);









const cardData = [
  {
    backgroundImage: "https://picsum.photos/id/1015/800/600",
    buttonText: "Explore",
    heading: "Mountain Serenity",
    subheading: "Peaceful views for your soul",
    description: "Experience the calmness of nature with stunning mountain vistas."
  },
  {
    backgroundImage: "https://picsum.photos/id/1016/800/600",
    buttonText: "Book Now",
    heading: "Beach Paradise",
    subheading: "Sun, sand, and sea",
    description: "Relax at the beautiful beach resort and enjoy endless sunshine."
  },
  {
    backgroundImage: "https://picsum.photos/id/1019/800/600",
    buttonText: "Visit",
    heading: "City Lights",
    subheading: "The city that never sleeps",
    description: "Discover the vibrant nightlife and dazzling cityscape."
  },
  {
    backgroundImage: "https://picsum.photos/id/1020/800/600",
    buttonText: "Discover",
    heading: "Forest Trail",
    subheading: "Adventure awaits",
    description: "Walk among the tall trees and listen to the sounds of nature."
  },
  {
    backgroundImage: "https://picsum.photos/id/1021/800/600",
    buttonText: "See More",
    heading: "Desert Dreams",
    subheading: "Golden sands & clear skies",
    description: "Enjoy camel rides and mesmerizing sunsets."
  },
  {
    backgroundImage: "https://picsum.photos/id/1022/800/600",
    buttonText: "Explore",
    heading: "Snowy Peaks",
    subheading: "Chill & thrill",
    description: "Ski down the slopes or relax in a mountain lodge."
  },
  {
    backgroundImage: "https://picsum.photos/id/1022/800/600",
    buttonText: "Explore",
    heading: "Snowy Peaks",
    subheading: "Chill & thrill",
    description: "Ski down the slopes or relax in a mountain lodge."
  },
  {
  backgroundImage: "https://picsum.photos/id/1077/800/600",
  buttonText: "Fly High",
  heading: "Balloon Rides",
  subheading: "Touch the clouds",
  description: "See the world from above in a hot air balloon adventure."
},
{
  backgroundImage: "https://picsum.photos/id/1084/800/600",
  buttonText: "Sail",
  heading: "Lake Escape",
  subheading: "Smooth waters ahead",
  description: "Glide across the calm lake with a cool breeze."
},
{
  backgroundImage: "https://picsum.photos/id/1035/800/600",
  buttonText: "Climb",
  heading: "Rocky Heights",
  subheading: "Reach the peak",
  description: "Challenge yourself on steep cliffs and rocky paths."
},
{
  backgroundImage: "https://picsum.photos/id/1042/800/600",
  buttonText: "Drift",
  heading: "Desert Dreams",
  subheading: "Golden dunes await",
  description: "Ride through endless sandscapes under a blazing sun."
},
{
  backgroundImage: "https://picsum.photos/id/1052/800/600",
  buttonText: "Dive In",
  heading: "Underwater World",
  subheading: "Beneath the surface",
  description: "Explore colorful coral reefs and marine life."
},
{
  backgroundImage: "https://picsum.photos/id/1069/800/600",
  buttonText: "Camp",
  heading: "Forest Nights",
  subheading: "Stars above the trees",
  description: "Enjoy a warm fire and peaceful silence under starlit skies."
},
{
  backgroundImage: "https://picsum.photos/id/1077/800/600",
  buttonText: "Fly High",
  heading: "Balloon Rides",
  subheading: "Touch the clouds",
  description: "See the world from above in a hot air balloon adventure."
},
{
  backgroundImage: "https://picsum.photos/id/1084/800/600",
  buttonText: "Sail",
  heading: "Lake Escape",
  subheading: "Smooth waters ahead",
  description: "Glide across the calm lake with a cool breeze."
}

];

function createCard(cardInfo) {
  const card = document.createElement("div");
  card.className = "card";

  const imageDiv = document.createElement("div");
  imageDiv.className = "card-image";
  imageDiv.style.backgroundImage = `url('${cardInfo.backgroundImage}')`;

  const button = document.createElement("button");
  button.className = "card-button";
  button.textContent = cardInfo.buttonText;

  imageDiv.appendChild(button);
  card.appendChild(imageDiv);

  const textContainer = document.createElement("div");
  textContainer.className = "card-text";

  const h2 = document.createElement("h2");
  h2.textContent = cardInfo.heading;

  const h6 = document.createElement("h6");
  h6.textContent = cardInfo.subheading;

  const p = document.createElement("p");
  p.textContent = cardInfo.description;

  textContainer.appendChild(h2);
  textContainer.appendChild(h6);
  textContainer.appendChild(p);

  card.appendChild(textContainer);

  return card;
}

// Load More functionality
let currentIndex = 0;
const cardsPerBatch = 3;

function renderCardBatch() {
  const container = document.getElementById("cardre-container2");
  for (let i = 0; i < cardsPerBatch && currentIndex < cardData.length; i++, currentIndex++) {
    container.appendChild(createCard(cardData[currentIndex]));
  }

  if (currentIndex >= cardData.length) {
    document.getElementById("loadMoreBtn").style.display = "none";
  }
}

// Initial 6 cards
function renderInitialCards() {
  const container = document.getElementById("cardre-container2");
  for (let i = 0; i < 6 && currentIndex < cardData.length; i++, currentIndex++) {
    container.appendChild(createCard(cardData[currentIndex]));
  }
}

document.getElementById("loadMoreBtn").addEventListener("click", renderCardBatch);

// Initial render
renderInitialCards();

