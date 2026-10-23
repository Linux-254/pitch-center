import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useProspect } from '@/hooks/useProspect';
import { LayoutEditorialLuxe } from '@/layouts/L1EditorialLuxe';
import { LayoutBentoGrid } from '@/layouts/L3BentoGrid';

export const DemoPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [searchParams] = useSearchParams();
  const layoutParam = searchParams.get('layout');

  const { data: prospect, isLoading } = useProspect(slug);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white text-sm">
        Loading Prospect Live Demo...
      </div>
    );
  }

  if (!prospect) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white text-sm">
        Prospect not found.
      </div>
    );
  }

  const activeLayout = layoutParam ? parseInt(layoutParam, 10) : prospect.selected_layout;

  return (
    <div>
      {/* Layout Engine Switcher */}
      {activeLayout === 3 ? (
        <LayoutBentoGrid prospect={prospect} />
      ) : (
        <LayoutEditorialLuxe prospect={prospect} />
      )}
    </div>
  );
};
