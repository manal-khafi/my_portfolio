import { ReactNode, useEffect, useMemo, useState } from "react";

type Language = "en" | "fr";
type IconName =
  | "arrow"
  | "briefcase"
  | "check"
  | "code"
  | "database"
  | "external"
  | "github"
  | "globe"
  | "graduation"
  | "layers"
  | "linkedin"
  | "mail"
  | "map"
  | "moon"
  | "phone"
  | "rocket"
  | "security"
  | "sun";

const translations = {
  en: {
    language: { en: "EN", fr: "FR", switcher: "Change language" },
    nav: {
      logo: "KM",
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      cta: "Contact me",
      menu: "Open navigation menu",
      close: "Close navigation menu",
      theme: "Toggle color theme",
    },
    hero: {
      label: "Available for internships, full-time roles and freelance work",
      name: "Khafi Manal",
      subtitle: "Junior Full Stack Developer",
      text: "I design and deploy secure web applications, from REST API to production. React, Next.js, Node.js.",
      primary: "View my projects",
      secondary: "Download my resume",
      resume: "/resume-khafi-manal-en.pdf",
      portrait: "Professional portrait placeholder for Khafi Manal",
      photoLabel: "Your photo",
      stats: [
        ["3", "professional experiences"],
        ["2", "live client websites"],
        ["MSc", "Master's in AI & Big Data"],
      ],
    },
    about: {
      eyebrow: "About me",
      title: "Curious by nature, rigorous by choice.",
      text: "Junior Full Stack Developer, currently pursuing a Professional Master's in Computer Engineering and Artificial Intelligence for Big Data. Trained in React, Node.js and Next.js, with hands-on practice in secure architectures (JWT, OAuth, 2FA). Rigorous and autonomous, I am looking for an internship, a full-time position or freelance work on Full Stack projects, from REST API development to deployment.",
      factsTitle: "Quick facts",
      facts: [
        ["Location", "Mohammedia, Morocco"],
        ["Education", "Professional Master's in Computer Engineering & AI for Big Data"],
        ["Languages", "Arabic (native), French (fluent), English (intermediate)"],
      ],
      qualities: ["Analytical mind", "Teamwork", "Initiative", "Organization", "Adaptability"],
    },
    skills: {
      eyebrow: "Technical toolkit",
      title: "Skills built for the full product lifecycle.",
      intro: "From accessible interfaces to secure APIs and reliable deployments.",
      groups: [
        ["Frontend", "code", ["React", "Next.js", "TypeScript", "JavaScript", "Vite", "HTML", "CSS", "Tailwind CSS"]],
        ["Backend", "layers", ["Node.js", "Express", "REST API", "NextAuth", "Zod", "Socket.io"]],
        ["Databases", "database", ["PostgreSQL", "Prisma", "MongoDB", "MySQL", "Firebase"]],
        ["DevOps & Deployment", "rocket", ["Docker", "Git", "Render", "Vercel", "DNS", "HTTPS"]],
        ["Security", "security", ["JWT", "OAuth", "2FA", "bcrypt", "Helmet", "CORS", "Rate Limiting"]],
        ["Other", "globe", ["Agile (Scrum)", "Technical SEO", "C", "C++", "C#", "PHP"]],
      ] as [string, IconName, string[]][],
    },
    experience: {
      eyebrow: "Experience",
      title: "Real projects. Measurable outcomes.",
      visit: "Visit website",
      items: [
        {
          role: "Freelance Full Stack Developer",
          company: "F2AGC, accounting firm",
          date: "Aug 2026 – Oct 2026",
          bullets: [
            "Bilingual French / Arabic (RTL) website with contact form and secure admin area",
            "Docker deployment on Render, custom domain, DNS / HTTPS setup and technical SEO",
          ],
          tags: ["React", "Node.js", "Express", "MongoDB", "Docker"],
          url: "https://www.f2agc.ma",
        },
        {
          role: "Freelance Full Stack Developer",
          company: "Kilala Emballage",
          date: "Jun 2026 – Aug 2026",
          bullets: [
            "Online B2B platform for a Moroccan packaging supplier: public catalog of 100+ products and a secure admin back-office (authentication, image upload, Excel import)",
            "Multi-product quote request flow with automatically generated references and status tracking on the admin side; REST API validated with Zod",
          ],
          tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
          url: "https://kilala.ma",
        },
        {
          role: "Full Stack Developer Intern",
          company: "PortNet",
          date: "Apr 2026 – May 2026",
          bullets: [
            'Developed the "Vue MAP" module: an interactive map for tracking vessel calls and ships',
            "Dashboard and statistics, with data filtering by user",
          ],
          tags: ["Next.js", "PostgreSQL", "Prisma", "Git"],
          url: "",
        },
      ],
    },
    projects: {
      eyebrow: "Selected projects",
      title: "Ideas turned into useful products.",
      intro: "A selection of client work and applications designed, developed and deployed end to end.",
      visit: "Visit site",
      github: "GitHub",
      preview: "Project preview",
      items: [
        {
          title: "Kilala Emballage",
          description: "B2B packaging platform with a 100+ product catalog and secure admin back-office",
          tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
          url: "https://kilala.ma",
          type: "kilala",
          image: "kilala.png",
        },
        {
          title: "F2AGC",
          description: "Bilingual FR/AR website for an accounting firm, with secure admin area",
          tags: ["React", "Node.js", "Express", "MongoDB", "Docker"],
          url: "https://www.f2agc.ma",
          type: "f2agc",
          image: "f2agc.png",
        },
        {
          title: "ClinicFlow",
          description: "Clinic management web app: patients (search, archive, restore), appointments, dashboard and calendar, 30-minute double-booking rule, JWT auth with admin / staff roles",
          tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Prisma", "Zod", "Docker"],
          url: "",
          github: "https://github.com/manal-khafi/ClinicFlow",
          type: "clinic",
          image: "clinicflow.png",
        },
        {
          title: "Bubble School",
          description: "School management platform with role-based access (admin, teacher, student, parent): students, classes, schedules, grades, attendance, assignments and announcements",
          tags: ["React", "Node.js", "Express", "PostgreSQL", "Firebase", "Docker", "JWT"],
          url: "",
          github: "https://github.com/manal-khafi/ClinicFlow",
          type: "school",
          image: "bubble-school.png",
        },
        {
          title: "ANMOUGAR",
          description: "Real-time social network: public or private profiles, stories, likes, comments, instant messaging and notifications",
          tags: ["Next.js", "PostgreSQL", "Prisma", "NextAuth", "Socket.io", "Git"],
          url: "https://www.anmougar.online/",
          github: "https://github.com/manal-khafi/social_network",
          type: "social",
          image: "anmougar.png",
        },
      ],
    },
    education: {
      eyebrow: "Education",
      title: "A foundation in software and data.",
      items: [
        ["2026–2028", "Professional Master's in Computer Engineering and AI for Big Data", "Higher School of Technology of Kenitra (ESTK)"],
        ["2025–2026", "Bachelor's Degree in Software Engineering", "Faculty of Sciences Aïn Chock (FSAC), Casablanca"],
        ["Sep 2025 – Jan 2026", "Full Stack Developer Program (intensive)", "JobInTech – Ynov Campus Morocco"],
        ["2023–2025", "Associate Degree (DEUG) in Applied Computer Science", "FSAC"],
        ["2023", "Baccalaureate in Mathematical Sciences A (French Option)", "Groupe Scolaire RODIN, Mohammedia"],
      ],
    },
    contact: {
      eyebrow: "Get in touch",
      title: "Let's work together",
      intro: "Have a project, an opportunity, or just want to say hello? I would be happy to hear from you.",
      details: "Contact details",
      location: "Mohammedia, Morocco",
      address: "manalkhafi1@gmail.com",
      phone: "+212 663212576",
      linkedin: "linkedin.com/in/manal-khafi",
      github: "github.com/manal-khafi",
    },
    footer: {
      copyright: "© 2026 Khafi Manal. All rights reserved.",
      back: "Back to top",
      description: "Junior Full Stack Developer building secure, thoughtful digital products.",
      quick: "Quick links",
    },
    social: { github: "GitHub profile", linkedin: "LinkedIn profile", email: "Send an email" },
  },
  fr: {
    language: { en: "EN", fr: "FR", switcher: "Changer de langue" },
    nav: {
      logo: "KM",
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      experience: "Expérience",
      projects: "Projets",
      contact: "Contact",
      cta: "Me contacter",
      menu: "Ouvrir le menu de navigation",
      close: "Fermer le menu de navigation",
      theme: "Changer le thème de couleur",
    },
    hero: {
      label: "Disponible pour stage, CDI et missions freelance",
      name: "Khafi Manal",
      subtitle: "Développeuse Full Stack Junior",
      text: "Je conçois et déploie des applications web sécurisées, de l'API REST à la mise en production. React, Next.js, Node.js.",
      primary: "Voir mes projets",
      secondary: "Télécharger mon CV",
      resume: "/resume-khafi-manal-fr.pdf",
      portrait: "Emplacement du portrait professionnel de Khafi Manal",
      photoLabel: "Votre photo",
      stats: [
        ["3", "expériences professionnelles"],
        ["2", "sites clients en ligne"],
        ["MSc", "Master IA & Big Data"],
      ],
    },
    about: {
      eyebrow: "À propos",
      title: "Curieuse par nature, rigoureuse par choix.",
      text: "Développeuse Full Stack junior, actuellement en Master Ingénierie Informatique et Intelligence Artificielle pour le Big Data. Formée sur React, Node.js et Next.js, avec une pratique des architectures sécurisées (JWT, OAuth, 2FA). Rigoureuse et autonome, je recherche un stage, un CDI ou des missions freelance sur des projets Full Stack, de l'API REST au déploiement.",
      factsTitle: "En bref",
      facts: [
        ["Localisation", "Mohammedia, Maroc"],
        ["Formation", "Master Ingénierie Informatique & IA pour le Big Data"],
        ["Langues", "Arabe (langue maternelle), Français (courant), Anglais (intermédiaire)"],
      ],
      qualities: ["Esprit analytique", "Travail en équipe", "Sens de l'initiative", "Organisation", "Adaptabilité"],
    },
    skills: {
      eyebrow: "Boîte à outils technique",
      title: "Des compétences pour tout le cycle produit.",
      intro: "Des interfaces accessibles aux API sécurisées et aux déploiements fiables.",
      groups: [
        ["Frontend", "code", ["React", "Next.js", "TypeScript", "JavaScript", "Vite", "HTML", "CSS", "Tailwind CSS"]],
        ["Backend", "layers", ["Node.js", "Express", "REST API", "NextAuth", "Zod", "Socket.io"]],
        ["Bases de données", "database", ["PostgreSQL", "Prisma", "MongoDB", "MySQL", "Firebase"]],
        ["DevOps & déploiement", "rocket", ["Docker", "Git", "Render", "Vercel", "DNS", "HTTPS"]],
        ["Sécurité", "security", ["JWT", "OAuth", "2FA", "bcrypt", "Helmet", "CORS", "Rate Limiting"]],
        ["Autres", "globe", ["Agile (Scrum)", "SEO technique", "C", "C++", "C#", "PHP"]],
      ] as [string, IconName, string[]][],
    },
    experience: {
      eyebrow: "Expérience",
      title: "Des projets réels. Des résultats concrets.",
      visit: "Voir le site",
      items: [
        {
          role: "Développeuse Full Stack Freelance",
          company: "F2AGC, cabinet de comptabilité",
          date: "Août 2026 – Oct. 2026",
          bullets: [
            "Site bilingue français / arabe (RTL) avec formulaire de contact et espace admin sécurisé",
            "Déploiement avec Docker sur Render, domaine personnalisé, configuration DNS / HTTPS et SEO technique",
          ],
          tags: ["React", "Node.js", "Express", "MongoDB", "Docker"],
          url: "https://www.f2agc.ma",
        },
        {
          role: "Développeuse Full Stack Freelance",
          company: "Kilala Emballage",
          date: "Juin 2026 – Août 2026",
          bullets: [
            "Plateforme B2B en ligne pour un fournisseur d'emballages marocain : catalogue public de plus de 100 produits et back-office d'administration sécurisé (authentification, upload d'images, import Excel)",
            "Parcours de demande de devis multi-produits avec références générées automatiquement et suivi des statuts côté admin, API REST validée avec Zod",
          ],
          tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
          url: "https://kilala.ma",
        },
        {
          role: "Développeuse Full Stack Stagiaire",
          company: "PortNet",
          date: "Avril 2026 – Mai 2026",
          bullets: [
            "Développement du module « Vue MAP » : carte interactive pour le suivi des escales et des navires",
            "Tableau de bord et statistiques, avec filtrage des données selon les utilisateurs",
          ],
          tags: ["Next.js", "PostgreSQL", "Prisma", "Git"],
          url: "",
        },
      ],
    },
    projects: {
      eyebrow: "Projets sélectionnés",
      title: "Des idées transformées en produits utiles.",
      intro: "Une sélection de projets clients et d'applications conçus, développés et déployés de bout en bout.",
      visit: "Voir le site",
      github: "GitHub",
      preview: "Aperçu du projet",
      items: [
        {
          title: "Kilala Emballage",
          description: "Plateforme B2B d'emballages avec catalogue de plus de 100 produits et back-office sécurisé",
          tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
          url: "https://kilala.ma",
          type: "kilala",
          image: "kilala.png",
        },
        {
          title: "F2AGC",
          description: "Site bilingue FR/AR pour un cabinet de comptabilité, avec espace admin sécurisé",
          tags: ["React", "Node.js", "Express", "MongoDB", "Docker"],
          url: "https://www.f2agc.ma",
          type: "f2agc",
          image: "f2agc.png",
        },
        {
          title: "ClinicFlow",
          description: "Application web de gestion de clinique : patients (recherche, archivage, restauration), rendez-vous, tableau de bord et calendrier, règle anti-double réservation (30 min), authentification JWT avec rôles admin / staff",
          tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Prisma", "Zod", "Docker"],
          url: "",
          github: "https://github.com/manal-khafi/ClinicFlow",
          type: "clinic",
          image: "clinicflow.png",
        },
        {
          title: "Bubble School",
          description: "Plateforme de gestion scolaire avec accès par rôle (administrateur, enseignant, élève, parent) : élèves, classes, emplois du temps, notes, présences, devoirs et annonces",
          tags: ["React", "Node.js", "Express", "PostgreSQL", "Firebase", "Docker", "JWT"],
          url: "",
          github: "https://github.com/manal-khafi/ClinicFlow",
          type: "school",
          image: "bubble-school.png",
        },
        {
          title: "ANMOUGAR",
          description: "Réseau social temps réel : profils publics ou privés, stories, likes, commentaires, messagerie et notifications instantanées",
          tags: ["Next.js", "PostgreSQL", "Prisma", "NextAuth", "Socket.io", "Git"],
          url: "https://www.anmougar.online/",
          github: "https://github.com/manal-khafi/social_network",
          type: "social",
          image: "anmougar.png",
        },
      ],
    },
    education: {
      eyebrow: "Formation",
      title: "Des bases solides en logiciel et données.",
      items: [
        ["2026–2028", "Master Professionnel en Ingénierie Informatique et IA pour le Big Data", "École Supérieure de Technologie de Kénitra (ESTK)"],
        ["2025–2026", "Licence en Ingénierie Logicielle", "Faculté des Sciences Aïn Chock (FSAC), Casablanca"],
        ["Sept. 2025 – Janv. 2026", "Formation Développeur Full Stack (programme intensif)", "JobInTech – Ynov Campus Maroc"],
        ["2023–2025", "DEUG en informatique appliquée", "FSAC"],
        ["2023", "Baccalauréat Sciences Mathématiques A (Option Français)", "Groupe Scolaire RODIN, Mohammedia"],
      ],
    },
    contact: {
      eyebrow: "Me contacter",
      title: "Travaillons ensemble",
      intro: "Un projet, une opportunité ou simplement envie d'échanger ? Je serai ravie de vous lire.",
      details: "Coordonnées",
      location: "Mohammedia, Maroc",
      address: "manalkhafi1@gmail.com",
      phone: "+212 663212576",
      linkedin: "linkedin.com/in/manal-khafi",
      github: "github.com/manal-khafi",
    },
    footer: {
      copyright: "© 2026 Khafi Manal. Tous droits réservés.",
      back: "Retour en haut",
      description: "Développeuse Full Stack Junior, je crée des produits numériques sécurisés et soignés.",
      quick: "Liens rapides",
    },
    social: { github: "Profil GitHub", linkedin: "Profil LinkedIn", email: "Envoyer un email" },
  },
};

