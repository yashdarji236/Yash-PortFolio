Paste this directly into your AI builder. Every section has exact text, colors, and font rules.

---

## DESIGN RULES THAT APPLY TO ALL CONTENT

```
Font family:   DM Sans (Google Fonts) — load weights 400, 700, 800
Display text:  font-weight: 800, text-transform: UPPERCASE, letter-spacing: -0.03em, line-height: 0.92
Body text:     font-weight: 400, line-height: 1.65
Labels:        font-weight: 500, text-transform: UPPERCASE, letter-spacing: 0.15em, font-size: 12px

Color palette:
  Page background:  #F2F0EB  (warm off-white / cream)
  Primary text:     #1A1A1A  (near-black)
  Muted text:       #555555
  Forest green:     #1B4332  (dark sections background)
  Lime green:       #C8F060  (about section bg, skills section bg, contact section bg)
  White:            #FFFFFF
  Border:           rgba(26,26,26,0.15)
```

---

## SECTION 1 — NAVBAR

```
Background:     Transparent → #F2F0EB on scroll (after 80px)
Border-bottom:  none → 1px solid rgba(26,26,26,0.15) on scroll

LEFT:
  Text:   "ARJUN."
  Style:  font-size 20px, font-weight 800, color #1A1A1A, letter-spacing -0.02em

CENTER (desktop only, hide on mobile):
  Links:  Work  |  About  |  Skills  |  Contact
  Style:  font-size 15px, font-weight 500, color #1A1A1A
  Hover:  underline slides in from left

RIGHT:
  Button text:  "HIRE ME ↗"
  Style:        border: 1.5px solid #1A1A1A, border-radius 999px,
                padding 10px 22px, font-size 14px, font-weight 600,
                background transparent
  Hover:        background #1A1A1A, color #FFFFFF
```

---

## SECTION 2 — HERO

```
Background:  #F2F0EB
Height:      100vh

HEADLINE — 3 lines, massive display text:
  Line 1:  "FULL-STACK"
  Line 2:  "& UI"
  Line 3:  "ENGINEER."

  Style:   font-family DM Sans, font-weight 800, text-transform UPPERCASE,
           font-size clamp(60px, 10vw, 140px), letter-spacing -0.03em,
           line-height 0.92, color #1A1A1A

BOTTOM BAR (pinned to bottom of hero, left–right layout):
  Left text:   "Senior Developer & Creative Technologist"
               Style: font-size clamp(14px,1.5vw,18px), font-weight 400, color #555555

  Right button: "START A PROJECT ↗"
                Style: border 1.5px solid #1A1A1A, border-radius 999px,
                       padding 14px 28px, font-size 14px, font-weight 600,
                       color #1A1A1A, background transparent
                Hover: background #1B4332, color #FFFFFF, border-color #1B4332
```

---

## SECTION 3 — MARQUEE STRIP

```
Background:  #1B4332  (forest green — hard cut, zero gap from hero)
Height:      96px

Repeating ticker text (infinite loop, auto-scroll, pause on hover):
  "REACT  ✦  NEXT.JS  ✦  NODE.JS  ✦  TYPESCRIPT  ✦  GSAP  ✦  FIGMA  ✦  AWS  ✦  POSTGRESQL  ✦  DOCKER  ✦  PYTHON  ✦  REDIS  ✦  VERCEL  ✦"

Text style:  font-weight 700, text-transform UPPERCASE, color #FFFFFF,
             font-size clamp(14px, 2vw, 20px), letter-spacing 0.08em
```

---

## SECTION 4 — ABOUT

