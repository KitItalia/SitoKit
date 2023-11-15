let navbar = document.getElementById("navbar");
let startScrollY = 100;
let slideIndex = 0;
const slides = document.querySelectorAll(".carousel-slide");
window.addEventListener("scroll", () => {
  if (window.scrollY > startScrollY) {
    navbar.classList.add("bg-white");
    navbar.classList.remove("bg-opacity");
  } else if (window.screenY < 100) {
    navbar.classList.remove("bg-white");
    navbar.classList.add("bg-opacity");
  }
});

showSlide(slideIndex);
setInterval(() => {
  nextSlide();
}, 3000);
function showSlide(index) {
  if (index < 0) {
    slideIndex = slides.length - 1;
  } else if (index >= slides.length) {
    slideIndex = 0;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}
function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}
