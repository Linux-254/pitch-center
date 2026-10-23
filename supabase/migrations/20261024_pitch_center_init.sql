-- ═══════════════════════════════════════════════════════════════
-- PITCH CENTER v2 SUPABASE SCHEMA (MIGRATION & RLS POLICIES)
-- ═══════════════════════════════════════════════════════════════

-- 1. Agency Settings Table
CREATE TABLE IF NOT EXISTS agency_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  agency_name TEXT NOT NULL DEFAULT 'CyTech Studios',
  whatsapp TEXT NOT NULL DEFAULT '+254700000000',
  default_currency TEXT NOT NULL DEFAULT 'KES',
  package_tiers JSONB NOT NULL DEFAULT '{
    "starter": { "name": "Starter QR", "price_kes": 30000, "deposit_percent": 100, "description": "Same-day QR menu/site setup" },
    "standard": { "name": "Standard Growth", "price_kes": 95000, "deposit_percent": 60, "description": "Full site + AI chatbot + booking engine" },
    "enterprise": { "name": "Full Enterprise", "price_min_kes": 180000, "price_max_kes": 260000, "deposit_percent": 50, "description": "Full site + POS bridge + M-Pesa STK push" }
  }'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Default Price Book Table (Per-vertical standards)
CREATE TABLE IF NOT EXISTS price_book (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  vertical TEXT NOT NULL,
  service_name TEXT NOT NULL,
  default_price_kes INT NOT NULL,
  duration_min INT DEFAULT 60,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Prospects Table
CREATE TABLE IF NOT EXISTS prospects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  vertical TEXT NOT NULL,
  business TEXT NOT NULL,
  owner TEXT NOT NULL,
  area TEXT NOT NULL,
  city TEXT NOT NULL DEFAULT 'Nairobi',
  phone TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  email TEXT,
  address TEXT NOT NULL,
  hours JSONB DEFAULT '{"mon_fri": "8:00 AM - 7:00 PM", "sat": "9:00 AM - 6:00 PM", "sun": "Closed"}'::jsonb,
  brand JSONB NOT NULL DEFAULT '{"primary": "#C89B3C", "secondary": "#0F1117", "accent": "#DE8959", "fontPair": "Cormorant+Inter"}'::jsonb,
  maps_place_id TEXT,
  maps_url TEXT,
  maps_embed_url TEXT,
  rating NUMERIC(2,1) DEFAULT 4.9,
  review_count INT DEFAULT 85,
  instagram_handle TEXT,
  tone TEXT DEFAULT 'luxury',
  selected_layout INT DEFAULT 1,
  status TEXT DEFAULT 'draft',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Services Table
CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  prospect_id UUID REFERENCES prospects(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  price_kes INT NOT NULL,
  duration_min INT DEFAULT 60,
  image_url TEXT,
  sort_order INT DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Reviews Table
CREATE TABLE IF NOT EXISTS reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  prospect_id UUID REFERENCES prospects(id) ON DELETE CASCADE,
  author TEXT NOT NULL,
  rating NUMERIC(2,1) NOT NULL,
  text TEXT NOT NULL,
  review_date TEXT,
  source TEXT DEFAULT 'placeholder',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Media Table
CREATE TABLE IF NOT EXISTS media (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  prospect_id UUID REFERENCES prospects(id) ON DELETE CASCADE,
  kind TEXT NOT NULL,
  url TEXT NOT NULL,
  link_url TEXT,
  is_placeholder BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Chatbot Configs Table
CREATE TABLE IF NOT EXISTS chatbot_configs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  prospect_id UUID REFERENCES prospects(id) ON DELETE CASCADE,
  persona TEXT NOT NULL,
  greeting TEXT NOT NULL,
  faqs JSONB DEFAULT '[]'::jsonb,
  booking_fields JSONB DEFAULT '["name", "phone", "preferredSlot"]'::jsonb
);

-- 8. Tickets Table (Bookings, Orders)
CREATE TABLE IF NOT EXISTS tickets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  prospect_id UUID REFERENCES prospects(id) ON DELETE CASCADE,
  customer_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT NOT NULL,
  slot TEXT NOT NULL,
  value_kes INT NOT NULL,
  status TEXT DEFAULT 'incoming',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. Pitch Links Table
CREATE TABLE IF NOT EXISTS pitch_links (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  prospect_id UUID REFERENCES prospects(id) ON DELETE CASCADE,
  code TEXT UNIQUE NOT NULL,
  layout INT DEFAULT 1,
  device TEXT DEFAULT 'auto',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 10. Engagement Events Table
CREATE TABLE IF NOT EXISTS events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  link_id UUID REFERENCES pitch_links(id) ON DELETE SET NULL,
  prospect_id UUID REFERENCES prospects(id) ON DELETE CASCADE,
  event TEXT NOT NULL,
  device TEXT,
  value JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ═══════════════════════════════════════════════════════════════
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ═══════════════════════════════════════════════════════════════

ALTER TABLE agency_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE price_book ENABLE ROW LEVEL SECURITY;
ALTER TABLE prospects ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE media ENABLE ROW LEVEL SECURITY;
ALTER TABLE chatbot_configs ENABLE ROW LEVEL SECURITY;
ALTER TABLE tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE pitch_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Public can read prospects, services, reviews, media, pitch_links via public demo views
CREATE POLICY "Public Read Prospects" ON prospects FOR SELECT USING (true);
CREATE POLICY "Public Read Services" ON services FOR SELECT USING (true);
CREATE POLICY "Public Read Reviews" ON reviews FOR SELECT USING (true);
CREATE POLICY "Public Read Media" ON media FOR SELECT USING (true);
CREATE POLICY "Public Read Chatbot" ON chatbot_configs FOR SELECT USING (true);
CREATE POLICY "Public Read PriceBook" ON price_book FOR SELECT USING (true);
CREATE POLICY "Public Read PitchLinks" ON pitch_links FOR SELECT USING (true);

-- Public can insert tickets & events from live demo
CREATE POLICY "Public Insert Tickets" ON tickets FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Read Tickets" ON tickets FOR SELECT USING (true);
CREATE POLICY "Public Insert Events" ON events FOR INSERT WITH CHECK (true);

-- Authenticated Agency User has Full Access to Studio tables
CREATE POLICY "Agency All Prospects" ON prospects FOR ALL TO authenticated USING (true);
CREATE POLICY "Agency All Services" ON services FOR ALL TO authenticated USING (true);
CREATE POLICY "Agency All Reviews" ON reviews FOR ALL TO authenticated USING (true);
CREATE POLICY "Agency All Media" ON media FOR ALL TO authenticated USING (true);
CREATE POLICY "Agency All Chatbot" ON chatbot_configs FOR ALL TO authenticated USING (true);
CREATE POLICY "Agency All Tickets" ON tickets FOR ALL TO authenticated USING (true);
CREATE POLICY "Agency All AgencySettings" ON agency_settings FOR ALL TO authenticated USING (true);
CREATE POLICY "Agency All PriceBook" ON price_book FOR ALL TO authenticated USING (true);
