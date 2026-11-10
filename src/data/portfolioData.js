export const personalInfo = {
  name: "David NGABO",
  role: "Développeur Full-Stack & UI/UX Designer",
  status: "Disponible pour nouveaux projets",
  email: "ngabo16david@gmail.com",
  phone: "+243 978341163",
  location: "République démocratique du Congo / À distance",
  photo: "/hero.jpg",
  bio: "Je suis David NGABO, développeur web passionné par la création d'expériences numériques utiles, modernes et faciles à utiliser. Je conçois des sites et des applications web en accordant une attention particulière au design, à la qualité du code et aux besoins de chaque projet.",
  socials: {
    linkedin: "https://www.linkedin.com/in/david-ngabo-bas-912521443",
    instagram: "https://www.instagram.com/dngabo94",
    tiktok: "https://tiktok.com/@davidng_94",
    twitter: "https://x.com/DavidNGABOBAS",
    whatsapp: "https://wa.me/243978341163",
  },
  stats: [
    { value: "5+", label: "Années d'expérience" },
    { value: "40+", label: "Projets livrés avec succès" },
    { value: "99.8%", label: "Taux de satisfaction client" },
    { value: "< 1s", label: "Temps moyen de chargement" },
  ]
};

export const terminalContent = {
  whoami: [
    "Nom: David NGABO",
    "Rôle: Ingénieur Logiciel & Concepteur UI/UX",
    "Spécialité: Architecture React/Next.js, API Node/FastAPI, Design System Tailwind",
    "Statut actuel: Disponible pour missions Freelance & Projets au forfait",
    "Localisation: République démocratique du Congo & travail à distance"
  ],
  stack: [
    "Frontend : React, Next.js 15, TypeScript, Tailwind CSS, Framer Motion",
    "Backend  : Node.js, Express, Python, FastAPI, PostgreSQL, Supabase, Redis",
    "DevOps   : Docker, CI/CD GitHub Actions, Vercel, AWS S3, Cloudflare",
    "Design   : Figma, Prototypage, Design Systems, Glassmorphism, Micro-interactions"
  ],
  workflow: [
    "01. Cadrage & Stratégie : Définition des besoins, persona et spécifications techniques",
    "02. Maquettage UX/UI    : Wireframes interactifs, prototype haute fidélité sur Figma",
    "03. Dév & Intégration   : Code propre, typé, responsive et optimisé pour le SEO",
    "04. Tests & Recette     : Tests automatisés, performance Lighthouse > 95/100",
    "05. Déploiement & Suivi : Mise en production continue, monitoring et documentation"
  ],
  philosophy: [
    "• Pas de code inutile : la simplicité et la robustesse avant tout.",
    "• L'expérience utilisateur (UX) est la meilleure arme marketing.",
    "• La performance n'est pas une option, c'est une exigence.",
    "• Chaque pixel et chaque ligne de code ont un objectif clair."
  ]
};