```
Background:  #C8F060  (lime green — NOT cream, this is critical)

EYEBROW LABEL:
  Text:   "ABOUT ME"
  Style:  font-size 12px, font-weight 500, text-transform UPPERCASE,
          letter-spacing 0.15em, color #1A1A1A, opacity 0.6

MAIN PARAGRAPH (large, left column):
  Text:   "I build digital products that feel as good as they perform.
           From pixel-perfect interfaces to bulletproof backend systems —
           I own the full stack and obsess over every detail."

  Style:  font-size clamp(20px, 2.5vw, 28px), font-weight 500,
          line-height 1.45, color #1A1A1A, max-width 580px

SECONDARY PARAGRAPH:
  Text:   "With 5+ years of professional experience, I've shipped SaaS platforms,
           led frontend teams, and built systems used by thousands of users daily.
           I work best when design and engineering are treated as one discipline."

  Style:  font-size 16px, font-weight 400, line-height 1.7,
          color #333333, max-width 560px, margin-top 24px

STAT CARDS (right column, 3 cards stacked):
  Card background: #1A1A1A
  Border-radius:   20px
  Padding:         28px 32px
  Gap between:     16px

  Card 1:
    Number:  "5+"
    Label:   "Years of Experience"

  Card 2:
    Number:  "40+"
    Label:   "Projects Shipped"

  Card 3:
    Number:  "12+"
    Label:   "Happy Clients"

  Number style:  font-size clamp(44px,5vw,60px), font-weight 800,
                 letter-spacing -0.03em, color #FFFFFF, line-height 1
  Label style:   font-size 13px, font-weight 400, color rgba(255,255,255,0.55),
                 text-transform UPPERCASE, letter-spacing 0.1em, margin-top 8px
```

---

## SECTION 5 — SERVICES

```
Background:  #1B4332  (forest green)

EYEBROW LABEL:
  Text:   "SERVICES"
  Style:  font-size 12px, font-weight 500, text-transform UPPERCASE,
          letter-spacing 0.15em, color rgba(255,255,255,0.5)

SECTION HEADING:
  Text:   "WHAT I BUILD."
  Style:  font-size clamp(48px,7vw,100px), font-weight 800, text-transform UPPERCASE,
          letter-spacing -0.03em, line-height 0.92, color #FFFFFF

SERVICE ROWS (horizontal rule dividers, each expands on hover):
  Row divider:  1px solid rgba(255,255,255,0.15)
  Default height: 72px
  Hover height:   160px (smooth GSAP animation)

  Row 1:
    Number:       "01"
    Name:         "Web Applications"
    Tags:         [React] [Next.js] [TypeScript]
    Description:  "End-to-end web apps architected for scale, speed, and real users."
    Arrow:        "→"  (rotates to 45° on hover)

  Row 2:
    Number:       "02"
    Name:         "Backend Systems"
    Tags:         [Node.js] [PostgreSQL] [GraphQL]
    Description:  "Robust APIs, databases, and server logic that never go down."
    Arrow:        "→"

  Row 3:
    Number:       "03"
    Name:         "UI / UX Design & Dev"
    Tags:         [Figma] [GSAP] [CSS]
    Description:  "Interfaces so polished, users notice — and remember — every detail."
    Arrow:        "→"

  Row 4:
    Number:       "04"
    Name:         "SaaS Products"
    Tags:         [AWS] [Stripe] [Auth]
    Description:  "Full product builds from MVP to production-grade platform."
    Arrow:        "→"

  Row 5:
    Number:       "05"
    Name:         "DevOps & Performance"
    Tags:         [Docker] [CI/CD] [Vercel]
    Description:  "Deploy faster, scale cheaper, and ship with total confidence."
    Arrow:        "→"

  Number style:       font-size 13px, color rgba(255,255,255,0.4), font-weight 500
  Name style:         font-size clamp(22px,2.8vw,36px), font-weight 700,
                      letter-spacing -0.02em, color #FFFFFF
  Tag style:          background #C8F060, color #1A1A1A, font-size 12px,
                      font-weight 600, padding 5px 14px, border-radius 999px
  Description style:  font-size 15px, color rgba(255,255,255,0.6), font-weight 400
  Arrow style:        font-size 22px, color #FFFFFF, transition: rotate 0.3s
```

---

## SECTION 6 — PROJECTS

