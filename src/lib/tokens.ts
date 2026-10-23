import { Prospect } from '@/types';

/**
 * Universal resolveTokens utility.
 * Architecture Rule 3:
 * Replaces tokens {{business}}, {{owner}}, {{area}}, {{city}}, {{phone}}, {{topService}}, {{topPrice}}
 * across site, chatbot, video captions, and pitch scripts.
 */
export function resolveTokens(template: string, prospect: Partial<Prospect>): string {
  if (!template) return '';

  const topService = prospect.services && prospect.services.length > 0 ? prospect.services[0].name : 'Primary Service';
  const topPrice = prospect.services && prospect.services.length > 0 ? formatKES(prospect.services[0].price_kes) : 'KES 0';

  const tokenMap: Record<string, string> = {
    '{{business}}': prospect.business || 'Your Business',
    '{{owner}}': prospect.owner || 'Business Owner',
    '{{area}}': prospect.area || 'Nairobi',
    '{{city}}': prospect.city || 'Nairobi',
    '{{phone}}': prospect.phone || prospect.whatsapp || '+254',
    '{{whatsapp}}': prospect.whatsapp || prospect.phone || '+254',
    '{{topService}}': topService,
    '{{topPrice}}': topPrice,
  };

  return template.replace(/\{\{\s*(\w+)\s*\}\}/g, (match) => {
    return tokenMap[match] || match;
  });
}

/**
 * Architecture Rule 5: Prices are stored as integer KES.
 * Format with Intl.NumberFormat('en-KE').
 */
export function formatKES(amount: number): string {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    maximumFractionDigits: 0,
  }).format(amount);
}
