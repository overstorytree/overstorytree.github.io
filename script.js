/* ============================================================
   OVERSTORY TREE — styles.css
   Aesthetic: Refined botanical minimalism — deep forest greens,
   warm cream, DM Serif Display + DM Sans, generous whitespace.
   ============================================================ */

/* ── RESET & BASE ─────────────────────────────────────────── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  /* Palette */
  --green-deep:    #1a2e1a;
  --green-dark:    #253d25;
  --green-mid:     #4a7c59;
  --green-soft:    #78a86a;
  --green-pale:    #d6e8cf;
  --green-wash:    #eef5eb;
  --cream:         #faf8f4;
  --cream-deep:    #f3ede3;
  --warm-white:    #fdfcfa;
  --text-dark:     #1a2010;
  --text-body:     #3d4a35;
  --text-muted:    #697561;
  --text-faint:    #9aaa8f;
  --border:        #dce8d5;
  --border-strong: #b8cdb0;
  --shadow-sm:     0 1px 3px rgba(26,46,26,0.07), 0 1px 2px rgba(26,46,26,0.05);
  --shadow-md:     0 4px 16px rgba(26,46,26,0.09), 0 2px 6px rgba(26,46,26,0.06);
  --shadow-lg:     0 12px 40px rgba(26,46,26,0.12), 0 4px 12px rgba(26,46,26,0.07);

  /* Typography */
  --font-display: 'DM Serif Display', Georgia, serif;
  --font-body:    'DM Sans', 'Helvetica Neue', Arial, sans-serif;

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;

  /* Layout */
  --max-width: 1160px;
  --header-h: 68px;
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;

  /* Transitions */
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --fast: 0.15s var(--ease);
  --medium: 0.28s var(--ease);
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
  -webkit-text-size-adjust: 100%;
}

body {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-body);
  background: var(--warm-white);
  -webkit-font-smoothing: antialiased;
}

img, svg { display: block; }
a { color: inherit; text-decoration: none; }
ul, ol { list-style: none; }

/* ── TYPOGRAPHY ───────────────────────────────────────────── */
h1, h2, h3, h4 {
  font-family: var(--font-display);
  color: var(--text-dark);
  line-height: 1.18;
  letter-spacing: -0.01em;
}

h1 { font-size: clamp(2.4rem, 5.5vw, 4rem); }
h2 { font-size: clamp(1.9rem, 4vw, 2.8rem); }
h3 { font-size: 1.25rem; font-weight: 400; }

p { color: var(--text-body); }

/* ── LAYOUT HELPERS ──────────────────────────────────────── */
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-6);
}

@media (max-width: 640px) {
  .container { padding: 0 var(--space-4); }
}

.section {
  padding: var(--space-24) 0;
}

.section-header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto var(--space-16);
}

.section-label {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--green-mid);
  margin-bottom: var(--space-3);
}

.section-sub {
  font-size: 1.05rem;
  color: var(--text-muted);
  margin-top: var(--space-4);
  line-height: 1.75;
}

/* ── BUTTONS ─────────────────────────────────────────────── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-sm);
  border: 2px solid transparent;
  cursor: pointer;
  transition: background var(--fast), color var(--fast), border-color var(--fast), box-shadow var(--fast), transform var(--fast);
  text-decoration: none;
  white-space: nowrap;
}

.btn:focus-visible {
  outline: 3px solid var(--green-soft);
  outline-offset: 3px;
}

.btn-primary {
  background: var(--green-deep);
  color: var(--cream);
  border-color: var(--green-deep);
}
.btn-primary:hover {
  background: var(--green-dark);
  border-color: var(--green-dark);
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}
.btn-primary:active { transform: translateY(0); }

.btn-secondary {
  background: transparent;
  color: var(--green-deep);
  border-color: var(--green-deep);
}
.btn-secondary:hover {
  background: var(--green-deep);
  color: var(--cream);
  box-shadow: var(--shadow-sm);
  transform: translateY(-1px);
}

.btn-header {
  background: var(--green-deep);
  color: #fff;
  border-color: var(--green-deep);
  font-size: 0.84rem;
  padding: 0.6rem 1.2rem;
}
.btn-header:hover {
  background: var(--green-dark);
  border-color: var(--green-dark);
}

.btn-full { width: 100%; justify-content: center; }

/* ── HEADER ──────────────────────────────────────────────── */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--header-h);
  background: rgba(250, 248, 244, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: border-color var(--medium), box-shadow var(--medium), background var(--medium);
}

