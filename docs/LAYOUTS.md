GLOBAL FOR ALL LAYOUTS
Sections available (each layout picks its own order and treatment): Hero, About, Services+Prices,
Reviews (Google), Instagram (grid + reels), Map+Hours, Booking, Chatbot launcher, Footer, WhatsApp FAB.
Every layout needs: page-load animation, scroll-triggered transitions, mobile (360-767),
tablet (768-1023), desktop (1024+) behaviour as specified, 44px touch targets, keyboard focus states.

L1 EDITORIAL LUXE  (salons, spas, boutique clinics)
 Fonts: Cormorant Garamond (display) + Inter (body). Ivory background, brand primary used only for thin
 rules and hover states. Hero: full-bleed image, slow Ken Burns scale 1.0 to 1.08 over 20s, giant
 serif business name, small caps tagline. Services: menu-style list with dotted leaders and prices
 right-aligned. Reviews: one large pull quote at a time, crossfade 6s, Google badge. Instagram:
 3-up framed prints. Motion: 900ms opacity+translateY(24px) reveals, parallax 0.15 on images.
 Mobile: single column, sticky bottom "Book" bar. Tablet: 2-col services.

L2 NEON NIGHT  (bars, lounges, gyms, auto detailing)
 Fonts: Unbounded (display) + Space Grotesk. Background #0A0A0F, glow color = brand primary.
 Hero: name with 600ms glitch effect on load, animated gradient mesh, scanline overlay (off for
 reduced motion). Services: glowing cards, border-sweep on hover/tap. Reviews: infinite marquee.
 Instagram: reels wall with hover play-icon. Map styled dark. Motion: glow pulse 3s, stagger 80ms.
 Mobile: cards become horizontal snap carousel.

L3 BENTO GRID  (clinics, schools, restaurants, general)
 Fonts: Plus Jakarta Sans + Inter. 12-col grid of rounded tiles with mixed spans: hero tile (6x4),
 rating tile (big number + stars), "Open now / closes at" tile (computed from hours), map tile,
 featured service tiles with price, Instagram tile, chat tile, CTA tile. Motion: staggered reveal
 60ms, hover lift. Tablet: 6-col. Mobile: 2-col then 1-col for large tiles.

L4 STORY SCROLL  (real estate, schools, premium brands)
 Fonts: Fraunces + DM Sans. Six full-screen chapters: Welcome, What we do, Prices, People say,
 Find us, Book. GSAP ScrollTrigger pinned sections with text transitions, progress dots on the
 right, chapter numbers. Desktop: pinned. Tablet/Mobile: CSS scroll-snap-y without pinning.

L5 INSTA-FIRST  (salons, restaurants, fashion, gyms)
 Fonts: Syne + Inter. Hero is a profile header (logo avatar, handle, stats, "Follow" button linking
 to their profile) over a 3-row marquee of posts moving in alternating directions. Services shown as
 story-highlight circles that open a price sheet. Reels carousel with swipe. Placeholder tiles
 labelled "Your photo here". Mobile mimics the app feed.

L6 SPLIT SCREEN  (clinics, dealerships, gyms)
 Fonts: Bricolage Grotesque + Inter. Hero: two panels sliding in from opposite sides (clip-path
 reveal, 700ms). Left side sticky copy and CTA, right side scrolling image stack. Services as
 an accordion with price chips. Desktop: sticky left. Tablet: 50/50 narrower. Mobile: stacked
 with clip-path reveals per section.

L7 MINIMAL SWISS  (professional services, design-led brands)
 Fonts: Inter Tight (variable) + Space Mono. Monochrome plus one accent. Type clamp(4rem,14vw,16rem).
 Kinetic typography: font-weight and letter-spacing change with scroll position. Strict 12-col
 grid, hairline dividers. Services as a table with prices flush right. Reviews as numbered list.
 Minimal motion: line draws, number counters. Mobile: type scale reduces to clamp(2.5rem,12vw,5rem).

L8 CONVERSION MACHINE  (any vertical, best for cold-pitch)
 Fonts: Outfit + Inter. Top announcement bar with an editable offer (off by default; if enabled
 the countdown is real and set by the agency, never fake). Hero with one CTA and WhatsApp CTA, trust
 bar (rating, review count, years open), sticky booking card on desktop, sticky bottom CTA bar on
 mobile, service cards with "Most booked" badge only if the agency toggles it, FAQ accordion,
 micro-interactions on every button, exit-intent soft prompt on desktop. Track every CTA click.
