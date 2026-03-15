# Resume Site Refresh - Design Spec

**Date:** 2026-03-15
**Goal:** Make meetkrijn.dev impress Dutch cloud security recruiters and clearly signal Krijn's trajectory toward Cloud Security Engineer roles.

---

## Context

Krijn is an Azure Administrator at Speak B.V. targeting Cloud Security Engineer roles in the Netherlands. He has AZ-104 (earned Mar 2026), is actively studying AZ-500, and has 175+ hours of hands-on TryHackMe security labs. The current site is a clean Apple-minimal portfolio that undersells the security direction. This refresh repositions it for the Dutch cloud security job market without overstating experience he doesn't yet have.

---

## Approach Selected

**Approach 2 - Dark hero redesign + repositioning.** Targeted changes to visual identity, positioning copy, section structure, and new content sections. No framework changes - stays plain HTML + CSS + minimal JS.

---

## Section Order (top to bottom)

New order replaces the current layout:

1. Hero
2. Experience
3. Certifications
4. Skills
5. Homelab & Training *(new)*
6. My Story

**Rationale:** Recruiters scan for proof of work and cert trajectory first (Experience + Certifications), then confirm skills, then see initiative (Homelab), then read the human story. Story is not buried - the hero bio already telegraphs the career pivot, and motivated recruiters will scroll to it.

---

## 1. Visual Changes

### Dark Hero

The hero section gets a dark navy background. Everything below (Experience, Certifications, Skills, Homelab, Story) keeps the existing white/`#f5f5f7` alternating scheme.

**Hero background:**
```css
background: linear-gradient(160deg, #07101f 0%, #0d1b2a 50%, #0a1628 100%);
```

**Subtle radial accent overlays** (purely decorative, `pointer-events: none`):
```css
background:
  radial-gradient(ellipse 60% 40% at 50% 0%, rgba(56,189,248,0.07) 0%, transparent 70%),
  radial-gradient(ellipse 40% 30% at 80% 80%, rgba(99,102,241,0.05) 0%, transparent 60%);
```

### Nav

The sticky nav adapts to the dark hero - dark background color, light text. It remains dark as the user scrolls into white sections (deliberate design choice, common on security/tech sites).

```css
background: rgba(10, 15, 30, 0.92);
backdrop-filter: saturate(180%) blur(20px);
border-bottom: 1px solid rgba(255,255,255,0.08);
```

Nav text and links become light (`#f0f9ff` for name, `rgba(240,249,255,0.6)` for links). Download CV pill uses `#38bdf8` border and text. EN/NL toggle adapts to light text.

### Profile photo

Keep the existing `assets/profile.jpg`. Update the border:
```css
border: 2px solid rgba(56,189,248,0.4);
box-shadow: 0 0 0 4px rgba(56,189,248,0.08), 0 8px 32px rgba(0,0,0,0.4);
```

---

## 2. Hero Section Content

### Eyebrow (currently `.hero-eyebrow`)

```
Azure Administrator  |  Transitioning to Cloud Security
```

Color: `#38bdf8` (sky blue). `text-transform: uppercase; letter-spacing: 0.08em`. This is the honest, confident positioning - does not claim a title he doesn't hold, clearly signals direction.

### Name

No change. `Krijn Brugging` - large, white (`#f0f9ff`).

### Bio (currently `.hero-bio`)

```
Azure administrator managing Entra ID, Intune, and Microsoft 365.
AZ-104 certified, currently studying AZ-500. 175+ hours of hands-on
security labs. Building toward cloud security engineering.
```

Color: `rgba(240,249,255,0.65)`. Leads with what he does now, immediately states AZ-104 done + AZ-500 in progress, quantifies training, closes with the direction. Two sentences max.

### Contact links

Add TryHackMe alongside existing email and LinkedIn:

```
krijnbrugging@proton.me  ·  LinkedIn  ·  TryHackMe  ·  Havelte, Netherlands
```

