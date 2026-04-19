const translations = {
  en: {
    nav: { about: "About", skills: "Skills", projects: "Projects", ai_vision: "AI Vision", contact: "Contact", hire: "Hire Me", home: "Home", back: "← Back to Home" },
    hero: { eyebrow: "Python Engineer · AI Agent Specialist · Morocco", line1: "Aissa Sahnoune", line2: "I wire intelligence.", typed: "Building autonomous AI systems & automation pipelines.", based: "Based in Morocco · Available globally.", view_projects: "View Projects", start_project: "Start a Project →", badge: "AVAILABLE FOR HIRE", scroll: "Scroll" },
    about: { label: "Who I am", title_p1: "From warehouse", title_p2: "to neural architect.", p1: "I'm <strong>Aissa Sahnoune</strong>, a 24-year-old self-taught engineer from Morocco. I started my journey managing a warehouse at <span class='highlight'>S.A Equipement</span>, spending nights coding what I couldn't afford to buy.", p2: "No computer science degree. Just <strong>relentless obsession</strong> with building things that work. I taught myself Python, Flutter, Firebase, and the AI agent ecosystem.", p3: "Today I architect <strong>autonomous AI systems</strong>, Flutter apps, and algorithmic trading systems.", stat1: "Real Projects", stat2: "Tech Stacks", stat3: "Drive", quote: "\"AI is not the future — it is the tool of the present. Whoever masters it today, shapes tomorrow.\"" },
    skills: { label: "Expertise", title: "Tech stack & ", title_cyan: "certifications.", group1: "// Core Technologies", group2: "// Certifications & Badges", ai_agents: "AI Agents", web: "Web Dev", view_all: "View Details →" },
    certs: { c1: "AI Agent Development", c2: "Python Automation", c3: "Flutter & Firebase", c4: "Algorithmic Trading", verified: "Verified" },
    projects: { label: "Work", title: "Real projects, ", title_cyan: "real results.", click_more: "Click for full details →",
      p1: { name: "S.A Equipement — Warehouse App", desc: "Full-stack mobile app for a real Moroccan electrical equipment company. Features dual roles..." },
      p2: { name: "JARVIS — AI Assistant", desc: "A JARVIS-style AI agent accessible via Telegram. Runs on local Ollama LLMs with CrewAI." },
      p3: { name: "Tawleefa — Luxury E-Commerce", desc: "Immersive 3D luxury web platform tailored for the modern market with interactive models." },
      p4: { name: "Gold EA — XAUUSD Bot", desc: "Expert Advisor for MetaTrader 5 targeting XAUUSD. Custom entry logic and risk management." }
    },
    vision: { label: "Philosophy", t1: "The human who", t2: "merges with the machine", t3: "doesn't become less human.", pr1: { val: "Force Multiplier", desc: "AI handles the repetitive. Humans handle the vision." }, pr2: { val: "Real Problems", desc: "Every project I build solves a problem I've lived." } },
    contact: { intro: "// Let's build something", h1: "Ready to wire " },
    footer: { text: "© 2026 Aissa Sahnoune — Neural Architect" },
    pages: {
        sa_equip: { title: "S.A Equipement", h3: "The Challenge", p1: "S.A Equipement needed an efficient way to manage their large-scale electrical warehouse. Manual entries left room for human error.", h3_2: "The Solution", p2: "I developed a highly responsive cross-platform Flutter application backed by Firebase. Features include reverse engineering cable metrics, Arabic integration, and direct OCR." },
        jarvis: { title: "JARVIS AI", h3: "The Vision", p1: "Creating a completely autonomous and local AI. Data privacy is the most critical hurdle when using AI agents today.", h3_2: "The Architecture", p2: "Using Ollama running strictly locally, connected via LangChain and CrewAI to process requests, research the web, and execute standard operations without any third-party APIs handling sensitive data." },
        tawleefa: { title: "Tawleefa", h3: "The Aesthetic", p1: "Luxury products require luxury presentations. The goal was to build the ultimate web experience for the high-end Moroccan market.", h3_2: "The Technology", p2: "We used Three.js to construct an interactive 3D hexagonal gift box that acts as the centerpiece of the entire application, running smoothly on mobile and desktop." },
        goldea: { title: "Gold EA", h3: "Algorithmic Precision", p1: "Human emotions often destroy trading accounts. Gold EA is an algorithmic solution to trade XAUUSD flawlessly.", h3_2: "Execution", p2: "Built in MQL5 for MetaTrader 5, this Expert Advisor uses proprietary price-action scalping methods and adapts to market liquidity around the clock." }
    }
  },
  ar: {
    nav: { about: "من أنا", skills: "مهاراتي", projects: "أعمالي", ai_vision: "رؤية الذكاء الاصطناعي", contact: "تواصل معي", hire: "وظفني", home: "الرئيسية", back: "← العودة للرئيسية" },
    hero: { eyebrow: "مهندس بايثون · متخصص في وكلاء الذكاء الاصطناعي · المغرب", line1: "عيسى سحنون", line2: "أبني الذكاء الآلي.", typed: "تطوير أنظمة الذكاء الاصطناعي المستقلة وأتمتة العمليات.", based: "متواجد في المغرب · متاح للعمل عالمياً.", view_projects: "تصفح أعمالي", start_project: "ابدأ مشروعك ←", badge: "متاح للعمل", scroll: "تصفح للأسفل" },
    about: { label: "من أنا", title_p1: "من إدارة المستودعات", title_p2: "إلى مهندس ذكاء آلي.", p1: "أنا <strong>عيسى سحنون</strong>، مهندس عصامي عمري 24 عاماً من المغرب. بدأت رحلتي بإدارة مستودع في <span class='highlight'>S.A Equipement</span>، وكنت أمضي لياليّ في برمجة الأدوات التي لم أستطع شراءها.", p2: "لا أمتلك شهادة في الكمبيوتر، بل أمتلك <strong>شغفاً وهوساً لا يتوقف</strong> ببناء أنظمة تعمل بالفعل. علّمت نفسي البايثون، فلاتر، والذكاء الاصطناعي من الصفر.", p3: "اليوم أقوم بهندسة <strong>أنظمة ذكاء اصطناعي مستقلة</strong>، تطبيقات فلاتر، وخوارزميات تداول.", stat1: "مشاريع واقعية", stat2: "لغات وتقنيات", stat3: "إصرار لا نهائي", quote: "\"الذكاء الاصطناعي ليس المستقبل — إنه أداة الحاضر. من يتقنه اليوم، يصنع الغد.\"" },
    skills: { label: "خبراتي", title: "التقنيات و", title_cyan: "الشهادات.", group1: "// التقنيات الأساسية", group2: "// الشهادات والاعتمادات", ai_agents: "وكلاء الذكاء", web: "تطوير الويب", view_all: "عرض التفاصيل ←" },
    certs: { c1: "تطوير وكلاء الذكاء الاصطناعي", c2: "أتمتة بايثون", c3: "تطوير فلاتر و قواعد بيانات", c4: "مطور خوارزميات تداول", verified: "موثقة" },
    projects: { label: "أعمالي", title: "مشاريع حقيقية، ", title_cyan: "نتائج حقيقية.", click_more: "اضغط للتفاصيل ←",
      p1: { name: "S.A Equipement — نظام المستودعات", desc: "تطبيق متكامل لشركة معدات كهربائية مغربية. يتميز بآلات حاسبة ذكية وإدارة الموظفين..." },
      p2: { name: "JARVIS — المساعد الشخصي", desc: "مساعد ذكاء اصطناعي عبر تيليجرام يعمل بنماذج محلية للحفاظ على الخصوصية التامة." },
      p3: { name: "توليفة — منصة فاخرة للتجارة الإلكترونية", desc: "منصة فاخرة ثلاثية الأبعاد تحتوي على نماذج تفاعلية موجهة للسوق المغربي الأنيق." },
      p4: { name: "Gold EA — بوت تداول الذهب", desc: "خبير آلي يعمل المتداول الآلي MetaTrader 5 مخصص للذهب مع إدارة مخاطر دقيقة." }
    },
    vision: { label: "فلسفتي", t1: "الإنسان الذي", t2: "يندمج مع الآلة", t3: "لا تُسلب إنسانيته.", pr1: { val: "مضاعفة القوة", desc: "الذكاء الاصطناعي يقوم بالتكرار. أنا أضع الرؤية." }, pr2: { val: "حلول لحياة حقيقية", desc: "كل مشروع أبنيّه يحل مشكلة واجهتها شخصياً في الواقع." } },
    contact: { intro: "// لِنبني شيئاً معاً", h1: "هل أنت مستعد لدمج " },
    footer: { text: "© 2026 عيسى سحنون — مهندس الذكاء الاصطناعي" },
    pages: {
        sa_equip: { title: "مستودعات S.A Equipement", h3: "التحدي", p1: "واجهت الشركة مشكلة التأخير في إدخال بيانات المخازن والأعطال البشرية الكبيرة في حساب أطوال الكابلات الكهربائية.", h3_2: "الحل", p2: "قمت ببرمجة تطبيق فلاتر متكامل يدعم اللغتين العربية والفرنسية للعمال، مرتبط بقاعدة بيانات لحظية عبر الإنترنت، بالإضافة لخاصية استخدام كاميرا الهاتف للتعرف على أرقام الفواتير (OCR)." },
        jarvis: { title: "المساعد JARVIS", h3: "الرؤية", p1: "الخصوصية هي أهم عامل في أنظمة الذكاء الاصطناعي الحالية. لا أحد يريد أن يتم جمع بياناته الحساسة.", h3_2: "البنية المعمارية", p2: "صممت النظام بالكامل باستخدام نماذج لغوية تعمل محلياً تماماً على الجهاز باستخدام تقنية Ollama مع أدوات CrewAI للتحكم بنظام التشغيل بكفاءة واستقلالية." },
        tawleefa: { title: "توليفة", h3: "الفخامة", p1: "المنتجات الفاخرة تستلزم عروضاً تقديمية مبهرة، كان الهدف بناء واجهة تعكس الفن المغربي المعاصر.", h3_2: "التكنولوجيا", p2: "استخدمنا أدوات WebGL المتقدمة لبرمجة صندوق سداسي الشكل ثلاثي الأبعاد يمكنك تدويره ورؤية المكونات بشكل واقعي بفضل انعكاسات الإضاءة المحاكية للواقع." },
        goldea: { title: "روبوت تداول الذهب", h3: "دقة الخوارزميات", p1: "المشاعر البشرية هي الخطر الأول في أسواق المال. هذا الخبير الآلي صُمم لإبعاد العاطفة تماماً وتحقيق الانضباط.", h3_2: "آلية العمل", p2: "يقوم الروبوت المبرمج بلغة MQL5 بتحليل حركة سعر الذهب اللحظية ويقوم بفتح وإغلاق الصفقات بذكاء على مدار 24 ساعة لـ 5 أيام في الأسبوع بفضل أنظمة توقف الخسارة الديناميكية." }
    }
  },
  fr: {
    nav: { about: "À propos", skills: "Compétences", projects: "Projets", ai_vision: "Vision IA", contact: "Contact", hire: "M'embaucher", home: "Accueil", back: "← Retour" },
    hero: { eyebrow: "Ingénieur Python · Spécialiste IA · Maroc", line1: "Aissa Sahnoune", line2: "Je câble l'intelligence.", typed: "Création de systèmes IA autonomes et de pipelines d'automatisation.", based: "Basé au Maroc · Disponible mondialement.", view_projects: "Voir les projets", start_project: "Démarrer un projet →", badge: "DISPONIBLE", scroll: "Défiler" },
    about: { label: "Qui suis-je", title_p1: "De l'entrepôt", title_p2: "à l'architecte neuronal.", p1: "Je suis <strong>Aissa Sahnoune</strong>, un ingénieur autodidacte de 24 ans basé au Maroc. J'ai commencé en gérant un entrepôt chez <span class='highlight'>S.A Equipement</span>, codant la nuit.", p2: "Pas de diplôme classique. Juste une <strong>obsession acharnée</strong>. J'ai appris Python, Flutter, et l'écosystème IA de zéro.", p3: "Aujourd'hui, je conçois des <strong>systèmes IA autonomes</strong>, des applications Flutter et des systèmes de trading.", stat1: "Projets Réels", stat2: "Technologies", stat3: "Détermination", quote: "\"L'IA n'est pas l'avenir — c'est l'outil du présent. Celui qui le maîtrise aujourd'hui, façonne demain.\"" },
    skills: { label: "Expertise", title: "Technologies & ", title_cyan: "certifications.", group1: "// Technologies de base", group2: "// Certifications", ai_agents: "Agents IA", web: "Développement Web", view_all: "Voir Détails →" },
    certs: { c1: "Développement d'Agents IA", c2: "Automatisation Python", c3: "Développement Flutter", c4: "Trading Algorithmique", verified: "Vérifié" },
    projects: { label: "Travail", title: "Vrais projets, ", title_cyan: "vrais résultats.", click_more: "Cliquez pour les détails →",
      p1: { name: "S.A Equipement — Appl. d'Entrepôt", desc: "Application mobile full-stack pour une entreprise marocaine d'équipement électrique..." },
      p2: { name: "JARVIS — Assistant IA", desc: "Un agent IA style JARVIS accessible via Telegram. Fonctionne sur des LLMs locaux." },
      p3: { name: "Tawleefa — E-Commerce de Luxe", desc: "Plateforme web de luxe en 3D avec des modèles interactifs pour le marché marocain." },
      p4: { name: "Gold EA — Bot XAUUSD", desc: "Expert Advisor pour MetaTrader 5 ciblant XAUUSD avec gestion des risques." }
    },
    vision: { label: "Philosophie", t1: "L'humain qui", t2: "fusionne avec la machine", t3: "ne devient pas moins humain.", pr1: { val: "Multiplicateur de force", desc: "L'IA gère le répétitif. L'humain gère la vision." }, pr2: { val: "Problèmes réels", desc: "Chaque projet que je crée résout un problème que j'ai vécu." } },
    contact: { intro: "// Construisons quelque chose", h1: "Prêt à câbler " },
    footer: { text: "© 2026 Aissa Sahnoune — Architecte Neuronal" },
    pages: {
        sa_equip: { title: "Entrepôts S.A Equipement", h3: "Le Défi", p1: "S.A Equipement nécessitait un moyen ultra-efficace pour gérer l'inventaire en temps réel.", h3_2: "La Solution", p2: "Une application Flutter cross-plateforme multilingue liée avec Firebase et utilisant une technologie OCR pour lire les documents manuels." },
        jarvis: { title: "JARVIS", h3: "La Vision", p1: "Avoir un IA très puissant mais garanti 100% privé, sans serveurs cloud tiers.", h3_2: "Technologie", p2: "Intégration d'Ollama sur la machine locale couplé avec agent CrewAI et n8n." },
        tawleefa: { title: "Tawleefa", h3: "Haut de Gamme", p1: "Créer un site web interactif inédit au Maroc avec une ambiance luxueuse en bois naturel.", h3_2: "Interactive 3D", p2: "Utilisant WebGL et Three.js le produit offre un 3D performant même sur téléphone." },
        goldea: { title: "Bot XAUUSD", h3: "Pro-Trading", p1: "Le bot élimine les émotions humaines liées au trading d'or volatil.", h3_2: "Execution Absolue", p2: "Codé en MQL5 (C++ modifié) effectuant du pur Price Action 24/5." }
    }
  }
};
