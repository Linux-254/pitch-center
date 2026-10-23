# Pitch Center — Complete System Documentation & Operational Manual

> **CyTech Studios Client Acquisition Engine**  
> **Repository:** [https://github.com/Linux-254/pitch-center](https://github.com/Linux-254/pitch-center)  
> **Local Server:** `http://localhost:3005`  
> **Source Directory:** `c:\Users\User\.gemini\antigravity-ide\scratch\business-growth-sites`  

---

## 1. Executive Summary & Purpose

**Pitch Center** is an interactive B2B client acquisition platform designed to pitch, demonstrate, and close high-ticket digital transformations for service-based businesses in Nairobi and across East Africa.

Traditional agencies fail because they pitch using abstract slide decks or static mockups. **Pitch Center** flips the sales cycle by showing clients a **live, fully functional, branded preview of their future business** in 45 seconds:
1. **Dual-Device Live Simulation**: Desktop website preview paired alongside an interactive mobile smartphone frame.
2. **Interactive AI Lead Capture Bot**: Live conversational assistant pre-trained to answer pricing questions and book appointments 24/7.
3. **Live Back-Office POS & Kitchen Ticket Engine**: Demonstrates how bookings and orders flow directly to staff/management without friction.
4. **Instant Outreach Dispatcher**: One-click personalized WhatsApp and Email scripts with pre-filled venue data and live demo links.

---

## 2. Core Architecture & Tech Stack

```
pitch-center/
├── index.html            # Main SPA: Dual-device showcase, switcher, POS simulator & pitch hub
├── styles.css            # Responsive layout, device mockups, dark/light themes, ambient glow
├── app.js                # State machine: vertical switcher, chatbot engine, POS ticket feed
├── businesses-data.js    # Rich dataset for 6 business verticals (themes, copy, services, reviews)
├── server.js             # Node.js/Express server (API endpoints, pitch tracker, static host)
├── package.json          # Module configuration and launch scripts
└── README.md             # Quick start & repository overview
```

### Technology Highlights
- **Runtime & Backend**: Node.js (ES Modules) with Express 4.x.
- **Frontend Core**: Vanilla JavaScript (zero bundle overhead, instant re-renders) and semantic HTML5.
- **Styling Architecture**: Modern Vanilla CSS utilizing CSS Custom Properties, CSS Grid, Flexbox, glassmorphic filters, and hardware-accelerated animations.
- **Zero Third-Party UI Bloat**: Pure SVG vector icons throughout (no emojis, no external icon font dependencies).

---

## 3. Supported Business Verticals & Showcase Profiles

Each vertical has custom typography, curated color palettes, hero photography, service catalogs, social proof, and specialized AI conversation flows:

| Vertical | Target Clients | Color Palette | Key Client Pain Point Solved |
| :--- | :--- | :--- | :--- |
| **Salons, Spas & Barbers** | High-end salons, barbershops, luxury nail spas | Warm Gold (`#C89B3C`) & Obsidian (`#0F1117`) | Clients calling while stylists are busy; lost weekend walk-ins. |
| **Clinics & Dentists** | Dental clinics, dermatologists, private doctors | Medical Emerald (`#059669`) & Slate Blue (`#0F172A`) | Patients abandoning inquiries after hours; slow appointment scheduling. |
| **Real Estate Agencies** | Property brokers, development marketers, letting agents | Cobalt Navy (`#1E3A8A`) & Amber (`#D97706`) | Slow response to WhatsApp property inquiries resulting in lost buyers. |
| **Gyms & Fitness Studios** | Crossfit boxes, boutique gymnasiums, personal trainers | Flame Crimson (`#DC2626`) & Carbon (`#18181B`) | Missed membership leads and delayed trial session follow-ups. |
| **Private Academies & Schools** | Kindergarten, prep schools, international academies | Royal Indigo (`#3730A3`) & Gold (`#B45309`) | Cluttered admission pipelines and repetitive parent fee inquiries. |
| **Premium Auto Dealerships** | Car yards, luxury vehicle importers, car detailing hubs | Titanium Silver (`#475569`) & Electric Orange (`#EA580C`) | Unqualified inquiries; inability to book test drives on demand. |

---

## 4. Platform Features & Capabilities

### 4.1. Dual-Device Interactive Showcase
- **Desktop Window Viewport**: Full-width responsive representation with clean sticky navigation, hero video/image spread, trust badges, interactive pricing tables, and embedded location maps.
- **Mobile Smartphone Frame**: Exact pixel-perfect mobile view simulating iOS/Android touch interaction, bottom booking triggers, and quick tap-to-call actions.

### 4.2. Embedded AI Chatbot Lead Engine
- **Pre-Trained Personas**: Automatically adapts personality and knowledge base when switching verticals (e.g., Maji the Salon Stylist, Dr. Wanjiku's Dental Nurse, Amani Property Advisor).
- **Zero Latency**: Real-time message streaming with intelligent qualification:
  1. Identifies the user's requirement.
  2. Quotes starting pricing ranges.
  3. Collects phone number or preferred appointment slot.
  4. Pushes lead notification to the admin dashboard.

### 4.3. Real-Time Admin POS & Booking Ticket Board
- Simulates real-world order and appointment dispatching.
- Live kitchen/station routing for restaurants and appointment slot reservation for clinics/salons.
- Displays customer name, phone number, booked service, and revenue generated in KES.

### 4.4. CyTech Studios Outreach & Pitch Dispatcher
- Integrated floating sales console on the right side of the screen.
- Allows the agent to input the target business name, owner's phone or email, and a personalized hook (e.g., "Loved your Instagram reel on Moroccan baths").
- Formats and generates direct **Click-to-WhatsApp** links (`https://wa.me/254...`) with copy-paste outreach messages.

---

## 5. Pricing Strategy & Profit Blueprint

The system is configured around the standard three-tier monetization framework:

| Package Tier | Client Price | Required Deposit | Your Profit Split | Ideal Target Client |
| :--- | :--- | :--- | :--- | :--- |
| **Starter QR / Fast Landing** | **KES 30,000** | 100% upfront (KES 30,000) | **KES 15,000** | Small cafes, single-chair barbers, freelance trainers (same-day turnaround). |
| **Standard (Site + Booking + AI Bot)** | **KES 95,000** | 60% upfront (KES 57,000) | **KES 28,500** | Busy salons, dental practices, fitness centers, local property brokers. |
| **Full Enterprise (POS + STK Push + CRM)** | **KES 180k – 260k** | 50% upfront (KES 45k – 65k) | **KES 45k – 65k** | Multi-branch restaurants, private schools, car dealerships, commercial real estate. |

---

## 6. Outreach Scripts (Copy-Ready)

### Script 1: Restaurants, Bars & Lounges (WhatsApp)
> Hi **[Owner Name]**, I'm Cy from Nairobi. I came across **[Venue Name]** on Google Maps and your reviews are solid, but I noticed guests can't view your menu or order online from their phone.  
> I build **QR table ordering**: guests scan from their table, order from their phone, and the order goes straight to your kitchen/POS. No waiting for waiters on busy nights, zero order mistakes, and bigger tabs because guests see photos of every dish.  
> Here is a 45-second live demo: **[pitch-center-link]**  
> I can have this live for you before this weekend. Want me to send over the pricing and set it up?

### Script 2: Salons, Barbershops & Spas (WhatsApp / DM)
> Hey **[Owner Name]**, quick question for you at **[Salon Name]** — how many booking inquiries on WhatsApp or Instagram do you miss when your stylists are in the middle of a client?  
> We build high-converting websites with a **24/7 AI Booking Assistant** that answers price questions (hair, nails, facials), captures client phone numbers, and books slots automatically even at 11 PM.  
> Check out the live 45-second demo here: **[pitch-center-link]**  
> Takes 48 hours to launch for **[Salon Name]**. Can I send you the details?

### Script 3: Clinics & Dentists (Email / Formal WhatsApp)
> Hello Dr. **[Last Name]**, I noticed **[Clinic Name]** receives strong patient referrals, but prospective patients inquiring after 5 PM have no way to get immediate answers or reserve consultation slots online.  
> We build medical websites equipped with an instant **Patient Booking Assistant** that handles service FAQs, verifies doctor availability, and schedules consultations directly into your calendar.  
> Live preview: **[pitch-center-link]**  
> We offer a setup that goes live in 3 days. Would you be open to a 5-minute preview call this week?

---

## 7. How to Run Locally & Deploy

### Running Locally
```powershell
# Navigate to project directory
cd c:\Users\User\.gemini\antigravity-ide\scratch\business-growth-sites

# Install dependencies (Express)
npm install

# Start the server (runs on port 3005)
node server.js
```
Open browser to: `http://localhost:3005`

### Git & Remote Repository
- **Remote URL**: `https://github.com/Linux-254/pitch-center.git`
- **Branch**: `main`
- Push updates:
  ```powershell
  git add .
  git commit -m "Update documentation and platform features"
  git push origin main
  ```

---

## 8. Summary Checklist Before Pitching a Client

- [ ] Select target vertical from the top navigation bar.
- [ ] Test the live AI chatbot conversation flow to ensure prompt answers.
- [ ] Enter client's name and contact in the Pitch Dispatcher panel on the right.
- [ ] Copy the generated WhatsApp link and send directly to the decision-maker.
- [ ] Keep the dashboard tab open on `http://localhost:3005` to showcase live incoming lead tickets during a call or in-person pitch.
