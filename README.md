# Angular LitClock

**[Live Demo](https://literary-clock.appspot.com/)**

A literary clock that displays the current time through quotations from famous novels and literary works. Instead of showing a traditional clock face, it finds a passage from literature where the time mentioned matches the current real-world time — updated every minute.

---

## Features

- Displays the current time as a literary quote from a curated collection of over 1,400 passages
- Highlights the time-referencing phrase within each quote
- Shows the book title and author for every passage
- Responsive design — works on desktop, tablet, and mobile (portrait/landscape)
- Quotes are shuffled on load so repeated visits show different passages for the same time
- Built as a Progressive Web App (PWA-ready) with Apple mobile web app meta tags
- NativeScript support for iOS/Android builds

---

## Technologies Used

| Layer | Technology |
|---|---|
| Framework | [Angular 5](https://angular.io/) |
| Styling | [Bootstrap 4](https://getbootstrap.com/), SCSS, Google Fonts |
| Mobile | [NativeScript Angular](https://docs.nativescript.org/angular/start/introduction) |
| Build | [Angular CLI 6](https://cli.angular.io/), Webpack |
| Testing | Karma, Jasmine, Protractor |
| Language | TypeScript |

---

## Project Structure

```
src/
├── app/
│   ├── app.component.ts        # Root component — initialises clock and triggers updates
│   ├── app.component.html      # Template — renders quote, book, and author
│   ├── app.component.css       # Component styles (responsive font sizing)
│   ├── app.module.ts           # Angular root module
│   ├── app.service.ts          # LitTimeService — maps current time to a literary quote
│   ├── app.models.ts           # TimeQuoteInterface type definition
│   └── litclock.json           # Dataset: 1,400+ time-tagged literary quotes
├── environments/               # Angular environment configs (dev / prod)
├── styles.scss                 # Global styles and Bootstrap import
└── index.html                  # App shell HTML
data/
└── litclock_annotated.csv      # Source CSV used to generate litclock.json
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) ≥ 8
- [Angular CLI](https://cli.angular.io/) ≥ 6

```bash
npm install -g @angular/cli
```

### Installation

```bash
git clone https://github.com/bythegram/AngularLitClock.git
cd AngularLitClock
npm install
```

### Development Server

```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:8080/`. The app reloads automatically on file changes.

### Build for Production

```bash
npm run build
# or
ng build --prod
```

Output is written to the `docs/` directory, which is served directly by GitHub Pages.

### Linting

```bash
npm run lint
```

### Unit Tests

```bash
npm test
```

### End-to-End Tests

```bash
npm run e2e
```

---

## How It Works

1. On initialisation, `LitTimeService.shuffleArray()` randomises the quote dataset so multiple quotes at the same minute appear in a random order across visits.
2. `LitTimeService.getTime()` reads the current hour and zero-padded minute, filters the dataset for matching `timecode` entries, and returns the first result (which is random due to the shuffle).
3. The matched quote's time-label string is wrapped in `<strong>` tags for visual emphasis.
4. The component polls `getTime()` every **60 seconds** via `setInterval`, so the display stays in sync with the real-world clock.

---

## Adding Quotes

The quote data lives in `src/app/litclock.json`. Each entry must conform to the following schema:

```json
{
  "timecode": "13:01",
  "label": "one minute after one",
  "quote": "The time on the clock was one minute after one",
  "book": "Book Title",
  "author": "Author Name"
}
```

| Field | Description |
|---|---|
| `timecode` | 24-hour time string matching `H:MM` format (e.g. `"13:01"`) |
| `label` | Exact substring of the quote that represents the time (lowercase) |
| `quote` | Full sentence or passage containing the time reference |
| `book` | Title of the source work |
| `author` | Author of the source work |

> **Tip:** The raw CSV source is kept in `data/litclock_annotated.csv` for easier bulk editing.

---

## Credits

Inspiration and quotes sourced from:
- [Literary Clock Made From E-reader](https://www.instructables.com/id/Literary-Clock-Made-From-E-reader/) (Instructables)
- [The Guardian Literary Clock](https://www.theguardian.com/books/table/2011/apr/21/literary-clock)