.site-header.scrolled {
  border-bottom-color: var(--border);
  box-shadow: var(--shadow-sm);
  background: rgba(250, 248, 244, 0.97);
}

.header-inner {
  display: flex;
  align-items: center;
  height: var(--header-h);
  gap: var(--space-8);
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex-shrink: 0;
  text-decoration: none;
}
.logo-text {
  font-family: var(--font-display);
  font-size: 1.2rem;
  color: var(--text-dark);
  letter-spacing: -0.01em;
}
.logo-accent { color: var(--green-mid); }
.logo:focus-visible { outline: 2px solid var(--green-soft); border-radius: 4px; }

/* Main nav */
.main-nav {
  display: flex;
  margin-left: auto;
}
.main-nav ul {
  display: flex;
  gap: var(--space-6);
}
.main-nav a {
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--text-muted);
  transition: color var(--fast);
  padding: var(--space-2) 0;
  position: relative;
}
.main-nav a::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 1.5px;
  background: var(--green-mid);
  transform: scaleX(0);
  transition: transform var(--medium);
  transform-origin: left;
}
.main-nav a:hover { color: var(--text-dark); }
.main-nav a:hover::after { transform: scaleX(1); }
.main-nav a:focus-visible { outline: 2px solid var(--green-soft); border-radius: 2px; }

/* Hamburger */
.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-3);
  margin-left: auto;
  border-radius: var(--radius-sm);
  transition: background var(--fast);
}
.nav-toggle:hover { background: var(--green-wash); }
.nav-toggle:focus-visible { outline: 2px solid var(--green-soft); }
.nav-toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-dark);
  border-radius: 2px;
  transition: transform var(--medium), opacity var(--medium);
}
.nav-toggle[aria-expanded="true"] span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav-toggle[aria-expanded="true"] span:nth-child(2) { opacity: 0; }
.nav-toggle[aria-expanded="true"] span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Mobile menu */
.mobile-menu {
  background: var(--warm-white);
  border-top: 1px solid var(--border);
  padding: var(--space-5) var(--space-6) var(--space-8);
}
.mobile-menu nav {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}
.mobile-menu a {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-body);
  padding: var(--space-3) 0;
  border-bottom: 1px solid var(--border);
}
.mobile-menu a:last-child { border-bottom: none; }
.mobile-menu .btn { margin-top: var(--space-4); width: 100%; justify-content: center; }

@media (max-width: 860px) {
  .main-nav { display: none; }
  .btn-header { display: none; }
  .nav-toggle { display: flex; }
}

/* ── HERO ────────────────────────────────────────────────── */
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  background: var(--cream);
  padding-top: var(--header-h);
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero-tree {
  position: absolute;
  bottom: 0;
}

.hero-tree-1 {
  right: 4%;
  width: clamp(120px, 18vw, 260px);
  height: auto;
  bottom: -20px;
}
.hero-tree-2 {
  right: 16%;
  width: clamp(80px, 12vw, 180px);
  height: auto;
  bottom: -10px;
}
.hero-tree-3 {
  right: 26%;
  width: clamp(60px, 9vw, 160px);
  height: auto;
  bottom: -15px;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 680px;
  padding-top: var(--space-20);
  padding-bottom: var(--space-20);
  animation: heroFadeUp 0.9s var(--ease) both;
}

@keyframes heroFadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}

.hero-eyebrow {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--green-mid);
  margin-bottom: var(--space-4);
}

.hero h1 {
  font-size: clamp(2.6rem, 6vw, 4.4rem);
  margin-bottom: var(--space-6);
  color: var(--green-deep);
}

.hero h1 em {
  font-style: italic;
  color: var(--green-mid);
}

.hero-sub {
  font-size: clamp(1rem, 2vw, 1.12rem);
  color: var(--text-muted);
  line-height: 1.8;
  max-width: 560px;
  margin-bottom: var(--space-10);
}

.hero-ctas {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
  margin-bottom: var(--space-10);
}

.trust-row {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex-wrap: wrap;
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--text-muted);
}

.trust-row span {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.trust-dot {
  color: var(--border-strong);
}

/* Horizontal rule-style divider */
.hero::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--border), transparent);
}

/* ── SERVICES ────────────────────────────────────────────── */
.services {
  background: var(--warm-white);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-6);
}

.service-card {
  background: var(--cream);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: var(--space-8);
  transition: box-shadow var(--medium), transform var(--medium), border-color var(--medium);
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 3px;
  height: 100%;
  background: var(--green-soft);
  opacity: 0;
  transition: opacity var(--medium);
}

