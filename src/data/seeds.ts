import { Prospect } from '@/types';

export const SEED_PROSPECTS: Prospect[] = [
  // 1. SALON & SPA (L1: Editorial Luxe)
  {
    id: 'p-salon-01',
    slug: 'velvet-rose-spa',
    vertical: 'salon',
    business: 'Velvet Rose Spa & Lounge',
    owner: 'Chloe Wambui',
    area: 'Kilimani, Nairobi',
    city: 'Nairobi',
    phone: '+254711234567',
    whatsapp: '+254711234567',
    email: 'hello@velvetrose.co.ke',
    address: 'Argwings Kodhek Rd, Kilimani, Nairobi',
    rating: 4.9,
    review_count: 142,
    instagram_handle: 'velvetrosenbi',
    tone: 'luxury',
    selected_layout: 1,
    status: 'draft',
    created_at: new Date().toISOString(),
    brand: {
      primary: '#C89B3C',
      secondary: '#0F1117',
      accent: '#DE8959',
      fontPair: 'Cormorant Garamond + Inter',
      logoUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=200&auto=format&fit=crop&q=80',
    },
    services: [
      { id: 's-1', name: 'Signature Moroccan Bath & Steam', price_kes: 4500, duration_min: 90, is_featured: true, sort_order: 1 },
      { id: 's-2', name: 'Silk Press & Deep Scalp Hydration', price_kes: 3500, duration_min: 75, is_featured: true, sort_order: 2 },
      { id: 's-3', name: 'Luxury Gel Sculpt & Russian Manicure', price_kes: 2800, duration_min: 60, is_featured: false, sort_order: 3 },
      { id: 's-4', name: 'Swedish Full Body Deep Tissue', price_kes: 4000, duration_min: 60, is_featured: false, sort_order: 4 },
      { id: 's-5', name: 'Hydra-Glow Facial Therapy', price_kes: 5000, duration_min: 60, is_featured: true, sort_order: 5 },
    ],
    reviews: [
      { id: 'r-1', author: 'Faith Njeri', rating: 5, text: 'The Moroccan bath experience is unmatched in Kilimani. The ambiance and attention to detail make every penny worth it.', review_date: '2 days ago', source: 'google' },
      { id: 'r-2', author: 'Sharon Achieng', rating: 5, text: 'Booked via their assistant in 30 seconds. Stylist was ready the moment I walked in.', review_date: '1 week ago', source: 'google' },
      { id: 'r-3', author: 'Carolyne Mwangi', rating: 4.8, text: 'Clean, elegant, and peaceful. My silk press lasted 3 full weeks.', review_date: '3 weeks ago', source: 'placeholder' },
    ],
    media: [
      { id: 'm-1', kind: 'hero', url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&auto=format&fit=crop&q=80', is_placeholder: false },
      { id: 'm-2', kind: 'gallery', url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&auto=format&fit=crop&q=80', is_placeholder: false },
      { id: 'm-3', kind: 'gallery', url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80', is_placeholder: false },
      { id: 'm-4', kind: 'gallery', url: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&auto=format&fit=crop&q=80', is_placeholder: false },
    ],
    chatbot_config: {
      persona: 'Maji the Spa Host',
      greeting: "Hello, I am Velvet Rose's booking assistant. Looking to schedule a Moroccan bath, hair treatment, or manicure today?",
      faqs: [
        { q: 'Do you take walk-ins?', a: 'We accept walk-ins based on availability, but we recommend booking in advance to guarantee your slot.' },
        { q: 'Where are you located?', a: 'Along Argwings Kodhek Rd, opposite Yaya Centre, Kilimani, Nairobi.' }
      ],
      booking_fields: ['name', 'phone', 'preferredSlot'],
    }
  },

  // 2. DENTAL CLINIC (L3: Bento Grid)
  {
    id: 'p-clinic-02',
    slug: 'apex-dental-care',
    vertical: 'clinic',
    business: 'Apex Dental Care',
    owner: 'Dr. Kevin Kamau',
    area: 'Westlands, Nairobi',
    city: 'Nairobi',
    phone: '+254722345678',
    whatsapp: '+254722345678',
    email: 'info@apexdental.co.ke',
    address: 'One Africa Place, 4th Floor, Waiyaki Way, Westlands',
    rating: 4.9,
    review_count: 198,
    instagram_handle: 'apexdentalnbi',
    tone: 'clinical',
    selected_layout: 3,
    status: 'draft',
    created_at: new Date().toISOString(),
    brand: {
      primary: '#059669',
      secondary: '#0F172A',
      accent: '#10B981',
      fontPair: 'Plus Jakarta Sans + Inter',
      logoUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=200&auto=format&fit=crop&q=80',
    },
    services: [
      { id: 's-201', name: 'Laser Teeth Whitening Session', price_kes: 12000, duration_min: 45, is_featured: true, sort_order: 1 },
      { id: 's-202', name: 'Comprehensive Dental Exam & Polish', price_kes: 3500, duration_min: 30, is_featured: true, sort_order: 2 },
      { id: 's-203', name: 'Invisalign Alignment Assessment', price_kes: 5000, duration_min: 45, is_featured: false, sort_order: 3 },
      { id: 's-204', name: 'Emergency Tooth Ache Relief', price_kes: 4000, duration_min: 40, is_featured: true, sort_order: 4 },
    ],
    reviews: [
      { id: 'r-201', author: 'Brian Omondi', rating: 5, text: 'Zero pain during my deep scaling. Dr. Kamau explains every step clearly.', review_date: '3 days ago', source: 'google' },
      { id: 'r-202', author: 'Mercy Chebet', rating: 5, text: 'Modern facility, laser whitening results exceeded my expectations.', review_date: '2 weeks ago', source: 'google' },
      { id: 'r-203', author: 'David Mutua', rating: 4.9, text: 'Friendly staff and prompt appointments.', review_date: '1 month ago', source: 'placeholder' },
    ],
    media: [
      { id: 'm-201', kind: 'hero', url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&auto=format&fit=crop&q=80', is_placeholder: false },
      { id: 'm-202', kind: 'gallery', url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format&fit=crop&q=80', is_placeholder: false },
    ],
    chatbot_config: {
      persona: 'Sarah the Dental Assistant',
      greeting: "Welcome to Apex Dental Care. Would you like to schedule an exam, teeth whitening, or emergency dental check?",
      faqs: [
        { q: 'Do you accept insurance?', a: 'Yes, we accept major Kenyan insurance providers including Jubilee, APA, Britam, and Madison.' }
      ],
      booking_fields: ['name', 'phone', 'preferredSlot'],
    }
  },

  // 3. RESTAURANT & GRILL (L2: Neon Night / L8: Conversion Machine)
  {
    id: 'p-restaurant-03',
    slug: 'skyfall-grill-lounge',
    vertical: 'restaurant',
    business: 'Skyfall Rooftop Grill & Lounge',
    owner: 'Mark Otieno',
    area: 'Westlands, Nairobi',
    city: 'Nairobi',
    phone: '+254733456789',
    whatsapp: '+254733456789',
    email: 'reservations@skyfall.co.ke',
    address: 'The Mirage Tower, 14th Floor, Chiromo Rd, Westlands',
    rating: 4.8,
    review_count: 310,
    instagram_handle: 'skyfallnairobi',
    tone: 'bold',
    selected_layout: 2,
    status: 'draft',
    created_at: new Date().toISOString(),
    brand: {
      primary: '#DC2626',
      secondary: '#0A0A0F',
      accent: '#F59E0B',
      fontPair: 'Unbounded + Space Grotesk',
      logoUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=200&auto=format&fit=crop&q=80',
    },
    services: [
      { id: 's-301', name: 'Prime Aged T-Bone Steak (500g)', price_kes: 2400, duration_min: 25, is_featured: true, sort_order: 1 },
      { id: 's-302', name: 'Charcoal Grilled Lamb Chops Platter', price_kes: 2200, duration_min: 20, is_featured: true, sort_order: 2 },
      { id: 's-303', name: 'Signature Sunset Cocktails (2 for 1)', price_kes: 1500, duration_min: 10, is_featured: true, sort_order: 3 },
      { id: 's-304', name: 'Crispy Buffalo Wings Sharing Basket', price_kes: 1300, duration_min: 15, is_featured: false, sort_order: 4 },
    ],
    reviews: [
      { id: 'r-301', author: 'George Kiprop', rating: 5, text: 'Best skyline views in Westlands. The T-bone steak was cooked to medium rare perfection.', review_date: 'Yesterday', source: 'google' },
      { id: 'r-302', author: 'Jessica Mutua', rating: 4.9, text: 'Table QR ordering was seamless. Food arrived within 18 minutes of ordering from phone.', review_date: '5 days ago', source: 'google' },
      { id: 'r-303', author: 'Alex Thorne', rating: 5, text: 'Incredible sunset atmosphere and craft drinks.', review_date: '2 weeks ago', source: 'placeholder' },
    ],
    media: [
      { id: 'm-301', kind: 'hero', url: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1600&auto=format&fit=crop&q=80', is_placeholder: false },
      { id: 'm-302', kind: 'gallery', url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80', is_placeholder: false },
    ],
    chatbot_config: {
      persona: 'Skyfall Hostess',
      greeting: 'Welcome to Skyfall Rooftop! Would you like to reserve a sunset table or view our live grill menu?',
      faqs: [
        { q: 'Is there parking?', a: 'Yes, secure multi-level basement parking is available with complimentary validation for diners.' }
      ],
      booking_fields: ['name', 'phone', 'preferredSlot'],
    }
  }
];

export const SEED_PRICE_BOOK = [
  { vertical: 'salon', service_name: 'Signature Moroccan Bath & Steam', default_price_kes: 4500, duration_min: 90 },
  { vertical: 'salon', service_name: 'Silk Press & Scalp Care', default_price_kes: 3500, duration_min: 75 },
  { vertical: 'salon', service_name: 'Gel Sculpting & Nail Art', default_price_kes: 2800, duration_min: 60 },
  { vertical: 'clinic', service_name: 'Comprehensive Exam & Polish', default_price_kes: 3500, duration_min: 30 },
  { vertical: 'clinic', service_name: 'Laser Teeth Whitening', default_price_kes: 12000, duration_min: 45 },
  { vertical: 'realestate', service_name: 'Exclusive VIP Property Tour', default_price_kes: 0, duration_min: 120 },
  { vertical: 'gym', service_name: 'Monthly Unlimited Membership', default_price_kes: 7500, duration_min: 30 },
  { vertical: 'gym', service_name: 'Personal Training (12 Sessions)', default_price_kes: 24000, duration_min: 60 },
  { vertical: 'school', service_name: 'Term 1 Tuition & Learning Kit', default_price_kes: 65000, duration_min: 0 },
  { vertical: 'auto', service_name: 'Ceramic Coating & Paint Shield', default_price_kes: 35000, duration_min: 240 },
  { vertical: 'restaurant', service_name: 'Prime Grilled Meat Platter', default_price_kes: 2800, duration_min: 30 },
];
