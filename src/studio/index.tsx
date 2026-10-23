import React, { useState } from 'react';
import { SEED_PROSPECTS } from '@/data/seeds';
import { Prospect } from '@/types';
import { Button } from '@/components/primitives';

export const Studio: React.FC = () => {
  const [prospects] = useState<Prospect[]>(SEED_PROSPECTS);
  const [selectedProspect, setSelectedProspect] = useState<Prospect>(SEED_PROSPECTS[0]);
  const [activeStep, setActiveStep] = useState<number>(1);
  const [mapsInput, setMapsInput] = useState<string>('');
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [statusMessage, setStatusMessage] = useState<string>('');

  // 1. Google Maps / Places Auto-fill simulation
  const handleIngestMaps = () => {
    setStatusMessage('Querying Google Places API...');
    setTimeout(() => {
      setSelectedProspect(prev => ({
        ...prev,
        business: mapsInput.trim() || prev.business,
        rating: 4.9,
        review_count: 185,
        address: 'Westlands Commercial Center, Nairobi',
      }));
      setStatusMessage('Auto-filled verified business details, ratings & hours!');
    }, 600);
  };

  // 2. Inline Price Editing
  const handlePriceChange = (serviceId: string, newPrice: number) => {
    setSelectedProspect(prev => ({
      ...prev,
      services: prev.services.map(s => s.id === serviceId ? { ...s, price_kes: newPrice } : s)
    }));
  };

  // 3. Bulk Adjust Prices (+10%)
  const handleBulkAdjust = (pct: number) => {
    setSelectedProspect(prev => ({
      ...prev,
      services: prev.services.map(s => ({
        ...s,
        price_kes: Math.round(s.price_kes * (1 + pct / 100))
      }))
    }));
    setStatusMessage(`Adjusted all catalog prices by ${pct > 0 ? '+' : ''}${pct}%`);
  };

  return (
    <div className="min-h-screen bg-[#0F1117] text-white flex flex-col font-sans">
      {/* ── Studio Navigation Header ── */}
      <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between bg-[#161922]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-500 text-black flex items-center justify-center font-black text-sm">
            CS
          </div>
          <div>
            <h1 className="text-base font-bold text-white tracking-wide">CyTech Studios · Studio Admin v2</h1>
            <p className="text-xs text-gray-400">Prospect Wizard, Live Price Book & Pitch Pack Generator</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full font-bold">
            Live Database Connected
          </span>
          <a
            href={`/showcase/${selectedProspect.slug}`}
            target="_blank"
            rel="noreferrer"
            className="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded font-semibold transition"
          >
            Open Client Showcase ↗
          </a>
        </div>
      </header>

      {/* ── Main Studio Grid: Wizard + Realtime Preview Pane ── */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        {/* Left: 5-Step Prospect Wizard (5 cols) */}
        <div className="lg:col-span-6 border-r border-white/10 p-6 overflow-y-auto max-h-[calc(100vh-70px)] space-y-6">
          {/* Active Prospect Selector */}
          <div className="bg-[#1A1D27] p-4 rounded-xl border border-white/10">
            <label className="text-xs font-bold uppercase text-gray-400 block mb-2">Select Active Prospect</label>
            <select
              value={selectedProspect.id}
              onChange={(e) => {
                const found = prospects.find(p => p.id === e.target.value);
                if (found) setSelectedProspect(found);
              }}
              className="w-full bg-[#0F1117] border border-white/20 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
            >
              {prospects.map(p => (
                <option key={p.id} value={p.id}>{p.business} ({p.vertical.toUpperCase()} · {p.area})</option>
              ))}
            </select>
          </div>

          {/* Wizard Steps Navigation */}
          <div className="flex items-center gap-2 border-b border-white/10 pb-4">
            {[
              { num: 1, label: 'Maps Link' },
              { num: 2, label: 'Brand & Owner' },
              { num: 3, label: 'Price Book' },
              { num: 4, label: 'Pitch Pack' },
            ].map(step => (
              <button
                key={step.num}
                onClick={() => setActiveStep(step.num)}
                className={`text-xs px-3 py-1.5 rounded-lg font-bold transition ${activeStep === step.num ? 'bg-amber-500 text-black' : 'text-gray-400 hover:text-white bg-white/5'}`}
              >
                {step.num}. {step.label}
              </button>
            ))}
          </div>

          {statusMessage && (
            <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs p-3 rounded-lg">
              {statusMessage}
            </div>
          )}

          {/* STEP 1: Google Maps Link Ingest */}
          {activeStep === 1 && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Step 1: Ingest Google Maps Place</h3>
              <p className="text-xs text-gray-400">Paste the prospect's Google Maps share link to auto-fill business name, verified rating, reviews, and hours.</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="https://maps.app.goo.gl/... or business name"
                  value={mapsInput}
                  onChange={(e) => setMapsInput(e.target.value)}
                  className="flex-1 bg-[#1A1D27] border border-white/20 rounded-lg px-3 py-2 text-sm text-white"
                />
                <Button size="sm" onClick={handleIngestMaps} className="bg-amber-500 text-black font-bold">
                  Auto-Fill
                </Button>
              </div>

              <div className="bg-black/40 p-4 rounded-lg space-y-2 text-xs border border-white/5">
                <div><span className="text-gray-400">Business:</span> <strong className="text-white">{selectedProspect.business}</strong></div>
                <div><span className="text-gray-400">Address:</span> <span className="text-gray-200">{selectedProspect.address}</span></div>
                <div><span className="text-gray-400">Verified Rating:</span> <span className="text-amber-400 font-bold">{selectedProspect.rating} ★ ({selectedProspect.review_count} reviews)</span></div>
              </div>
            </div>
          )}

          {/* STEP 2: Brand & Owner */}
          {activeStep === 2 && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Step 2: Owner, WhatsApp & Tone</h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="text-gray-400 block mb-1">Owner Name</label>
                  <input
                    type="text"
                    value={selectedProspect.owner}
                    onChange={(e) => setSelectedProspect({ ...selectedProspect, owner: e.target.value })}
                    className="w-full bg-[#1A1D27] border border-white/20 rounded-lg p-2 text-white"
                  />
                </div>
                <div>
                  <label className="text-gray-400 block mb-1">WhatsApp Phone</label>
                  <input
                    type="text"
                    value={selectedProspect.whatsapp}
                    onChange={(e) => setSelectedProspect({ ...selectedProspect, whatsapp: e.target.value })}
                    className="w-full bg-[#1A1D27] border border-white/20 rounded-lg p-2 text-white"
                  />
                </div>
                <div>
                  <label className="text-gray-400 block mb-1">Area / Neighborhood</label>
                  <input
                    type="text"
                    value={selectedProspect.area}
                    onChange={(e) => setSelectedProspect({ ...selectedProspect, area: e.target.value })}
                    className="w-full bg-[#1A1D27] border border-white/20 rounded-lg p-2 text-white"
                  />
                </div>
                <div>
                  <label className="text-gray-400 block mb-1">Design Tone Preset</label>
                  <select
                    value={selectedProspect.tone}
                    onChange={(e) => setSelectedProspect({ ...selectedProspect, tone: e.target.value as any })}
                    className="w-full bg-[#1A1D27] border border-white/20 rounded-lg p-2 text-white"
                  >
                    <option value="luxury">Luxury (Cormorant Serif)</option>
                    <option value="clinical">Clinical (Plus Jakarta Sans)</option>
                    <option value="bold">Bold & Neon (Unbounded)</option>
                    <option value="friendly">Friendly & Warm</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Services & Price Book */}
          {activeStep === 3 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Step 3: Services & KES Prices</h3>
                <div className="flex gap-2">
                  <button onClick={() => handleBulkAdjust(10)} className="text-[11px] bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded">
                    +10%
                  </button>
                  <button onClick={() => handleBulkAdjust(-10)} className="text-[11px] bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded">
                    -10%
                  </button>
                </div>
              </div>

              <div className="border border-white/10 rounded-lg overflow-hidden">
                <table className="w-full text-xs text-left">
                  <thead className="bg-[#161922] text-gray-400 border-b border-white/10">
                    <tr>
                      <th className="p-3">Service Name</th>
                      <th className="p-3">KES Price</th>
                      <th className="p-3">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {selectedProspect.services.map(s => (
                      <tr key={s.id} className="hover:bg-white/5">
                        <td className="p-3 font-semibold text-white">{s.name}</td>
                        <td className="p-3">
                          <input
                            type="number"
                            value={s.price_kes}
                            onChange={(e) => handlePriceChange(s.id, parseInt(e.target.value) || 0)}
                            className="bg-black/50 border border-white/20 rounded px-2 py-1 w-24 text-amber-400 font-bold"
                          />
                        </td>
                        <td className="p-3 text-gray-400">{s.duration_min} min</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* STEP 4: Pitch Pack & Ready Outreach Message */}
          {activeStep === 4 && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Step 4: Generated Pitch Pack</h3>
              <div className="bg-[#1A1D27] p-4 rounded-xl border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400 uppercase">Pre-Filled WhatsApp Pitch</span>
                  <a
                    href={`https://wa.me/${selectedProspect.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi ${selectedProspect.owner}, this is Cy from CyTech Studios. I built a live tableside ordering and booking demo for ${selectedProspect.business} in ${selectedProspect.area}: http://localhost:3005/demo/${selectedProspect.slug}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs bg-emerald-500 hover:bg-emerald-600 text-black px-3 py-1 rounded font-bold transition"
                  >
                    Send on WhatsApp ↗
                  </a>
                </div>
                <textarea
                  readOnly
                  rows={5}
                  value={`Hi ${selectedProspect.owner}, this is Cy from CyTech Studios Nairobi. I came across ${selectedProspect.business} in ${selectedProspect.area} and your reviews are impressive.

I built a live 45-second demo showcasing fast online bookings and instant price quotes for ${selectedProspect.services[0]?.name || 'your services'}:
http://localhost:3005/demo/${selectedProspect.slug}

We can have this fully live before this weekend. Want me to send the setup details?`}
                  className="w-full bg-black/50 border border-white/10 rounded p-2 text-xs text-gray-300 font-mono resize-none"
                />
              </div>
            </div>
          )}
        </div>

        {/* Right: Live Preview Pane (7 cols) */}
        <div className="lg:col-span-6 p-6 flex flex-col bg-[#0A0B10]">
          {/* Viewport & Layout Toggle */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400 font-bold uppercase">Layout:</span>
              <select
                value={selectedProspect.selected_layout}
                onChange={(e) => setSelectedProspect({ ...selectedProspect, selected_layout: parseInt(e.target.value) })}
                className="bg-[#1A1D27] border border-white/20 text-xs rounded px-2.5 py-1.5 text-white"
              >
                <option value={1}>L1: Editorial Luxe (Salons & Spas)</option>
                <option value={3}>L3: Bento Grid (Clinics & General)</option>
              </select>
            </div>

            <div className="flex items-center gap-2 bg-[#161922] p-1 rounded-lg border border-white/10">
              {(['desktop', 'tablet', 'mobile'] as const).map(dev => (
                <button
                  key={dev}
                  onClick={() => setPreviewDevice(dev)}
                  className={`text-xs px-3 py-1 rounded capitalize font-semibold transition ${previewDevice === dev ? 'bg-amber-500 text-black font-bold' : 'text-gray-400 hover:text-white'}`}
                >
                  {dev}
                </button>
              ))}
            </div>
          </div>

          {/* Embedded Device Viewport */}
          <div className="flex-1 flex items-center justify-center p-4 overflow-hidden">
            <div
              className={`bg-white rounded-xl shadow-2xl overflow-y-auto transition-all duration-300 border-4 border-slate-700 ${
                previewDevice === 'mobile'
                  ? 'w-[375px] h-[667px]'
                  : previewDevice === 'tablet'
                  ? 'w-[768px] h-[600px]'
                  : 'w-full h-full max-h-[640px]'
              }`}
            >
              {selectedProspect.selected_layout === 1 ? (
                <div className="text-slate-900">
                  <header className="p-4 border-b flex justify-between items-center bg-[#FBF9F5]">
                    <strong className="text-sm uppercase tracking-wide">{selectedProspect.business}</strong>
                    <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold">Book</span>
                  </header>
                  <div className="p-6">
                    <h2 className="text-2xl font-serif text-[#1A1815]">{selectedProspect.business}</h2>
                    <p className="text-xs text-gray-500 mt-1">{selectedProspect.area} · Verified {selectedProspect.rating} ★</p>

                    <div className="mt-6 space-y-3">
                      <h3 className="text-xs uppercase font-bold tracking-wider text-amber-700">Services & Pricing</h3>
                      {selectedProspect.services.map(s => (
                        <div key={s.id} className="flex justify-between border-b pb-1 text-xs">
                          <span>{s.name}</span>
                          <strong className="text-amber-800">KES {s.price_kes.toLocaleString()}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-[#0F172A] text-white p-6 h-full">
                  <span className="text-xs text-emerald-400 font-bold uppercase">{selectedProspect.vertical} · Bento Preview</span>
                  <h2 className="text-2xl font-bold mt-2">{selectedProspect.business}</h2>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                    {selectedProspect.services.map(s => (
                      <div key={s.id} className="bg-slate-800 p-2.5 rounded border border-slate-700">
                        <div className="font-bold">{s.name}</div>
                        <div className="text-emerald-400 font-bold mt-1">KES {s.price_kes.toLocaleString()}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
