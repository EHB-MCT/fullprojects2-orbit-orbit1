//Navigatie
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

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

//Form.html
document.addEventListener("DOMContentLoaded", function() {
    //Gegevens behouden
    const form = document.getElementById('orbitForm');
    const naamInput = document.getElementById('naam');
    const emailInput = document.getElementById('email');
    const postcodeInput = document.getElementById('postcode'); 
    const interesseInput = document.getElementById('interesse');
    const successMsg = document.getElementById('success-msg');

    if (localStorage.getItem('orbit_naam')) naamInput.value = localStorage.getItem('orbit_naam');
    if (localStorage.getItem('orbit_email')) emailInput.value = localStorage.getItem('orbit_email');
    if (localStorage.getItem('orbit_postcode')) postcodeInput.value = localStorage.getItem('orbit_postcode');
    if (localStorage.getItem('orbit_interesse')) interesseInput.value = localStorage.getItem('orbit_interesse');

    //Local storage
    naamInput.addEventListener('input', () => localStorage.setItem('orbit_naam', naamInput.value));
    emailInput.addEventListener('input', () => localStorage.setItem('orbit_email', emailInput.value));
    postcodeInput.addEventListener('input', () => localStorage.setItem('orbit_postcode', postcodeInput.value));
    interesseInput.addEventListener('change', () => localStorage.setItem('orbit_interesse', interesseInput.value));

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        successMsg.classList.replace('hidden-msg', 'show-msg');
    
    });

    //Animaties
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth || document.documentElement.clientWidth;
    canvas.height = window.innerHeight || document.documentElement.clientHeight;

    const auroraVormen = [
        { x: canvas.width * 0.2, y: canvas.height * 0.2, vx: 0.4, vy: 0.3, radius: 400, color: '#9DBA68' },
        { x: canvas.width * 0.8, y: canvas.height * 0.8, vx: -0.5, vy: -0.2, radius: 500, color: '#A3E5FF' },
        { x: canvas.width * 0.8, y: canvas.height * 0.2, vx: -0.3, vy: 0.4, radius: 450, color: '#d712f5' },
        { x: canvas.width * 0.2, y: canvas.height * 0.8, vx: 0.2, vy: -0.5, radius: 350, color: '#F7F4D5' }
    ];

    function animeerAurora() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
        
        auroraVormen.forEach(vorm => {
            vorm.x += vorm.vx;
            vorm.y += vorm.vy;

            if (vorm.x > canvas.width + 100 || vorm.x < -100) vorm.vx *= -1;
            if (vorm.y > canvas.height + 100 || vorm.y < -100) vorm.vy *= -1;

            ctx.beginPath();
            ctx.arc(vorm.x, vorm.y, vorm.radius, 0, Math.PI * 2);
            ctx.fillStyle = vorm.color;
            ctx.fill();
        });
        
        requestAnimationFrame(animeerAurora); 
    }

    animeerAurora(); 

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

});

// projecten.html
let mapLocation = document.querySelector("#mapLocation");
let mapAddress = document.querySelector("#mapAddress");
let mapDate = document.querySelector("#mapDate");
let mapTitle = document.querySelector("#mapTitle");
let themeColor = document.querySelector("#themeColor");
let mapDescription = document.querySelector("#mapDescription");
let mainTitle = document.querySelector("#mapMainTitle");
let mapThumbnailContainer = document.getElementById("mapThumbnailContainer");
let mapThumbnail = document.getElementById("mapThumbnail");
let currentLightboxImages = [];
let currentImageIndex = 0;

function updateOverlay(element) {
	mapLocation.innerText = element.dataset.location;
	mapAddress.innerText = element.dataset.address;
	mapDate.innerText = element.dataset.date;
	mapTitle.innerText = element.dataset.title;
	mapDescription.innerText = element.dataset.description;
	themeColor.setAttribute("fill", element.dataset.color);
	mainTitle.innerText = "";

	if (element.dataset.images) {
        currentLightboxImages = element.dataset.images.split(',').map(img => img.trim());
		mapThumbnail.src = currentLightboxImages[0];
		mapThumbnailContainer.style.display = "block"; 
	} else {
        currentLightboxImages = [];
		mapThumbnailContainer.style.display = "none"; 
	}
}

document.querySelectorAll(".clickableEvent").forEach(function (region) {
	region.addEventListener("click", function () {
		document.querySelectorAll(".clickableEvent").forEach(el => el.classList.remove("active-region"));
        this.classList.add("active-region");
        this.parentNode.appendChild(this);
		updateOverlay(region);
	});
});

const lightboxOverlay = document.getElementById('lightboxOverlay');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

function updateLightboxImage() {
    lightboxImage.src = currentLightboxImages[currentImageIndex];
}

if (mapThumbnail) {
    mapThumbnail.addEventListener('click', function() {
        if (currentLightboxImages.length > 0) {
            currentImageIndex = 0; // Begin altijd bij de eerste foto
            updateLightboxImage();
            lightboxOverlay.classList.add('show');
            
            if(currentLightboxImages.length === 1) {
                lightboxPrev.style.display = 'none';
                lightboxNext.style.display = 'none';
            } else {
                lightboxPrev.style.display = 'block';
                lightboxNext.style.display = 'block';
            }
        }
    });
}

if (lightboxPrev && lightboxNext) {
    lightboxPrev.addEventListener('click', function(e) {
        e.stopPropagation();
        currentImageIndex--;
        if (currentImageIndex < 0) {
            currentImageIndex = currentLightboxImages.length - 1;
        }
        updateLightboxImage();
    });

    lightboxNext.addEventListener('click', function(e) {
        e.stopPropagation(); 
        currentImageIndex++;
        if (currentImageIndex >= currentLightboxImages.length) {
            currentImageIndex = 0;
        }
        updateLightboxImage();
    });
}

if (lightboxClose) {
    lightboxClose.addEventListener('click', function() {
        lightboxOverlay.classList.remove('show');
    });
    
    lightboxOverlay.addEventListener('click', function(e) {
        if (e.target === lightboxOverlay) {
            lightboxOverlay.classList.remove('show');
        }
    });
}