```
Background:  #F2F0EB  (cream)

EYEBROW LABEL:
  Text:   "SELECTED WORK"
  Style:  same as other eyebrows — 12px, uppercase, letter-spacing 0.15em, muted

SECTION HEADING:
  Text:   "PROJECTS."
  Style:  same display style — 800 weight, uppercase, huge, #1A1A1A

PROJECT CARDS (2-column alternating grid):

  Card 1 — LARGE (takes 60% width):
    Background:   #1A1A1A
    Bullet:       ● (small filled dark-green circle, #1B4332, 10px)
    Title:        "FINTRACK"
    Description:  "Personal finance tracker & budgeting SaaS"
    Category tags (OUTLINED pills, white border):  [Finance] [SaaS]
    Tech pills (OUTLINED, white border):  [React] [Node.js] [Stripe] [PostgreSQL]
    CTA button:   "VIEW ↗"
    Hover CTA:    background #C8F060, color #1A1A1A

  Card 2 — SMALL (takes 40% width):
    Background:   #1B4332
    Bullet:       ●
    Title:        "DEVHUB"
    Description:  "Real-time developer collaboration platform"
    Category tags:  [Productivity] [Real-time]
    Tech pills:   [Next.js] [Prisma] [WebSockets]
    CTA button:   "VIEW ↗"

  Card 3 — SMALL (takes 40% width):
    Background:   #1B4332
    Bullet:       ●
    Title:        "VIZR"
    Description:  "Interactive data visualisation dashboard"
    Category tags:  [Analytics] [Dashboard]
    Tech pills:   [D3.js] [React] [REST API]
    CTA button:   "VIEW ↗"

  Card 4 — LARGE (takes 60% width):
    Background:   #1A1A1A
    Bullet:       ●
    Title:        "STOREFRONT"
    Description:  "Headless e-commerce engine with live CMS"
    Category tags:  [E-commerce] [Headless]
    Tech pills:   [Next.js] [Shopify API] [TypeScript]
    CTA button:   "VIEW ↗"

  Card title style:      font-size clamp(28px,3.5vw,48px), font-weight 800,
                         text-transform UPPERCASE, letter-spacing -0.03em, color #FFFFFF
  Card description:      font-size 14px, font-weight 400, color rgba(255,255,255,0.6)
  Outlined pill style:   border 1px solid rgba(255,255,255,0.35), color rgba(255,255,255,0.8),
                         font-size 12px, padding 5px 14px, border-radius 999px, background transparent
  Card number style:     font-size 13px, color rgba(255,255,255,0.35), font-weight 500
```

---

## SECTION 7 — SKILLS

```
Background:  #C8F060  (lime green)

EYEBROW LABEL:
  Text:   "EXPERTISE"
  Style:  12px, uppercase, letter-spacing 0.15em, color rgba(26,26,26,0.6)

SECTION HEADING:
  Text:   "SKILLS."
  Style:  display style — 800 weight, uppercase, huge, color #1A1A1A

SKILL ROWS (separated by thin border-bottom: 1px solid rgba(0,0,0,0.1)):

  Row 1:
    Category:  "FRONTEND"
    Pills:     React · Next.js · TypeScript · Vue.js · GSAP · Vanilla CSS · HTML5

  Row 2:
    Category:  "BACKEND"
    Pills:     Node.js · Express · Python · REST API · GraphQL · WebSockets

  Row 3:
    Category:  "DATABASE"
    Pills:     PostgreSQL · MongoDB · Redis · Supabase · Prisma ORM

  Row 4:
    Category:  "DEVOPS"
    Pills:     Docker · AWS · Vercel · GitHub Actions · CI/CD · Linux

  Row 5:
    Category:  "DESIGN"
    Pills:     Figma · Design Systems · Motion Design · Responsive UI

  Category label style:  font-size 12px, font-weight 700, text-transform UPPERCASE,
                         letter-spacing 0.15em, color #1A1A1A, min-width 120px
  Skill pill style:      background #1A1A1A, color #FFFFFF, font-size 14px,
                         font-weight 500, padding 9px 22px, border-radius 999px
  Pill hover:            background #FFFFFF, color #1A1A1A (invert)
```

---

## SECTION 8 — TESTIMONIALS

