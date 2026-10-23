// ========================================================================
//  BUSINESS GROWTH SITES & 24/7 AI CHATBOT CONTROLLER
//  Production-grade client script:
//  - Multi-vertical layout & design token switcher
//  - Dynamic catalog, gallery, testimonials, and branches
//  - Conversational AI chatbot integration (replies in < 2s)
//  - Deal countdown ticker & announcement bar rotator
//  - Agency pitch package modal
//  Zero emojis -- clean SVG icons & typography only
// ========================================================================

import { BUSINESS_VERTICALS } from './businesses-data.js';

let activeVerticalKey = 'restaurant';
let testimonialIndex = 0;
let currentTestimonials = [];
let walkthroughSeconds = 0;
let walkthroughInterval = null;
let isWalkthroughPlaying = false;

// ── SVG Icons dictionary (strictly zero emojis) ──
const SVG_ICONS = {
  check: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>',
  location: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  clock: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  phone: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10"/></svg>'
};

// ── 1. Switch Active Industry Vertical ──
function switchVertical(key) {
  const v = BUSINESS_VERTICALS[key];
  if (!v) return;

  activeVerticalKey = key;

  // Set Layout Mode and CSS Tokens
  document.body.setAttribute('data-layout', v.layoutMode || 'editorial');
  const root = document.documentElement;
  root.style.setProperty('--primary', v.primaryColor);
  root.style.setProperty('--primary-hover', v.primaryHover);
  root.style.setProperty('--secondary', v.secondaryColor);
  root.style.setProperty('--bg', v.bgColor || '#0b0c12');
  if (v.surfaceColor) root.style.setProperty('--surface-card', v.surfaceColor);
  if (v.fontDisplay) root.style.setProperty('--font-display', v.fontDisplay);

  // Update Pills State
  document.querySelectorAll('.vert-pill').forEach(pill => {
    pill.classList.toggle('active', pill.dataset.vertical === key);
  });

  // Update Page Title and Meta
  const titleEl = document.getElementById('page-title');
  if (titleEl) titleEl.textContent = `${v.brandName} | High-Converting Website & 24/7 AI Assistant`;

  // Update Header
  const brandNameEl = document.getElementById('brand-name');
  if (brandNameEl) brandNameEl.textContent = v.brandName;

  const brandTaglineEl = document.getElementById('brand-tagline');
  if (brandTaglineEl) brandTaglineEl.textContent = v.tagline;

  const branchPillEl = document.getElementById('branch-pill-name');
  if (branchPillEl && v.branches && v.branches[0]) {
    branchPillEl.textContent = v.branches[0].name;
  }

  const headerCtaEl = document.getElementById('header-cta-label');
  if (headerCtaEl) headerCtaEl.textContent = v.ctaText;

  // Update Hero Section
  const heroBadgeEl = document.getElementById('hero-badge-text');
  if (heroBadgeEl) heroBadgeEl.textContent = v.heroBadge;

  const heroHeadlineEl = document.getElementById('hero-headline');
  if (heroHeadlineEl) heroHeadlineEl.innerHTML = v.heroHeadline;

  const heroSubheadEl = document.getElementById('hero-subhead');
  if (heroSubheadEl) heroSubheadEl.textContent = v.heroSubhead;

  const heroImgEl = document.getElementById('hero-image');
  if (heroImgEl && v.heroImage) heroImgEl.src = v.heroImage;

  const heroVideoEl = document.getElementById('hero-video');
  if (heroVideoEl) {
    if (v.heroVideo) {
      heroVideoEl.src = v.heroVideo;
      heroVideoEl.style.display = 'block';
    } else {
      heroVideoEl.style.display = 'none';
    }
  }

  const heroCtaEl = document.getElementById('hero-cta-label');
  if (heroCtaEl) heroCtaEl.textContent = v.ctaText;

  const stat1El = document.getElementById('stat-clients');
  if (stat1El) stat1El.textContent = v.stat1;

  const stat2El = document.getElementById('stat-rating');
  if (stat2El) stat2El.textContent = v.stat2;

  const stat3El = document.getElementById('stat-speed');
  if (stat3El) stat3El.textContent = v.stat3;

  // Update Weekly Deal
  if (v.weeklyDeal) {
    const dealTagEl = document.getElementById('deal-tag');
    if (dealTagEl) dealTagEl.textContent = v.weeklyDeal.badge || 'SPECIAL OFFER';

    const dealTitleEl = document.getElementById('deal-title');
    if (dealTitleEl) dealTitleEl.textContent = v.weeklyDeal.title;

    const dealDescEl = document.getElementById('deal-desc');
    if (dealDescEl) dealDescEl.textContent = v.weeklyDeal.desc;

    const dealOldEl = document.getElementById('deal-old');
    if (dealOldEl) dealOldEl.textContent = v.weeklyDeal.oldPrice;

    const dealNewEl = document.getElementById('deal-new');
    if (dealNewEl) dealNewEl.textContent = v.weeklyDeal.dealPrice;

    const dealCountdownEl = document.getElementById('deal-countdown');
    if (dealCountdownEl) dealCountdownEl.textContent = v.weeklyDeal.timer;
  }

  // Render Dual Showcase (Desktop + Mobile)
  updateDualShowcase(v);

  // Render Catalog
  renderCatalog(v.catalog, v.id);

  // Render Gallery
  renderGallery(v.gallery || []);

  // Render Testimonials
  renderTestimonials(v.testimonials || []);

  // Render Branches
  renderBranches(v.branches || []);

  // Update Footer
  const footerBrand = document.getElementById('footer-brand-name');
  if (footerBrand) footerBrand.textContent = v.brandName;

  const footerCopy = document.getElementById('footer-copy-name');
  if (footerCopy) footerCopy.textContent = v.brandName;

  // Update Chatbot Welcome & Prompts
  updateChatbotContext(v);

  // Update Pitch Engine Preset for this Vertical
  syncPitchFormWithVertical(v);
}

