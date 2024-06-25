function toggleMenu() {
  const dropdownMenu = document.getElementById("dropdown-menu");
  if (dropdownMenu.style.display === "flex") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "flex";
    dropdownMenu.style.alignItems = "center";
    dropdownMenu.style.justifyContent = "space-around";
  }
}

const images = [
  './assets/banner2.png',
  './assets/banner3.png', // Replace with actual paths to your images
  //'image/third.jpg'
];

let currentImageIndex = 0;

function changeBackgroundImage() {
  const header = document.querySelector(".banner-div");
  currentImageIndex = (currentImageIndex + 1) % images.length;
  header.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url('${images[currentImageIndex]}')`;
}

setInterval(changeBackgroundImage, 3000); // Change image every 3 seconds
