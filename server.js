import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());

// 1. Serve Vite production dist bundle if built
const distDir = path.join(__dirname, 'dist');
app.use(express.static(distDir));
app.use(express.static(__dirname));

// 2. API Health Check
app.get('/api/health', (_req, res) => {
  res.json({
    success: true,
    data: {
      status: 'healthy',
      project: 'Pitch Center v2',
      engine: 'Vite + React 18 + TS + Tailwind + Supabase Realtime',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    },
    message: 'Pitch Center API operational'
  });
});

// 3. API Places ingestion simulation / proxy
app.post('/api/places', (req, res) => {
  const { query } = req.body;
  res.json({
    success: true,
    data: {
      name: query || 'Nairobi Premier Business',
      address: 'Westlands Commercial Center, Nairobi',
      rating: 4.9,
      review_count: 148,
      hours: { mon_fri: '8:00 AM - 7:00 PM', sat: '9:00 AM - 6:00 PM', sun: 'Closed' }
    }
  });
});

// 4. SPA Fallback routing (react router handles all frontend paths)
app.get('*', (_req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Pitch Center v2 running at http://localhost:${PORT}`);
});