```
Background:  #F2F0EB  (cream)

EYEBROW LABEL:
  Text:   "KIND WORDS"
  Style:  standard eyebrow style

SECTION HEADING:
  Text:   "WHAT CLIENTS SAY."
  Style:  display style, #1A1A1A

CARDS (horizontal scroll, snap-to-card):

  Card 1:
    Background:  #1A1A1A
    Quote mark:  " (font-size 80px, font-weight 900, color #C8F060, line-height 0.8)
    Quote text:  "Arjun delivered a product that exceeded every requirement.
                  The attention to animation and performance was something
                  we'd only seen from agencies three times the price."
    Name:        "Sarah Chen"
    Role:        "CTO, Fintrack Labs"

  Card 2:
    Background:  #1B4332
    Quote mark:  "
    Quote text:  "Working with Arjun felt like having a design agency and an
                  engineering firm in one person. Shipped in half the time,
                  with zero compromises on quality."
    Name:        "Marcus Weber"
    Role:        "Founder, DevHub"

  Card 3:
    Background:  #1A1A1A
    Quote mark:  "
    Quote text:  "We came with a rough idea and left with a production-ready
                  platform. Arjun's ability to think in both design and code
                  is genuinely rare."
    Name:        "Priya Mehta"
    Role:        "Product Manager, Vizr Analytics"

  Quote text style:   font-size clamp(16px,1.8vw,20px), font-weight 400,
                      color #FFFFFF, line-height 1.6
  Name style:         font-size 15px, font-weight 700, color #FFFFFF, margin-top 28px
  Role style:         font-size 13px, font-weight 400, color rgba(255,255,255,0.55)
```

---

## SECTION 9 — CONTACT

```
Background:  #C8F060  (lime green)
Height:      100vh, centered content

HEADLINE — 4 lines, centered, display text, color #1A1A1A:
  Line 1:  "READY TO"
  Line 2:  [GOOGLY EYE LEFT]  [GOOGLY EYE RIGHT]   ← eyes replace a full line
  Line 3:  "START THE"
  Line 4:  "PROJECT?"

  Headline style:  font-size clamp(52px,9vw,130px), font-weight 800,
                   text-transform UPPERCASE, letter-spacing -0.03em,
                   line-height 0.92, color #1A1A1A, text-align center

  Googly eyes:
    Outer circle:  width 140px, height 140px, background #FFFFFF, border-radius 50%
    Inner pupil:   width 58px, height 58px, background #1A1A1A, border-radius 50%
    Behaviour:     pupil moves toward mouse cursor using Math.atan2, max radius 26px
    Display:       inline-flex side by side, gap 24px

SUBTEXT (below headline):
  Text:   "Open to senior full-time roles & ambitious freelance projects."
  Style:  font-size clamp(15px,1.8vw,20px), font-weight 400,
          color rgba(26,26,26,0.7), text-align center, margin-top 32px

CTA BUTTONS ROW (centered, gap 16px, margin-top 40px):

  Button 1 — Primary:
    Text:    "SEND A MESSAGE →"
    Style:   background #1A1A1A, color #FFFFFF, border-radius 999px,
             padding 18px 36px, font-size 15px, font-weight 700,
             border none
    Hover:   background #1B4332

  Button 2 — Secondary:
    Text:    "hello@arjunkapoor.dev"
    Style:   background transparent, color #1A1A1A,
             border 1.5px solid #1A1A1A, border-radius 999px,
             padding 18px 36px, font-size 15px, font-weight 600
    Hover:   background rgba(26,26,26,0.08)
```

---

## SECTION 10 — FOOTER

