import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProspect } from '@/hooks/useProspect';

export const ShowcasePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: prospect } = useProspect(slug);

  const [activeDevice, setActiveDevice] = useState<'both' | 'desktop' | 'mobile'>('both');

  if (!prospect) return <div className="text-white p-6">Loading client showcase...</div>;

  return (
    <div className="min-h-screen bg-[#07090E] text-white flex flex-col font-sans">
      {/* ── Top Bar ── */}
      <header className="border-b border-white/10 px-6 py-3 flex items-center justify-between bg-[#11141C]">
        <div className="flex items-center gap-3">
          <Link to="/studio" className="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded font-bold transition">
            ← Studio Admin
          </Link>
          <div>
            <h1 className="text-sm font-bold text-white">{prospect.business}</h1>
            <p className="text-[11px] text-gray-400">45-Second Live Client Acquisition Showcase</p>
          </div>
        </div>

        {/* Viewport Toggles */}
        <div className="flex items-center gap-1 bg-[#1A1D27] p-1 rounded-lg border border-white/10 text-xs">
          <button
            onClick={() => setActiveDevice('both')}
            className={`px-3 py-1 rounded font-semibold transition ${activeDevice === 'both' ? 'bg-amber-500 text-black font-bold' : 'text-gray-400'}`}
          >
            Dual View (Side-by-Side)
          </button>
          <button
            onClick={() => setActiveDevice('desktop')}
            className={`px-3 py-1 rounded font-semibold transition ${activeDevice === 'desktop' ? 'bg-amber-500 text-black font-bold' : 'text-gray-400'}`}
          >
            Desktop (1440px)
          </button>
          <button
            onClick={() => setActiveDevice('mobile')}
            className={`px-3 py-1 rounded font-semibold transition ${activeDevice === 'mobile' ? 'bg-amber-500 text-black font-bold' : 'text-gray-400'}`}
          >
            Mobile (390px)
          </button>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to={`/story/${prospect.slug}`}
            className="text-xs bg-amber-500 text-black px-3 py-1.5 rounded font-bold hover:bg-amber-400 transition"
          >
            45s Story Video ▶
          </Link>
          <Link
            to={`/admin/${prospect.slug}`}
            className="text-xs bg-emerald-500 text-black px-3 py-1.5 rounded font-bold hover:bg-emerald-400 transition"
          >
            Live POS Board
          </Link>
        </div>
      </header>

      {/* ── Viewport Stage ── */}
      <div className="flex-1 p-6 flex items-center justify-center gap-8 overflow-x-auto">
        {/* Desktop Viewport */}
        {(activeDevice === 'both' || activeDevice === 'desktop') && (
          <div className="flex-1 max-w-4xl bg-slate-900 border-4 border-slate-700 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[700px]">
            <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" />
              </div>
              <div className="flex-1 bg-slate-900 rounded px-3 py-0.5 text-[11px] text-gray-400 text-center font-mono truncate">
                https://{prospect.slug}.co.ke
              </div>
            </div>
            <iframe
              src={`/demo/${prospect.slug}?device=desktop`}
              title="Desktop Preview"
              className="w-full flex-1 border-none"
            />
          </div>
        )}

        {/* Mobile Smartphone Frame (390px x 700px) */}
        {(activeDevice === 'both' || activeDevice === 'mobile') && (
          <div className="w-[375px] h-[700px] bg-black border-4 border-slate-700 rounded-[44px] overflow-hidden shadow-2xl flex flex-col relative p-2 flex-shrink-0">
            {/* Dynamic Island / Notch */}
            <div className="w-28 h-5 bg-black rounded-full mx-auto my-1 z-20 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-gray-900" />
            </div>
            <div className="flex-1 rounded-[32px] overflow-hidden bg-white">
              <iframe
                src={`/demo/${prospect.slug}?device=mobile`}
                title="Mobile Preview"
                className="w-full h-full border-none"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