.service-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-3px);
  border-color: var(--border-strong);
}

.service-card:hover::before { opacity: 1; }

.service-icon {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-sm);
  background: var(--green-wash);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-5);
  color: var(--green-mid);
  transition: background var(--medium);
}

.service-card:hover .service-icon {
  background: var(--green-pale);
}

.service-card h3 {
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: var(--space-3);
  color: var(--text-dark);
}

.service-card p {
  font-size: 0.92rem;
  color: var(--text-muted);
  line-height: 1.75;
}

/* ── WHY OVERSTORY ───────────────────────────────────────── */
.why {
  background: var(--green-deep);
  color: var(--cream);
}

.why .section-label { color: var(--green-soft); }
.why h2 { color: var(--cream); }
.why .section-sub { color: rgba(215, 232, 207, 0.72); }

.why-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: start;
}

@media (max-width: 860px) {
  .why-inner { grid-template-columns: 1fr; gap: var(--space-12); }
}

.why-text { max-width: 440px; }

.why-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.why-list li {
  display: flex;
  gap: var(--space-5);
  align-items: flex-start;
}

.why-icon {
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  border-radius: var(--radius-sm);
  background: rgba(120, 168, 106, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--green-soft);
  margin-top: 2px;
}

.why-list strong {
  display: block;
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 400;
  color: var(--cream);
  margin-bottom: var(--space-1);
  letter-spacing: -0.01em;
}

.why-list p {
  font-size: 0.88rem;
  color: rgba(215, 232, 207, 0.65);
  line-height: 1.7;
  margin: 0;
}

/* ── PROCESS ─────────────────────────────────────────────── */
.process {
  background: var(--cream-deep);
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
  position: relative;
}

@media (max-width: 760px) {
  .process-steps {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }
}

.process-step {
  position: relative;
}

.step-number {
  font-family: var(--font-display);
  font-size: 3.5rem;
  font-style: italic;
  color: var(--green-pale);
  line-height: 1;
  margin-bottom: var(--space-5);
  letter-spacing: -0.03em;
}

/* Connector line between steps */
.process-steps .process-step:not(:last-child) .step-connector {
  display: none;
}

@media (min-width: 761px) {
  .process-step:not(:last-child) .step-connector {
    display: block;
    position: absolute;
    top: 2rem;
    right: calc(-1 * var(--space-4));
    width: calc(var(--space-8) + var(--space-4));
    height: 1px;
    background: linear-gradient(90deg, var(--border-strong), var(--border));
    z-index: 1;
  }
}

.step-content {
  background: var(--warm-white);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: var(--space-8);
  height: 100%;
  transition: box-shadow var(--medium);
}

.step-content:hover { box-shadow: var(--shadow-sm); }

.step-content h3 {
  font-size: 1.1rem;
  margin-bottom: var(--space-3);
  color: var(--text-dark);
}

.step-content p {
  font-size: 0.92rem;
  color: var(--text-muted);
  line-height: 1.75;
}

/* ── CONTACT ─────────────────────────────────────────────── */
.contact {
  background: var(--warm-white);
}

.contact-inner {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: var(--space-16);
  align-items: start;
}

@media (max-width: 860px) {
  .contact-inner { grid-template-columns: 1fr; gap: var(--space-12); }
}

.contact-info .section-label { display: block; }
.contact-info h2 { margin-bottom: var(--space-4); }
.contact-info > p { color: var(--text-muted); margin-bottom: var(--space-8); }

.call-button {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  background: var(--green-deep);
  color: var(--cream);
  padding: var(--space-5) var(--space-6);
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: background var(--fast), box-shadow var(--fast), transform var(--fast);
  margin-bottom: var(--space-8);
  box-shadow: var(--shadow-sm);
}

.call-button:hover {
  background: var(--green-dark);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.call-button:focus-visible {
  outline: 3px solid var(--green-soft);
  outline-offset: 3px;
}

.call-icon {
  width: 46px;
  height: 46px;
  background: rgba(255,255,255,0.12);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.call-label {
  display: block;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(215, 232, 207, 0.75);
  margin-bottom: 2px;
}

.call-number {
  display: block;
  font-family: var(--font-display);
  font-size: 1.4rem;
  letter-spacing: -0.01em;
  color: #fff;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.contact-details p {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: 0.9rem;
  color: var(--text-muted);
}

.contact-details a {
  color: var(--green-mid);
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: text-decoration-color var(--fast);
}

.contact-details a:hover { text-decoration-color: var(--green-mid); }

/* Form */
.contact-form-wrap {
  background: var(--cream);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--space-10);
  box-shadow: var(--shadow-md);
}

@media (max-width: 480px) {
  .contact-form-wrap { padding: var(--space-6); }
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-5);
}

