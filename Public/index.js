// Scrolling Images & Text
let i = 0; // images index
let m = 0; // messages index

function changeImage() {
  const images = [
    "https://blog.adobe.com/en/publish/2021/10/19/media_16dc563cf8f4cafb81a1011a270c4c7919f09f0b2.png?width=750&format=png&optimize=medium",
    "https://network.bestfriends.org/sites/default/files/page_images/hero/BooEricMegSedrakyan-LF-9I9A7320_0.jpeg",
    "https://hips.hearstapps.com/hmg-prod/images/pet-adoption-websites1-1598044456.jpg",
    "https://pethavenmn.org/wp-content/uploads/2017/10/14570699_10154675430869617_7587350158264934234_o-6.jpg",
    "https://images.squarespace-cdn.com/content/v1/5719016a27d4bd6dafffd678/f9c1640b-a56b-4101-9839-6e15ea8a02e8/625522_598018436910972_1124958709_n.jpg",
    "https://bestfriends.org/sites/default/files/inline-images/Myth-NuggetAdoptionNKUTSuper2178sak.jpg",
    "https://getyourpet.com/wp-content/themes/gyp/assets/images/hero-sml15.jpg",
    "https://media.newyorker.com/photos/606b51c2313f23423168acbe/master/pass/Brewer-CompanionDogApplication.jpg",
  ];

  const imageContainer = document.getElementById("celebration-image-container");

  imageContainer.style.opacity = "0"; // fade out
  setTimeout(() => {
    // changeImage
    const image = document.getElementById("celebration-image");
    image.src = images[i]; // change image
    imageContainer.style.opacity = "1"; // fade in
    i = (i + 1) % images.length; // Update index
  }, 1000);
}

function changeMessage() {
  const messages = [
    "Our dedicated team ensures every furry friend is nurtured, vaccinated, and groomed to perfection, ready to leap into your life with a wagging tail.",
    "Every animal in our care receives top-notch medical attention, love, and a promise of a bright future.",
    "Each of our animals is a shining example of health and happiness, ready to bring endless smiles and wagging tails into your home.",
    "Our commitment to excellence in animal health and well-being ensures that your new furry friend will be a joyful addition to your family.",
    "We pride ourselves on maintaining the highest standards of care, so you can find a companion who's as healthy as they are happy.",
    "Every pet is thoroughly screened to ensure the best match for your home. Together, we create forever stories filled with joy and companionship.",
    "Our pets are awaiting the chance to light up your life with unconditional love and playful antics.",
    "Our animals are not just pets; they are companions who have been lovingly prepared to bring warmth and laughter to their new forever homes.",
    "We pride ourselves on maintaining the highest standards of care, so you can find a companion who's as healthy as they are happy.",
  ];

  // changeMessage
  const message = document.getElementById("scrolling-text");
  message.style.opacity = "0"; // fade out

  setTimeout(() => {
    message.textContent = messages[m]; // Change message
    message.style.opacity = "1"; // Fade back in
    m = (m + 1) % messages.length; // Update index
  }, 1000); // Match this duration to CSS transition duration
}

// Change content every few seconds
setInterval(changeImage, 8000);
setInterval(changeMessage, 12000);

document.addEventListener("DOMContentLoaded", function () {
  var adoptionCounter = document.getElementById("adoption-counter");

  getAdoptedCount((count) => {
    adoptionCounter.innerText = `${count[0].count} adoptions and counting!`;
  });
});