TryHackMe URL: `https://tryhackme.com/p/T1MBER.W0LF`

All link colors: `#38bdf8`. Separator dots: `rgba(240,249,255,0.2)`. Location: `rgba(240,249,255,0.45)`.

---

## 3. Nav Updates

Add "Homelab" link between "Skills" and "Certifications":

```html
<li><a href="#homelab">Homelab</a></li>
```

Nav link order matches page section order: About, Experience, Certifications, Skills, Homelab, Story, Download CV, EN/NL

---

## 4. Skills Section Changes

### Security group moved to second position

New order:
1. Cloud & Azure
2. **Security** *(moved from 4th)*
3. Identity & Access
4. Networking
5. Security Tooling
6. Infrastructure
7. DevOps & CI/CD
8. Web & CMS
9. In Progress

### "In Progress" group updated

Add `AZ-500` as the first tag in the In Progress group:

```html
<span class="tag">AZ-500</span>
<span class="tag">Python</span>
<span class="tag">Terraform</span>
```

---

## 5. New Section: Homelab & Training

**Position:** After Skills, before My Story (page order: Hero, Experience, Certifications, Skills, Homelab, Story).
**ID:** `id="homelab"`
**Background:** `section-alt` (`#f5f5f7`) - same alternating scheme.
**Section title:** "Homelab & Training"

Two cards using the same `.card` style as Certifications (no `.cert-thumb` - homelab cards do not have a thumbnail image), in a 2-column grid (`minmax(340px, 1fr)`).

### Card HTML structure

Each homelab card follows this structure inside `.card`:

```html
<div class="card-header">           <!-- display:flex; gap:16px; align-items:flex-start -->
  <div class="card-icon">           <!-- 52x52px, border-radius:12px, gradient background -->
    <!-- emoji or character -->
  </div>
  <div>
    <h3 class="card-title">...</h3>
    <p class="card-subtitle">...</p> <!-- font-size:13px; color: var(--text-muted) -->
  </div>
</div>
<div class="stat-row">              <!-- display:flex; gap:24px; (TryHackMe card only) -->
  <div class="stat">
    <span class="stat-value">175+</span>   <!-- font-size:22px; font-weight:700; letter-spacing:-0.02em -->
    <span class="stat-label">Hours completed</span> <!-- font-size:12px; text-transform:uppercase; letter-spacing:0.05em -->
  </div>
  ...
</div>
<ul class="card-bullets">           <!-- padding-left:18px; font-size:14px; color:var(--text-muted); line-height:1.7 -->
  <li>...</li>
</ul>
<div class="card-tags">...</div>
<a class="card-link" href="...">Live site ↗</a>  <!-- existing .card-link style -->
```

The Pi5 card has no `.stat-row`. The TryHackMe card has a `.stat-row` between the header and the bullets.

Card icon backgrounds:
- Pi5: `background: linear-gradient(135deg, #0d1b2a, #1e3a5f);`
- TryHackMe: `background: linear-gradient(135deg, #1a0a0a, #2d1515);`

### Card 1: Self-Hosted Infrastructure

```
Title:    Self-Hosted Infrastructure
Subtitle: Raspberry Pi 5 homelab - live production

Bullets:
- Hosts meetkrijn.dev on Raspberry Pi 5 via Nginx reverse proxy
- Cloudflare proxy for DDoS protection, CDN, and SSL termination
- SSH hardening: key-only auth, custom port, fail2ban
- UFW firewall with minimal attack surface
- rsync-based deployment pipeline from local dev to Pi

Tags: Raspberry Pi 5, Nginx, Cloudflare, Linux, SSH Hardening, UFW
Link: "Live site ↗" → https://meetkrijn.dev
```

### Card 2: TryHackMe Security Labs