const navIds = ["home", "about", "skills", "experience", "projects", "contact"] as const;

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 12h18M10 12v2h4v-2" /></>,
    check: <path d="M5 12l4 4L19 6" />,
    code: <><path d="M8 9l-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" /></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" /></>,
    external: <><path d="M14 4h6v6M20 4l-9 9" /><path d="M18 13v6a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h6" /></>,
    github: <path d="M15 22v-4c.1-1-.4-2-1-2.5 3.3-.4 6.8-1.6 6.8-7.4A5.8 5.8 0 0019.3 4 5.4 5.4 0 0019.1 0S17.9-.4 15 1.5a14 14 0 00-6 0C6.1-.4 4.9 0 4.9 0a5.4 5.4 0 00-.2 4A5.8 5.8 0 003.2 8.1c0 5.8 3.5 7 6.8 7.4-.5.4-.8 1-.9 1.6-.8.4-2.9 1-4.1-1.2-.8-1.4-2.2-1.5-2.2-1.5-1.4-1 0-.9 0-.9 1.6.1 2.4 1.7 2.4 1.7 1.4 2.4 3.7 1.7 4.6 1.3V22" />,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" /></>,
    graduation: <><path d="M2 9l10-5 10 5-10 5L2 9z" /><path d="M6 11.5V16c3 3 9 3 12 0v-4.5M22 9v6" /></>,
    layers: <><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 12l10 5 10-5M2 17l10 5 10-5" /></>,
    linkedin: <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4V9h4v2a5 5 0 012-3z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
    mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 6l-10 7L2 6" /></>,
    map: <><path d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3zM9 3v15M15 6v15" /></>,
    moon: <path d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z" />,
    phone: <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7 12.8 12.8 0 00.7 2.8 2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5 12.8 12.8 0 002.8.7A2 2 0 0122 16.9z" />,
    rocket: <><path d="M4 13a8 8 0 017-7l4-4c3 0 5 2 5 5l-4 4a8 8 0 01-7 7L4 13z" /><path d="M4 13l-2 5 5-2M11 6l7 7" /><circle cx="15" cy="7" r="1.5" /></>,
    security: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function Button({ href, children, variant = "primary", icon, download, onClick }: { href?: string; children: ReactNode; variant?: "primary" | "secondary" | "ghost"; icon?: IconName; download?: boolean; onClick?: () => void }) {
  const className = `button button-${variant}`;
  if (href) return <a className={className} href={href} download={download || undefined} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{children}{icon && <Icon name={icon} size={18} />}</a>;
  return <button className={className} type="button" onClick={onClick}>{children}{icon && <Icon name={icon} size={18} />}</button>;
}

