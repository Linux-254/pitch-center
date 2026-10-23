PROJECT: Pitch Center v2 (CyTech Studios). A config-driven demo engine plus an admin Studio.

STACK: Vite + React + TypeScript + Tailwind + Framer Motion + GSAP ScrollTrigger.
Supabase (Postgres, Auth, Storage, Realtime). Vercel hosting. Serverless functions in /api
for anything holding secrets (Gemini key, Google Places key). Never expose keys in the client.

ARCHITECTURE RULES
1. One engine. Never copy-paste a site per business. A demo = vertical x layout x prospect data.
2. All business content comes from the database. No hard-coded business names, prices, hours or reviews in components.
3. Copy templates use tokens: {{business}} {{owner}} {{area}} {{city}} {{phone}} {{topService}} {{topPrice}}. One resolveTokens() util is used everywhere (site, chatbot, video captions, scripts).
4. Layouts live in /src/layouts/L1..L8. Each has its own component tree, fonts, spacing and motion. They share only data hooks and small primitives (Button, Stars, PriceTag, ReviewCard, MapEmbed, BookingForm).
5. Prices are stored as integer KES. Format with Intl.NumberFormat('en-KE'). Editing a price in Studio updates every layout, the chatbot, the POS board and the video instantly.
6. Reviews: real only. Pull from Google Places or manual paste. Show Google attribution and a "View on Google" link. If none exist, show a clearly labelled "Sample reviews, replaced with your real ones at launch" state.
7. Instagram/reel images: only uploaded or permitted media. No scraping. If empty, render a labelled placeholder wall in the brand palette.
8. Pure SVG icons, no emojis. Respect prefers-reduced-motion. Lazy-load images. Mobile-first, real breakpoints: 360, 768, 1024, 1440.
9. Never write fake reviews, fake testimonials, or fake scarcity.
10. TypeScript strict. Zod validation on every API input. Standard API response {success,data,message,error}.
11. After every feature: run the app, open it with the browser agent at 390px, 820px, 1440px, and screenshot.

VERTICALS: salon, clinic, realestate, gym, school, auto, restaurant.
