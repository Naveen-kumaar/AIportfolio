# Naveen Kumar — Portfolio

Static portfolio: HTML5, CSS3, vanilla JavaScript, Bootstrap 5 (CDN), Bootstrap Icons. No build step.

## Run
Open `index.html` in a browser, or serve the folder (`python -m http.server`) and visit http://localhost:8000.
Needs an internet connection for the Bootstrap, AOS, and Google Fonts CDNs.

## Customize
- **Placeholders to replace** (search the project for these): `YOUR_PHONE_NUMBER` (WhatsApp, with country code, digits only), `YOUR_EMAIL@example.com`, `YOUR_GITHUB`, `YOUR_LINKEDIN`, `YOUR_INSTAGRAM`, `+910000000000` (the call link).
- **Skills, projects, education, services:** edit the `DATA` block at the top of `js/script.js`. Each project has a GitHub repository link; `View Project` opens its details and any available live demo. Projects use a drag-scroll carousel, showing three cards on desktop.
- **Images:** put your photo at `assets/images/profile.jpg` (used in the hero and About sections), an Open Graph image at `assets/images/og-cover.png` (1200x630). Project cards currently cycle through three generated UI mockups; replace the `thumb()` output in `js/script.js` with project screenshots when available.
- **Resume:** add your PDF as `assets/resume/Naveen_Kumar_Resume.pdf`; the hero's View Resume button opens it in a new tab.
- **Colors and fonts:** change the solid color variables in `:root` at the top of `css/style.css`.
- **Contact links:** the contact section uses direct email, phone, LinkedIn and GitHub links; update their placeholders to your details.

## Notes
Scroll reveals use AOS on content divs and respect `prefers-reduced-motion`. Cards also use subtle 3D tilt on pointer devices; decorative scroll-heavy particle effects are omitted for smoother scrolling.