@media (max-width: 520px) {
  .form-row { grid-template-columns: 1fr; }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin-bottom: var(--space-5);
}

.form-group:last-of-type { margin-bottom: 0; }

.form-group label {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-dark);
  letter-spacing: 0.01em;
}

.form-group label span {
  color: var(--green-mid);
}

.form-group input,
.form-group select,
.form-group textarea {
  font-family: var(--font-body);
  font-size: 0.93rem;
  color: var(--text-dark);
  background: var(--warm-white);
  border: 1.5px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 0.7rem 0.95rem;
  transition: border-color var(--fast), box-shadow var(--fast);
  outline: none;
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-faint);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--green-mid);
  box-shadow: 0 0 0 3px rgba(74, 124, 89, 0.15);
}

.form-group input:invalid:not(:placeholder-shown),
.form-group select:invalid:not(:placeholder-shown) {
  border-color: #c0392b;
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.select-wrap {
  position: relative;
}

.select-wrap select {
  padding-right: 2.4rem;
  cursor: pointer;
}

.select-chevron {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--text-muted);
}

.form-error {
  color: #c0392b;
  font-size: 0.85rem;
  margin-bottom: var(--space-4);
  min-height: 1.2em;
}

.quote-form .btn-primary {
  margin-top: var(--space-6);
  font-size: 0.95rem;
  padding: 0.85rem 1.5rem;
}

.form-note {
  font-size: 0.77rem;
  color: var(--text-faint);
  margin-top: var(--space-3);
  text-align: center;
  line-height: 1.6;
}

/* ── FOOTER ──────────────────────────────────────────────── */
.site-footer {
  background: var(--green-deep);
  color: var(--cream);
}

.footer-inner {
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr;
  gap: var(--space-12);
  padding-top: var(--space-16);
  padding-bottom: var(--space-12);
}

@media (max-width: 760px) {
  .footer-inner { grid-template-columns: 1fr 1fr; gap: var(--space-8); padding-top: var(--space-12); }
  .footer-brand { grid-column: 1 / -1; }
}

@media (max-width: 480px) {
  .footer-inner { grid-template-columns: 1fr; }
}

.footer-brand .logo { margin-bottom: var(--space-4); }
.footer-brand .logo-text { color: var(--cream); }
.footer-brand p {
  font-size: 0.88rem;
  color: rgba(215, 232, 207, 0.55);
  line-height: 1.7;
}

.footer-col-label {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--green-soft);
  margin-bottom: var(--space-4);
}

