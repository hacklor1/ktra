const slides = document.getElementsByClassName("anh");
const SLIDE_INTERVAL = 5000;

let slideIndex = 1;
let slideTimer = null;

function showSlides(n) {
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";

  clearTimeout(slideTimer);
  slideTimer = setTimeout(() => {
    slideIndex++;
    showSlides(slideIndex);
  }, SLIDE_INTERVAL);
}

if (slides.length) showSlides(slideIndex);