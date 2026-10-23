import React from 'react';
import { Prospect } from '@/types';
import { Stars, PriceTag, Button } from '@/components/primitives';

export const LayoutBentoGrid: React.FC<{ prospect: Prospect }> = ({ prospect }) => {
  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 font-sans p-4 md:p-8">
      {/* ── Header ── */}
      <header className="max-w-6xl mx-auto flex items-center justify-between pb-8">
        <div>
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
            {prospect.vertical.toUpperCase()} · BENTO ARCHITECTURE
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white mt-1">
            {prospect.business}
          </h1>
        </div>
        <Button variant="primary" size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold">
          Book Online
        </Button>
      </header>

      {/* ── 12-Column Bento Grid ── */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Hero Tile (6x4) */}
        <div className="md:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-end min-h-[320px]">
          <img
            src={prospect.media[0]?.url || 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200'}
            alt={prospect.business}
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="relative z-10">
            <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs px-2.5 py-1 rounded-full font-bold">
              Open Today · {prospect.area}
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mt-3">
              Modern patient care, automated booking.
            </h2>
            <p className="text-slate-300 text-sm mt-2 max-w-lg">
              Reserve appointments with certified clinicians. Fast check-in and zero waiting room delays.
            </p>
          </div>
        </div>

        {/* Rating Tile (4 col) */}
        <div className="md:col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <span className="text-xs text-slate-400 font-semibold uppercase">Google Verified Rating</span>
            <div className="text-5xl font-black text-white mt-2">
              {prospect.rating.toFixed(1)}
            </div>
            <div className="mt-2">
              <Stars rating={prospect.rating} />
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-4 border-t border-slate-800 pt-3">
            Based on {prospect.review_count} patient reviews in {prospect.city}.
          </p>
        </div>

        {/* Services Bento Tiles */}
        {prospect.services.slice(0, 3).map((service) => (
          <div key={service.id} className="md:col-span-4 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 hover:border-emerald-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-emerald-400 font-bold uppercase">{service.duration_min} min</span>
                {service.is_featured && (
                  <span className="text-[10px] bg-slate-800 text-amber-400 px-2 py-0.5 rounded font-bold">FEATURED</span>
                )}
              </div>
              <h3 className="text-base font-bold text-white mt-2">{service.name}</h3>
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-slate-800/80 pt-3">
              <PriceTag price={service.price_kes} />
              <Button size="sm" variant="outline" className="text-xs border-slate-700 text-slate-300">
                Select
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
