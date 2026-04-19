// Admin Routing Check
if(window.location.search.includes('admin=true') || window.location.search.includes('secret=neural')) {
    window.location.href = 'admin.html';
}

// Default setup
let currentLang = localStorage.getItem('lang') || 'en';
let isLight = localStorage.getItem('theme') === 'light';

// Initialize Theme
if(isLight) document.documentElement.setAttribute('data-theme', 'light');

// Translation Function
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const keys = el.getAttribute('data-i18n').split('.');
    let value = translations[lang];
    keys.forEach(k => { if(value) value = value[k]; });
    if(value) el.innerHTML = value;
  });

  const langSelect = document.getElementById('lang-select');
  if(langSelect) langSelect.value = lang;
}

document.addEventListener('DOMContentLoaded', () => {
    // Apply lang initially
    applyLanguage(currentLang);

    // Language Switcher
    const langSelect = document.getElementById('lang-select');
    if(langSelect) {
        langSelect.addEventListener('change', (e) => applyLanguage(e.target.value));
    }

    // Theme Switcher
    const themeBtn = document.getElementById('theme-btn');
    if(themeBtn) {
        themeBtn.innerHTML = isLight ? '🌕' : '☀️';
        themeBtn.addEventListener('click', () => {
            const root = document.documentElement;
            isLight = root.getAttribute('data-theme') !== 'light';
            if(isLight) {
                root.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            } else {
                root.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }
            themeBtn.innerHTML = isLight ? '🌕' : '☀️';
        });
    }

    // ── Cursor ──
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    if(cursor && ring) {
        let mx = 0, my = 0, rx = 0, ry = 0;
        document.addEventListener('mousemove', e => {
            mx = e.clientX; my = e.clientY;
            cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
        });
        function animateRing() {
            rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
            ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
            requestAnimationFrame(animateRing);
        }
        animateRing();

        document.querySelectorAll('a, button, select, .tech-item, .project-card, .cert-card, .modal-close').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%,-50%) scale(2.5)';
                ring.style.transform = 'translate(-50%,-50%) scale(1.5)';
                ring.style.borderColor = 'var(--cyan)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%,-50%) scale(1)';
                ring.style.transform = 'translate(-50%,-50%) scale(1)';
                ring.style.borderColor = 'rgba(0,245,255,0.4)';
            });
        });
    }

    // ── Ultra-Professional Neural Canvas 3D ──
    const canvas = document.getElementById('neuralCanvas');
    if(canvas) {
        const ctx = canvas.getContext('2d');
        let W, H, nodes = [], mouseX = -999, mouseY = -999, scrollY = 0;
        const NODE_COUNT = 90; 
        const MAX_DIST = 160;

        function resize() { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; }
        window.addEventListener('resize', () => { resize(); initNodes(); });
        document.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });
        window.addEventListener('scroll', () => { scrollY = window.scrollY; });

        function initNodes() {
            nodes = [];
            for (let i = 0; i < NODE_COUNT; i++) {
                // z represents depth (1 is close, 0.2 is far)
                const z = Math.random() * 0.8 + 0.2; 
                nodes.push({
                    x: Math.random() * W, y: Math.random() * H,
                    vx: (Math.random() - 0.5) * 1.5 * z, vy: (Math.random() - 0.5) * 1.5 * z,
                    z: z, r: (Math.random() * 2 + 1) * z, 
                    pulse: Math.random() * Math.PI * 2,
                    originX: Math.random() * W, originY: Math.random() * H
                });
            }
        }

        function drawNeural() {
            let currentLight = document.documentElement.getAttribute('data-theme') === 'light';
            // Smooth motion blur fade
            ctx.fillStyle = currentLight ? 'rgba(248, 250, 252, 0.25)' : 'rgba(5, 10, 14, 0.25)';
            ctx.fillRect(0, 0, W, H);
            
            // Constellation slow rotation simulation
            const time = Date.now() * 0.0001;

            nodes.forEach(n => {
                // 1. Mouse Magnetism (Elastic pull)
                const dx = mouseX - n.x, dy = mouseY - n.y;
                const d = Math.sqrt(dx * dx + dy * dy);
                if (d < 200) {
                    const force = (200 - d) / 200;
                    n.vx += (dx / d) * force * 0.07 * n.z;
                    n.vy += (dy / d) * force * 0.07 * n.z;
                }
                
                // 2. Scroll Gravity (Parallax Wind)
                n.vy -= (scrollY * 0.00005) * n.z;

                // Physics Friction
                n.vx *= 0.96; n.vy *= 0.96;
                
                // Base Orbit Movement
                n.x += n.vx + Math.sin(n.pulse + time)*0.3*n.z; 
                n.y += n.vy + Math.cos(n.pulse + time)*0.3*n.z;
                n.pulse += 0.02;
                
                // Screen Wrap with depth consideration
                if (n.x < -50) n.x = W + 50; if (n.x > W + 50) n.x = -50;
                if (n.y < -50) n.y = H + 50; if (n.y > H + 50) n.y = -50;
            });

            // Draw Connections
            ctx.lineWidth = 0.5;
            for (let i = 0; i < nodes.length; i++) {
                // Draw line to mouse
                const dMouse = Math.sqrt(Math.pow(mouseX - nodes[i].x, 2) + Math.pow(mouseY - nodes[i].y, 2));
                if (dMouse < 180) {
                    const alpha = (1 - dMouse/180) * 0.3 * nodes[i].z; // Reduced intensity
                    ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(mouseX, mouseY);
                    ctx.strokeStyle = currentLight ? `rgba(2,132,199, ${alpha})` : `rgba(0,245,255, ${alpha})`;
                    ctx.stroke();
                }

                // Draw lines between nodes
                for (let j = i + 1; j < nodes.length; j++) {
                    const a = nodes[i], b = nodes[j];
                    const dist = Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
                    
                    // Only connect nodes at similar depths
                    if (dist < MAX_DIST && Math.abs(a.z - b.z) < 0.3) {
                        const alpha = (1 - dist / MAX_DIST) * (currentLight ? 0.15 : 0.25) * ((a.z + b.z) / 2); // Dimmer connections
                        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
                        ctx.strokeStyle = currentLight ? `rgba(2, 132, 199, ${alpha})` : `rgba(0, 245, 255, ${alpha})`;
                        ctx.stroke();
                    }
                }
            }

            // Draw Nodes
            nodes.forEach(n => {
                const glow = (0.5 + 0.2 * Math.sin(n.pulse)) * n.z; // Softer glow
                
                // Outer Glow
                ctx.beginPath(); ctx.arc(n.x, n.y, n.r * 2.5 * glow, 0, Math.PI * 2);
                ctx.fillStyle = currentLight ? `rgba(2, 132, 199, ${0.15 * glow})` : `rgba(0, 245, 255, ${0.1 * glow})`;
                ctx.fill();
                
                // Core
                ctx.beginPath(); ctx.arc(n.x, n.y, n.r * 0.8, 0, Math.PI * 2);
                ctx.fillStyle = currentLight ? `rgba(15, 23, 42, ${0.4 * n.z})` : `rgba(240, 248, 255, ${0.5 * n.z})`;
                ctx.fill();
            });

            requestAnimationFrame(drawNeural);
        }
        resize(); initNodes(); drawNeural();
    }

    // ── Scroll reveal ──
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    reveals.forEach(el => observer.observe(el));

    // ── Smooth active nav ──
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
        navLinks.forEach(a => { 
            // Only toggle colors if it's an interior link starting with #
            if(a.getAttribute('href').startsWith('#') && current) {
                a.style.color = a.getAttribute('href') === '#' + current ? 'var(--cyan)' : ''; 
            }
        });
        
        const navbar = document.getElementById('navbar');
        if(navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // ── Inject Custom LocalStorage Items ──
    async function loadCustomItems() {
        let globalDB = null;
        
        // Base structure that will always show if backend is off
        const BASE_DB = {
            "projects": [
                { "name": "S.A Equipement — Warehouse App", "desc": "Full-stack mobile app for a real Moroccan electrical equipment company...", "tags": "Flutter, Firebase", "icon": "🏭", "link": "pages/projects/sa-equipement.html" },
                { "name": "JARVIS — AI Assistant", "desc": "A JARVIS-style AI agent accessible via Telegram. Runs on local Ollama LLMs with CrewAI.", "tags": "AI Agent", "icon": "🤖", "link": "pages/projects/jarvis.html" },
                { "name": "Tawleefa — Luxury E-Commerce", "desc": "Immersive 3D luxury web platform tailored for the modern market.", "tags": "Web, 3D", "icon": "🎁", "link": "pages/projects/tawleefa.html" },
                { "name": "Gold EA — XAUUSD Bot", "desc": "Expert Advisor for MetaTrader 5 targeting XAUUSD. Custom entry logic and risk management.", "tags": "Algo Trading", "icon": "📈", "link": "pages/projects/goldea.html" }
            ],
            "skills": [
                { "name": "Python", "icon": "🐍", "link": "pages/skills/python.html" }, { "name": "AI Agents", "icon": "🤖", "link": "pages/skills/ai-agents.html" }, { "name": "n8n", "icon": "🔄", "link": "pages/skills/n8n.html" },
                { "name": "Flutter", "icon": "📱", "link": "pages/skills/flutter.html" }, { "name": "Firebase", "icon": "🔥", "link": "pages/skills/firebase.html" }, { "name": "MQL5", "icon": "📊", "link": "pages/skills/mql5.html" }
            ],
            "certs": [
                { "title": "AI Agent Development", "issuer": "Anthropic / Claude", "icon": "🏅", "link": "pages/certs/anthropic.html" },
                { "title": "Python Automation", "issuer": "Google / Coursera", "icon": "🏅", "link": "pages/certs/python.html" }
            ]
        };

        try {
            // Fetch directly from the JSON file so GitHub Pages can serve it natively
            const res = await fetch('database.json', { cache: 'no-store' });
            if(res.ok) {
                globalDB = await res.json();
            } else throw new Error("JSON not found");
        } catch(e) {
            console.log("Loading fallback local data...");
            const safeParse = (key) => {
                try {
                    const val = localStorage.getItem(key);
                    return (!val || val === 'undefined') ? [] : JSON.parse(val);
                } catch(err) { return []; }
            };
            globalDB = {
                projects: BASE_DB.projects.concat(safeParse('custom_projects')),
                skills: BASE_DB.skills.concat(safeParse('custom_skills')),
                certs: BASE_DB.certs.concat(safeParse('custom_certs'))
            };
        }

        const cProjects = globalDB.projects || [];
        const cSkills = globalDB.skills || [];
        const cCerts = globalDB.certs || [];

        const pGrid = document.querySelector('.projects-grid');
        if(pGrid && cProjects.length > 0) {
            cProjects.forEach((p, index) => {
                let tagsHtml = (p.tags||'').split(',').filter(x=>x.trim()).map(t => `<span class="stack-tag">${t.trim()}</span>`).join('');
                let routeLink = p.link ? p.link : `view.html?type=projects&idx=${index}`;
                pGrid.innerHTML += `
                <a href="${routeLink}" class="project-card reveal visible" style="border-color: var(--cyan);">
                    <div class="project-header"><span class="project-icon">${p.icon||'🚀'}</span><span class="project-tag tag-web">Custom</span></div>
                    <h3 class="project-name">${p.name}</h3>
                    <p class="project-desc" style="color:var(--cyan); margin-bottom: 5px;">${tagsHtml}</p>
                    <p class="project-desc">${p.desc ? p.desc.substring(0, 80) : ''}...</p>
                </a>`;
            });
        }

        const tGrid = document.querySelector('.tech-grid');
        if(tGrid && cSkills.length > 0) {
            cSkills.forEach((s, index) => {
                let routeLink = s.link ? s.link : `view.html?type=skills&idx=${index}`;
                tGrid.innerHTML += `
                <a href="${routeLink}" class="tech-item-link reveal visible" style="border-color: var(--cyan);">
                    <span class="tech-icon">${s.icon||'⚙️'}</span>
                    <span class="tech-name" style="color:var(--cyan);font-weight:bold;">${s.name}</span>
                </a>`;
            });
        }

        const cGrid = document.querySelector('.certs-grid');
        if(cGrid && cCerts.length > 0) {
            cCerts.forEach((c, index) => {
                let routeLink = c.link ? c.link : `view.html?type=certs&idx=${index}`;
                cGrid.innerHTML += `
                <a href="${routeLink}" class="cert-card reveal visible" style="border-color: var(--cyan);">
                    <span class="cert-icon">${c.icon||'🏅'}</span>
                    <div class="cert-info">
                        <p class="cert-name" style="color:var(--cyan);">${c.title}</p>
                        <p class="cert-issuer">${c.issuer}</p>
                    </div>
                </a>`;
            });
        }
    }
    loadCustomItems();

});
