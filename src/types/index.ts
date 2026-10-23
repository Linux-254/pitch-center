import { z } from 'zod';

export const VerticalEnum = z.enum([
  'salon',
  'clinic',
  'realestate',
  'gym',
  'school',
  'auto',
  'restaurant',
]);
export type Vertical = z.infer<typeof VerticalEnum>;

export const ToneEnum = z.enum(['luxury', 'friendly', 'bold', 'clinical']);
export type Tone = z.infer<typeof ToneEnum>;

export const ProspectStatusEnum = z.enum([
  'draft',
  'sent',
  'opened',
  'replied',
  'won',
  'lost',
]);
export type ProspectStatus = z.infer<typeof ProspectStatusEnum>;

export const BrandConfigSchema = z.object({
  primary: z.string(),
  secondary: z.string(),
  accent: z.string(),
  logoUrl: z.string().optional(),
  fontPair: z.string(),
});
export type BrandConfig = z.infer<typeof BrandConfigSchema>;

export const ServiceSchema = z.object({
  id: z.string(),
  prospect_id: z.string().optional(),
  name: z.string(),
  price_kes: z.number().int(),
  duration_min: z.number().int().optional(),
  image_url: z.string().optional(),
  sort_order: z.number().int().default(0),
  is_featured: z.boolean().default(false),
});
export type Service = z.infer<typeof ServiceSchema>;

export const ReviewSchema = z.object({
  id: z.string(),
  prospect_id: z.string().optional(),
  author: z.string(),
  rating: z.number().min(1).max(5),
  text: z.string(),
  review_date: z.string().optional(),
  source: z.enum(['google', 'manual', 'placeholder']).default('placeholder'),
});
export type Review = z.infer<typeof ReviewSchema>;

export const MediaSchema = z.object({
  id: z.string(),
  prospect_id: z.string().optional(),
  kind: z.enum(['hero', 'post', 'reel_thumb', 'logo', 'gallery']),
  url: z.string(),
  link_url: z.string().optional(),
  is_placeholder: z.boolean().default(false),
});
export type Media = z.infer<typeof MediaSchema>;

export const ChatbotConfigSchema = z.object({
  prospect_id: z.string().optional(),
  persona: z.string(),
  greeting: z.string(),
  faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  booking_fields: z.array(z.string()).default(['name', 'phone', 'preferredSlot']),
});
export type ChatbotConfig = z.infer<typeof ChatbotConfigSchema>;

export const TicketSchema = z.object({
  id: z.string(),
  prospect_id: z.string(),
  customer_name: z.string(),
  phone: z.string(),
  service: z.string(),
  slot: z.string(),
  value_kes: z.number().int(),
  status: z.enum(['incoming', 'confirmed', 'completed', 'cancelled']).default('incoming'),
  created_at: z.string(),
});
export type Ticket = z.infer<typeof TicketSchema>;

export const ProspectSchema = z.object({
  id: z.string(),
  slug: z.string(),
  vertical: VerticalEnum,
  business: z.string(),
  owner: z.string(),
  area: z.string(),
  city: z.string(),
  phone: z.string(),
  whatsapp: z.string(),
  email: z.string().optional(),
  address: z.string(),
  hours: z.record(z.string()).optional(),
  brand: BrandConfigSchema,
  maps_place_id: z.string().optional(),
  maps_url: z.string().optional(),
  maps_embed_url: z.string().optional(),
  rating: z.number().default(4.9),
  review_count: z.number().int().default(120),
  instagram_handle: z.string().optional(),
  tone: ToneEnum.default('luxury'),
  selected_layout: z.number().int().min(1).max(8).default(1),
  status: ProspectStatusEnum.default('draft'),
  created_at: z.string(),
  services: z.array(ServiceSchema).default([]),
  reviews: z.array(ReviewSchema).default([]),
  media: z.array(MediaSchema).default([]),
  chatbot_config: ChatbotConfigSchema.optional(),
});
export type Prospect = z.infer<typeof ProspectSchema>;

export const AgencySettingsSchema = z.object({
  id: z.string(),
  agency_name: z.string(),
  whatsapp: z.string(),
  default_currency: z.string().default('KES'),
  package_tiers: z.object({
    starter: z.object({
      name: z.string(),
      price_kes: z.number().int(),
      deposit_percent: z.number().int(),
      description: z.string(),
    }),
    standard: z.object({
      name: z.string(),
      price_kes: z.number().int(),
      deposit_percent: z.number().int(),
      description: z.string(),
    }),
    enterprise: z.object({
      name: z.string(),
      price_min_kes: z.number().int(),
      price_max_kes: z.number().int(),
      deposit_percent: z.number().int(),
      description: z.string(),
    }),
  }),
});
export type AgencySettings = z.infer<typeof AgencySettingsSchema>;
