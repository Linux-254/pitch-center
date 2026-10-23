import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProspect } from '@/hooks/useProspect';

export const StoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: prospect } = useProspect(slug);

  const [seconds, setSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [aspect, setAspect] = useState<'16-9' | '9-16'>('9-16');

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setSeconds(s => (s >= 45 ? 0 : s + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  if (!prospect) return <div className="text-white p-6">Loading story...</div>;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      {/* ── Video Canvas Controls ── */}
      <div className="mb-4 flex items-center gap-4 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-xs">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="font-bold text-amber-400"
        >
          {isPlaying ? '⏸ Pause' : '▶ Play'}
        </button>
        <span className="font-mono text-gray-400">{seconds}s / 45s</span>
        <div className="flex gap-1 border-l border-slate-800 pl-4">
          <button
            onClick={() => setAspect('9-16')}
            className={`px-2 py-0.5 rounded ${aspect === '9-16' ? 'bg-amber-500 text-black font-bold' : 'text-gray-400'}`}
          >
            Story (9:16)
          </button>
          <button
            onClick={() => setAspect('16-9')}
            className={`px-2 py-0.5 rounded ${aspect === '16-9' ? 'bg-amber-500 text-black font-bold' : 'text-gray-400'}`}
          >
            Desktop (16:9)
          </button>
        </div>
      </div>

      {/* ── Simulated 45s Video Frame ── */}
      <div
        className={`relative bg-slate-900 border-4 border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between p-6 transition-all duration-300 ${
          aspect === '9-16' ? 'w-[360px] h-[640px]' : 'w-[800px] h-[450px]'
        }`}
      >
        {/* Progress Timeline Bar */}
        <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-amber-400 h-full transition-all duration-1000"
            style={{ width: `${(seconds / 45) * 100}%` }}
          />
        </div>

        {/* Phase 0-5s: Hero Reveal */}
        {seconds <= 5 && (
          <div className="flex-1 flex flex-col justify-center items-center text-center animate-fade-in">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Nairobi Spotlight</span>
            <h2 className="text-3xl font-bold mt-2">{prospect.business}</h2>
            <p className="text-sm text-gray-400 mt-1">{prospect.area}</p>
          </div>
        )}

        {/* Phase 5-15s: Services & KES Prices */}
        {seconds > 5 && seconds <= 15 && (
          <div className="flex-1 flex flex-col justify-center animate-fade-in">
            <span className="text-amber-400 text-xs font-bold uppercase mb-2">Signature Pricing</span>
            <div className="space-y-3">
              {prospect.services.slice(0, 3).map(s => (
                <div key={s.id} className="bg-black/40 border border-white/10 p-3 rounded-lg flex justify-between items-center">
                  <span className="text-sm font-semibold">{s.name}</span>
                  <span className="text-amber-400 font-bold text-sm">KES {s.price_kes.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Phase 15-25s: Google Reviews */}
        {seconds > 15 && seconds <= 25 && (
          <div className="flex-1 flex flex-col justify-center items-center text-center animate-fade-in">
            <span className="text-emerald-400 text-xs font-bold uppercase mb-2">Verified Google Rating</span>
            <div className="text-4xl font-extrabold text-white">{prospect.rating} ★</div>
            <p className="text-xs text-gray-400 mt-1">Over {prospect.review_count} verified reviews</p>
            <blockquote className="mt-4 italic text-sm text-gray-300 bg-black/40 p-3 rounded-lg">
              "{prospect.reviews[0]?.text || 'Exceptional service and seamless online booking!'}"
            </blockquote>
          </div>
        )}

        {/* Phase 25-35s: AI Assistant Booking Demo */}
        {seconds > 25 && seconds <= 35 && (
          <div className="flex-1 flex flex-col justify-center animate-fade-in">
            <span className="text-blue-400 text-xs font-bold uppercase mb-2">24/7 AI Booking Assistant</span>
            <div className="bg-slate-800 p-3 rounded-lg text-xs space-y-2">
              <div className="text-gray-400">Bot: "Hi, want to reserve an appointment today?"</div>
              <div className="text-white font-semibold">User: "Yes, tomorrow at 3 PM please!"</div>
              <div className="text-emerald-400 font-bold">Bot: "Confirmed! Slot locked for you."</div>
            </div>
          </div>
        )}

        {/* Phase 35-45s: Admin Ticket Landed & CTA */}
        {seconds > 35 && (
          <div className="flex-1 flex flex-col justify-center items-center text-center animate-fade-in">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Live in 48 Hours</span>
            <h2 className="text-2xl font-bold mt-2">Get this for {prospect.business}</h2>
            <p className="text-xs text-gray-300 mt-2">No more lost bookings or phone tag.</p>
            <div className="mt-4 bg-emerald-500 text-black font-extrabold px-4 py-2 rounded-lg text-xs">
              WhatsApp Us: +254 700 000 000
            </div>
          </div>
        )}

        {/* Bottom Tag */}
        <div className="text-center text-[10px] text-gray-500 pt-2 border-t border-white/10">
          CyTech Studios Pitch Center · 45s Showcase
        </div>
      </div>
    </div>
  );
};
