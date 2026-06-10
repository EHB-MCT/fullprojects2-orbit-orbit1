let slideIndex = 0;
let slideshowTimer;

showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots   = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  slideshowTimer = setTimeout(showSlides, 3000);
}

function plusSlides(n) {
  clearTimeout(slideshowTimer);
  let slides = document.getElementsByClassName("mySlides");
  slideIndex += n - 1;
  if (slideIndex < 0)               { slideIndex = slides.length - 1; }
  if (slideIndex >= slides.length)  { slideIndex = 0; }
  showSlides();
}

function currentSlide(n) {
  clearTimeout(slideshowTimer);
  slideIndex = n - 1;
  showSlides();
}