// ── Update Dual-Device Showcase Frames ──
function updateDualShowcase(v) {
  // Desktop frame
  const dtUrl = document.getElementById('mockup-desktop-url');
  if (dtUrl) dtUrl.textContent = `https://${v.id === 'restaurant' ? 'kikaogrill' : v.id}demo.co.ke`;

  const dtTitle = document.getElementById('mini-desktop-title');
  if (dtTitle) dtTitle.textContent = v.brandName;

  const dtDesc = document.getElementById('mini-desktop-desc');
  if (dtDesc) dtDesc.textContent = v.tagline;

  const dtCatalog = document.getElementById('mini-desktop-catalog');
  if (dtCatalog && v.catalog) {
    dtCatalog.innerHTML = v.catalog.slice(0, 4).map(item => `
      <div class="mini-catalog-card">
        <div>
          <strong>${item.name}</strong>
          <small style="color:var(--text-muted);font-size:11px;">${item.category || ''}</small>
        </div>
        <span>${item.price}</span>
      </div>
    `).join('');
  }

  // Mobile frame
  const mbBrand = document.getElementById('mini-mobile-brand');
  if (mbBrand) mbBrand.textContent = v.brandName.split(' ')[0] + ' App';

  const mbLogo = document.getElementById('mini-mobile-logo');
  if (mbLogo) mbLogo.textContent = v.brandName.substring(0, 2).toUpperCase();

  const mbDeal = document.getElementById('mini-mobile-deal');
  if (mbDeal && v.weeklyDeal) mbDeal.textContent = `${v.weeklyDeal.title}: ${v.weeklyDeal.dealPrice}`;

  const mbItems = document.getElementById('mini-mobile-items');
  if (mbItems && v.catalog) {
    mbItems.innerHTML = v.catalog.slice(0, 3).map(item => `
      <div class="mobile-item-row">
        <strong>${item.name}</strong>
        <span>${item.price}</span>
      </div>
    `).join('');
  }

  const mbChat = document.getElementById('mini-mobile-chat-text');
  if (mbChat) {
    mbChat.textContent = `Hello! Welcome to ${v.brandName}. Can I quote a package or book your slot in 30 seconds?`;
  }
}

