# Wilfredo Salazar — CV

A single-page, responsive CV built with plain HTML5, CSS3 and a touch of JavaScript.
Editorial / tech-startup styling: deep navy blue, blue accents, generous whitespace, no skill bars, no percentages.

## Structure

```
cv/
├── index.html        # Page content (semantic HTML5)
├── css/
│   └── style.css     # Layout, theme, responsive rules, print stylesheet
├── js/
│   └── script.js     # Scroll-reveal animation + PDF/print button
└── README.md
```

## Running locally

No build step or dependencies are required. Any static file server works.

```bash
# Option 1: just open it
open index.html          # macOS
xdg-open index.html      # Linux
start index.html         # Windows

# Option 2: serve it (recommended, avoids browser file:// restrictions)
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Downloading as PDF

Click the **Download CV / PDF** button in the top bar. It calls the browser's
native print dialog (`window.print()`); choose **Save as PDF** as the
destination. A dedicated print stylesheet (`@media print`) makes sure the CV:

- fits on a single A4 page,
- hides interactive/navigation elements (top bar, footer links),
- keeps section spacing tight and colors print-friendly.

## Deploying with GitHub Pages

1. Push this repository to GitHub (already the case if you're reading this from the repo).
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Select the branch to publish (e.g. `main`) and the folder `/ (root)`.
5. Save. GitHub will publish the site at:
   `https://<your-username>.github.io/<repository-name>/`

No further configuration is needed — the site is fully static.

## Editing content

All CV content lives in `index.html`, split into clearly labelled sections:
Profile, Technical Skills, Selected Projects, Education, Languages,
Certifications and Professional Experience. Update the text there; styling
in `css/style.css` will apply automatically.