```
Title:    TryHackMe - Security Labs
Subtitle: Hands-on offensive and defensive training

Stats (prominent):
- 175+  Hours completed
- 3     Learning paths

Bullets:
- SOC Level 1 - SIEM, log analysis, threat intel, IR (87h)
- Security Engineer - secure infra, hardening, PKI (64h)
- DevSecOps - CI/CD security, container hardening (26h)

Tags: SOC, SIEM, Incident Response, Security Engineering, DevSecOps
Link: "TryHackMe profile ↗" → https://tryhackme.com/p/T1MBER.W0LF
```

Stats display: two `.stat` blocks side by side with large value (`22px bold`) and small uppercase label below.

---

## 6. Certifications Section Changes

### AZ-500 card - first in grid

New card added as the first item in `.cards-grid`:

```
Title:    Microsoft Azure Security Technologies
Desc:     Associate-level certification covering Azure security posture,
          identity protection, network security, data and application
          security, and security operations.

Badge:    "In Progress" (top-right, pill, blue)
Visual:   Blue glow border (box-shadow: 0 0 0 3px rgba(0,113,227,0.08),
          border-color: rgba(0,113,227,0.35))
Progress: Animated bar (pulsing, ~15% fill, gradient #0071e3 → #38bdf8)
          Label: "Currently studying - exam pending"
Tags:     AZ-500, 2026
```

No thumbnail image (cert not yet earned). In place of `.cert-thumb`, render a non-interactive `<div>` placeholder:

```html
<div class="cert-thumb-placeholder" aria-hidden="true">AZ</div>
```

```css
.cert-thumb-placeholder {
  width: 64px; height: 64px;
  border-radius: 8px;
  background: rgba(0,113,227,0.08);
  border: 1px solid rgba(0,113,227,0.25);
  display: flex; align-items: center; justify-content: center;
  font-size: 15px; font-weight: 700; color: #0071e3;
  flex-shrink: 0; align-self: flex-start;
}
```

Add `position: relative` to the `.card` rule in `style.css` - required for the absolutely-positioned badge to be contained within the card. This is harmless to all existing cert cards.

The "In Progress" badge CSS:
```css
position: absolute; top: 16px; right: 16px;
font-size: 11px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase;
color: #0071e3;
background: rgba(0,113,227,0.1);
border: 1px solid rgba(0,113,227,0.25);
padding: 3px 9px; border-radius: 980px;
```

### Pre-2023 experience dropdown

The existing `<details class="story-history">` block remains inside the Experience section, after the `.timeline`, unchanged. It does not move with the Story section.

---

## 7. NL Version (nl/index.html)

All changes must be mirrored in the Dutch version with translated content:

- Eyebrow: `Azure Administrator  |  Op weg naar Cloud Security`
- Bio: Dutch equivalent of the new English bio
- Homelab & Training section title: `Homelab & Training` (same, commonly used in NL)
- Card content: translated
- AZ-500 card badge: `Bezig` or `In uitvoering`
- AZ-500 progress label: `Momenteel aan het studeren - examen volgt`
- Section order: identical to EN version

---

## 8. Files Changed

| File | Change |
|------|--------|
| `style.css` | Dark nav + hero styles, new `.homelab` section styles, `.in-progress-badge`, `.progress-bar`, `.stat`, `.stat-value`, `.stat-label`, `.project-card` styles |
| `index.html` | All content changes above |
| `nl/index.html` | Mirrored changes in Dutch |

No new files needed. No new JS beyond what's in `assets/script.js`.

---

## Out of Scope

- GitHub profile (placeholder deferred until public repos exist)
- My Story section copy changes (current story is strong, no edits needed)
- CV PDF updates (separate future task)
- Dark mode toggle or JS-based nav scroll detection (YAGNI)
- Any framework, build tool, or third-party dependency

---

## Success Criteria

A Dutch cloud security recruiter landing on the site should:
1. See "Transitioning to Cloud Security" within 3 seconds
2. See AZ-104 certified + AZ-500 in progress within 10 seconds
3. See hands-on evidence (homelab + 175h TryHackMe) without digging
4. Feel the site belongs to someone serious about security, not just a generic IT admin
