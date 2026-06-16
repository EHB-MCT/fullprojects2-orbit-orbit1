//Slider index.html + banners pages
let slideIndex = 0;
let slideshowTimer;

let checkSlides = document.getElementsByClassName("mySlides");

if (checkSlides.length > 1) {
  showSlides();
} 
else if (checkSlides.length === 1) {
  checkSlides[0].style.display = "block";
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots   = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }

  if (dots.length > 0) {
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      dots[slideIndex - 1].className += " active";
  }

  slides[slideIndex - 1].style.display = "block";
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

//zinvol.html
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
        
        const content = this.nextElementSibling;
        const icon = this.querySelector('.icon');

        if (content.style.display === "block") {
            content.style.display = "none";
            icon.textContent = "+"; 
        } else {
            content.style.display = "block";
            icon.textContent = "-"; 
        }
    });
});