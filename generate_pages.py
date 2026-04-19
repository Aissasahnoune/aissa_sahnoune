import os

base_dir = r'.'
files_to_create = {
    'projects': ['sa-equipement.html', 'jarvis.html', 'tawleefa.html', 'goldea.html'],
    'skills': ['python.html', 'ai-agents.html', 'n8n.html', 'flutter.html', 'firebase.html', 'mql5.html'],
    'certs': ['anthropic.html', 'python.html']
}

template = """<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Aissa Sahnoune — Detail View</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;700;900&family=Orbitron:wght@400;600;700;900&family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;1,300&family=Outfit:wght@300;400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../../css/style.css">
<script>
  if(localStorage.getItem('theme') === 'light') document.documentElement.setAttribute('data-theme', 'light');
  if(localStorage.getItem('lang') === 'ar') document.documentElement.dir = 'rtl';
</script>
</head>
<body>

<canvas id="neuralCanvas"></canvas>
<div class="cursor" id="cursor"></div>
<div class="cursor-ring" id="cursorRing"></div>

<nav id="navbar">
  <a href="../../portfolio.html" class="nav-logo">Aissa<span>.</span></a>
  <div class="nav-actions" style="margin-left:auto;">
    <button id="theme-btn" class="theme-btn" aria-label="Toggle Theme">🌕</button>
    <select id="lang-select" class="lang-select">
      <option value="en">EN</option>
      <option value="ar">AR</option>
      <option value="fr">FR</option>
    </select>
  </div>
</nav>

<section class="page-section">
    <div class="detail-header reveal">
        <h1 class="detail-title" data-i18n="pages.{key}.title">{title}</h1>
        <div class="detail-meta">
            <span class="stack-tag">{cat}</span>
        </div>
    </div>
    
    <div class="detail-content reveal reveal-delay-1">
        <a href="../../portfolio.html" class="back-btn" data-i18n="nav.back">← Back to Home</a>
        <h3 data-i18n="pages.{key}.h3">Overview</h3>
        <p data-i18n="pages.{key}.p1">Detailed description goes here...</p>
        <h3 data-i18n="pages.{key}.h3_2">Details</h3>
        <p data-i18n="pages.{key}.p2">Further information goes here...</p>
    </div>
</section>

<footer>
  <p data-i18n="footer.text">© 2026 Aissa Sahnoune — Neural Architect</p>
  <span class="footer-logo">A.S</span>
</footer>

<script src="../../js/translations.js"></script>
<script src="../../js/main.js"></script>
</body>
</html>"""

data_mapping = {
    'sa-equipement.html': ('sa_equip', 'S.A Equipement Warehouse', 'Project'),
    'jarvis.html': ('jarvis', 'JARVIS AI Assistant', 'Project'),
    'tawleefa.html': ('tawleefa', 'Tawleefa E-Commerce', 'Project'),
    'goldea.html': ('goldea', 'Gold EA Trading Bot', 'Project')
}

fallback_map = {
    'projects': 'Project Details',
    'skills': 'Skill Overview',
    'certs': 'Certification Info'
}

for folder, files in files_to_create.items():
    dir_path = os.path.join(base_dir, 'pages', folder)
    os.makedirs(dir_path, exist_ok=True)
    
    for filename in files:
        file_path = os.path.join(dir_path, filename)
        if filename in data_mapping:
            key, title, cat = data_mapping[filename]
        else:
            base = filename.replace('.html', '')
            key = base.replace('-', '_')
            title = base.replace('-', ' ').title()
            cat = fallback_map[folder]
            
        content = template.replace('{key}', key).replace('{title}', title).replace('{cat}', cat)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Created {file_path}')
