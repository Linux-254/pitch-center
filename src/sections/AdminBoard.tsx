import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProspect } from '@/hooks/useProspect';

interface TicketItem {
  id: string;
  name: string;
  phone: string;
  service: string;
  slot: string;
  value_kes: number;
  time: string;
}

export const AdminBoard: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: prospect } = useProspect(slug);

  const [tickets, setTickets] = useState<TicketItem[]>([
    {
      id: 't-101',
      name: 'Mercy Wanjiku',
      phone: '+254712345678',
      service: 'Signature Moroccan Bath & Steam',
      slot: 'Today, 2:30 PM',
      value_kes: 4500,
      time: '2 mins ago',
    },
    {
      id: 't-102',
      name: 'Dennis Kiprotich',
      phone: '+254723456789',
      service: 'Silk Press & Scalp Care',
      slot: 'Tomorrow, 11:00 AM',
      value_kes: 3500,
      time: '14 mins ago',
    },
  ]);

  const totalRevenue = tickets.reduce((acc, t) => acc + t.value_kes, 0);

  const handleSimulateNewBooking = () => {
    const newT: TicketItem = {
      id: 't-' + Date.now(),
      name: 'Alice Muthoni',
      phone: '+254701234567',
      service: prospect?.services[0]?.name || 'Standard Treatment',
      slot: 'Friday, 4:00 PM',
      value_kes: prospect?.services[0]?.price_kes || 4000,
      time: 'Just now',
    };
    setTickets([newT, ...tickets]);
  };

  return (
    <div className="min-h-screen bg-[#0B0D13] text-white font-sans p-6">
      {/* ── Admin Header ── */}
      <header className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/10">
        <div>
          <span className="text-xs uppercase text-emerald-400 font-bold tracking-widest">
            Live Ticket Dispatch · POS & Queue Simulator
          </span>
          <h1 className="text-2xl font-extrabold mt-1">
            {prospect?.business || 'Venue'} Back-Office Dashboard
          </h1>
          <p className="text-xs text-gray-400">{prospect?.area} · Realtime Supabase Channel</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-[#161922] border border-white/10 px-4 py-2 rounded-xl text-right">
            <span className="text-[11px] text-gray-400 block font-semibold">Today's Simulated Revenue</span>
            <strong className="text-lg text-emerald-400 font-black">
              KES {totalRevenue.toLocaleString()}
            </strong>
          </div>
          <button
            onClick={handleSimulateNewBooking}
            className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs transition"
          >
            + Simulate Inbound Lead
          </button>
        </div>
      </header>

      {/* ── Live Kanban Queue ── */}
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#141620] border border-white/10 rounded-2xl p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-bold text-gray-200">Incoming Leads & Bookings</h2>
            <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded font-bold">
              {tickets.length}
            </span>
          </div>

          <div className="space-y-3">
            {tickets.map(t => (
              <div key={t.id} className="bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-lg hover:border-emerald-500/40 transition">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-sm text-white">{t.name}</h3>
                  <span className="text-[11px] text-gray-400">{t.time}</span>
                </div>
                <p className="text-xs text-gray-300 mt-1 font-semibold">{t.service}</p>
                <div className="flex justify-between items-center mt-3 pt-2 border-t border-slate-800 text-xs">
                  <span className="text-gray-400">Slot: {t.slot}</span>
                  <strong className="text-emerald-400 font-bold">KES {t.value_kes.toLocaleString()}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#141620] border border-white/10 rounded-2xl p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-bold text-gray-200">Confirmed / In-Progress</h2>
            <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded font-bold">1</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-xs text-gray-400">
            Client seated in Private Suite 2.
          </div>
        </div>

        <div className="bg-[#141620] border border-white/10 rounded-2xl p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-bold text-gray-200">Fulfilled & Settled (M-Pesa)</h2>
            <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-bold">12</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-xs text-emerald-400/80">
            KES 48,500 settled directly to Till today.
          </div>
        </div>
      </div>
    </div>
  );
};
