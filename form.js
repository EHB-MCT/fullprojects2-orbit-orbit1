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