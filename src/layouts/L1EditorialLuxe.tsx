import React from 'react';
import { Prospect } from '@/types';
import { Stars, PriceTag, Button, PlaceholderBadge } from '@/components/primitives';

export const LayoutEditorialLuxe: React.FC<{ prospect: Prospect }> = ({ prospect }) => {
  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1A1815] font-serif selection:bg-[#C89B3C]/20">
      {/* ── Top Announcement / Nav ── */}
      <header className="border-b border-[#1A1815]/10 px-6 py-4 flex items-center justify-between sticky top-0 bg-[#FBF9F5]/90 backdrop-blur z-20">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#1A1815] text-[#FBF9F5] flex items-center justify-center font-bold text-sm">
            {prospect.business.charAt(0)}
          </div>
          <div>
            <h1 className="text-base font-bold tracking-tight uppercase">{prospect.business}</h1>
            <p className="text-xs text-[#6B655C] font-sans">{prospect.area}</p>
          </div>
        </div>
        <Button variant="outline" size="sm" className="font-sans">
          Reserve Appointment
        </Button>
      </header>

      {/* ── Hero: Full Bleed with Ken Burns Effect ── */}
      <section className="relative h-[65vh] min-h-[420px] overflow-hidden flex items-end p-8 lg:p-16">
        <img
          src={prospect.media.find(m => m.kind === 'hero')?.url || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600'}
          alt={prospect.business}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20000ms] hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1117]/80 via-[#0F1117]/30 to-transparent" />

        <div className="relative z-10 text-white max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C89B3C] font-sans font-bold">
            {prospect.vertical.toUpperCase()} · {prospect.area}
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mt-2 leading-tight">
            {prospect.business}
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-200 font-sans max-w-lg leading-relaxed">
            The standard of refined care. Dedicated appointment schedules and private suite sessions.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <Button size="md" className="font-sans bg-[#C89B3C] text-black hover:bg-[#d5a84a]">
              Book Consultation
            </Button>
            <div className="font-sans">
              <Stars rating={prospect.rating} count={prospect.review_count} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Menu with Dotted Leaders ── */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C89B3C] font-sans font-bold">
            Curated Offerings
          </span>
          <h3 className="text-3xl font-light mt-1">Treatment Catalog & Pricing</h3>
          <p className="text-xs text-[#6B655C] font-sans mt-2">All prices in Kenyan Shillings (KES). Tax inclusive.</p>
        </div>

        <div className="space-y-6">
          {prospect.services.map((service) => (
            <div key={service.id} className="group">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-lg font-medium tracking-tight text-[#1A1815] group-hover:text-[#C89B3C] transition-colors">
                  {service.name}
                </span>
                <span className="flex-1 border-b border-dotted border-[#1A1815]/20 relative top-[-4px]" />
                <span className="text-lg font-sans">
                  <PriceTag price={service.price_kes} />
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#6B655C] font-sans mt-1">
                <span>{service.duration_min} minutes</span>
                {service.is_featured && (
                  <span className="text-[10px] text-[#C89B3C] uppercase tracking-wider font-bold">★ Most Requested</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Google Reviews ── */}
      <section className="bg-white border-y border-[#1A1815]/10 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <PlaceholderBadge label="Verified Google Reviews" />
          <div className="mt-6 space-y-4">
            {prospect.reviews.slice(0, 1).map((rev) => (
              <blockquote key={rev.id} className="text-xl md:text-2xl font-light italic text-gray-800 leading-relaxed">
                "{rev.text}"
              </blockquote>
            ))}
            <div className="pt-4 font-sans flex items-center justify-center gap-2">
              <span className="font-bold text-sm">{prospect.reviews[0]?.author || 'Verified Patron'}</span>
              <span className="text-gray-400">·</span>
              <Stars rating={5} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-12 text-center text-xs text-[#6B655C] font-sans border-t border-[#1A1815]/10">
        <p className="font-bold text-[#1A1815]">{prospect.business} · {prospect.area}</p>
        <p className="mt-1">Telephone: {prospect.phone} · WhatsApp: {prospect.whatsapp}</p>
        <p className="mt-4 text-[11px] text-gray-400">Powered by CyTech Studios Pitch Center</p>
      </footer>
    </div>
  );
};
