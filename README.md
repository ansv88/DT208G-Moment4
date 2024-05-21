# DT208G TypeScript, moment 4 - Angular II

Detta projekt är en webbplats som är skapad som en del av kursen DT208G TypeScript vid Mittuniversitetet. Webbplatsen använder Angular och TypeScript för att visa ett ramschema i en tabell för programmet Webbutveckling.

## Syfte och mål

- Träna på att göra HTTP-anrop med Angular och HttpClient.
- Skapa services.
- Presentera data på skärmen från resultat från HTTP-anrop.
- Sortera och söka data.

## Konstruktion

Webbplatsen består av flera komponenter. JSON-data hämtas från en extern URL. <br>
Datan presenteras och hanteras genom följande:

- **Komponenter:** Huvudsida, 404-sida, header, footer.
- **Datahämtning:** JSON-data hämtas med HttpClient i ' services/courses.service.ts '.
- **Visning av data:** FormsModule används för two-way data binding med ' [(ngModel)] ', och ' CommonModule ' används för tillgång till ' *ngFor ' och ' *ngIf '.
- **Filtrering och Sortering:** Kursdata kan filtreras genom ett sökfält och kan sorteras i stigande eller fallande ordning utifrån kurskod, kursnamn eller progression. Funktionerna finns i course.component.ts.

## Styling
Styling sker med CSS där varje komponent har egna stilregler, och globala stilregler finns i styles.css. <br> Webbplatsen är responsiv och fungerar på olika skärmstorlekar.

## Utveckling

Nedan finns en översättning och sammanfattning av den autogenererade readme-instruktionen som skapas när man skapar ett nytt Angularprojekt.
Det är steg-för-steg instruktioner för hur man skapar ett Angularprojekt.

### 1. Installera Angular CLI globalt:

`npm install -g @angular/cli`

### 2. Skapa ett nytt projekt :

`ng new project-name`

### 3. Starta utvecklingsservern:

`ng serve --open` (öppnas i webbläsaren till `http://localhost:4200/`).

### 4. Generera nya komponenter:

`ng generate component component-name`

Man kan också använda `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Bygg projektet:

`ng build`

### Kör enhetstester:

`ng test`

### Kör end-to-end-tester:

`ng e2e`

För att använda detta kommando, lägg först till ett paket som implementerar end-to-end testfunktionalitet.

### Ytterligare hjälp

För mer hjälp om Angular CLI, använd `ng help` eller besök [Angular CLI Overview and Command Reference](https://angular.io/cli).
