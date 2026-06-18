# README - Zinvol & Solidair - ORBIT vzw
## 1. Projectbeschrijving
**Zinvol & Solidair** is een interlevensbeschouwelijk platform dat ontmoeting, dialoog en solidaire actie in een superdiverse samenleving stimuleert. 
De website brengt mensen van verschillende levensbeschouwingen samen rond concrete maatschappelijke thema's en biedt praktische handvatten via een online handleiding, projectpagina's en een interactieve projectenkaart.

### Kernonderwerpen van het project:
* **Zinvol & Solidair Introductie:** Wat houdt interlevensbeschouwelijke solidariteit in?
* **Ecologie:** Gezamenlijke ecologische acties van buurt tot planeet.
* **Armoede:** Samen strijden tegen uitsluiting en onzichtbaarheid.
* **Inclusief Begraven & Gedenken:** Ruimte en respect voor ieders manier van afscheid nemen (bv. Troostplekken).
* **Interactieve Projectenkaart:** Visualisatie van actuele projecten en evenementen in heel Vlaanderen.

## 2. Informatie over het Team
* Chaimae, Ines, Siemon, Priscilla

## 3. Mapstructuur & Assets Links
├── index.html                  # Homepage met automatische caroussel en introductie
├── zinvol.html                 # Toelichtingspagina met accordions & PDF-link
├── ecologie.html               # Themapagina Ecologie
├── armoede.html                # Themapagina Armoede
├── begraven.html               # Themapagina Inclusief begraven & gedenken
├── projecten.html              # Interactieve kaart van Vlaanderen met projecten
├── form.html                   # Inschrijvingsformulier
├── main.js                     # Hoofd JavaScript-bestand
├── style/                      # Map met specifieke stylesheets
│   ├── global.css              # Algemene layout-instellingen (nav, footer, homepage, ...)
│   ├── style.css               # Hoofdstyling (import/basisstijlen)
│   ├── slideshow.css           # Styling voor de caroussel op de homepage
│   ├── topics.css              # Herbruikbare styling voor themapagina's
│   ├── project.css             # Specifieke opmaak van de projectkaart
│   └── form.css                # Styling voor het formulier
├── fonts/                      # Lettertypes via huisstijl
│   ├── Neutra-Bold.otf
│   └── Neutra-Book.otf
└── assets/                     # Afbeeldingen, SVG's en PDF
    ├── logo.png                # Officieel logo (navigatie)
    ├── redlogo.png             # Alternatief logo (footer)
    ├── Handleiding-Zinvol-en-Solidair.pdf # Volledige handleiding
    └── [Thema/Project specifieke afbeeldingen (armoede, ecologie, begraven, etc.)]

## 4. Uitleg Functionaliteiten
### Responsieve navigatie (hamburger-menu)
Locatie: global.css & main.js
Werking: Op desktop worden de navigatielinks naast elkaar getoond met hun respectievelijke themakleuren en een bold effect voor het actieve tabblad. Op schermen kleiner dan 900px transformeren de links naar een verticaal uitklapbaar menu dat geactiveerd wordt via een JavaScript toggle op het hamburger-icoon (#hamburger).

### Automatische + handmatige caroussel
Locatie: index.html, slideshow.css & main.js
Werking: Een automatische slideshow die elke 3 seconden (3000ms) wisselt van slide. Gebruikers kunnen handmatig navigeren via de pijltjes (.prev / .next) of de bolletjes (.dot). De JavaScript bevat een veiligheidscheck (checkSlides.length) zodat de caroussel-code niet crasht op pagina's waar slechts één banner aanwezig is.

### Uitklapbaar accordeonmenu
Locatie: zinvol.html & main.js
Werking: Een overzichtelijke weergave van voorwaarden, uitdagingen en voorbeelden. Bij het klikken op een .accordion-header klapt de inhoud soepel uit en verandert het icoon van een + naar een -.

### Interactieve SVG Projectenkaart & Lightbox Slider
Locatie: projecten.html, project.css & main.js
Werking: Een interactieve SVG-kaart van Vlaanderen. Wanneer er op een actieve regio (zoals Gent, Dendermonde, of Willebroek) wordt geklikt:

De kaart behoudt permanent zijn actieve highlight-vorm (.active-region) en springt visueel naar de voorgrond.
De overlay-tekst links wordt direct geüpdatet met de projectdetails (locatie, datum, beschrijving).
Er verschijnt een kleine thumbnail (voorbeeldweergave) onder de tekst.
Bij het klikken op deze thumbnail opent een schermvullende Lightbox Slider met een duidelijke sluit-knop (X), waarmee de gebruiker door meerdere grote foto's van het specifieke project kan navigeren.

### Formulier met Local Storage 
Locatie: form.html, form.css & main.js
Werking: * Local Storage: Voorkomt gegevensverlies. Alles wat een gebruiker invult (Naam, E-mail, Postcode, Interesse) wordt live opgeslagen in de browser (localStorage). Bij het herladen van de pagina staan de gegevens er nog steeds.

## 5. Bronnen & Referenties
* Huisstijl & Content: ORBIT vzw Officiële Website voor logo's, favicons en basisteksten.
Stock-images:
**assets/ecologie.png**: https://unsplash.com/photos/adults-and-children-crafting-at-tables-with-plants-ukTZrFNqCXU
**assets/armoede.png**: https://unsplash.com/photos/people-sitting-in-front-of-table-talking-and-eating-W3SEyZODn8U
**assets/begraven.jpg**: https://unsplash.com/photos/a-group-of-people-standing-around-a-painting-SoXldRPBInM
**assets/projectecologie1.jpg**: https://unsplash.com/photosshallow-focus-photo-of-people-looking-at-plants-during-daytime-A0jiySI0nc4

Lettertypes: 'Neutra' familie geïntegreerd via lokale @font-face declaraties in typo.css.

Iconen & SVG structuren: Social media iconen en de geografische kaartvlakken van Vlaanderen zijn opgebouwd via inline SVG-paden (Figma of van Orbit zelf).