// ── 2. Render Catalog Items ──
function renderCatalog(items, verticalId) {
  const container = document.getElementById('catalog-grid');
  if (!container || !items) return;

  const actionLabel = verticalId === 'realestate' ? 'View Details' :
                      verticalId === 'cardealer' ? 'Test Drive' :
                      verticalId === 'gym' ? 'Free Pass' : 'Book Now';

  container.innerHTML = items.map(item => `
    <article class="catalog-card" id="card-${item.id}">
      <div class="card-media">
        <img src="${item.image}" alt="${item.name}" loading="lazy" />
        <span class="card-badge">${item.dietaryTag || 'Popular'}</span>
      </div>
      <div class="card-body">
        <h4>${item.name}</h4>
        <p>${item.desc}</p>
        <div class="card-footer">
          <div>
            <span class="card-price">${item.price}</span>
            <small class="card-duration">${item.duration || ''}</small>
          </div>
          <button class="btn-card-action" onclick="window.triggerCatalogBooking('${encodeURIComponent(item.name)}', '${encodeURIComponent(item.price)}')">
            ${actionLabel}
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

// ── 3. Render Gallery (Big Square Style Visuals) ──
function renderGallery(images) {
  const container = document.getElementById('gallery-grid');
  if (!container) return;

  if (!images.length) {
    container.parentElement.style.display = 'none';
    return;
  }
  container.parentElement.style.display = 'block';

  container.innerHTML = images.map(img => `
    <div class="gallery-card">
      <img src="${img.url}" alt="${img.caption}" loading="lazy" />
      <div class="gallery-card__overlay">
        <span class="gallery-card__title">${img.caption}</span>
      </div>
    </div>
  `).join('');
}

// ── 4. Render Testimonials Carousel ──
function renderTestimonials(testimonials) {
  const track = document.getElementById('testimonials-track');
  const dotsContainer = document.getElementById('testimonials-dots');
  if (!track || !testimonials.length) return;

  currentTestimonials = testimonials;
  testimonialIndex = 0;

  track.innerHTML = testimonials.map((t, idx) => `
    <div class="testimonial-card ${idx === 0 ? 'active' : ''}" id="testi-${idx}">
      <p class="testimonial-quote">"${t.text}"</p>
      <div class="testimonial-author">
        <div class="author-info">
          <strong>${t.author}</strong>
          <span>${t.role}</span>
        </div>
        <div class="author-rating">Rating: ${t.rating || '5.0'} / 5.0</div>
      </div>
    </div>
  `).join('');

  if (dotsContainer) {
    dotsContainer.innerHTML = testimonials.map((_, idx) => `
      <span class="dot ${idx === 0 ? 'active' : ''}" data-index="${idx}"></span>
    `).join('');

    dotsContainer.querySelectorAll('.dot').forEach(dot => {
      dot.addEventListener('click', (e) => {
        const targetIdx = parseInt(e.target.dataset.index, 10);
        showTestimonial(targetIdx);
      });
    });
  }
}

function showTestimonial(idx) {
  if (!currentTestimonials.length) return;
  testimonialIndex = (idx + currentTestimonials.length) % currentTestimonials.length;

  document.querySelectorAll('.testimonial-card').forEach((card, i) => {
    card.classList.toggle('active', i === testimonialIndex);
  });
  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === testimonialIndex);
  });
}

// ── 5. Render Branches ──
function renderBranches(branches) {
  const container = document.getElementById('branches-grid');
  if (!container || !branches) return;

  container.innerHTML = branches.map(b => `
    <div class="branch-card">
      <strong>
        ${SVG_ICONS.location}
        ${b.name}
      </strong>
      <p>${b.address}</p>
      <small>${SVG_ICONS.clock} Hours: ${b.hours}</small>
      <a href="tel:${b.phone.replace(/\s+/g, '')}" class="branch-tel">
        ${SVG_ICONS.phone}
        ${b.phone}
      </a>
    </div>
  `).join('');
}

// ── 6. Conversational AI Chatbot Controller ──
function updateChatbotContext(v) {
  const titleEl = document.getElementById('chat-bot-title');
  if (titleEl) titleEl.textContent = `${v.brandName} Concierge`;

  const welcomeEl = document.getElementById('chat-welcome');
  if (welcomeEl) {
    welcomeEl.textContent = `Hello! Welcome to ${v.brandName}. I can answer price questions, check available slots, or book you in under 60 seconds. What can I assist you with today?`;
  }

  const chipsContainer = document.getElementById('chat-chips');
  if (chipsContainer && v.chatbotPrompts) {
    chipsContainer.innerHTML = v.chatbotPrompts.map(p => `
      <button type="button" class="chip-btn" data-prompt="${p}">
        ${p}
      </button>
    `).join('');

    chipsContainer.querySelectorAll('.chip-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        sendUserMessage(btn.dataset.prompt);
      });
    });
  }
}

async function sendUserMessage(msgText) {
  const inputEl = document.getElementById('chat-input');
  const chatBody = document.getElementById('chat-body');
  const text = (msgText || (inputEl ? inputEl.value : '')).trim();

  if (!text) return;
  if (inputEl) inputEl.value = '';

  // Append user bubble
  const userMsg = document.createElement('div');
  userMsg.className = 'chat-msg user';
  userMsg.textContent = text;
  chatBody.appendChild(userMsg);
  chatBody.scrollTop = chatBody.scrollHeight;

  // Typing placeholder
  const botMsg = document.createElement('div');
  botMsg.className = 'chat-msg bot';
  botMsg.textContent = 'Typing...';
  chatBody.appendChild(botMsg);
  chatBody.scrollTop = chatBody.scrollHeight;

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        verticalId: activeVerticalKey,
        message: text
      })
    });

    if (res.ok) {
      const data = await res.json();
      botMsg.textContent = data.reply;
    } else {
      throw new Error('API offline');
    }
  } catch (err) {
    // Intelligent client-side fallback
    const v = BUSINESS_VERTICALS[activeVerticalKey];
    const lower = text.toLowerCase();
    let localReply = `Thank you for your interest in ${v.brandName}! Our team confirms bookings immediately. Please share your WhatsApp number so we send your instant appointment confirmation.`;

    if (v.botFaq) {
      const matched = Object.keys(v.botFaq).find(k => lower.includes(k));
      if (matched) localReply = v.botFaq[matched];
    }
    botMsg.textContent = localReply;
  }

  chatBody.scrollTop = chatBody.scrollHeight;
}

// ── Global booking trigger for catalog items ──
window.triggerCatalogBooking = function(itemName, price) {
  const decodedName = decodeURIComponent(itemName);
  const decodedPrice = decodeURIComponent(price);
  const chatWindow = document.getElementById('chat-window');
  if (chatWindow && !chatWindow.classList.contains('open')) {
    chatWindow.classList.add('open');
  }
  sendUserMessage(`I would like to book "${decodedName}" (${decodedPrice}). When is your next opening?`);
};

// ── 7. Setup Event Listeners ──
function initApp() {
  // Industry vertical switcher pills
  document.querySelectorAll('.vert-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const key = pill.dataset.vertical;
      switchVertical(key);
    });
  });

  // Header CTAs trigger chat booking
  const headerCta = document.getElementById('header-cta-btn');
  if (headerCta) {
    headerCta.addEventListener('click', () => {
      const chatWindow = document.getElementById('chat-window');
      chatWindow.classList.add('open');
      sendUserMessage('I would like to check available slots for today.');
    });
  }

  const heroCta = document.getElementById('hero-cta-btn');
  if (heroCta) {
    heroCta.addEventListener('click', () => {
      const catalogSec = document.getElementById('catalog-section');
      if (catalogSec) catalogSec.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const heroChat = document.getElementById('hero-chat-btn');
  if (heroChat) {
    heroChat.addEventListener('click', () => {
      const chatWindow = document.getElementById('chat-window');
      chatWindow.classList.add('open');
    });
  }

  // Floating Chat FAB
  const chatFab = document.getElementById('chat-fab');
  const chatWindow = document.getElementById('chat-window');
  const chatClose = document.getElementById('chat-close');

  if (chatFab && chatWindow) {
    chatFab.addEventListener('click', () => {
      chatWindow.classList.toggle('open');
    });
  }

  if (chatClose && chatWindow) {
    chatClose.addEventListener('click', () => {
      chatWindow.classList.remove('open');
    });
  }

  // Chat send button and enter key
  const chatSend = document.getElementById('chat-send');
  const chatInput = document.getElementById('chat-input');

  if (chatSend) {
    chatSend.addEventListener('click', () => sendUserMessage());
  }

  if (chatInput) {
    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        sendUserMessage();
      }
    });
  }

  // Testimonials Carousel Controls
  const prevBtn = document.getElementById('testimonial-prev');
  const nextBtn = document.getElementById('testimonial-next');

  if (prevBtn) prevBtn.addEventListener('click', () => showTestimonial(testimonialIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showTestimonial(testimonialIndex + 1));

  // Agency Modal Trigger & Close
  const agencyTrigger = document.getElementById('agency-trigger');
  const agencyModal = document.getElementById('agency-modal');
  const agencyOverlay = document.getElementById('agency-overlay');
  const agencyClose = document.getElementById('agency-modal-close');

  function openAgencyModal() {
    if (agencyModal) agencyModal.classList.add('open');
    if (agencyOverlay) agencyOverlay.classList.add('open');
  }

  function closeAgencyModal() {
    if (agencyModal) agencyModal.classList.remove('open');
    if (agencyOverlay) agencyOverlay.classList.remove('open');
  }

  if (agencyTrigger) agencyTrigger.addEventListener('click', openAgencyModal);
  if (agencyClose) agencyClose.addEventListener('click', closeAgencyModal);
  if (agencyOverlay) agencyOverlay.addEventListener('click', closeAgencyModal);

  // Pitch Command Center Tabs
  document.querySelectorAll('.modal-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPane = document.getElementById(tab.dataset.tab);
      if (targetPane) targetPane.classList.add('active');
    });
  });

  // 1-Click Script Copy to Clipboard
  document.querySelectorAll('.btn-copy-script').forEach(btn => {
    btn.addEventListener('click', async () => {
      const targetId = btn.dataset.target;
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      const text = targetEl.textContent.trim();
      try {
        await navigator.clipboard.writeText(text);
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = originalText;
          btn.classList.remove('copied');
        }, 2200);
      } catch (err) {
        // Fallback for older browsers
        const tempTextarea = document.createElement('textarea');
        tempTextarea.value = text;
        document.body.appendChild(tempTextarea);
        tempTextarea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextarea);
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = 'Copy Script';
          btn.classList.remove('copied');
        }, 2200);
      }
    });
  });

  // 45-Second Walkthrough Controller
  const btn45s = document.getElementById('btn-45s-toggle');
  if (btn45s) {
    btn45s.addEventListener('click', toggle45sWalkthrough);
  }

  document.querySelectorAll('.step-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const stepIdx = parseInt(dot.dataset.step, 10);
      jumpToWalkthroughStep(stepIdx);
    });
  });

  // CyTech Studios Direct Pitch Dispatcher Listeners
  const pitchNameInput = document.getElementById('pitch-biz-name');
  const pitchContactInput = document.getElementById('pitch-biz-contact');
  const pitchPkgSelect = document.getElementById('pitch-pkg-select');
  const pitchNoteInput = document.getElementById('pitch-personal-note');

  if (pitchNameInput) pitchNameInput.addEventListener('input', updatePitchPreview);
  if (pitchContactInput) pitchContactInput.addEventListener('input', updatePitchPreview);
  if (pitchPkgSelect) pitchPkgSelect.addEventListener('change', updatePitchPreview);
  if (pitchNoteInput) pitchNoteInput.addEventListener('input', updatePitchPreview);

  const btnDispatchWa = document.getElementById('btn-pitch-wa');
  const btnDispatchEmail = document.getElementById('btn-pitch-email');
  const btnDispatchCopy = document.getElementById('btn-pitch-copy');

  if (btnDispatchWa) {
    btnDispatchWa.addEventListener('click', () => dispatchPitch('whatsapp'));
  }

  if (btnDispatchEmail) {
    btnDispatchEmail.addEventListener('click', () => dispatchPitch('email'));
  }

  if (btnDispatchCopy) {
    btnDispatchCopy.addEventListener('click', async () => {
      const previewEl = document.getElementById('pitch-live-preview');
      if (!previewEl) return;
      try {
        await navigator.clipboard.writeText(previewEl.textContent.trim());
        btnDispatchCopy.classList.add('copied');
        const originalText = btnDispatchCopy.querySelector('span').textContent;
        btnDispatchCopy.querySelector('span').textContent = 'Copied!';
        setTimeout(() => {
          btnDispatchCopy.classList.remove('copied');
          btnDispatchCopy.querySelector('span').textContent = originalText;
        }, 2200);
      } catch (e) {
        // Fallback
      }
    });
  }

  // Load existing pitches on load
  fetchPitchHistory();

  // Announcement Bar Rotator
  const tickerItems = document.querySelectorAll('.announcement-bar__item');
  if (tickerItems.length > 1) {
    let tickerIdx = 0;
    setInterval(() => {
      tickerItems[tickerIdx].classList.remove('active');
      tickerIdx = (tickerIdx + 1) % tickerItems.length;
      tickerItems[tickerIdx].classList.add('active');
    }, 4500);
  }

  // Initial render with default vertical
  switchVertical(activeVerticalKey);
}

// ── CyTech Pitch Dispatcher Functions ──
function syncPitchFormWithVertical(v) {
  const nameInp = document.getElementById('pitch-biz-name');
  const pkgSel = document.getElementById('pitch-pkg-select');
  const noteInp = document.getElementById('pitch-personal-note');

  if (nameInp) nameInp.value = v.brandName;

  if (pkgSel) {
    if (v.id === 'restaurant') {
      pkgSel.value = 'qr-menu';
    } else {
      pkgSel.value = 'website-chatbot';
    }
  }

  if (noteInp) {
    if (v.id === 'restaurant') {
      noteInp.value = 'Saw your woodfire BBQ reels on Instagram -- the food presentation is top-tier!';
    } else if (v.id === 'salon') {
      noteInp.value = 'Loved your knotless braids transformation video on Instagram -- your work is flawless!';
    } else if (v.id === 'clinic') {
      noteInp.value = 'Noticed your clinic has great Google reviews but no instant 24/7 appointment booking on your website.';
    } else {
      noteInp.value = 'Your business has strong local reviews and would benefit from instant customer response.';
    }
  }

  updatePitchPreview();
}

function updatePitchPreview() {
  const name = (document.getElementById('pitch-biz-name')?.value || 'there').trim();
  const pkg = document.getElementById('pitch-pkg-select')?.value || 'qr-menu';
  const note = (document.getElementById('pitch-personal-note')?.value || '').trim();
  const previewBox = document.getElementById('pitch-live-preview');
  if (!previewBox) return;

  let text = '';
  if (pkg === 'qr-menu') {
    text = `Hi ${name}, this is Cy from CyTech Studios Nairobi. I came across your venue on Google Maps and your reviews are impressive, but I noticed guests can't view your menu or order online from their phone.

${note ? note + '\n\n' : ''}We build instant QR table ordering for Kenyan restaurants and lounges: guests scan from their phone, view your photo menu, order directly to the kitchen/bar, and pay via M-Pesa. No waving hands at waiters on busy rush nights, zero order mistakes, and bigger average ticket sizes.

Setup starts at KES 30,000 (KES 15,000 deposit), or KES 95,000 with live kitchen screen and staff dashboard.

Here is our live 45-second demo: http://localhost:3005
Can I set this up for you before this weekend's rush?

Best regards,
Cy | CyTech Studios Nairobi`;
  } else if (pkg === 'website-chatbot') {
    text = `Hi ${name}, this is Cy from CyTech Studios Nairobi. Quick question: how many WhatsApp or Instagram messages do you get daily asking about prices, openings, and services?

${note ? note + '\n\n' : ''}We build modern marketing websites paired with a 24/7 Conversational AI assistant that answers questions in 2 seconds, quotes service rates, books appointments, and sends confirmed leads straight to your WhatsApp and Google Calendar.

Website setups start at KES 30,000 (KES 15,000 deposit), and complete Website + 24/7 AI Chatbot packages are KES 45,000 to 50,000+.

You can test our live dual-device demo here: http://localhost:3005
Would you like me to generate a free mockup using ${name}'s actual branding before you pay anything?

Best regards,
Cy | CyTech Studios Nairobi`;
  } else if (pkg === 'full-pos') {
    text = `Hello ${name}, this is Cy from CyTech Studios Nairobi.

${note ? note + '\n\n' : ''}We build complete hospitality ordering systems: QR menus, table ordering, automated M-Pesa payments, and integration with POS systems. Guests order from their phones, staff see orders in real time on a live kitchen display, and management gets live sales data.

Package is KES 95,000 (60% deposit KES 57,000).
Check our live interactive demo here: http://localhost:3005

Would a short 5-minute walkthrough this week work, or should I send a demo video first?

Regards,
Cy | CyTech Studios Nairobi`;
  } else {
    text = `Hello ${name}, this is Cy from CyTech Studios Nairobi.

${note ? note + '\n\n' : ''}We engineer custom web applications, POS integrations, and real-time management dashboards for Kenyan businesses. From automated M-Pesa reconciliations to multi-branch staff control and live order tracking.

Check our live interactive platform demo: http://localhost:3005
Would a 10-minute walkthrough this week work for your team?

Regards,
Cy | CyTech Studios Nairobi`;
  }

  previewBox.textContent = text;
}

async function dispatchPitch(channel) {
  const name = (document.getElementById('pitch-biz-name')?.value || 'Venue').trim();
  const contact = (document.getElementById('pitch-biz-contact')?.value || '').trim();
  const pkg = document.getElementById('pitch-pkg-select')?.value || 'qr-menu';
  const note = (document.getElementById('pitch-personal-note')?.value || '').trim();

  try {
    const res = await fetch('/api/send-pitch', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        businessName: name,
        contact: contact,
        channel: channel,
        packageType: pkg,
        personalDetail: note,
        targetVertical: activeVerticalKey
      })
    });

    const data = await res.json();
    if (data.success) {
      // Open the appropriate channel directly
      if (channel === 'whatsapp') {
        window.open(data.data.waUrl, '_blank');
      } else {
        window.location.href = data.data.mailtoUrl;
      }

      addPitchChip(data.data);
      updateSessionCount(data.totalPitches);
    }
  } catch (err) {
    // If backend unavailable, dispatch directly on client
    let cleanPhone = contact.replace(/[^\d]/g, '');
    if (cleanPhone.startsWith('07') || cleanPhone.startsWith('01')) cleanPhone = '254' + cleanPhone.substring(1);
    const text = document.getElementById('pitch-live-preview')?.textContent || '';

    if (channel === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(text)}`, '_blank');
    } else {
      window.location.href = `mailto:${contact}?subject=${encodeURIComponent('Business Growth Solution for ' + name)}&body=${encodeURIComponent(text)}`;
    }
  }
}

