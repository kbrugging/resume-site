# Resume Site Refresh Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refresh meetkrijn.dev with a dark navy hero, cloud security positioning, new Homelab & Training section, and AZ-500 in-progress cert card to attract Dutch cloud security recruiters.

**Architecture:** Three files only - `style.css` for all new/changed styles, `index.html` for EN content, `nl/index.html` for NL content. No new files, no build step, no new JS. Verification is visual: open in browser and check against the checklist in each task.

**Tech Stack:** Plain HTML5, CSS3, no frameworks, no preprocessors.

**Spec:** `docs/superpowers/specs/2026-03-15-resume-site-refresh-design.md`

---

## Chunk 1: CSS changes

### Task 1: Dark nav and hero styles

**Files:**
- Modify: `style.css`

The nav and hero currently use light/white styles. Replace them with dark navy values. All other sections (Experience, Certifications, Skills, Homelab, Story) are unaffected.

- [ ] **Step 1: Update `.site-nav` background and border**

In `style.css`, find the `.site-nav` rule (line 58) and replace the `background` and `border-bottom`:

```css
.site-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(10, 15, 30, 0.92);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
```

- [ ] **Step 2: Update nav text colors**

Replace the `.nav-name`, `.nav-name:hover`, `.nav-links a`, `.nav-links a:hover` rules:

```css
.nav-name {
  font-weight: 600;
  font-size: 17px;
  color: #f0f9ff;
}

.nav-name:hover {
  text-decoration: none;
  color: #38bdf8;
}

.nav-links a {
  font-size: 14px;
  color: rgba(240, 249, 255, 0.6);
  transition: color 0.15s;
}

.nav-links a:hover {
  color: #f0f9ff;
  text-decoration: none;
}
```

- [ ] **Step 3a: Update nav CTA pill**

In `style.css`, find and replace the `.nav-links .nav-cta` rule (around line 104):

```css
.nav-links .nav-cta {
  font-size: 14px;
  font-weight: 500;
  color: #38bdf8;
  border: 1px solid rgba(56, 189, 248, 0.4);
  padding: 6px 14px;
  border-radius: 980px;
  transition: background 0.15s, color 0.15s;
}
```

- [ ] **Step 3b: Update lang toggle colors**

Find and replace the `.lang-active` and `.lang-sep` rules (around line 121):

```css
.lang-active {
  font-weight: 600;
  color: #f0f9ff;
}

.lang-sep {
  color: rgba(255, 255, 255, 0.2);
}
```

- [ ] **Step 3c: Update nav CTA hover**

Find and replace the `.nav-links .nav-cta:hover` rule (around line 130, after `.lang-sep`):

```css
.nav-links .nav-cta:hover {
  background: #38bdf8;
  color: #07101f;
}
```

- [ ] **Step 3d: Add lang link colors**

Append after the `.nav-links .nav-cta:hover` rule:

```css
.nav-lang a {
  color: rgba(240, 249, 255, 0.4);
  text-decoration: none;
}

.nav-lang a:hover {
  color: #f0f9ff;
}
```

- [ ] **Step 4: Update hero background and overlay**

Find the `.hero` rule (line 142) and replace it:

```css
.hero {
  padding: 100px 0 80px;
  background: linear-gradient(160deg, #07101f 0%, #0d1b2a 50%, #0a1628 100%);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 40% at 50% 0%, rgba(56, 189, 248, 0.07) 0%, transparent 70%),
    radial-gradient(ellipse 40% 30% at 80% 80%, rgba(99, 102, 241, 0.05) 0%, transparent 60%);
  pointer-events: none;
}
```

- [ ] **Step 5: Update hero-identity to vertical centered layout**

Find and replace the `.hero-identity` rule (currently a flex row - photo left, title right):

```css
.hero-identity {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 32px;
}
```

Also find and replace the `.hero-title` rule (currently `flex: none` - remove that and add centering):

```css
.hero-title {
  text-align: center;
}
```

- [ ] **Step 6: Update hero text and link colors**

Find and replace `.hero-eyebrow`, `.hero-name`, `.hero-bio`, `.hero-links` related rules:

