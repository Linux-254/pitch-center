import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Studio } from '@/studio';
import { DemoPage } from '@/sections/DemoPage';
import { ShowcasePage } from '@/sections/ShowcasePage';
import { StoryPage } from '@/sections/StoryPage';
import { AdminBoard } from '@/sections/AdminBoard';

export const App: React.FC = () => {
  return (
    <Routes>
      {/* Studio Admin Hub */}
      <Route path="/studio/*" element={<Studio />} />

      {/* Live Client Acquisition Showcase (Dual Device Simulator) */}
      <Route path="/showcase/:slug" element={<ShowcasePage />} />

      {/* Live Prospect Website Layout Demo */}
      <Route path="/demo/:slug" element={<DemoPage />} />

      {/* 45-Second Auto-playing Story Video Timeline */}
      <Route path="/story/:slug" element={<StoryPage />} />

      {/* Live POS / Kitchen & Reservation Ticket Board */}
      <Route path="/admin/:slug" element={<AdminBoard />} />

      {/* Default redirect to Studio */}
      <Route path="/" element={<Navigate to="/studio" replace />} />
      <Route path="*" element={<Navigate to="/studio" replace />} />
    </Routes>
  );
};

export default App;