export const skillsData = [
  {
    category: "Frontend & Interface",
    description: "Interfaces immersives, accessibles et réactives à la perfection.",
    skills: [
      { name: "React / Next.js", level: 95, icon: "Atom" },
      { name: "TypeScript", level: 90, icon: "Code2" },
      { name: "Tailwind CSS", level: 98, icon: "Palette" },
      { name: "HTML5 / CSS3 / Animations", level: 96, icon: "Sparkles" },
      { name: "State Management (Zustand, Redux)", level: 88, icon: "Cpu" },
      { name: "Vue.js / Vite", level: 82, icon: "Layers" },
    ]
  },
  {
    category: "Backend & Données",
    description: "Architectures robustes, sécurisées et orientées haute disponibilité.",
    skills: [
      { name: "Node.js & Express", level: 92, icon: "Server" },
      { name: "PostgreSQL & Prisma", level: 88, icon: "Database" },
      { name: "REST APIs & GraphQL", level: 90, icon: "Network" },
      { name: "Supabase & Firebase", level: 89, icon: "Zap" },
      { name: "Python / FastAPI", level: 80, icon: "Terminal" },
      { name: "Redis & Caching", level: 78, icon: "HardDrive" },
    ]
  },
  {
    category: "DevOps & Outils",
    description: "Automatisation, déploiement sans accroc et monitoring proactif.",
    skills: [
      { name: "Git & GitHub Workflows", level: 95, icon: "GitBranch" },
      { name: "Docker & Conteneurs", level: 82, icon: "Box" },
      { name: "Vercel & Cloudflare", level: 94, icon: "Cloud" },
      { name: "Performance & SEO Core Web Vitals", level: 96, icon: "Gauge" },
      { name: "Tests Jest & Playwright", level: 80, icon: "CheckCircle2" },
      { name: "Linux & Bash", level: 85, icon: "TerminalSquare" },
    ]
  },
  {
    category: "Design & Produit",
    description: "Création d'expériences mémorables guidées par les données et l'émotion.",
    skills: [
      { name: "Figma & FigJam", level: 94, icon: "Figma" },
      { name: "Design System & Tokens", level: 92, icon: "LayoutGrid" },
      { name: "Prototypage Haute Fidélité", level: 90, icon: "Smartphone" },
      { name: "Audit Ergonomique & UX Research", level: 85, icon: "Eye" },
      { name: "Accessibilité Web (WCAG)", level: 88, icon: "ShieldCheck" },
    ]
  }
];

