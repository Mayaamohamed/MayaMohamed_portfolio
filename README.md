# Maya Mohamed — Portfolio

## 📁 Folder structure
```
maya-portfolio/
├── index.html
├── README.md
└── assets/
    ├── styles.css
    ├── script.js
    ├── Maya-Mohamed-CV.pdf   ← add your CV here
    └── images/               ← add all project/profile images here
```

## 🖼️ Images you need to add
Put these files inside `assets/images/` with **exactly** these names (case-sensitive):

| Filename | Used for |
|---|---|
| `profile.jpeg` | About section portrait |
| `project-scms-poster.jpeg` | Complaints Management System poster |
| `project-sales-1.png` → `project-sales-4.png` | Sales dashboard (Main / Products / Region / Customers) |
| `project-hr-1.png` → `project-hr-5.png` | HR dashboard (Cover / Workforce / Salary / Hiring / Cost) |
| `project-social-1.png` → `project-social-3.png` | Social media dashboard (Demographics / Content / Impact) |

Any format works as long as the filename + extension match exactly (e.g. if your file is `.jpg` instead of `.jpeg`, either rename it or edit the `src=` in `index.html`).

Also drop your CV PDF into `assets/` and name it `Maya-Mohamed-CV.pdf` (the "My CV" button downloads that file).

## ▶️ How to run it locally
You don't need to install anything — just open `index.html` in a browser:

- **Easiest:** double-click `index.html`, or right-click → Open with → your browser.
- **Better (recommended):** serve it locally so paths behave exactly like they will online:
  - VS Code: install the **Live Server** extension → right-click `index.html` → "Open with Live Server".
  - Or, with Python installed, open a terminal in the `maya-portfolio` folder and run:
    ```bash
    python -m http.server 5500
    ```
    then open `http://localhost:5500` in your browser.

## 🚀 How to deploy (GitHub Pages, since the footer mentions it)
1. Create a GitHub repo and push this whole `maya-portfolio` folder to it (contents at the repo root, or in a `docs/` folder — your choice).
2. Repo → **Settings** → **Pages** → under "Build and deployment", set Source to **Deploy from a branch**, pick `main` and the root (or `/docs`) folder.
3. Save — GitHub gives you a live URL like `https://<username>.github.io/<repo-name>/` within a minute or two.

## ✨ What's included
- Light/dark theme toggle (persists across visits via `localStorage`)
- Scroll-spy sidebar navigation that highlights the section you're viewing
- Mobile bottom tab bar (sidebar collapses under 760px)
- Spreadsheet-tab-style image switcher on the Sales / HR / Social projects — click a tab to swap the screenshot
- Fully responsive down to small phones, visible keyboard focus states, and respects "reduce motion" settings