```
Background:  #F2F0EB  (cream)
Border-top:  1px solid rgba(26,26,26,0.15)
Padding:     60px (horizontal gutter) 40px

4-COLUMN GRID:

  Column 1 — Brand:
    Wordmark:   "ARJUN."
                font-size 20px, font-weight 800, color #1A1A1A

    Tagline:    "Senior Full-Stack Engineer"
                font-size 14px, font-weight 400, color #555555, margin-top 12px

    Copyright:  "© 2025 Arjun Kapoor. All rights reserved."
                font-size 12px, color #888888, margin-top 32px

  Column 2 — Socials:
    Label:  "S:"
            font-size 13px, font-weight 500, color #888888, margin-bottom 12px

    Links (each on its own line, font-size 15px, color #1A1A1A):
      GitHub       → github.com/arjunkapoor
      LinkedIn     → linkedin.com/in/arjunkapoor
      Twitter      → twitter.com/arjunkapoor
      Dribbble     → dribbble.com/arjunkapoor

    Link hover: underline slides in from left via CSS pseudo-element

  Column 3 — Contact:
    Label:  "E:"
            same label style as above

    Email:  "hello@arjunkapoor.dev"
            font-size 15px, color #1A1A1A
            Hover: color #1B4332, underline

  Column 4 — Navigation:
    Label:  "M:"
            same label style

    Links (each on its own line, font-size 15px, color #1A1A1A):
      Home
      Work
      About
      Skills
      Contact

BOTTOM STRIP (below the grid, border-top: 1px solid rgba(26,26,26,0.1)):
  Left:   "Designed & developed with obsession. Mumbai, India."
          font-size 12px, color #888888

  Right:  "Available for work ✦ 2025"
          font-size 12px, color #888888
```

---

## TYPOGRAPHY SUMMARY — APPLY CONSISTENTLY

```
┌─────────────────────┬────────────────────────────────────────────────────────────┐
│ Element             │ Style                                                      │
├─────────────────────┼────────────────────────────────────────────────────────────┤
│ Hero / section h1   │ DM Sans 800, UPPERCASE, clamp(52px–140px), ls -0.03em     │
│ Card titles         │ DM Sans 800, UPPERCASE, clamp(28px–48px), ls -0.03em      │
│ Eyebrow labels      │ DM Sans 500, UPPERCASE, 12px, ls 0.15em, muted color      │
│ Body large          │ DM Sans 500, clamp(18px–26px), lh 1.45, normal case       │
│ Body regular        │ DM Sans 400, 16px, lh 1.7, color #333 or #555             │
│ Pill / tag text     │ DM Sans 600, 12px, UPPERCASE or normal, ls 0.02em         │
│ Nav links           │ DM Sans 500, 15px, normal case                            │
│ Footer labels       │ DM Sans 500, 13px, color #888                             │
│ Footer links        │ DM Sans 400, 15px, color #1A1A1A                          │
│ Button text         │ DM Sans 600–700, 14–15px, normal case                     │
└─────────────────────┴────────────────────────────────────────────────────────────┘
```

---

## COLOR USAGE SUMMARY — APPLY CONSISTENTLY

```
┌─────────────────────────────┬───────────┬────────────────────────────────────────┐
│ Section                     │ BG Color  │ Text Color                             │
├─────────────────────────────┼───────────┼────────────────────────────────────────┤
│ Navbar                      │ Transparent → #F2F0EB │ #1A1A1A               │
│ Hero                        │ #F2F0EB   │ #1A1A1A                               │
│ Marquee strip               │ #1B4332   │ #FFFFFF                               │
│ About                       │ #C8F060   │ #1A1A1A (text), #FFFFFF (stat cards)  │
│ Services                    │ #1B4332   │ #FFFFFF, tags use #C8F060 bg           │
│ Projects                    │ #F2F0EB   │ Cards: #FFFFFF on dark bg              │
│ Skills                      │ #C8F060   │ #1A1A1A (labels), #FFFFFF (pills)     │
│ Testimonials                │ #F2F0EB   │ Cards: #FFFFFF on dark bg              │
│ Contact                     │ #C8F060   │ #1A1A1A, eyes: white + black pupil    │
│ Footer                      │ #F2F0EB   │ #1A1A1A links, #888888 labels         │
└─────────────────────────────┴───────────┴────────────────────────────────────────┘

Section color rhythm (top to bottom):
  cream → forest green → lime → forest green → cream → lime → cream → lime → cream
```

---

*Use this content exactly as written. Replace "Arjun Kapoor" with your real name, and update email/social links with your own. All font sizes, weights, colors, and copy are final.*