async function fetchPitchHistory() {
  try {
    const res = await fetch('/api/pitches');
    if (res.ok) {
      const data = await res.json();
      updateSessionCount(data.total);
      const container = document.getElementById('dispatched-chips-container');
      if (container && data.pitches) {
        container.innerHTML = data.pitches.slice(0, 8).map(p => `
          <div class="pitch-log-chip">
            <span class="channel-badge">${p.channel.toUpperCase()}</span>
            <strong>${p.businessName}</strong>
            <small style="color:var(--text-subtle);">${new Date(p.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</small>
          </div>
        `).join('');
      }
    }
  } catch (e) {}
}

function addPitchChip(record) {
  const container = document.getElementById('dispatched-chips-container');
  if (!container) return;
  const chip = document.createElement('div');
  chip.className = 'pitch-log-chip';
  chip.innerHTML = `
    <span class="channel-badge">${record.channel.toUpperCase()}</span>
    <strong>${record.businessName}</strong>
    <small style="color:#4ade80;">Just now</small>
  `;
  container.prepend(chip);
}

function updateSessionCount(count) {
  const el = document.getElementById('session-pitch-count');
  if (el) el.textContent = count;
}

// ── 45-Second Walkthrough Stepper Engine ──
const WALKTHROUGH_STEPS = [
  { start: 0, end: 11, label: 'Step 1: Instant QR Scan & Mobile Load', focus: 'mobile-scan' },
  { start: 12, end: 22, label: 'Step 2: Visual Menu & 1-Click Order', focus: 'menu-order' },
  { start: 23, end: 34, label: 'Step 3: 2s AI Concierge & Lead Capture', focus: 'ai-concierge' },
  { start: 35, end: 45, label: 'Step 4: Live Kitchen POS Ping & M-Pesa Sync', focus: 'admin-kds' }
];

