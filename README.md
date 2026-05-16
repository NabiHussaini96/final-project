# Slutprojekt Webbutveckling – Portfolio med JavaScript och Bootstrap

## Projektbeskrivning

Detta projekt är en responsiv portfolio-webbplats utvecklad inom kursen Webbutveckling. Syftet med projektet var att kombinera kursens centrala delar såsom HTML, CSS, SCSS, Bootstrap, JavaScript, tillgänglighet, responsiv design, versionshantering och testning.

Projektet innehåller ett bildgalleri med filtrering, flera sidor och interaktivitet med JavaScript.

---

## Syfte

Syftet med webbplatsen är att skapa en modern och användarvänlig portfolio där innehåll kan visas på ett strukturerat och responsivt sätt.

Projektets mål var att:

- skapa en responsiv webbplats
- använda Bootstrap-komponenter
- arbeta med JavaScript-interaktivitet
- använda SCSS med variabler och mixins
- förbättra tillgänglighet
- testa och optimera webbplatsen
- använda Git och GitHub

---

## Målgrupp

Målgruppen är personer som vill visa projekt eller kreativt innehåll, exempelvis fotografer, designers eller utvecklare.

Webbplatsen är anpassad för:

- dator
- surfplatta
- mobiltelefon

---

## Struktur

Projektet består av:

- index.html
- about.html
- contact.html
- style.scss
- style.css
- script.js

---

## Tekniker som användes

### HTML5
Semantisk struktur användes med:

- header
- nav
- main
- section
- footer

Detta förbättrar struktur, SEO och tillgänglighet.

---

### CSS och SCSS

SCSS användes för att skapa renare och mer återanvändbar kod.

Funktioner som användes:

#### Variabler

```scss
$primary:#0d6efd;
$spacing:30px;
```

#### Mixin

```scss
@mixin center{
display:flex;
justify-content:center;
align-items:center;
}
```

#### Nesting

```scss
.hero{

@include center;

h1{
color:$primary;
}

}
```

SCSS kompilerades sedan automatiskt till CSS.

---

### Bootstrap

Bootstrap användes för:

- navbar
- grid-system
- responsiv layout
- knappar
- cards

Exempel:

```html
<div class="col-md-4">
```

Det gjorde utvecklingen snabbare och förenklade responsiv design.

---

### JavaScript

JavaScript användes för att skapa filtrering av projektkort.

Exempel:

```javascript
buttons.forEach(button => {

button.addEventListener("click",()=>{

let filter=button.dataset.filter;

items.forEach(item=>{

if(filter==="all" || item.classList.contains(filter)){

item.style.display="block";

}

else{

item.style.display="none";

}

});

});

});
```

Funktionen gör att användaren kan filtrera projekt efter kategori.

---

## Responsiv design

Responsivitet skapades genom:

- Bootstrap grid-system
- flexbox
- mediaanpassade komponenter
- container-klasser

Webbplatsen testades i olika storlekar:

### Desktop
Fungerade korrekt.

### Surfplatta
Layout anpassades automatiskt.

### Mobil
Menyn kollapsade till hamburger-meny.

---

## Tillgänglighet

För att förbättra tillgängligheten användes:

- semantisk HTML
- alt-attribut på bilder
- korrekt rubrikstruktur
- aria-label
- responsiv design
- kontrastanpassning

Exempel:

```html
<img
src="bild.jpg"
alt="Naturbild med berg"
width="600"
height="400"
loading="lazy">
```

---

## Säkerhet

Projektet innehåller grundläggande skydd mot säkerhetsproblem.

Exempel på säkerhetsaspekter:

- Content Security Policy
- XSS-medveten utveckling
- validering av indata
- extern data hämtas säkert

Exempel:

```html
<meta http-equiv="Content-Security-Policy"
content="default-src 'self' https:;">
```

---

## Lighthouse-test

Webbplatsen testades med Lighthouse i Chrome DevTools.

Resultat efter förbättringar:

performanc: 81

Accessibility: 85

Best Practices: 92

SEO: 100

### Slutresultat

Performance: 100

Accessibility: 100

Best Practices: 92

SEO: 100

---

## Förbättringar som genomfördes

Under testningen identifierades flera förbättringsområden:

### Före förbättring

- bilder saknade optimering
- fel bildproportioner
- saknade tillgänglighetsförbättringar
- Lighthouse visade flera varningar

### Efter förbättring

- width och height lades till
- loading="lazy" användes
- aspect-ratio korrigerades
- Content Security Policy lades till
- tillgänglighet förbättrades
- SEO förbättrades

---

## Git och versionshantering

Git användes för versionshantering.

Vanliga kommandon:

```bash
git add .
git commit -m "Add responsive portfolio layout"
git push
```

Projektet laddades upp till GitHub.

---

## Reflektion

Projektet gav praktisk erfarenhet av hela utvecklingsprocessen från planering till färdig webbplats.

Största utmaningarna:

- tillgänglighet
- Lighthouse-optimering
- responsiv design
- bildhantering

Det mest lyckade var kombinationen av:

- Bootstrap
- JavaScript
- SCSS
- GitHub

Om projektet utvecklades vidare skulle fler funktioner läggas till, exempelvis API-hämtning och dynamiskt innehåll.

---

## Skapat med

- HTML5
- CSS3
- SCSS
- Bootstrap 5
- JavaScript
- Git
- GitHub
- Lighthouse
