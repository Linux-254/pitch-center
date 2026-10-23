import { useQuery } from '@tanstack/react-query';
import { Prospect } from '@/types';
import { SEED_PROSPECTS } from '@/data/seeds';

export function useProspect(slug?: string) {
  return useQuery<Prospect | null>({
    queryKey: ['prospect', slug],
    queryFn: async () => {
      if (!slug) return SEED_PROSPECTS[0];

      // 1. Try local memory/seed match first
      const local = SEED_PROSPECTS.find((p) => p.slug === slug);
      if (local) return local;

      // 2. Fallback to API / Supabase
      try {
        const res = await fetch(`/api/prospects/${slug}`);
        if (res.ok) {
          const json = await res.json();
          return json.data || null;
        }
      } catch {
        // Fallback gracefully
      }

      return SEED_PROSPECTS[0];
    },
    staleTime: 1000 * 60 * 5, // 5 mins cache
  });
}