export const projectsData = [
  {
    id: "nexus-analytics",
    title: "Nexus Analytics AI",
    category: "Fullstack / SaaS",
    description: "Plateforme SaaS d'analyse prédictive pour e-commerces, intégrant des visualisations en temps réel et des insights générés par IA.",
    longDescription: "Nexus Analytics permet aux entreprises e-commerce d'anticiper leurs stocks et de comprendre le comportement d'achat de leurs utilisateurs. L'architecture a été conçue pour encaisser des millions d'événements quotidiens avec une latence d'affichage inférieure à 100ms.",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "PostgreSQL", "Recharts", "OpenAI API"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "https://example.com/demo1",
    githubUrl: "https://github.com",
    metrics: "+140% d'engagement utilisateur",
    highlights: [
      "Tableau de bord interactif avec filtres multi-critères et export PDF",
      "Génération automatique de rapports de tendances propulsée par IA",
      "Score de performance Google Lighthouse de 99/100"
    ]
  },
  {
    id: "lumina-design-system",
    title: "Lumina UI & Design System",
    category: "Design & Vitrine",
    description: "Design system open-source ultra-léger dédié aux interfaces sombres et futuristes avec composants React accessibles.",
    longDescription: "Un écosystème complet de 45+ composants React créés avec Tailwind CSS, respectant les normes d'accessibilité WCAG AAA et dotés de micro-animations paramétrables.",
    tags: ["React", "Tailwind CSS", "Figma", "Storybook", "TypeScript"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "https://example.com/demo2",
    githubUrl: "https://github.com",
    metrics: "12k+ téléchargements npm",
    highlights: [
      "Compatible SSR et RSC (React Server Components)",
      "Tokens de couleurs dynamiques et thème sombre par défaut",
      "Documentation interactive avec playground live"
    ]
  },
  {
    id: "solaris-crypto-wallet",
    title: "Solaris Web3 & DeFi Gateway",
    category: "Fullstack / SaaS",
    description: "Application décentralisée et tableau de bord de gestion d'actifs numériques avec suivi de portfolio multi-chaînes en direct.",
    longDescription: "Une interface web3 fluide qui simplifie la gestion de tokens et NFT. Conçue avec un accent radical sur la sécurité, l'immédiateté des transactions et la clarté visuelle.",
    tags: ["React", "Node.js", "WebSockets", "Tailwind CSS", "Ethers.js"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "https://example.com/demo3",
    githubUrl: "https://github.com",
    metrics: "25M$ de volume monitoré",
    highlights: [
      "Connexion Web3 universelle (Metamask, WalletConnect, Phantom)",
      "Mises à jour du carnet d'ordres via WebSockets en temps réel (<50ms)",
      "Chiffrement de bout en bout des données sensibles du profil"
    ]
  },
  {
    id: "atelier-minimal-studio",
    title: "Atelier Studio - Site Vitrine & Booking",
    category: "Design & Vitrine",
    description: "Site vitrine expérientiel pour une agence d'architecture haut de gamme, avec transitions cinématiques et module de réservation.",
    longDescription: "Création d'une identité visuelle digitale prestigieuse, alliant typographie d'art, grille minimaliste asymétrique et intégration d'un calendrier de prise de rendez-vous synchronisé avec Google Calendar.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Calendly API", "SEO Local"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "https://example.com/demo4",
    githubUrl: "https://github.com",
    metrics: "Taux de conversion de 8.4%",
    highlights: [
      "Score SEO 100/100 et référencement naturel en 1ère page Google",
      "Galerie plein écran avec chargement progressif WebP / AVIF",
      "Formulaire de demande de devis qualifié en 3 étapes"
    ]
  },
  {
    id: "zenith-task-manager",
    title: "Zenith Focus Flow",
    category: "Application Mobile / Web",
    description: "Application PWA de productivité et gestion de projets avec synchronisation hors-ligne et minuteur Pomodoro intelligent.",
    longDescription: "Conçue pour les professionnels exigeants, Zenith fonctionne à 100% même sans connexion internet grâce à IndexedDB et synchronise automatiquement dès le rétablissement du réseau.",
    tags: ["PWA", "React", "TypeScript", "IndexedDB", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "https://example.com/demo5",
    githubUrl: "https://github.com",
    metrics: "4.9/5 étoiles utilisateurs",
    highlights: [
      "Fonctionnement 100% offline avec Service Workers",
      "Raccourcis clavier complets pour navigation ultra-rapide",
      "Dark mode cyberpunk personnalisable"
    ]
  },
  {
    id: "cyber-security-portal",
    title: "ShieldMatrix Audit Portal",
    category: "Fullstack / SaaS",
    description: "Portail client d'audits de cybersécurité avec visualisation d'arbres de vulnérabilités et génération de correctifs.",
    longDescription: "Plateforme B2B permettant aux équipes de sécurité de collaborer avec les développeurs pour corriger les failles critiques avant déploiement.",
    tags: ["React", "FastAPI", "Docker", "Tailwind CSS", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "https://example.com/demo6",
    githubUrl: "https://github.com",
    metrics: "Temps de remédiation réduit de 65%",
    highlights: [
      "Visualisation interactive des graphes de dépendances",
      "Authentification sécurisée avec 2FA / WebAuthn",
      "Génération automatique de patchs de sécurité"
    ]
  }
];

export const servicesData = [
  {
    id: "web-dev",
    title: "Développement Web Sur-Mesure",
    tagline: "De l'idée au déploiement en production",
    badge: "Le plus demandé",
    description: "Création de sites web vitrines modernes, plateformes interactives ou applications SaaS avec React, Next.js et Tailwind CSS.",
    features: [
      "Architecture moderne, réactive et responsive (mobile, tablette, desktop)",
      "Code maintenable, propre et documenté (TypeScript)",
      "Intégration d'API, bases de données et authentification",
      "Optimisation SEO et temps de chargement ultra-rapide (<1s)",
      "Déploiement continu et hébergement sécurisé (SSL)"
    ],
    timeline: "2 à 4 semaines",
    icon: "Code"
  },
  {
    id: "ui-ux",
    title: "Design UI/UX & Refonte",
    tagline: "Des interfaces qui captivent et convertissent",
    badge: "Impact visuel",
    description: "Conception de maquettes interactives sur Figma, refonte complète d'ergonomie et création de Design Systems pérennes.",
    features: [
      "Recherche utilisateur, benchmark concurrentiel et wireframes",
      "Maquettes haute fidélité Figma avec composants réutilisables",
      "Style futuriste, moderne (Dark mode, glassmorphism, micro-animations)",
      "Export de tokens de style prêts pour l'intégration développeur",
      "Prototype interactif cliquable pour tester avant de coder"
    ],
    timeline: "1 à 3 semaines",
    icon: "Layout"
  },
  {
    id: "audit-perf",
    title: "Audit Performance, SEO & Sécurité",
    tagline: "Optimisez vos scores et propulsez votre visibilité",
    badge: "Boost ROI",
    description: "Analyse en profondeur de votre site existant pour débloquer sa vitesse maximale, améliorer son positionnement Google et sécuriser vos flux.",
    features: [
      "Audit Core Web Vitals (LCP, FID, CLS) avec plan d'action immédiat",
      "Optimisation des assets (images WebP/AVIF, bundle JavaScript)",
      "Recommandations de sécurité web (CORS, headers, injections)",
      "Rapport complet et accompagnement à la correction technique",
      "Garantie score Google Lighthouse > 90/100"
    ],
    timeline: "3 à 7 jours",
    icon: "Zap"
  }
];

export const testimonialsData = [
  {
    id: 1,
    name: "Alexandre Dupont",
    role: "Fondateur & CEO",
    company: "NovaTech Solutions",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    content: "David a transformé notre vision en une plateforme SaaS exceptionnelle. La vitesse d'exécution, la rigueur du code et le souci du détail dans l'interface ont impressionné toute notre équipe ainsi que nos premiers investisseurs.",
    rating: 5,
    highlight: "Livraison en avance sur le planning"
  },
  {
    id: 2,
    name: "Sophie Martin",
    role: "Directrice Marketing",
    company: "Studio Bloom",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    content: "Notre nouveau site vitrine a vu son taux de conversion bondir dès la première semaine. L'ambiance futuriste et élégante reflète exactement notre positionnement premium. Un plaisir absolu de collaborer avec lui.",
    rating: 5,
    highlight: "+120% de demandes de contact"
  },
  {
    id: 3,
    name: "Karim Benali",
    role: "CTO & Co-fondateur",
    company: "HyperScale Media",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    content: "Techniquement irréprochable. Le code est propre, bien typé, facile à reprendre par nos développeurs internes. La documentation fournie était claire et la communication toujours fluide.",
    rating: 5,
    highlight: "Architecture technique impeccable"
  }
];

export const faqData = [
  {
    q: "Quels sont vos délais habituels pour la création d'un site complet ?",
    a: "Pour un site vitrine ou portfolio haut de gamme, comptez généralement entre 2 et 3 semaines, incluant la conception UI/UX, le développement, les révisions et la mise en ligne. Pour une application web ou un SaaS plus complexe, les délais varient de 4 à 8 semaines."
  },
  {
    q: "Comment se déroule la collaboration étape par étape ?",
    a: "Nous commençons par un échange pour cerner vos objectifs et vos besoins. Ensuite, je prépare une maquette interactive pour valider la direction visuelle. Une fois validée, je développe le site avec un suivi régulier (démo intermédiaire), puis nous procédons aux tests finaux et au déploiement."
  },
  {
    q: "Le site sera-t-il facile à modifier par moi-même par la suite ?",
    a: "Absolument. Selon vos préférences, nous pouvons structurer les contenus via des fichiers simples et centralisés, ou intégrer un CMS 'headless' (Sanity, Strapi, Supabase) vous permettant d'éditer textes, images et articles en totale autonomie."
  },
  {
    q: "Prenez-vous en charge l'hébergement et le nom de domaine ?",
    a: "Oui, je peux vous guider pour l'achat de votre nom de domaine et configurer pour vous un hébergement moderne et sécurisé (souvent gratuit ou très peu coûteux sur Vercel, Netlify ou Cloudflare) avec certificat SSL (HTTPS) inclus."
  },
  {
    q: "Quelles sont les modalités de paiement ?",
    a: "Généralement, le règlement s'effectue en 2 ou 3 échéances : un acompte de 30% au démarrage du projet, une étape intermédiaire à la validation de la maquette ou de la démo, et le solde à la livraison finale."
  }
];