function toggle45sWalkthrough() {
  if (isWalkthroughPlaying) {
    pauseWalkthrough();
  } else {
    startWalkthrough();
  }
}

function startWalkthrough() {
  isWalkthroughPlaying = true;
  const btn = document.getElementById('btn-45s-toggle');
  if (btn) {
    btn.classList.add('playing');
    btn.querySelector('span').textContent = formatSeconds(walkthroughSeconds) + ' / 00:45';
  }

  walkthroughInterval = setInterval(() => {
    walkthroughSeconds++;
    if (walkthroughSeconds > 45) {
      walkthroughSeconds = 0;
    }
    updateWalkthroughUI();
  }, 1000);
}

function pauseWalkthrough() {
  isWalkthroughPlaying = false;
  if (walkthroughInterval) clearInterval(walkthroughInterval);
  const btn = document.getElementById('btn-45s-toggle');
  if (btn) btn.classList.remove('playing');
}

function jumpToWalkthroughStep(stepIdx) {
  const step = WALKTHROUGH_STEPS[stepIdx];
  if (step) {
    walkthroughSeconds = step.start;
    updateWalkthroughUI();
  }
}

function updateWalkthroughUI() {
  // Timer label
  const timerLabel = document.getElementById('label-45s-timer');
  if (timerLabel) timerLabel.textContent = `${formatSeconds(walkthroughSeconds)} / 00:45`;

  // Progress fill
  const fill = document.getElementById('progress-fill-45s');
  if (fill) fill.style.width = `${(walkthroughSeconds / 45) * 100}%`;

  // Determine active step
  const activeStepIdx = WALKTHROUGH_STEPS.findIndex(s => walkthroughSeconds >= s.start && walkthroughSeconds <= s.end);
  const activeStep = WALKTHROUGH_STEPS[activeStepIdx] || WALKTHROUGH_STEPS[0];

  const titleBadge = document.getElementById('stepper-step-title');
  if (titleBadge) titleBadge.textContent = activeStep.label;

  document.querySelectorAll('.step-dot').forEach((dot, idx) => {
    dot.classList.toggle('active', idx === activeStepIdx);
  });

  // Visual cues on dual mockup based on step
  const mobileFrame = document.querySelector('.mockup-mobile');
  const desktopFrame = document.querySelector('.mockup-desktop');
  const mobileChat = document.getElementById('mini-mobile-chat');

  if (activeStepIdx === 0) {
    if (mobileFrame) mobileFrame.style.borderColor = 'var(--secondary)';
    if (desktopFrame) desktopFrame.style.borderColor = 'var(--border-strong)';
  } else if (activeStepIdx === 1) {
    if (mobileFrame) mobileFrame.style.borderColor = 'var(--primary)';
    if (desktopFrame) desktopFrame.style.borderColor = 'var(--primary)';
  } else if (activeStepIdx === 2) {
    if (mobileChat) {
      mobileChat.style.background = 'rgba(234, 88, 12, 0.2)';
      mobileChat.style.borderColor = 'var(--secondary)';
    }
  } else if (activeStepIdx === 3) {
    const kdsTicket = document.querySelector('.kds-ticket--priority');
    if (kdsTicket) {
      kdsTicket.style.boxShadow = '0 0 20px rgba(34, 197, 94, 0.35)';
    }
  }
}

function formatSeconds(sec) {
  const s = sec % 60;
  return `00:${s < 10 ? '0' + s : s}`;
}

// Initialize on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