```css
.hero-eyebrow {
  font-size: 14px;
  color: #38bdf8;
  font-weight: 600;
  margin-bottom: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-name {
  font-size: clamp(52px, 8vw, 80px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.05;
  color: #f0f9ff;
  margin-bottom: 24px;
}

.hero-bio {
  font-size: 21px;
  color: rgba(240, 249, 255, 0.65);
  max-width: 560px;
  line-height: 1.5;
  margin: 0 auto 32px;
  text-align: center;
}

.hero-sep {
  color: rgba(240, 249, 255, 0.2);
}

.hero-location {
  font-size: 15px;
  color: rgba(240, 249, 255, 0.45);
}
```

For `.hero-links`, add an `a` color override (the existing rule uses `var(--accent)` via inheritance, which won't apply inside the dark hero):

```css
.hero-links a {
  color: #38bdf8;
}
```

- [ ] **Step 7: Update hero photo border for dark background**

Find `.hero-photo` and update the border and box-shadow:

```css
.hero-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
  flex-shrink: 0;
  border: 2px solid rgba(56, 189, 248, 0.4);
  box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.08), 0 8px 32px rgba(0, 0, 0, 0.4);
}
```

- [ ] **Step 8: Update mobile hero rule**

Find the `@media (max-width: 640px)` hero block and update `.hero-identity` inside it - remove `flex-direction: column` override (it's now always column) and keep the padding:

```css
@media (max-width: 640px) {
  .hero {
    padding: 64px 0 48px;
  }

  .hero-identity {
    align-items: center;
  }
}
```

- [ ] **Step 9: Verify in browser**

Open `index.html` directly in a browser. Check:
- Nav is dark navy with light text
- "Download CV" pill has sky-blue border
- Hero section is dark navy gradient
- Profile photo has blue ring border
- Name is white/near-white
- Eyebrow text is sky blue and uppercase
- Bio text is muted light (not pure white)
- Contact links are sky blue
- Sections below hero (Story, Experience, Skills, Certifications) are still white/grey - unaffected

- [ ] **Step 10: Commit**

```bash
cd /home/krijn/Claude/resume-site
git add style.css
git commit -m "style: dark navy nav and hero for cloud security positioning"
```

---

### Task 2: New component CSS (in-progress badge, homelab cards)

**Files:**
- Modify: `style.css`

Add all new CSS classes needed for the AZ-500 in-progress card and the Homelab & Training section. Append these to the end of `style.css`.

- [ ] **Step 1: Add `position: relative` to existing `.card` rule**

Find the `.card` rule (around line 364) and add `position: relative`:

```css
.card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
  position: relative;
}
```

- [ ] **Step 2: Append in-progress card styles**

Append to the end of `style.css`:

```css
/* In-progress cert card */
.card.in-progress {
  border-color: rgba(0, 113, 227, 0.35);
  box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.08);
}

.in-progress-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--accent);
  background: rgba(0, 113, 227, 0.1);
  border: 1px solid rgba(0, 113, 227, 0.25);
  padding: 3px 9px;
  border-radius: 980px;
}

.cert-thumb-placeholder {
  width: 64px;
  height: 64px;
  border-radius: 8px;
  background: rgba(0, 113, 227, 0.08);
  border: 1px solid rgba(0, 113, 227, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 700;
  color: var(--accent);
  flex-shrink: 0;
  align-self: flex-start;
}

.progress-bar-wrap {
  background: rgba(0, 113, 227, 0.08);
  border-radius: 980px;
  height: 5px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  width: 15%;
  background: linear-gradient(90deg, #0071e3, #38bdf8);
  border-radius: 980px;
  animation: pulse-progress 2s ease-in-out infinite alternate;
}

@keyframes pulse-progress {
  from { opacity: 0.7; }
  to { opacity: 1; }
}

.progress-label {
  font-size: 12px;
  color: var(--text-muted);
}
```

- [ ] **Step 3: Append homelab card styles**

Append to the end of `style.css`:

```css
/* Homelab & Training cards */
.card-icon-pi {
  background: linear-gradient(135deg, #0d1b2a, #1e3a5f);
}

.card-icon-thm {
  background: linear-gradient(135deg, #1a0a0a, #2d1515);
}

.progress-section {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.card-header {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.card-icon {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  flex-shrink: 0;
}

.card-subtitle {
  font-size: 13px;
  color: var(--text-muted);
  margin-top: 2px;
}

.stat-row {
  display: flex;
  gap: 24px;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.stat-value {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text);
}

.stat-label {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
}

.card-bullets {
  padding-left: 18px;
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.7;
}

.card-bullets li + li {
  margin-top: 2px;
}
```

- [ ] **Step 4: Verify in browser**

Open `index.html` in browser. No visible change expected yet (the new classes aren't used in HTML yet). Check browser devtools console shows no CSS errors.

- [ ] **Step 5: Commit**

```bash
cd /home/krijn/Claude/resume-site
git add style.css
git commit -m "style: add in-progress badge, homelab card, and stat component styles"
```

---

## Chunk 2: EN index.html changes

### Task 3: Update nav links

**Files:**
- Modify: `index.html`

The nav needs: new link order matching page sections, "Homelab" link added.

- [ ] **Step 1: Replace the `<ul class="nav-links">` block**

Find the `<ul class="nav-links">` in `index.html` (lines 24-38) and replace it entirely:

```html
      <ul class="nav-links">
        <li><a href="#hero">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Certifications</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#homelab">Homelab</a></li>
        <li><a href="#story">Story</a></li>
        <li>
          <a href="assets/cv-en.pdf" class="nav-cta" download>Download CV</a>
        </li>
        <li class="nav-lang">
          <span class="lang-active">EN</span>
          <span class="lang-sep">/</span>
          <a href="nl/">NL</a>
        </li>
      </ul>
```

- [ ] **Step 2: Verify in browser**

Open `index.html`. Check nav shows: About, Experience, Certifications, Skills, Homelab, Story, Download CV, EN/NL. Clicking "Homelab" should scroll to nothing yet (anchor doesn't exist) - that's expected at this stage.

- [ ] **Step 3: Commit**

```bash
cd /home/krijn/Claude/resume-site
git add index.html
git commit -m "feat: update EN nav link order and add Homelab link"
```

---

### Task 4: Update hero content

**Files:**
- Modify: `index.html`

Update eyebrow text, hero bio, and add TryHackMe to contact links. Also update page `<title>` and meta description to match new positioning.

- [ ] **Step 1: Update `<title>` and meta tags**

Find and replace lines 6-17 in `index.html` (from `<meta name="description"` through `<title>`). Do NOT touch line 18 (`<link rel="stylesheet" href="style.css?v=4">`).

```html
  <meta name="description" content="Krijn Brugging, Azure Administrator transitioning to cloud security. AZ-104 certified, studying AZ-500. Security+, Network+, 175+ hours hands-on security training.">

  <!-- Open Graph -->
  <meta property="og:title" content="Krijn Brugging | Azure Administrator - Transitioning to Cloud Security">
  <meta property="og:description" content="Azure Administrator managing Entra ID, Intune, and Microsoft 365. AZ-104 certified, studying AZ-500. Building toward cloud security engineering in the Netherlands.">
  <meta property="og:url" content="https://meetkrijn.dev">
  <meta property="og:type" content="website">

  <!-- Canonical -->
  <link rel="canonical" href="https://meetkrijn.dev">

  <title>Krijn Brugging | Azure Administrator - Transitioning to Cloud Security</title>
```

- [ ] **Step 2: Update hero eyebrow**

Find `<p class="hero-eyebrow">IT Administrator | Azure &amp; Cloud Infrastructure</p>` and replace:

```html
            <p class="hero-eyebrow">Azure Administrator &nbsp;|&nbsp; Transitioning to Cloud Security</p>
```

- [ ] **Step 3: Update hero bio**

Find the `<p class="hero-bio">` block (lines 51-55) and replace:

```html
        <p class="hero-bio">
          Azure administrator managing Entra ID, Intune, and Microsoft 365.
          AZ-104 certified, currently studying AZ-500. 175+ hours of hands-on
          security labs. Building toward cloud security engineering.
        </p>
```

- [ ] **Step 4: Add TryHackMe to hero links**

Find the `<div class="hero-links">` block (lines 57-63) and replace:

```html
        <div class="hero-links">
          <a href="mailto:krijnbrugging@proton.me">krijnbrugging@proton.me</a>
          <span class="hero-sep">·</span>
          <a href="https://www.linkedin.com/in/krijn-brugging-920168384" target="_blank" rel="noopener">LinkedIn</a>
          <span class="hero-sep">·</span>
          <a href="https://tryhackme.com/p/T1MBER.W0LF" target="_blank" rel="noopener">TryHackMe</a>
          <span class="hero-sep">·</span>
          <span class="hero-location">Havelte, Netherlands</span>
        </div>
```

- [ ] **Step 5: Verify in browser**

Open `index.html`. Check:
- Page title in browser tab reads "Krijn Brugging | Azure Administrator - Transitioning to Cloud Security"
- Eyebrow text is "AZURE ADMINISTRATOR | TRANSITIONING TO CLOUD SECURITY" in sky blue, uppercase
- Bio is 3 short lines focused on AZ-104/AZ-500/175h
- Hero links show: email, LinkedIn, TryHackMe, Havelte, Netherlands - all in sky blue

- [ ] **Step 6: Commit**

```bash
cd /home/krijn/Claude/resume-site
git add index.html
git commit -m "feat: update EN hero positioning to cloud security, add TryHackMe link"
```

---

### Task 5: Reorder sections and fix section-alt classes

**Files:**
- Modify: `index.html`

Current order: Hero, Story, Experience, Skills, Certifications
New order: Hero, Experience, Certifications, Skills, Homelab (new - Task 7), Story

Section-alt adjustments for correct visual alternation:
- Experience: remove `section-alt` (was grey, becomes white after dark hero)
- Certifications: keep `section-alt` (grey)
- Skills: keep no `section-alt` (white)
- Story: keep no `section-alt` (white) - now last

- [ ] **Step 1: Reorder the sections in `<main>`**

The `<main>` block currently contains sections in this order: `#hero`, `#story`, `#experience`, `#skills`, `#projects`. Use the following anchor strings to identify section boundaries and cut/paste them into the new order.

Section start/end anchors:
- `#story` starts at: `<section id="story" class="section">` and ends at its `</section>` before `<section id="experience"`
- `#experience` starts at: `<section id="experience" class="section section-alt">` - change class to `<section id="experience" class="section">` (remove `section-alt`)
- `#skills` starts at: `<section id="skills" class="section">`
- `#projects` starts at: `<section id="projects" class="section section-alt">`

New order inside `<main>`:

```
1. #hero      (unchanged)
2. #experience  (class="section"  - section-alt removed)
3. #projects    (class="section section-alt"  - unchanged)
4. #skills      (class="section"  - unchanged)
5. [Homelab section inserted in Task 7]
6. #story       (class="section"  - unchanged, moved to last)
```

The `<details class="story-history">` block stays inside `#experience`, after the `.timeline` closing `</div>`, unchanged.

- [ ] **Step 2: Verify section order and section-alt in browser**

Open `index.html`. Scroll through the page and check:
- After the dark hero: Experience section is white background
- Certifications section is grey (`#f5f5f7`)
- Skills section is white
- Story section is last and white
- The pre-2023 dropdown (`<details>`) is still visible in the Experience section

- [ ] **Step 3: Commit**

```bash
cd /home/krijn/Claude/resume-site
git add index.html
git commit -m "feat: reorder EN sections (Experience, Certifications, Skills, Story) for recruiter scan flow"
```

---

### Task 6: Update Skills section

**Files:**
- Modify: `index.html`

Move Security group to second position. Add AZ-500 to In Progress group.

- [ ] **Step 1: Reorder skill groups inside `.skills-grid`**

Find the `<div class="skills-grid">` inside `#skills`. The current order is: Cloud & Azure, Identity & Access, Networking, Security, Security Tooling, Infrastructure, DevOps & CI/CD, Web & CMS, In Progress.

Reorder so Security is second:

```
Cloud & Azure → Security → Identity & Access → Networking → Security Tooling → Infrastructure → DevOps & CI/CD → Web & CMS → In Progress
```

Move the entire `<div class="skill-group">` block with `<h3>Security</h3>` to be the second group (directly after Cloud & Azure).

- [ ] **Step 2: Add AZ-500 to In Progress group**

Find the In Progress `<div class="skill-group">` and update the tags:

```html
        <div class="skill-group">
          <h3 class="skill-group-title">In Progress</h3>
          <div class="skill-tags">
            <span class="tag">AZ-500</span>
            <span class="tag">Python</span>
            <span class="tag">Terraform</span>
          </div>
        </div>
```

- [ ] **Step 3: Verify in browser**

Open `index.html` and scroll to Skills. Check:
- First group: Cloud & Azure
- Second group: Security (with Defender, Threat Detection, Log Analysis, etc.)
- In Progress shows AZ-500 as first tag

- [ ] **Step 4: Commit**

```bash
cd /home/krijn/Claude/resume-site
git add index.html
git commit -m "feat: move Security skills to second position, add AZ-500 to In Progress"
```

---

### Task 7: Add Homelab & Training section

**Files:**
- Modify: `index.html`

Insert the new `#homelab` section between `#skills` and `#story`.

- [ ] **Step 1: Insert the Homelab & Training section**

After the closing `</section>` of `#skills` and before the opening `<section id="story"`, insert:

```html
  <section id="homelab" class="section section-alt">
    <div class="container">
      <h2 class="section-title">Homelab &amp; Training</h2>
      <div class="cards-grid">

        <div class="card">
          <div class="card-header">
            <div class="card-icon card-icon-pi">&#128421;</div>
            <div>
              <h3 class="card-title">Self-Hosted Infrastructure</h3>
              <p class="card-subtitle">Raspberry Pi 5 homelab - live production</p>
            </div>
          </div>
          <ul class="card-bullets">
            <li>Hosts meetkrijn.dev on Raspberry Pi 5 via Nginx reverse proxy</li>
            <li>Cloudflare proxy for DDoS protection, CDN, and SSL termination</li>
            <li>SSH hardening: key-only auth, custom port, fail2ban</li>
            <li>UFW firewall with minimal attack surface</li>
            <li>rsync-based deployment pipeline from local dev to Pi</li>
          </ul>
          <div class="card-tags">
            <span class="tag">Raspberry Pi 5</span>
            <span class="tag">Nginx</span>
            <span class="tag">Cloudflare</span>
            <span class="tag">Linux</span>
            <span class="tag">SSH Hardening</span>
            <span class="tag">UFW</span>
          </div>
          <a href="https://meetkrijn.dev" class="card-link" target="_blank" rel="noopener">Live site &#8599;</a>
        </div>

        <div class="card">
          <div class="card-header">
            <div class="card-icon card-icon-thm">&#128737;</div>
            <div>
              <h3 class="card-title">TryHackMe - Security Labs</h3>
              <p class="card-subtitle">Hands-on offensive and defensive training</p>
            </div>
          </div>
          <div class="stat-row">
            <div class="stat">
              <span class="stat-value">175+</span>
              <span class="stat-label">Hours completed</span>
            </div>
            <div class="stat">
              <span class="stat-value">3</span>
              <span class="stat-label">Learning paths</span>
            </div>
          </div>
          <ul class="card-bullets">
            <li>SOC Level 1 - SIEM, log analysis, threat intel, IR (87h)</li>
            <li>Security Engineer - secure infra, hardening, PKI (64h)</li>
            <li>DevSecOps - CI/CD security, container hardening (26h)</li>
          </ul>
          <div class="card-tags">
            <span class="tag">SOC</span>
            <span class="tag">SIEM</span>
            <span class="tag">Incident Response</span>
            <span class="tag">Security Engineering</span>
            <span class="tag">DevSecOps</span>
          </div>
          <a href="https://tryhackme.com/p/T1MBER.W0LF" class="card-link" target="_blank" rel="noopener">TryHackMe profile &#8599;</a>
        </div>

      </div>
    </div>
  </section>
```

- [ ] **Step 2: Verify in browser**

Scroll to the Homelab & Training section. Check:
- Section appears between Skills and Story with grey background
- Pi5 card has dark navy icon, 5 bullet points, 6 tags, "Live site" link
- TryHackMe card has dark red icon, "175+" and "3" stats side by side, 3 bullet points, 5 tags, "TryHackMe profile" link
- Nav "Homelab" link now scrolls to this section
- Card hover lifts (transform translateY) as with cert cards

- [ ] **Step 3: Commit**

```bash
cd /home/krijn/Claude/resume-site
git add index.html
git commit -m "feat: add Homelab & Training section with Pi5 and TryHackMe cards"
```

---

### Task 8: Add AZ-500 in-progress cert card

**Files:**
- Modify: `index.html`

Add the AZ-500 "In Progress" card as the first item in the Certifications grid.

- [ ] **Step 1: Insert AZ-500 card as first item in `.cards-grid`**

Find `<div class="cards-grid">` inside `#projects`. Insert the following as the very first child (before the existing AZ-104 card):

```html
        <div class="card in-progress">
          <span class="in-progress-badge">In Progress</span>
          <div class="cert-thumb-placeholder" aria-hidden="true">AZ</div>
          <h3 class="card-title">Microsoft Azure Security Technologies</h3>
          <p class="card-desc">
            Associate-level certification covering Azure security posture, identity protection,
            network security, data and application security, and security operations.
          </p>
          <div class="progress-section">
            <div class="progress-bar-wrap">
              <div class="progress-bar"></div>
            </div>
            <span class="progress-label">Currently studying - exam pending</span>
          </div>
          <div class="card-tags">
            <span class="tag">AZ-500</span>
            <span class="tag">2026</span>
          </div>
        </div>
```

- [ ] **Step 2: Verify in browser**

Scroll to Certifications. Check:
- AZ-500 card is first in the grid
- "In Progress" badge appears top-right inside the card
- Blue "AZ" placeholder appears where the cert thumbnail would be
- Animated pulsing progress bar is visible
- "Currently studying - exam pending" label is below the bar
- Card has a subtle blue glow border distinguishing it from the other cards
- Card hover still works (lift effect)

- [ ] **Step 3: Commit**

```bash
cd /home/krijn/Claude/resume-site
git add index.html
git commit -m "feat: add AZ-500 in-progress cert card as first in Certifications grid"
```

---

## Chunk 3: NL nl/index.html changes

### Task 9: Mirror all changes in Dutch

**Files:**
- Modify: `nl/index.html`

Apply the same structural changes as Chunks 1 and 2 to the NL version, with Dutch translations. The NL file uses `../style.css` so all CSS changes from Chunk 1 already apply.

- [ ] **Step 1: Update NL meta tags and title**

Find lines 6-17 in `nl/index.html` and replace:

```html
  <meta name="description" content="Krijn Brugging, Azure Administrator op weg naar cloud security. AZ-104 gecertificeerd, bezig met AZ-500. Security+, Network+, 175+ uur praktijkgerichte security training.">

  <!-- Open Graph -->
  <meta property="og:title" content="Krijn Brugging | Azure Administrator - Op weg naar Cloud Security">
  <meta property="og:description" content="Azure Administrator met beheer van Entra ID, Intune en Microsoft 365. AZ-104 gecertificeerd, bezig met AZ-500. Gericht op cloud security engineering in Nederland.">
  <meta property="og:url" content="https://meetkrijn.dev/nl/">
  <meta property="og:type" content="website">

  <!-- Canonical -->
  <link rel="canonical" href="https://meetkrijn.dev/nl/">

  <title>Krijn Brugging | Azure Administrator - Op weg naar Cloud Security</title>
```

- [ ] **Step 2: Update NL nav links**

Replace the `<ul class="nav-links">` in `nl/index.html`:

```html
      <ul class="nav-links">
        <li><a href="#hero">Over mij</a></li>
        <li><a href="#experience">Ervaring</a></li>
        <li><a href="#projects">Certificaten</a></li>
        <li><a href="#skills">Vaardigheden</a></li>
        <li><a href="#homelab">Homelab</a></li>
        <li><a href="#story">Verhaal</a></li>
        <li>
          <a href="../assets/cv-nl.pdf" class="nav-cta" download>Download CV</a>
        </li>
        <li class="nav-lang">
          <a href="../">EN</a>
          <span class="lang-sep">/</span>
          <span class="lang-active">NL</span>
        </li>
      </ul>
```

- [ ] **Step 3: Update NL hero eyebrow and bio**

Replace the eyebrow:

```html
            <p class="hero-eyebrow">Azure Administrator &nbsp;|&nbsp; Op weg naar Cloud Security</p>
```

Replace the bio:

```html
        <p class="hero-bio">
          Azure administrator met beheer van Entra ID, Intune en Microsoft 365.
          AZ-104 gecertificeerd, bezig met AZ-500. 175+ uur praktijkgerichte
          security labs. Gericht op een carriere in cloud security engineering.
        </p>
```

- [ ] **Step 4: Add TryHackMe to NL hero links**

Replace `<div class="hero-links">` in `nl/index.html`:

```html
        <div class="hero-links">
          <a href="mailto:krijnbrugging@proton.me">krijnbrugging@proton.me</a>
          <span class="hero-sep">·</span>
          <a href="https://www.linkedin.com/in/krijn-brugging-920168384" target="_blank" rel="noopener">LinkedIn</a>
          <span class="hero-sep">·</span>
          <a href="https://tryhackme.com/p/T1MBER.W0LF" target="_blank" rel="noopener">TryHackMe</a>
          <span class="hero-sep">·</span>
          <span class="hero-location">Havelte, Nederland</span>
        </div>
```

- [ ] **Step 5: Reorder NL sections and fix section-alt**

Reorder `<main>` sections in `nl/index.html` to: Hero, Experience (remove `section-alt`), Certifications (keep `section-alt`), Skills, Homelab (new), Story. Same logic as Task 5 for EN.

- [ ] **Step 6: Update NL Skills section**

Move the Security group (`<h3>Security</h3>`) to be second in the grid (after Cloud & Azure). Add AZ-500 to the In Progress group:

```html
        <div class="skill-group">
          <h3 class="skill-group-title">In Ontwikkeling</h3>
          <div class="skill-tags">
            <span class="tag">AZ-500</span>
            <span class="tag">Python</span>
            <span class="tag">Terraform</span>
          </div>
        </div>
```

- [ ] **Step 7: Insert NL Homelab & Training section**

After `#skills` closing tag, before `#story`, insert:

```html
  <section id="homelab" class="section section-alt">
    <div class="container">
      <h2 class="section-title">Homelab &amp; Training</h2>
      <div class="cards-grid">

        <div class="card">
          <div class="card-header">
            <div class="card-icon card-icon-pi">&#128421;</div>
            <div>
              <h3 class="card-title">Zelfgehoste Infrastructuur</h3>
              <p class="card-subtitle">Raspberry Pi 5 homelab - live productie</p>
            </div>
          </div>
          <ul class="card-bullets">
            <li>Hosts meetkrijn.dev op Raspberry Pi 5 via Nginx reverse proxy</li>
            <li>Cloudflare proxy voor DDoS-bescherming, CDN en SSL-terminatie</li>
            <li>SSH-hardening: alleen sleutelgebaseerde auth, aangepaste poort, fail2ban</li>
            <li>UFW firewall met minimaal aanvalsoppervlak</li>
            <li>rsync-gebaseerde deployment pipeline van lokale dev naar Pi</li>
          </ul>
          <div class="card-tags">
            <span class="tag">Raspberry Pi 5</span>
            <span class="tag">Nginx</span>
            <span class="tag">Cloudflare</span>
            <span class="tag">Linux</span>
            <span class="tag">SSH Hardening</span>
            <span class="tag">UFW</span>
          </div>
          <a href="https://meetkrijn.dev" class="card-link" target="_blank" rel="noopener">Live site &#8599;</a>
        </div>

        <div class="card">
          <div class="card-header">
            <div class="card-icon card-icon-thm">&#128737;</div>
            <div>
              <h3 class="card-title">TryHackMe - Security Labs</h3>
              <p class="card-subtitle">Praktijkgerichte offensieve en defensieve training</p>
            </div>
          </div>
          <div class="stat-row">
            <div class="stat">
              <span class="stat-value">175+</span>
              <span class="stat-label">Uur voltooid</span>
            </div>
            <div class="stat">
              <span class="stat-value">3</span>
              <span class="stat-label">Leerpaden</span>
            </div>
          </div>
          <ul class="card-bullets">
            <li>SOC Level 1 - SIEM, loganalyse, dreigingsintelligentie, IR (87u)</li>
            <li>Security Engineer - veilige infra, hardening, PKI (64u)</li>
            <li>DevSecOps - CI/CD security, containerbeveiliging (26u)</li>
          </ul>
          <div class="card-tags">
            <span class="tag">SOC</span>
            <span class="tag">SIEM</span>
            <span class="tag">Incidentrespons</span>
            <span class="tag">Security Engineering</span>
            <span class="tag">DevSecOps</span>
          </div>
          <a href="https://tryhackme.com/p/T1MBER.W0LF" class="card-link" target="_blank" rel="noopener">TryHackMe profiel &#8599;</a>
        </div>

      </div>
    </div>
  </section>
```

- [ ] **Step 8: Insert NL AZ-500 cert card**

In `nl/index.html`, find `<div class="cards-grid">` inside `#projects` and insert as first child:

```html
        <div class="card in-progress">
          <span class="in-progress-badge">Bezig</span>
          <div class="cert-thumb-placeholder" aria-hidden="true">AZ</div>
          <h3 class="card-title">Microsoft Azure Security Technologies</h3>
          <p class="card-desc">
            Associate-certificering voor Azure-beveiligingsbeleid, identiteitsbeveiliging,
            netwerkbeveiliging, gegevens- en applicatiebeveiliging en beveiligingsoperaties.
          </p>
          <div class="progress-section">
            <div class="progress-bar-wrap">
              <div class="progress-bar"></div>
            </div>
            <span class="progress-label">Momenteel aan het studeren - examen volgt</span>
          </div>
          <div class="card-tags">
            <span class="tag">AZ-500</span>
            <span class="tag">2026</span>
          </div>
        </div>
```

- [ ] **Step 9: Verify NL version in browser**

Open `nl/index.html`. Check:
- Dark nav and hero render correctly (same CSS as EN)
- Eyebrow reads "AZURE ADMINISTRATOR | OP WEG NAAR CLOUD SECURITY"
- TryHackMe link present in hero
- Section order: Experience, Certificaten, Vaardigheden, Homelab & Training, Mijn Verhaal
- "Bezig" badge on AZ-500 card
- Dutch translations throughout Homelab & Training section

- [ ] **Step 10: Commit**

```bash
cd /home/krijn/Claude/resume-site
git add nl/index.html
git commit -m "feat: mirror all EN refresh changes in NL version with Dutch translations"
```

---

## Final verification and deploy

- [ ] **Step 1: Full cross-browser visual check**

Open both `index.html` and `nl/index.html` in browser. Walk through each section top to bottom against this checklist:

**EN:**
- [ ] Nav is dark, all links visible and correctly ordered
- [ ] Hero: dark navy background, sky-blue eyebrow uppercase, white name, muted bio, sky-blue links
- [ ] Profile photo has blue ring
- [ ] Experience: white background, timeline intact, pre-2023 dropdown present
- [ ] Certifications: grey background, AZ-500 card first with badge+progress bar
- [ ] Skills: white background, Security is second group, AZ-500 in In Progress
- [ ] Homelab & Training: grey background, both cards with icons, stats, bullets, links
- [ ] Story: white background, last section, all three paragraphs intact
- [ ] Footer: visible, copyright + email

**NL:** same checks, Dutch translations correct

- [ ] **Step 2: Check all links open correctly**

- Email links (`mailto:`) work
- LinkedIn link opens correctly
- TryHackMe link opens `https://tryhackme.com/p/T1MBER.W0LF`
- "Live site" link on Pi5 card opens `https://meetkrijn.dev`
- "Download CV" downloads the PDF
- EN/NL toggle navigates between versions
- Cert lightbox opens when clicking cert thumbnails (existing JS still works)

- [ ] **Step 3: Deploy to Pi**

From user's terminal (requires SSH agent running):

```bash
eval $(ssh-agent -s) && ssh-add ~/.ssh/id_ed25519
rsync -avz --delete ~/Claude/resume-site/ admin-pi@192.168.2.16:/var/www/resume/ -e 'ssh -p 2222'
```

- [ ] **Step 4: Verify live at https://meetkrijn.dev**

Open the live site and repeat the visual checklist. Check both `/` (EN) and `/nl/` (NL).

- [ ] **Step 5: Final commit**

```bash
cd /home/krijn/Claude/resume-site
git add .
git commit -m "chore: resume site refresh complete - cloud security positioning, dark hero, homelab section"
```
