# Portfolio Project – Webbutveckling 2

## Projektbeskrivning
Detta projekt skapades som slutprojekt i kursen Webbutveckling 2. Syftet med projektet är att utveckla en responsiv och tillgänglig portfolio-webbplats som kombinerar HTML, SCSS, Bootstrap och JavaScript.

Projektet innehåller flera delar från kursen, bland annat responsiv design, interaktivitet, tillgänglighet, versionshantering och dokumentation.

---

## Funktioner

- Responsiv design med Bootstrap
- Navigationsmeny
- Portfolio-galleri
- JavaScript-baserad filtrering av innehåll
- Om mig-sida
- Kontaktformulär
- Tillgänglighetsanpassning
- Semantisk HTML
- SCSS med variabler, nesting och mixins
- Versionshantering med Git och GitHub

---

## Tekniker

Projektet använder:

- HTML5
- SCSS / CSS
- Bootstrap 5
- JavaScript
- Git
- GitHub

---

## Projektstruktur

```text
portfolio-project/
│
├── index.html
├── about.html
├── contact.html
├── style.scss
├── style.css
├── script.js
├── README.md
```

---

## Interaktivitet

Projektet använder JavaScript för att skapa ett filtrerbart galleri.

Användaren kan filtrera mellan:

- Alla
- Natur
- Stad

Detta genomförs med:

- querySelectorAll()
- addEventListener()
- classList.contains()
- style.display

---

## Responsivitet

Bootstrap Grid System används för att skapa responsiv design.

Layouten anpassas efter:

- Mobil
- Surfplatta
- Desktop

Exempel:

```html
<div class="col-md-4">
```

Tre kolumner visas på större skärmar och anpassas automatiskt på mindre enheter.

---

## Tillgänglighet

Följande tillgänglighetsåtgärder användes:

- Semantisk HTML (`header`, `main`, `section`, `footer`)
- Alt-text på bilder
- Labels på formulär
- ARIA-attribut
- Lighthouse-testning

Projektet utvecklades med fokus på WCAG-principer.

---

## Versionshantering

Git användes under hela utvecklingsprocessen.

Använda kommandon:

```bash
git add .
git commit -m "message"
git push
```

Projektet publicerades på GitHub.


---

## Installation

1. Klona projektet:

```bash
git clone https://github.com/NabiHussaini96/final-project
```

2. Öppna projektet i VS Code

3. Starta Live Server

4. Öppna index.html

---

## Reflektion

Projektet gav praktisk erfarenhet av att kombinera flera tekniker inom modern webbutveckling. En viktig lärdom var hur responsivitet, tillgänglighet och struktur påverkar användarupplevelsen.

Arbetet visade också vikten av versionshantering och tydlig dokumentation.

---

## Källor

Bootstrap Documentation  
https://getbootstrap.com/

Git Documentation  
https://git-scm.com/doc

GitHub Documentation  
https://docs.github.com/

OWASP Web Security Testing Guide  
https://owasp.org/www-project-web-security-testing-guide/