function Tag({ children, soft = false }: { children: ReactNode; soft?: boolean }) {
  return <span className={soft ? "tag tag-soft" : "tag"}>{children}</span>;
}

function SectionTitle({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return <div className="section-heading reveal"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{intro && <p>{intro}</p>}</div>;
}

const imageUrl = (file: string) => `${import.meta.env.BASE_URL}images/${file}`;

function ProjectVisual({ type, image, label }: { type: string; image?: string; label: string }) {
  const [failed, setFailed] = useState(false);
  if (image && !failed) {
    return (
      <div className="project-visual has-image">
        <img src={imageUrl(image)} alt={label} loading="lazy" onError={() => setFailed(true)} />
      </div>
    );
  }
  return (
    <div className={`project-visual visual-${type}`} role="img" aria-label={label}>
      <div className="browser">
        <div className="browser-bar"><i /><i /><i /><span /></div>
        <div className="browser-content">
          <aside><b /><i /><i /><i /></aside>
          <div className="mock-main"><span /><strong /><p /><div className="mock-grid"><i /><i /><i /></div></div>
        </div>
      </div>
    </div>
  );
}

function Portrait({ alt, label }: { alt: string; label: string }) {
  const [failed, setFailed] = useState(false);
  if (!failed) {
    return (
      <div className="portrait has-image">
        <img src={imageUrl("profile.jpg")} alt={alt} onError={() => setFailed(true)} />
      </div>
    );
  }
  return <div className="portrait" role="img" aria-label={alt}><div className="portrait-head" /><div className="portrait-body" /><span>{label}</span></div>;
}

function App() {
  const [language, setLanguage] = useState<Language>(() => (localStorage.getItem("portfolio-language") as Language) || "en");
  const [dark, setDark] = useState(() => localStorage.getItem("portfolio-theme") === "dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const t = translations[language];
  const nav = useMemo(() => navIds.map((id) => ({ id, label: t.nav[id] })), [t]);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("portfolio-language", language);
  }, [language]);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("main section[id]");
    const sectionObserver = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: "-35% 0px -55%" });
    sections.forEach((section) => sectionObserver.observe(section));
    const reveals = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")), { threshold: 0.08 });
    reveals.forEach((element) => revealObserver.observe(element));
    return () => { sectionObserver.disconnect(); revealObserver.disconnect(); };
  }, [language]);

  return (
    <div className="site-shell">
      <header className="navbar">
        <div className="nav-inner">
          <a href="#home" className="logo" aria-label={t.hero.name}>{t.nav.logo}<span>.</span></a>
          <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label={t.nav.menu}>
            {nav.filter((item) => item.id !== "contact").map((item) => <a key={item.id} href={`#${item.id}`} className={active === item.id ? "active" : ""} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
            <Button href="#contact">{t.nav.cta}</Button>
          </nav>
          <div className="nav-tools">
            <div className="language-toggle" aria-label={t.language.switcher}>
              {(["en", "fr"] as Language[]).map((lang) => <button key={lang} className={language === lang ? "active" : ""} onClick={() => setLanguage(lang)} aria-pressed={language === lang}>{t.language[lang]}</button>)}
            </div>
            <button className="icon-button" onClick={() => setDark(!dark)} aria-label={t.nav.theme}><Icon name={dark ? "sun" : "moon"} /></button>
            <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? t.nav.close : t.nav.menu} aria-expanded={menuOpen}><span /><span /><span /></button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="availability"><span />{t.hero.label}</div>
              <h1>{t.hero.name}</h1>
              <p className="hero-role">{t.hero.subtitle}</p>
              <p className="hero-text">{t.hero.text}</p>
              <div className="hero-actions"><Button href="#projects" icon="arrow">{t.hero.primary}</Button><Button href={t.hero.resume} variant="secondary" download>{t.hero.secondary}</Button></div>
              <div className="social-links">
                <a href="https://github.com/manal-khafi" target="_blank" rel="noreferrer" aria-label={t.social.github}><Icon name="github" /></a>
                <a href="https://linkedin.com/in/manal-khafi" target="_blank" rel="noreferrer" aria-label={t.social.linkedin}><Icon name="linkedin" /></a>
                <a href="mailto:manalkhafi1@gmail.com" aria-label={t.social.email}><Icon name="mail" /></a>
              </div>
            </div>
            <div className="portrait-wrap reveal">
              <div className="portrait-shape" />
              <Portrait alt={t.hero.portrait} label={t.hero.photoLabel} />
              <TagBubble className="badge-react">{t.skills.groups[0][2][0]}</TagBubble><TagBubble className="badge-next">{t.skills.groups[0][2][1]}</TagBubble><TagBubble className="badge-node">{t.skills.groups[1][2][0]}</TagBubble>
            </div>
          </div>
          <div className="container stats">
            {t.hero.stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container">
            <SectionTitle eyebrow={t.about.eyebrow} title={t.about.title} />
            <div className="about-grid">
              <div className="about-copy reveal"><p>{t.about.text}</p><div className="quality-list">{t.about.qualities.map((quality) => <Tag key={quality} soft><Icon name="check" size={15} />{quality}</Tag>)}</div></div>
              <article className="facts-card reveal"><h3>{t.about.factsTitle}</h3>{t.about.facts.map(([label, value], index) => <div className="fact" key={label}><span className="fact-icon"><Icon name={index === 0 ? "map" : index === 1 ? "graduation" : "globe"} /></span><div><b>{label}</b><p>{value}</p></div></div>)}</article>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-tint">
          <div className="container">
            <SectionTitle eyebrow={t.skills.eyebrow} title={t.skills.title} intro={t.skills.intro} />
            <div className="skills-grid">{t.skills.groups.map(([title, icon, tags]) => <article className="skill-card reveal" key={title}><div className="skill-icon"><Icon name={icon} /></div><h3>{title}</h3><div className="tags">{tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div></article>)}</div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <SectionTitle eyebrow={t.experience.eyebrow} title={t.experience.title} />
            <div className="timeline">{t.experience.items.map((item) => <article className="timeline-item reveal" key={item.company}><span className="timeline-dot" /><div className="timeline-card"><div className="timeline-head"><div><span className="timeline-date">{item.date}</span><h3>{item.role}</h3><p>{item.company}</p></div>{item.url && <a className="round-link" href={item.url} target="_blank" rel="noreferrer" aria-label={`${t.experience.visit} ${item.company}`}><Icon name="external" /></a>}</div><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><div className="tags">{item.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div></div></article>)}</div>
          </div>
        </section>

        <section id="projects" className="section section-tint">
          <div className="container">
            <SectionTitle eyebrow={t.projects.eyebrow} title={t.projects.title} intro={t.projects.intro} />
            <div className="projects-grid">{t.projects.items.map((project, index) => <article className={`project-card reveal ${index < 2 ? "featured" : ""}`} key={project.title}><ProjectVisual type={project.type} image={project.image} label={`${t.projects.preview}: ${project.title}`} /><div className="project-body"><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div><div className="project-links">{project.url && <Button href={project.url} variant="secondary" icon="external">{t.projects.visit}</Button>}{project.github && <Button href={project.github} variant="ghost" icon="github">{t.projects.github}</Button>}</div></div></article>)}</div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <SectionTitle eyebrow={t.education.eyebrow} title={t.education.title} />
            <div className="education-list">{t.education.items.map(([date, degree, school]) => <article className="education-item reveal" key={degree}><span className="edu-icon"><Icon name="graduation" /></span><time>{date}</time><div><h3>{degree}</h3><p>{school}</p></div></article>)}</div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div className="contact-copy reveal"><span className="eyebrow">{t.contact.eyebrow}</span><h2>{t.contact.title}</h2><p>{t.contact.intro}</p><h3>{t.contact.details}</h3><ContactLine icon="mail" href={`mailto:${t.contact.address}`}>{t.contact.address}</ContactLine><ContactLine icon="phone" href="tel:+212663212576">{t.contact.phone}</ContactLine><ContactLine icon="map">{t.contact.location}</ContactLine><ContactLine icon="linkedin" href="https://linkedin.com/in/manal-khafi">{t.contact.linkedin}</ContactLine><ContactLine icon="github" href="https://github.com/manal-khafi">{t.contact.github}</ContactLine></div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-top">
          <div><a href="#home" className="logo footer-logo">{t.nav.logo}<span>.</span></a><p>{t.footer.description}</p></div>
          <div><b>{t.footer.quick}</b><div className="footer-links">{nav.map((item) => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}</div></div>
          <div className="footer-social"><a href="https://github.com/manal-khafi" aria-label={t.social.github}><Icon name="github" /></a><a href="https://linkedin.com/in/manal-khafi" aria-label={t.social.linkedin}><Icon name="linkedin" /></a><a href="mailto:manalkhafi1@gmail.com" aria-label={t.social.email}><Icon name="mail" /></a></div>
        </div>
        <div className="container footer-bottom"><span>{t.footer.copyright}</span><a href="#home">{t.footer.back}<Icon name="arrow" size={16} /></a></div>
      </footer>
    </div>
  );
}

function TagBubble({ children, className }: { children: ReactNode; className: string }) {
  return <span className={`floating-badge ${className}`}><i />{children}</span>;
}

function ContactLine({ icon, href, children }: { icon: IconName; href?: string; children: ReactNode }) {
  const content = <><span><Icon name={icon} /></span>{children}</>;
  return href ? <a className="contact-line" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{content}</a> : <div className="contact-line">{content}</div>;
}

export default App;
