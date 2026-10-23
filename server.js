import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import { BUSINESS_VERTICALS } from './businesses-data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());
app.use(express.static(__dirname));

// ── Pitch Log Tracker (CyTech Studios Command Center) ──
const pitchHistory = [];

// ── API: Get active business vertical data ──
app.get('/api/vertical/:id', (req, res) => {
  const v = BUSINESS_VERTICALS[req.params.id];
  if (v) {
    res.json({ success: true, data: v });
  } else {
    res.status(404).json({ success: false, error: 'Vertical not found' });
  }
});

// ── API: Dispatch Pitch (CyTech Studios Pitch Engine) ──
app.post('/api/send-pitch', (req, res) => {
  const { businessName, channel, contact, packageType, personalDetail, targetVertical } = req.body;
  const cleanName = (businessName || 'there').trim();
  const cleanContact = (contact || '').replace(/[^\d+@.a-zA-Z]/g, '');

  let pitchText = '';
  let subject = '';

  if (packageType === 'qr-menu' || targetVertical === 'restaurant') {
    subject = `Faster table service for ${cleanName}, live before the weekend`;
    pitchText = `Hi ${cleanName}, this is Cy from CyTech Studios Nairobi. I came across your venue on Google Maps and your reviews are impressive, but I noticed guests can't view your menu or order online from their phone.

${personalDetail ? personalDetail + '\n\n' : ''}We build instant QR table ordering for Kenyan restaurants and lounges: guests scan from their phone, view your photo menu, order directly to the kitchen/bar, and pay via M-Pesa. No waving hands at waiters on busy rush nights, zero order mistakes, and bigger average ticket sizes.

Setup starts at KES 30,000 (KES 15,000 deposit), or KES 95,000 with live kitchen screen and staff dashboard.

Here is our live 45-second demo: http://localhost:3005
Can I set this up for you before this weekend's rush?

Best regards,
Cy | CyTech Studios Nairobi`;
  } else if (packageType === 'ai-chatbot' || packageType === 'website-chatbot') {
    subject = `24/7 AI Booking Concierge & Website for ${cleanName}`;
    pitchText = `Hi ${cleanName}, this is Cy from CyTech Studios Nairobi. Quick question: how many WhatsApp or Instagram messages do you get daily asking about prices, openings, and services?

${personalDetail ? personalDetail + '\n\n' : ''}We build modern marketing websites paired with a 24/7 Conversational AI assistant that answers questions in 2 seconds, quotes service rates, books appointments, and sends confirmed leads straight to your WhatsApp and Google Calendar.

Website setups start at KES 30,000 (KES 15,000 deposit), and complete Website + 24/7 AI Chatbot packages are KES 45,000 to 50,000+.

You can test our live dual-device demo here: http://localhost:3005
Would you like me to generate a free mockup using ${cleanName}'s actual branding before you pay anything?

Best regards,
Cy | CyTech Studios Nairobi`;
  } else if (packageType === 'webapp') {
    subject = `Custom Web App & Live Management Dashboard for ${cleanName}`;
    pitchText = `Hello ${cleanName}, this is Cy from CyTech Studios Nairobi.

${personalDetail ? personalDetail + '\n\n' : ''}We engineer custom web applications, POS integrations, and real-time management dashboards for Kenyan businesses. From automated M-Pesa reconciliations to multi-branch staff control and live order tracking.

Check our live interactive platform demo: http://localhost:3005
Would a 10-minute walkthrough this week work for your team?

Regards,
Cy | CyTech Studios Nairobi`;
  } else {
    subject = `High-converting digital presence for ${cleanName}`;
    pitchText = `Hi ${cleanName}, this is Cy from CyTech Studios. I noticed your business has great momentum and would benefit from an instant booking system and modern website so you stop losing customers during peak hours.

${personalDetail ? personalDetail + '\n\n' : ''}Our packages start from KES 30,000 with same-day setup.
Explore our live interactive demo: http://localhost:3005

Best regards,
Cy | CyTech Studios Nairobi`;
  }

  // Generate Direct WhatsApp URL (clean international format e.g. 2547...)
  let waNumber = cleanContact.replace('+', '');
  if (waNumber.startsWith('07') || waNumber.startsWith('01')) {
    waNumber = '254' + waNumber.substring(1);
  }
  const waUrl = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(pitchText)}`;
  const mailtoUrl = `mailto:${cleanContact}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(pitchText)}`;

  const record = {
    id: 'pitch_' + Date.now(),
    businessName: cleanName,
    contact: cleanContact,
    channel: channel || (cleanContact.includes('@') ? 'email' : 'whatsapp'),
    packageType,
    personalDetail,
    pitchText,
    waUrl,
    mailtoUrl,
    timestamp: new Date().toISOString(),
    status: 'dispatched'
  };

  pitchHistory.unshift(record);

  res.json({
    success: true,
    message: 'Pitch prepared and ready for dispatch',
    data: record,
    totalPitches: pitchHistory.length
  });
});

// ── API: Get Sent Pitches History ──
app.get('/api/pitches', (req, res) => {
  res.json({
    success: true,
    total: pitchHistory.length,
    pitches: pitchHistory
  });
});

// ── API: Conversational AI Chatbot Endpoint ("Slow Reply Killer") ──
app.post('/api/chat', (req, res) => {
  const { verticalId, message, userContact } = req.body;
  const v = BUSINESS_VERTICALS[verticalId] || BUSINESS_VERTICALS.salon;
  const lowerMsg = (message || '').toLowerCase().trim();

  let reply = '';
  let requiresLeadCapture = false;

  // Check matching FAQ keys
  const keys = Object.keys(v.botFaq);
  const matchedKey = keys.find(k => lowerMsg.includes(k));

  if (matchedKey) {
    reply = v.botFaq[matchedKey];
  } else if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('how much') || lowerMsg.includes('rate')) {
    const sampleItems = v.catalog.map(c => `• ${c.name}: ${c.price}`).join('\n');
    reply = `Here is a quick overview of our popular rates:\n${sampleItems}\n\nWould you like me to reserve a slot or send you the complete service menu via WhatsApp?`;
  } else if (lowerMsg.includes('book') || lowerMsg.includes('appointment') || lowerMsg.includes('reserve') || lowerMsg.includes('visit') || lowerMsg.includes('viewing')) {
    reply = `I can book this for you right away! What day and time works best for you? Also please drop your WhatsApp or phone number so our team sends your instant confirmation SMS.`;
    requiresLeadCapture = true;
  } else if (lowerMsg.includes('location') || lowerMsg.includes('where') || lowerMsg.includes('branch') || lowerMsg.includes('address')) {
    const branchList = v.branches.map(b => `[Location] ${b.name}: ${b.address} (Tel: ${b.phone})`).join('\n');
    reply = `We have convenient branches across Nairobi:\n${branchList}\n\nWhich location is closer to you?`;
  } else if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey') || lowerMsg.includes('habari')) {
    reply = `Hello! I am your 24/7 assistant for ${v.brandName}. I can answer price questions, check available slots, or book you in under 60 seconds. What can I help you with today?`;
  } else {
    reply = `Thank you for your inquiry about ${v.brandName}! Our team is ready to assist. Please let me know your preferred date/time or leave your WhatsApp number so we confirm your details immediately!`;
    requiresLeadCapture = true;
  }

  res.json({
    success: true,
    reply,
    requiresLeadCapture,
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Business Growth Sites & AI Chatbot platform running at http://localhost:${PORT}`);
});