.footer-links nav {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.footer-links a {
  font-size: 0.88rem;
  color: rgba(215, 232, 207, 0.65);
  transition: color var(--fast);
}

.footer-links a:hover { color: var(--cream); }
.footer-links a:focus-visible { outline: 1px solid var(--green-soft); border-radius: 2px; }

.footer-info p {
  font-size: 0.88rem;
  color: rgba(215, 232, 207, 0.65);
  line-height: 1.7;
  margin-bottom: var(--space-4);
}

.footer-hours { font-style: italic; }

.footer-legal {
  border-top: 1px solid rgba(120, 168, 106, 0.2);
  padding: var(--space-6) 0;
}

.footer-legal .container > p {
  font-size: 0.78rem;
  color: rgba(215, 232, 207, 0.4);
  line-height: 1.75;
  margin-bottom: var(--space-3);
}

.copyright {
  font-size: 0.76rem;
  color: rgba(215, 232, 207, 0.3) !important;
}

/* ── ACCESSIBILITY ───────────────────────────────────────── */
:focus-visible {
  outline: 3px solid var(--green-soft);
  outline-offset: 2px;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border: 0;
}

/* ── SCROLL ANIMATIONS ────────────────────────────────────── */
.fade-up {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s var(--ease), transform 0.6s var(--ease);
}

.fade-up.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.service-card:nth-child(2) { transition-delay: 0.08s; }
.service-card:nth-child(3) { transition-delay: 0.16s; }
.service-card:nth-child(4) { transition-delay: 0.24s; }
.service-card:nth-child(5) { transition-delay: 0.32s; }

/* ── PRINT ───────────────────────────────────────────────── */
@media print {
  .site-header, .hero-bg, .mobile-menu { display: none; }
  body { font-size: 12pt; color: #000; }
}

/* ── WORK GALLERY ─────────────────────────────────────────── */
.gallery {
  background: var(--cream);
  overflow: hidden;
}

/* Horizontal scrolling strip on all screen sizes,
   tall portrait cards sized to feel like phone shots */
.gallery-strip {
  display: flex;
  gap: var(--space-5);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding-bottom: var(--space-4);
  /* Hide scrollbar visually but keep it functional */
  scrollbar-width: thin;
  scrollbar-color: var(--border-strong) transparent;
  cursor: grab;
}

.gallery-strip:active { cursor: grabbing; }

.gallery-strip::-webkit-scrollbar {
  height: 4px;
}
.gallery-strip::-webkit-scrollbar-track {
  background: transparent;
}
.gallery-strip::-webkit-scrollbar-thumb {
  background: var(--border-strong);
  border-radius: 4px;
}

/* On wider screens, show all 5 cards without scrolling */
@media (min-width: 1100px) {
  .gallery-strip {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    overflow-x: visible;
    cursor: default;
  }
}

.gallery-item {
  flex: 0 0 clamp(180px, 38vw, 260px);
  scroll-snap-align: start;
  margin: 0;
}

@media (min-width: 1100px) {
  .gallery-item { flex: unset; }
}

.gallery-img-wrap {
  position: relative;
  width: 100%;
  /* Portrait aspect ratio matching iPhone vertical photos (9:16) */
  aspect-ratio: 9 / 16;
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--green-wash);
  border: 1px solid var(--border);
  cursor: pointer;
  transition: box-shadow var(--medium), transform var(--medium);
}

.gallery-img-wrap:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.gallery-img-wrap:focus-within {
  outline: 3px solid var(--green-soft);
  outline-offset: 2px;
}

.gallery-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.5s var(--ease);
  /* Hide until loaded; placeholder shows underneath */
  position: relative;
  z-index: 1;
}

.gallery-img-wrap:hover img {
  transform: scale(1.03);
}

/* Placeholder shown when image hasn't loaded yet */
.gallery-placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  background: var(--green-wash);
  color: var(--text-faint);
  z-index: 0;
  padding: var(--space-4);
  text-align: center;
}

.gallery-placeholder span {
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: var(--text-faint);
  line-height: 1.5;
}

/* Once image loads, hide placeholder */
.gallery-img-wrap img[src]:not([src=""]) ~ .gallery-placeholder {
  display: none;
}

/* Click-to-expand hint overlay on hover */
.gallery-img-wrap::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(26,46,26,0.5) 0%, transparent 50%);
  opacity: 0;
  transition: opacity var(--medium);
  z-index: 2;
  pointer-events: none;
  border-radius: var(--radius-md);
}

.gallery-img-wrap:hover::after { opacity: 1; }

/* ── LIGHTBOX ─────────────────────────────────────────────── */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(10, 18, 10, 0.94);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  animation: lightboxIn 0.2s var(--ease);
}

.lightbox[hidden] { display: none; }

@keyframes lightboxIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.lightbox-img-wrap {
  flex: 0 1 auto;
  max-height: 90svh;
  max-width: calc(100vw - 160px);
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 600px) {
  .lightbox-img-wrap {
    max-width: calc(100vw - 100px);
  }
}

.lightbox-img-wrap img {
  max-height: 90svh;
  max-width: 100%;
  width: auto;
  height: auto;
  border-radius: var(--radius-md);
  box-shadow: 0 24px 80px rgba(0,0,0,0.6);
  object-fit: contain;
  animation: lightboxImgIn 0.25s var(--ease);
}

@keyframes lightboxImgIn {
  from { opacity: 0; transform: scale(0.95); }
  to   { opacity: 1; transform: scale(1); }
}

.lightbox-close,
.lightbox-prev,
.lightbox-next {
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.15);
  color: #fff;
  border-radius: 50%;
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background var(--fast);
  flex-shrink: 0;
}

.lightbox-close:hover,
.lightbox-prev:hover,
.lightbox-next:hover {
  background: rgba(255,255,255,0.22);
}

.lightbox-close:focus-visible,
.lightbox-prev:focus-visible,
.lightbox-next:focus-visible {
  outline: 2px solid var(--green-soft);
  outline-offset: 3px;
}

.lightbox-close {
  position: absolute;
  top: var(--space-5);
  right: var(--space-5);
}

.lightbox-counter {
  position: absolute;
  bottom: var(--space-5);
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.8rem;
  color: rgba(255,255,255,0.45);
  letter-spacing: 0.08em;
  white-space: nowrap;
}