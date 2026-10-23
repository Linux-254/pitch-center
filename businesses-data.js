// ========================================================================
//  BUSINESS VERTICALS DATA ENGINE
//  Each vertical carries its own layout mode, design tokens, gallery,
//  testimonials, Instagram content, map data, and animation config.
//  Zero emojis -- SVG icon keys only.
// ========================================================================

export const BUSINESS_VERTICALS = {

  // ──────────────────────────────────────────────────────────────────────
  //  0. RESTAURANT, BAR & LOUNGE -- High-volume QR Digital Menu & Table Ordering
  //     Flame amber, charcoal dark mode, bold typography, instant kitchen routing
  // ──────────────────────────────────────────────────────────────────────
  restaurant: {
    id: 'restaurant',
    categoryName: 'Restaurants, Bars & Lounges',
    brandName: 'Kikao Flame Grill & Lounge',
    tagline: 'Smoked Ribs, Flame Steaks & Instant QR Table Ordering',

    // -- Layout & Design DNA --
    layoutMode: 'splitscreen',
    fontDisplay: "'Barlow Condensed', sans-serif",
    fontBody: "'Outfit', sans-serif",
    navStyle: 'bold-bar',
    animStyle: 'scale-pop',
    cardStyle: 'gradient-border',
    buttonStyle: 'sharp-edge',
    ambientEffect: 'warm-glow',

    // -- Colors --
    primaryColor: '#ea580c',
    primaryHover: '#c2410c',
    secondaryColor: '#f59e0b',
    accentColor: '#fbbf24',
    bgColor: '#0c0a09',
    surfaceColor: 'rgba(26, 20, 18, 0.9)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    textMain: '#ffffff',
    textMuted: '#cbd5e1',
    gradientHero: 'linear-gradient(135deg, rgba(12,10,9,0.85) 0%, rgba(234,88,12,0.2) 100%)',

    // -- Hero --
    heroBadge: 'SCAN QR AT TABLE -- 0 WAITING FOR WAITER',
    heroHeadline: 'Flame-Kissed Meats. <span>Cold Craft Beers.</span> Instant Phone Ordering.',
    heroSubhead: 'Scan the QR code at your table to order straight to the kitchen. View photo menus, customize sides, and pay via M-Pesa without waving your hand for 20 minutes.',
    heroImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1600&auto=format&fit=crop&q=80',
    heroVideo: 'https://assets.mixkit.co/videos/preview/mixkit-frying-meat-in-a-pan-43468-large.mp4',
    ctaText: 'Scan Digital Menu & Order',

    // -- Stats --
    stat1: '18,400+ Table Orders',
    stat2: '4.8 / 5 (1,420 Reviews)',
    stat3: '< 45s Kitchen Ticket Speed',

    // -- Weekly Deal --
    weeklyDeal: {
      title: 'Smoked BBQ Full Rack + 2 Craft Beers',
      desc: 'Slow-smoked hickory beef ribs glazed in bourbon BBQ sauce with seasoned wedges and 2 draught beers.',
      oldPrice: 'KES 3,600',
      dealPrice: 'KES 2,450',
      badge: 'WEEKEND SPECIAL',
      timer: 'Offer ends in 06:14:28'
    },

    // -- Branches --
    branches: [
      { name: 'Westlands Flagship', address: 'Woodvale Grove, Westlands (Opp. Sarit)', phone: '+254 711 500 600', hours: '11:00 AM - 2:00 AM', lat: -1.2618, lng: 36.8049 },
      { name: 'Kilimani Garden Lounge', address: 'Argwings Kodhek Rd, Kilimani', phone: '+254 722 500 700', hours: '11:00 AM - 1:00 AM', lat: -1.2942, lng: 36.7885 },
      { name: 'Karen Country Terrace', address: 'Karen Rd, Near Galleria Mall', phone: '+254 733 500 800', hours: '10:00 AM - 11:30 PM', lat: -1.3325, lng: 36.7582 }
    ],

    // -- Catalog (Digital Menu items) --
    catalog: [
      { id: 'rest-1', name: 'Signature Hickory Smoked BBQ Ribs', category: 'From The Pit', desc: '8-hour slow smoked pork or beef ribs with bourbon glaze, charred corn cob, and hand-cut fries.', price: 'KES 2,200', duration: 'Kitchen: 12 min', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80', popular: true, tag: 'Bestseller' },
      { id: 'rest-2', name: 'The Double Wagyu Smash Burger', category: 'Gourmet Burgers', desc: 'Double 150g prime patties, melted aged cheddar, caramelized onion jam, and truffle aioli on brioche.', price: 'KES 1,650', duration: 'Kitchen: 10 min', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80', popular: true, tag: 'Must Try' },
      { id: 'rest-3', name: 'Crispy Peri-Peri Wings (12 Pcs)', category: 'Sharing Platters', desc: 'Jumbo wings tossed in house African bird eye chili glaze served with blue cheese dip and celery.', price: 'KES 1,400', duration: 'Kitchen: 8 min', image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800&auto=format&fit=crop&q=80', popular: false, tag: 'Spicy' },
      { id: 'rest-4', name: 'Passionfruit Craft Mojito Pitcher', category: 'Cocktails & Bar', desc: 'Fresh Kenyan mint leaves, white rum, passion pulp, crushed ice, and sparkling mineral water.', price: 'KES 2,800', duration: 'Bar: 4 min', image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop&q=80', popular: true, tag: 'Crowd Favorite' }
    ],

    // -- Gallery --
    gallery: [
      { url: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80', caption: 'Smoked BBQ rib platter', type: 'image' },
      { url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80', caption: 'Vibrant dining hall & bar', type: 'image' },
      { url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80', caption: 'Fresh wagyu smash burgers', type: 'image' },
      { url: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80', caption: 'Signature craft cocktails', type: 'image' }
    ],

    // -- Testimonials --
    testimonials: [
      { text: 'Scanning the QR code and having our drinks arrive in 4 minutes without flagging down waiters changed our Friday nights forever.', author: 'David O.', role: 'Regular Westlands Guest', rating: '5.0' },
      { text: 'The ribs are consistently top 3 in Nairobi. Being able to customize the spice level directly from my phone is awesome.', author: 'Brenda N.', role: 'Food Critic & Blogger', rating: '5.0' },
      { text: 'We hosted a 30-person birthday dinner. Each person ordered and split their own bill on their phone with M-Pesa. Flawless.', author: 'Martin K.', role: 'Corporate Event Host', rating: '5.0' }
    ],

    // -- Chatbot --
    chatbotPrompts: ['Show me the full food & cocktail menu', 'Book a table for 6 this Saturday at 8 PM', 'Do you have vegan or halal options?', 'What are your happy hour timings?'],
    botPersonality: 'vibrant hospitality host named Jomo',
    botFaq: {
      'menu': 'Our complete digital menu features Hickory Smoked BBQ Ribs (KES 2,200), Double Wagyu Smash Burger (KES 1,650), Peri-Peri Wings (KES 1,400), and Craft Cocktails. Would you like me to reserve a table for you?',
      'book': 'I can book your table instantly! What date, time, and how many guests in your party? Also which branch: Westlands, Kilimani, or Karen?',
      'halal': 'All our chicken and beef are 100% Halal certified. Pork ribs are prepared on a dedicated pit with separate utensils.',
      'happy': 'Happy Hour runs Monday to Thursday from 4:00 PM to 7:00 PM with 2-for-1 on all craft draft beers and signature cocktails!'
    }
  },

  salon: {
    id: 'salon',
    categoryName: 'Salons, Barbers & Spas',
    brandName: 'Luxe Hair & Wellness Spa',
    tagline: 'Flawless Braids, Precision Cuts & Luxury Spa Retreats',

    // -- Layout & Design DNA --
    layoutMode: 'editorial',        // editorial | clinical | splitscreen | brutal | friendly | cinematic
    fontDisplay: "'Playfair Display', Georgia, serif",
    fontBody: "'Outfit', sans-serif",
    navStyle: 'transparent',        // transparent | solid | glassmorphic | bold-bar | rounded | dark-chrome
    animStyle: 'fade-up',           // fade-up | slide-left | scale-pop | glitch | bounce | cinematic-pan
    cardStyle: 'soft-glass',        // soft-glass | clean-flat | brutalist | rounded-shadow | metallic | gradient-border
    buttonStyle: 'pill-glow',       // pill-glow | sharp-edge | rounded-soft | outlined | gradient-fill | chrome
    ambientEffect: 'warm-glow',     // warm-glow | cool-mist | neon-pulse | none | spotlight | particle

    // -- Colors --
    primaryColor: '#e11d48',
    primaryHover: '#be123c',
    secondaryColor: '#f59e0b',
    accentColor: '#fbbf24',
    bgColor: '#0f0b10',
    surfaceColor: 'rgba(24, 16, 28, 0.85)',
    borderColor: 'rgba(255, 255, 255, 0.08)',
    textMain: '#ffffff',
    textMuted: '#b8a8c0',
    gradientHero: 'linear-gradient(135deg, rgba(15,11,16,0.7) 0%, rgba(225,29,72,0.15) 100%)',

    // -- Hero --
    heroBadge: '20% OFF FIRST VISIT -- BOOK IN 30 SECONDS',
    heroHeadline: 'Look Stunning. <span>Feel Confident.</span> Zero Waiting Time.',
    heroSubhead: 'From knotless boho braids to deluxe hydrafacials and executive gentleman grooming. Book top stylists instantly without waiting 3 hours for a DM reply.',
    heroImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&auto=format&fit=crop&q=80',
    heroVideo: 'https://assets.mixkit.co/videos/preview/mixkit-stylist-washing-hair-of-a-woman-in-a-salon-42861-large.mp4',
    ctaText: 'Book Stylist Online',

    // -- Stats --
    stat1: '12,500+ Clients Styled',
    stat2: '4.9 / 5 (1,150 Reviews)',
    stat3: '< 2s AI Reply Time',

    // -- Weekly Deal --
    weeklyDeal: {
      title: 'Mani-Pedi + Free Blowdry Tuesday',
      desc: 'Complete luxury gel manicure, revitalizing peppermint pedicure & complimentary silk press.',
      oldPrice: 'KES 5,500',
      dealPrice: 'KES 3,800',
      badge: 'TUESDAY SPECIAL',
      timer: 'Offer ends in 08:42:15'
    },

    // -- Branches --
    branches: [
      { name: 'Westlands Branch', address: 'The Mall, 2nd Floor, Ring Rd, Westlands', phone: '+254 711 234 567', hours: '8:00 AM - 8:30 PM', lat: -1.2641, lng: 36.8032 },
      { name: 'Kilimani Studio', address: 'Adlife Plaza, Chania Ave, Kilimani', phone: '+254 722 987 654', hours: '8:30 AM - 8:00 PM', lat: -1.2921, lng: 36.7856 },
      { name: 'Karen Sanctuary', address: 'The Hub Karen, Ground Floor', phone: '+254 733 456 789', hours: '9:00 AM - 7:30 PM', lat: -1.3197, lng: 36.7115 }
    ],

    // -- Catalog --
    catalog: [
      { id: 'salon-1', name: 'Boho Knotless Braids (Waist Length)', category: 'Hair Styling', desc: 'Lightweight, tension-free human hair curl blend. Includes deep scalp cleanse and oil massage.', price: 'KES 4,500', duration: '3.5 hrs', image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=800&auto=format&fit=crop&q=80', popular: true, tag: 'Top Seller' },
      { id: 'salon-2', name: 'Deluxe Deep Cleansing Hydrafacial', category: 'Skin & Spa', desc: 'Ultrasonic pore extraction, hyaluronic acid infusion, LED therapy, and soothing jade massage.', price: 'KES 6,000', duration: '60 min', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=80', popular: true, tag: 'Trending' },
      { id: 'salon-3', name: 'Executive Gentleman Hot Towel Shave', category: 'Barber Suite', desc: 'Straight razor beard sculpt, organic sandalwood oil treatment, steam wrap, and head massage.', price: 'KES 2,200', duration: '45 min', image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&auto=format&fit=crop&q=80', popular: false, tag: 'Men VIP' },
      { id: 'salon-4', name: 'Swedish Full Body Aromatherapy', category: 'Massage & Body', desc: '90-minute stress-relieving massage with eucalyptus and lavender essential oils in candle-lit suite.', price: 'KES 5,000', duration: '90 min', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&auto=format&fit=crop&q=80', popular: true, tag: 'Best Value' }
    ],

    // -- Gallery (Instagram-style visual grid) --
    gallery: [
      { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80', caption: 'Boho braids transformation', type: 'image' },
      { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&auto=format&fit=crop&q=80', caption: 'Our luxury suite', type: 'image' },
      { src: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&auto=format&fit=crop&q=80', caption: 'Gentleman executive cut', type: 'image' },
      { src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop&q=80', caption: 'Hydrafacial glow session', type: 'image' },
      { src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&auto=format&fit=crop&q=80', caption: 'Aromatherapy spa room', type: 'image' },
      { src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&auto=format&fit=crop&q=80', caption: 'Color balayage result', type: 'image' }
    ],

    // -- Testimonials --
    testimonials: [
      { name: 'Grace M.', rating: 5, text: 'Best braiding experience in Nairobi. Zero tension on my scalp and the style lasted 8 weeks. My stylist was incredibly patient and skilled.', date: '2 weeks ago' },
      { name: 'Peter K.', rating: 5, text: 'The gentleman hot towel shave was an experience. Walked out feeling like a new man. The sandalwood oil is something else.', date: '1 month ago' },
      { name: 'Wanjiku A.', rating: 5, text: 'Booked my hydrafacial through the chatbot at 11 PM and had a confirmed slot the next morning at 9 AM. Incredible service.', date: '3 weeks ago' }
    ],

    // -- Chatbot --
    chatbotPrompts: ['How much for knotless braids?', 'Book a manicure for Saturday at 2 PM', 'Do you offer bridal makeup packages?', 'What are your Westlands opening hours?'],
    botPersonality: 'friendly beauty concierge named Aria',
    botFaq: {
      'knotless': 'Our Knotless Braids start from KES 3,500 for shoulder length, KES 4,500 for waist length, and KES 5,500 for butt length. Includes free wash & scalp oiling! Would you like me to book your preferred stylist?',
      'book': 'I would love to help you book! Which service are you interested in, and which branch works best: Westlands, Kilimani, or Karen?',
      'bridal': 'Yes! Our Bridal Glow Package is KES 25,000 and includes bridal hair, HD makeup, trial session, plus styling for 2 bridesmaids. Can I take your phone number for our lead bridal coordinator to send the portfolio?',
      'hours': 'All branches open Monday to Saturday from 8:00 AM to 8:30 PM, and Sundays 10:00 AM to 6:00 PM.'
    }
  },

  // ──────────────────────────────────────────────────────────────────────
  //  2. CLINIC / DENTIST -- Clean clinical layout
  //     Teal/mint palette, crisp sans-serif, minimal animations, trust badges
  // ──────────────────────────────────────────────────────────────────────
  clinic: {
    id: 'clinic',
    categoryName: 'Clinics & Dentists',
    brandName: 'Apex Dental & Medical Center',
    tagline: 'Painless Dentistry, Specialist Consultations & Same-Day Labs',

    layoutMode: 'clinical',
    fontDisplay: "'Inter', sans-serif",
    fontBody: "'Inter', sans-serif",
    navStyle: 'solid',
    animStyle: 'slide-left',
    cardStyle: 'clean-flat',
    buttonStyle: 'rounded-soft',
    ambientEffect: 'cool-mist',

    primaryColor: '#0284c7',
    primaryHover: '#0369a1',
    secondaryColor: '#10b981',
    accentColor: '#06b6d4',
    bgColor: '#090d14',
    surfaceColor: 'rgba(14, 22, 36, 0.9)',
    borderColor: 'rgba(255, 255, 255, 0.06)',
    textMain: '#f0f9ff',
    textMuted: '#7dd3fc',
    gradientHero: 'linear-gradient(180deg, rgba(9,13,20,0.6) 0%, rgba(2,132,199,0.12) 100%)',

    heroBadge: 'INSURANCE ACCEPTED: JUBILEE, APA, AAR, SHA',
    heroHeadline: 'World-Class Healthcare. <span>Zero Waiting Room Chaos.</span>',
    heroSubhead: 'Book appointments with board-certified dentists, pediatricians, and wellness specialists in 60 seconds. Instant confirmation and triage via AI.',
    heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&auto=format&fit=crop&q=80',
    heroVideo: '',
    ctaText: 'Book Consultation',

    stat1: '18,000+ Patients Treated',
    stat2: '15+ Specialist Doctors',
    stat3: 'Instant Insurance Pre-check',

    weeklyDeal: { title: 'Family Dental Cleaning & Fluoride Check', desc: 'Complete ultrasonic scaling, polish, digital bite-wing X-ray, and personalized oral health report.', oldPrice: 'KES 7,000', dealPrice: 'KES 4,500', badge: 'LIMITED CLINIC OFFER', timer: '12 Slots Left Today' },
    branches: [
      { name: 'Upper Hill Medical Suite', address: 'Fortis Tower, 5th Floor, Hospital Rd', phone: '+254 720 111 222', hours: '24/7 Emergency & 8:00 AM - 7:00 PM', lat: -1.2995, lng: 36.8144 },
      { name: 'Parklands Dental Hub', address: 'Park Suites, 1st Floor, Parklands', phone: '+254 733 333 444', hours: '8:30 AM - 6:30 PM', lat: -1.2601, lng: 36.8166 }
    ],
    catalog: [
      { id: 'clinic-1', name: 'Ultrasonic Dental Scaling & Polish', category: 'Dental Care', desc: 'Removes stubborn plaque, tartar, and coffee stains. Restores fresh breath and gum health with zero pain.', price: 'KES 4,500', duration: '40 min', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format&fit=crop&q=80', popular: true, tag: 'Most Booked' },
      { id: 'clinic-2', name: 'Laser Teeth Whitening (Single Session)', category: 'Cosmetic Dentistry', desc: 'Brighten teeth by 4 to 8 shades in 45 minutes using gentle medical-grade cold blue laser technology.', price: 'KES 15,000', duration: '45 min', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&auto=format&fit=crop&q=80', popular: true, tag: 'Cosmetic Special' },
      { id: 'clinic-3', name: 'Comprehensive Well-Woman / Well-Man Check', category: 'Preventative Medicine', desc: 'Full blood profile, lipid panel, kidney/liver function, ECG, and consultation with internal medicine physician.', price: 'KES 9,500', duration: '1 hr', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=80', popular: false, tag: 'Wellness' },
      { id: 'clinic-4', name: 'Paediatric & Child Growth Clinic', category: 'Paediatrics', desc: 'Immunizations, developmental milestone review, nutrition assessment, and gentle physician care.', price: 'KES 3,500', duration: '30 min', image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=80', popular: false, tag: 'Kids Friendly' }
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&auto=format&fit=crop&q=80', caption: 'Modern treatment suite', type: 'image' },
      { src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&auto=format&fit=crop&q=80', caption: 'Dental procedure room', type: 'image' },
      { src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&auto=format&fit=crop&q=80', caption: 'Lab diagnostics', type: 'image' },
      { src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&auto=format&fit=crop&q=80', caption: 'Specialist consultation', type: 'image' },
      { src: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&auto=format&fit=crop&q=80', caption: 'Child-friendly paediatrics', type: 'image' },
      { src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop&q=80', caption: 'Reception and waiting', type: 'image' }
    ],
    testimonials: [
      { name: 'James O.', rating: 5, text: 'The dental cleaning was completely painless. Dr. Sarah explained every step. I am bringing my whole family next week.', date: '1 week ago' },
      { name: 'Aisha H.', rating: 5, text: 'Insurance was pre-verified before I even arrived. No queues, no paperwork drama. This is how healthcare should work.', date: '2 weeks ago' },
      { name: 'Dr. Mwangi R.', rating: 5, text: 'As a physician myself, I trust Apex for my family. Their lab turnaround times are the fastest in Upper Hill.', date: '1 month ago' }
    ],
    chatbotPrompts: ['Do you accept Jubilee or APA insurance?', 'Book a dental cleaning for tomorrow', 'How much is teeth whitening?', 'Do you have emergency walk-in slots?'],
    botPersonality: 'empathetic medical coordinator named Dr. Sarah Bot',
    botFaq: {
      'insurance': 'Yes! We are direct-settlement accredited with Jubilee, APA, AAR, Britam, Madison, UAP Old Mutual, and SHA/NHIF civil service schemes. Bring your card or policy number on your visit!',
      'cleaning': 'Dental cleaning is currently KES 4,500 on our weekly health deal (regularly KES 7,000). Would you prefer Upper Hill or Parklands?',
      'whitening': 'Our in-chair laser whitening is KES 15,000 and takes just 45 minutes to brighten your smile up to 8 shades. What day works for you?',
      'emergency': 'For dental emergencies (severe toothache, broken crown, trauma), our Upper Hill facility has walk-in triage available 24/7. Call our emergency hotline +254 720 111 222 immediately.'
    }
  },

  // ──────────────────────────────────────────────────────────────────────
  //  3. REAL ESTATE -- Split-screen property layout
  //     Navy/gold palette, large hero, parallax feel, bold typography
  // ──────────────────────────────────────────────────────────────────────
  realestate: {
    id: 'realestate',
    categoryName: 'Real Estate Agents',
    brandName: 'PrimeNest Realty & Developments',
    tagline: 'Modern Apartments, Prime Land & Luxury Villas in Nairobi',

    layoutMode: 'splitscreen',
    fontDisplay: "'Barlow Condensed', sans-serif",
    fontBody: "'Outfit', sans-serif",
    navStyle: 'glassmorphic',
    animStyle: 'scale-pop',
    cardStyle: 'gradient-border',
    buttonStyle: 'gradient-fill',
    ambientEffect: 'spotlight',

    primaryColor: '#d97706',
    primaryHover: '#b45309',
    secondaryColor: '#2563eb',
    accentColor: '#fbbf24',
    bgColor: '#0b0f19',
    surfaceColor: 'rgba(16, 24, 48, 0.88)',
    borderColor: 'rgba(217, 119, 6, 0.15)',
    textMain: '#f8fafc',
    textMuted: '#94a3b8',
    gradientHero: 'linear-gradient(135deg, rgba(11,15,25,0.75) 0%, rgba(217,119,6,0.1) 100%)',

    heroBadge: 'VERIFIED TITLE DEEDS -- ROI GUARANTEED UP TO 11%',
    heroHeadline: 'Find Your Dream Property. <span>Instant Viewing Booking.</span>',
    heroSubhead: 'Browse verified high-yield investments in Kilimani, Westlands, Kileleshwa, and Lavington. Get instant brochures, payment plans, and video tours.',
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&auto=format&fit=crop&q=80',
    heroVideo: '',
    ctaText: 'Explore Listings',

    stat1: 'KES 2.8B+ Sold & Leased',
    stat2: '180+ Active Listings',
    stat3: 'Virtual 3D Tours Available',

    weeklyDeal: { title: '2-Bedroom Luxury Suite -- Kilimani Off-Plan', desc: 'Rooftop infinity pool, fitted European kitchen, backup generator, borehole & children play area.', oldPrice: 'KES 11.5M', dealPrice: 'KES 9.8M Early Bird', badge: 'INVESTOR SPECIAL', timer: 'Only 3 units remaining at this price' },
    branches: [
      { name: 'Head Office', address: 'Delta Corner Tower A, 7th Floor, Westlands', phone: '+254 700 888 999', hours: 'Mon-Sat: 8:30 AM - 6:00 PM', lat: -1.2641, lng: 36.8032 }
    ],
    catalog: [
      { id: 'prop-1', name: 'The Azure -- 2 Bed Luxury Apartment', category: 'Apartments for Sale', desc: 'Kilimani, Nairobi. 115 sqm with balcony, gym, heated pool, high-speed lifts, and expected rental yield of 10.5%.', price: 'KES 9,800,000', duration: 'Available Now', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop&q=80', popular: true, tag: 'High ROI' },
      { id: 'prop-2', name: 'Serene Haven -- 4 Bed Townhouse + DSQ', category: 'Villas & Houses', desc: 'Lavington gated community. Private garden, 2-car garage, solar water heating, 24/7 armed security.', price: 'KES 48,000,000', duration: 'Ready to Move In', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80', popular: true, tag: 'Luxury' },
      { id: 'prop-3', name: 'Westlands View -- Fully Furnished 1 Bed', category: 'Rental / Airbnb Ready', desc: 'Rhapta Rd, Westlands. Airbnb certified, designer furniture, high occupancy track record (KES 120k/mo).', price: 'KES 6,900,000', duration: 'Cash or Mortgage', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop&q=80', popular: false, tag: 'Airbnb Ready' },
      { id: 'prop-4', name: 'Tigoni Prime 1/4 Acre Red Soil Plot', category: 'Land & Plots', desc: 'Scenic tea farm backdrop, ready freehold title deed, electricity & tarmac road access.', price: 'KES 7,500,000', duration: 'Freehold Title', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80', popular: false, tag: 'Verified Deed' }
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&auto=format&fit=crop&q=80', caption: 'The Azure penthouse view', type: 'image' },
      { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80', caption: 'Serene Haven exterior', type: 'image' },
      { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&auto=format&fit=crop&q=80', caption: 'Interior designer kitchen', type: 'image' },
      { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&auto=format&fit=crop&q=80', caption: 'Infinity pool rooftop', type: 'image' },
      { src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&auto=format&fit=crop&q=80', caption: 'Master bedroom suite', type: 'image' },
      { src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&auto=format&fit=crop&q=80', caption: 'Tigoni land panorama', type: 'image' }
    ],
    testimonials: [
      { name: 'Eng. Ochieng P.', rating: 5, text: 'Bought two units at The Azure through PrimeNest. Rental yield has been 10.2% consistently. Their title deed verification process gave me total confidence.', date: '1 month ago' },
      { name: 'Caroline W.', rating: 5, text: 'The AI chatbot sent me the brochure and payment plan within seconds at midnight. I visited the site the next morning and signed. Seamless.', date: '2 weeks ago' },
      { name: 'Michael N.', rating: 5, text: 'PrimeNest handled my mortgage application with KCB end to end. Got 85% financing approved in 5 days.', date: '3 weeks ago' }
    ],
    chatbotPrompts: ['Show 2-bedroom apartments in Kilimani under 10M', 'Schedule a physical site viewing for Friday', 'Do you offer mortgage financing guidance?', 'Send me the brochure and payment plan via WhatsApp'],
    botPersonality: 'knowledgeable property consultant named Marcus AI',
    botFaq: {
      'kilimani': 'We have 2 units left at The Azure Kilimani starting at KES 9.8M with flexible 20% deposit and 2-year payment plan! Would you like me to send you the floor plan and video walkthrough?',
      'viewing': 'I can book your viewing immediately! Which property would you like to see, and does Friday 10:00 AM or 2:30 PM suit you better?',
      'mortgage': 'Yes, we have partnerships with KCB, Stanbic, and NCBA offering up to 90% financing. What budget range are you looking to finance?',
      'brochure': 'Please enter your WhatsApp number or email, and I will dispatch the full PDF brochure with price breakdowns immediately!'
    }
  },

  // ──────────────────────────────────────────────────────────────────────
  //  4. GYM / FITNESS -- Brutal energy layout
  //     High contrast, bold condensed, sharp angular, aggressive animations
  // ──────────────────────────────────────────────────────────────────────
  gym: {
    id: 'gym',
    categoryName: 'Gyms & Fitness Centers',
    brandName: 'IronPulse Fitness & Performance Club',
    tagline: 'Elite Strength, HIIT, Boxing, Steam & Nutrition Coaching',

    layoutMode: 'brutal',
    fontDisplay: "'Barlow Condensed', sans-serif",
    fontBody: "'Outfit', sans-serif",
    navStyle: 'bold-bar',
    animStyle: 'glitch',
    cardStyle: 'brutalist',
    buttonStyle: 'sharp-edge',
    ambientEffect: 'neon-pulse',

    primaryColor: '#eab308',
    primaryHover: '#ca8a04',
    secondaryColor: '#ef4444',
    accentColor: '#f97316',
    bgColor: '#0a0a0a',
    surfaceColor: 'rgba(18, 18, 18, 0.95)',
    borderColor: 'rgba(234, 179, 8, 0.2)',
    textMain: '#ffffff',
    textMuted: '#a3a3a3',
    gradientHero: 'linear-gradient(180deg, rgba(10,10,10,0.5) 0%, rgba(234,179,8,0.08) 100%)',

    heroBadge: 'CLAIM YOUR FREE 1-DAY VIP PASS TODAY',
    heroHeadline: 'Crush Your Goals. <span>Never Train Alone.</span>',
    heroSubhead: 'State-of-the-art Olympic lifting, group cardio, steam & sauna, and certified personal trainers who keep you accountable every day.',
    heroImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&auto=format&fit=crop&q=80',
    heroVideo: 'https://assets.mixkit.co/videos/preview/mixkit-muscular-man-doing-crossfit-exercises-23458-large.mp4',
    ctaText: 'Claim Free Day Pass',

    stat1: '2,400+ Active Members',
    stat2: '45+ Weekly Classes',
    stat3: 'Open 5:00 AM - 10:00 PM',

    weeklyDeal: { title: '3-Month All-Access Membership + Free Nutrition Plan', desc: 'Includes unlimited gym floor access, all group classes (Spinning, Zumba, Boxing), steam room, and body composition scan.', oldPrice: 'KES 24,000', dealPrice: 'KES 16,500', badge: 'QUARTERLY DEAL', timer: '5 passes remaining this month' },
    branches: [
      { name: 'Kilimani Flagship', address: 'Wood Avenue Plaza, 3rd Floor', phone: '+254 711 777 888', hours: 'Mon-Fri 5am-10pm / Sat 6am-9pm / Sun 7am-7pm', lat: -1.2921, lng: 36.7856 },
      { name: 'Westlands Club', address: 'Mpaka Rd, Near Sarit Centre', phone: '+254 722 666 555', hours: 'Mon-Fri 5am-10pm / Sat 6am-9pm / Sun 7am-7pm', lat: -1.2641, lng: 36.8032 }
    ],
    catalog: [
      { id: 'gym-1', name: 'Monthly Unlimited Membership', category: 'Memberships', desc: 'Full access to weights, cardio theater, group classes, showers, and infrared sauna.', price: 'KES 7,500 / mo', duration: '30 Days', image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80', popular: true, tag: 'Most Popular' },
      { id: 'gym-2', name: '1-on-1 Personal Training (12 Sessions)', category: 'Personal Training', desc: 'Dedicated coach, custom workout program, weekly body fat checks, and personalized macros.', price: 'KES 18,000', duration: '12 Sessions', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop&q=80', popular: true, tag: 'Fast Results' },
      { id: 'gym-3', name: 'Daily Drop-in Pass', category: 'Passes', desc: 'Single full-day pass with full access to gym floor and group fitness classes of the day.', price: 'KES 1,000', duration: 'Full Day', image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&auto=format&fit=crop&q=80', popular: false, tag: 'Flexible' },
      { id: 'gym-4', name: 'Combat Boxing & Kickboxing Class', category: 'Classes', desc: 'High-intensity conditioning, heavy bag combos, footwork, and core torching.', price: 'KES 1,200 / class', duration: '55 min', image: 'https://images.unsplash.com/photo-1549476464-37392f717541?w=800&auto=format&fit=crop&q=80', popular: false, tag: 'HIIT' }
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=80', caption: 'Main gym floor', type: 'image' },
      { src: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80', caption: 'Free weights zone', type: 'image' },
      { src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&auto=format&fit=crop&q=80', caption: 'PT session', type: 'image' },
      { src: 'https://images.unsplash.com/photo-1549476464-37392f717541?w=600&auto=format&fit=crop&q=80', caption: 'Boxing ring', type: 'image' },
      { src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&auto=format&fit=crop&q=80', caption: 'Cardio theater', type: 'image' },
      { src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&auto=format&fit=crop&q=80', caption: 'Group spinning class', type: 'image' }
    ],
    testimonials: [
      { name: 'Brian T.', rating: 5, text: 'Lost 14 kilos in 3 months with Coach Alex. The accountability and meal plan made all the difference. Best investment I have ever made.', date: '2 weeks ago' },
      { name: 'Diana K.', rating: 5, text: 'The 5 AM crowd is motivated and the equipment is always clean and available. Steam room after heavy legs is therapy.', date: '1 month ago' },
      { name: 'Kevin M.', rating: 5, text: 'Got the free day pass through the chatbot, tried a boxing class, and signed up for 3 months on the spot. No regrets.', date: '3 weeks ago' }
    ],
    chatbotPrompts: ['How much is monthly gym membership?', 'Can I get a free 1-day guest pass?', 'What time are the evening Zumba & Spinning classes?', 'Do you have personal trainers available for weight loss?'],
    botPersonality: 'energetic fitness motivator named Coach Alex Bot',
    botFaq: {
      'membership': 'Our monthly all-access membership is KES 7,500 (or grab our 3-month special for KES 16,500 which saves you KES 7,500). Includes weights, cardio, sauna & group classes!',
      'pass': 'Yes! I can issue you a 1-day complimentary VIP pass right now. What is your full name and WhatsApp number?',
      'classes': 'Evening classes run daily at 5:30 PM (HIIT/Spinning) and 6:30 PM (Zumba/Boxing). No booking fee for members!',
      'trainer': 'We have 8 certified trainers specializing in fat loss, muscle building, and sports rehab. 12 dedicated 1-on-1 sessions are KES 18,000.'
    }
  },

  // ──────────────────────────────────────────────────────────────────────
  //  5. SCHOOL / DRIVING -- Friendly accessible layout
  //     Bright green, rounded elements, bounce transitions, card-based
  // ──────────────────────────────────────────────────────────────────────
  school: {
    id: 'school',
    categoryName: 'Schools & Driving Academies',
    brandName: 'Pinnacle Driving Academy & College',
    tagline: 'NTSA Certified Driver Training & Technical Skills Courses',

    layoutMode: 'friendly',
    fontDisplay: "'Outfit', sans-serif",
    fontBody: "'Inter', sans-serif",
    navStyle: 'rounded',
    animStyle: 'bounce',
    cardStyle: 'rounded-shadow',
    buttonStyle: 'rounded-soft',
    ambientEffect: 'none',

    primaryColor: '#16a34a',
    primaryHover: '#15803d',
    secondaryColor: '#f97316',
    accentColor: '#22c55e',
    bgColor: '#0a110d',
    surfaceColor: 'rgba(14, 28, 18, 0.88)',
    borderColor: 'rgba(22, 163, 74, 0.12)',
    textMain: '#f0fdf4',
    textMuted: '#86efac',
    gradientHero: 'linear-gradient(180deg, rgba(10,17,13,0.65) 0%, rgba(22,163,74,0.1) 100%)',

    heroBadge: 'NEW INTAKE ENROLLING -- 98% FIRST-TIME PASS RATE',
    heroHeadline: 'Get Licensed Fast. <span>Learn with Confidence.</span>',
    heroSubhead: 'Government approved NTSA driving school with modern dual-control vehicles, flexible evening & weekend schedules, and guaranteed test booking.',
    heroImage: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&auto=format&fit=crop&q=80',
    heroVideo: '',
    ctaText: 'Enroll for Intake',

    stat1: '14,000+ Licensed Drivers',
    stat2: 'NTSA Accredited',
    stat3: 'Dual Control Vehicles',

    weeklyDeal: { title: 'Class B (Saloon Car) Complete Package + NTSA Test Fee', desc: '20 practical driving lessons, theory classes, defensive driving seminar, and first interim license fee covered.', oldPrice: 'KES 16,500', dealPrice: 'KES 13,000', badge: 'INTAKE OFFER', timer: 'Registration closes Friday' },
    branches: [
      { name: 'Nairobi CBD Campus', address: 'Information House, 3rd Floor, Hakati Rd', phone: '+254 722 000 111', hours: 'Mon-Sat: 7:00 AM - 7:00 PM', lat: -1.2864, lng: 36.8172 },
      { name: 'Kasarani Training Grounds', address: 'Opposite Kasarani Stadium Gate 2', phone: '+254 733 222 333', hours: 'Mon-Sun: 7:00 AM - 6:30 PM', lat: -1.2230, lng: 36.8906 }
    ],
    catalog: [
      { id: 'sch-1', name: 'Class B1/B2 Light Vehicle (Manual & Automatic)', category: 'Driving Courses', desc: 'Learn on modern sedans and hatchbacks. Comprehensive steering, hill-starts, parallel parking, and highway driving.', price: 'KES 13,000', duration: '4 Weeks', image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop&q=80', popular: true, tag: 'Most Popular' },
      { id: 'sch-2', name: 'Class A2 Motorbike & Bodaboda License', category: 'Motorcycle Training', desc: 'Balance training, road safety, defensive riding maneuvers, and safety gear awareness.', price: 'KES 7,500', duration: '2 Weeks', image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&auto=format&fit=crop&q=80', popular: false, tag: 'Quick Cert' },
      { id: 'sch-3', name: 'Class C1 Commercial Truck & Van (Rigid)', category: 'Commercial', desc: 'For career drivers seeking employment. Heavy vehicle handling, reversing, and logistics cargo safety.', price: 'KES 16,000', duration: '4 Weeks', image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&auto=format&fit=crop&q=80', popular: true, tag: 'Job Ready' },
      { id: 'sch-4', name: 'Refresher Course for Licensed Drivers', category: 'Refresher', desc: 'Gain highway confidence, roundabouts mastery, night driving, and parallel parking without anxiety.', price: 'KES 6,000', duration: '10 Lessons', image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop&q=80', popular: false, tag: 'Confidence' }
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&auto=format&fit=crop&q=80', caption: 'Behind the wheel training', type: 'image' },
      { src: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&auto=format&fit=crop&q=80', caption: 'Our training vehicles', type: 'image' },
      { src: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&auto=format&fit=crop&q=80', caption: 'Motorcycle course', type: 'image' },
      { src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=80', caption: 'Commercial truck training', type: 'image' }
    ],
    testimonials: [
      { name: 'Faith W.', rating: 5, text: 'Was terrified of driving. My instructor was patient beyond belief. Passed my NTSA test on the first attempt. Thank you, Pinnacle!', date: '1 week ago' },
      { name: 'Dennis M.', rating: 5, text: 'Got my Class C license and secured a job with a logistics company within 2 weeks of graduating. The training was thorough and practical.', date: '2 weeks ago' },
      { name: 'Mercy N.', rating: 5, text: 'Evening classes after work were perfect for my schedule. The online theory portal saved me so much time.', date: '3 weeks ago' }
    ],
    chatbotPrompts: ['What are the fees for manual vs automatic driving?', 'When is the next intake date?', 'Do you help with NTSA eCitizen test booking?', 'Can I take evening lessons after 5 PM?'],
    botPersonality: 'clear academic advisor named Registrar Bot',
    botFaq: {
      'fees': 'Class B (Saloon Car) is currently KES 13,000 on our intake offer. Both manual and automatic lessons are included so you can choose which one you prefer!',
      'intake': 'New intakes start every Monday! You can register online today and begin your theory and practical lessons this week.',
      'ntsa': 'Yes! We handle your NTSA PDL (Provisional Driving License), test booking on eCitizen, and interim driver license processing end-to-end.',
      'evening': 'Yes, we have early morning classes starting at 7:00 AM and evening slots up to 7:00 PM, plus full Saturday and Sunday training sessions.'
    }
  },

  // ──────────────────────────────────────────────────────────────────────
  //  6. CAR DEALER -- Cinematic automotive layout
  //     Carbon dark, metallic accents, cinematic transitions, sleek lines
  // ──────────────────────────────────────────────────────────────────────
  cardealer: {
    id: 'cardealer',
    categoryName: 'Car Dealers & Boutiques',
    brandName: 'Velocita Motors & Luxury Boutique',
    tagline: 'Certified Clean Japanese & European Imports in Nairobi',

    layoutMode: 'cinematic',
    fontDisplay: "'Barlow Condensed', sans-serif",
    fontBody: "'Outfit', sans-serif",
    navStyle: 'dark-chrome',
    animStyle: 'cinematic-pan',
    cardStyle: 'metallic',
    buttonStyle: 'chrome',
    ambientEffect: 'particle',

    primaryColor: '#f97316',
    primaryHover: '#ea580c',
    secondaryColor: '#3b82f6',
    accentColor: '#f59e0b',
    bgColor: '#08090c',
    surfaceColor: 'rgba(16, 18, 24, 0.92)',
    borderColor: 'rgba(249, 115, 22, 0.12)',
    textMain: '#f8fafc',
    textMuted: '#94a3b8',
    gradientHero: 'linear-gradient(135deg, rgba(8,9,12,0.65) 0%, rgba(249,115,22,0.08) 100%)',

    heroBadge: 'UP TO 80% BANK ASSET FINANCING -- 2-YEAR WARRANTY',
    heroHeadline: 'Drive Your Dream. <span>No Shady Deals.</span>',
    heroSubhead: 'Every vehicle is auction grade 4.5+, verified mileage, duty paid with instant logbook transfer. Reserve or calculate monthly loan payments in seconds.',
    heroImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&auto=format&fit=crop&q=80',
    heroVideo: 'https://assets.mixkit.co/videos/preview/mixkit-luxury-sports-car-driving-on-the-road-5204-large.mp4',
    ctaText: 'Explore Showroom',

    stat1: '850+ Cars Delivered',
    stat2: 'Grade 4.5+ Only',
    stat3: 'Instant Trade-in Valuation',

    weeklyDeal: { title: '2019 Mazda CX-5 2.2D AWD L-Package', desc: 'Sunroof, brown nappa leather, 360 camera, Bose audio, heads-up display. Just cleared at Mombasa port.', oldPrice: 'KES 3,350,000', dealPrice: 'KES 3,050,000 Duty Paid', badge: 'HOT IMPORT', timer: 'Test drive slots available' },
    branches: [
      { name: 'Showroom 1 (Kiambu Rd)', address: 'Near Ridgeaways Mall, Kiambu Rd', phone: '+254 711 555 444', hours: 'Mon-Sat: 8:00 AM - 6:30 PM', lat: -1.2163, lng: 36.8432 },
      { name: 'Showroom 2 (Mombasa Rd)', address: 'Next to NextGen Mall, Mombasa Rd', phone: '+254 722 444 333', hours: 'Mon-Sat: 8:00 AM - 6:30 PM', lat: -1.3197, lng: 36.8524 }
    ],
    catalog: [
      { id: 'car-1', name: '2019 Mazda CX-5 AWD L-Package', category: 'Compact SUV', desc: 'Pearl White, 2,200cc SkyActiv-D, full leather, electric seats, radar cruise control, Bose 10-speaker system.', price: 'KES 3,050,000', duration: 'Grade 4.5A / 48k km', image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop&q=80', popular: true, tag: 'Top Seller' },
      { id: 'car-2', name: '2018 Toyota Prado TX-L 2.8 Diesel', category: 'Heavy 4x4', desc: '7-seater, beige leather interior, sunroof, Modellista bodykit, roof rails, 4WD differential locks.', price: 'KES 7,200,000', duration: 'Grade 4.5 / 54k km', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&auto=format&fit=crop&q=80', popular: true, tag: 'VIP Ride' },
      { id: 'car-3', name: '2018 Mercedes-Benz C200 AMG Line', category: 'Executive Sedan', desc: 'Panoramic sunroof, digital cockpit, ambient mood lighting, 19" AMG alloys, burmester audio.', price: 'KES 4,150,000', duration: 'Clean Title / 42k km', image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80', popular: false, tag: 'Executive' },
      { id: 'car-4', name: '2018 Subaru Forester XT Eyesight Turbo', category: 'All-Wheel Drive', desc: '2,000cc DIT Boxer Turbo, X-Mode, paddle shifters, half leather seats, eyesight collision mitigation.', price: 'KES 2,850,000', duration: 'Grade 4.5 / 61k km', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=80', popular: false, tag: 'Turbo' }
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&auto=format&fit=crop&q=80', caption: 'Showroom entrance', type: 'image' },
      { src: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&auto=format&fit=crop&q=80', caption: 'Mazda CX-5 detail', type: 'image' },
      { src: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&auto=format&fit=crop&q=80', caption: 'Prado TX-L showcase', type: 'image' },
      { src: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600&auto=format&fit=crop&q=80', caption: 'C200 AMG Line interior', type: 'image' },
      { src: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&auto=format&fit=crop&q=80', caption: 'Forester XT at sunset', type: 'image' },
      { src: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&auto=format&fit=crop&q=80', caption: 'Fleet parking lot', type: 'image' }
    ],
    testimonials: [
      { name: 'Samuel K.', rating: 5, text: 'Bought my CX-5 from Velocita. Grade 4.5A exactly as listed. The 80% financing was processed in 3 days through NCBA. Clean deal, no hidden costs.', date: '2 weeks ago' },
      { name: 'Agnes M.', rating: 5, text: 'The chatbot helped me calculate monthly payments for a Prado at 2 AM. By morning, I had a test drive booked. This is the future of car shopping.', date: '1 month ago' },
      { name: 'Joseph W.', rating: 5, text: 'Traded in my old Impreza and drove off in a Forester XT the same day. The valuation was fair and transparent. Highly recommended.', date: '3 weeks ago' }
    ],
    chatbotPrompts: ['Is the 2019 Mazda CX-5 still available?', 'What is the minimum bank deposit for asset finance?', 'Can I trade in my old car?', 'Book a test drive on Kiambu Road for Saturday'],
    botPersonality: 'sharp automotive advisor named Ken Motors AI',
    botFaq: {
      'available': 'Yes, the 2019 Mazda CX-5 L-Package in Pearl White is parked at our Kiambu Road showroom and ready for test drive! Price is KES 3,050,000 duty paid. Would you like to view it today?',
      'finance': 'You can drive off with just 20% deposit (approx KES 610,000), and pay the balance over 36 to 60 months with NCBA, Stanbic, or Equity Bank. We process approvals in 48 hours!',
      'tradein': 'Yes, we accept trade-ins! Send us photos of your current car, mileage, and year of manufacture, and we will give you an instant valuation offset.',
      'testdrive': 'I can book your test drive right now! Saturday morning (10:00 AM) or afternoon (2:00 PM)? Please provide your name and phone number.'
    }
  }
};
