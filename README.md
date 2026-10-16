# Naveen Kumar — Portfolio

Static portfolio: HTML5, CSS3, vanilla JavaScript, Bootstrap 5 (CDN), Bootstrap Icons. No build step.

## Run
Open `index.html` in a browser, or serve the folder (`python -m http.server`) and visit http://localhost:8000.
Needs an internet connection for the Bootstrap, AOS, and Google Fonts CDNs.

## Customize
- **Placeholders to replace** (search the project for these): `YOUR_PHONE_NUMBER` (WhatsApp, with country code, digits only), `YOUR_EMAIL@example.com`, `YOUR_GITHUB`, `YOUR_LINKEDIN`, `YOUR_INSTAGRAM`, `+910000000000` (the call link).
- **Skills, projects, education, experience, services:** edit the `DATA` block at the top of `js/script.js`. Education entries and their completion-year placeholders are in `EDUCATION`; the professional timeline entries and editable internship/LeetCode placeholders are in `EXPERIENCE`. The My Journey pull handle reveals or hides both timeline panels by dragging or clicking; once open, Education scrolls inside its panel and Experience remains pinned on wide screens. Project cards are managed from the `PROJECTS` array and include a screenshot, description, technologies, and optional GitHub/live-demo links. `View Project` opens the detail dialog. The project carousel supports arrows, pagination, keyboard navigation, and dragging/swiping.
- **Images:** put your photo at `assets/images/profile.jpg` (used in the hero and About sections), an Open Graph image at `assets/images/og-cover.png` (1200x630). Project cards use the screenshots in `assets/images/`; replace each project's `images` entries in `js/script.js` to use different screenshots.
- **Resume:** add your PDF as `assets/resume/Naveen_Kumar_Resume.pdf`; the hero's View Resume button opens it in a new tab.
- **Colors and fonts:** change the solid color variables in `:root` at the top of `css/style.css`.
- **Contact links:** the contact section uses direct email, phone, LinkedIn and GitHub links; update their placeholders to your details.

## Notes
Scroll reveals use AOS on intentional content targets, initialize without waiting for the preloader, and use shorter timings on mobile. Animations respect `prefers-reduced-motion`. Cards also use subtle 3D tilt on pointer devices; decorative scroll-heavy particle effects are omitted for smoother scrolling.
