import "./App.css";
import airosThumb from "./assets/airos .png";
import datunThumb from "./assets/datun.png";
import edooThumb from "./assets/edoo.png";
import educourseThumb from "./assets/educourse.png";
import erpkitaThumb from "./assets/erpkita .png";
import gizihubThumb from "./assets/gizihub.png";
import heroThumb from "./assets/hero.png";
import ipusnasThumb from "./assets/ipusnas.png";

const NAV_LINKS = [
  "About",
  "Skills",
  "Experience",
  "Work",
  "Education",
  "Contact",
];
const WHATSAPP_LINK = "https://wa.me/6281329877494";

const METRICS = [
  { value: "4+", label: "Years of experience" },
  { value: "2M+", label: "Users reached through iPusnas" },
  { value: "ERP", label: "Core domain focus" },
];

const SKILLS = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "Performance Optimization"],
  },
  {
    category: "Backend",
    items: [
      "Laravel",
      "Node.js (Express)",
      "REST APIs",
      "GraphQL",
      "System Design Basics",
    ],
  },
  {
    category: "Data & DevOps",
    items: ["PostgreSQL", "MySQL", "Docker", "AWS", "CI/CD", "Git"],
  },
  {
    category: "Practices",
    items: [
      "Scalable Architecture",
      "Agile/Scrum",
      "Code Review",
      "Cross-team Collaboration",
    ],
  },
];

const EXPERIENCES = [
  {
    company: "PT Satu Visi Raya",
    role: "Software Engineer",
    period: "Jun 2025 – Feb 2026",
    context: "ERP, operations systems, and product launches",
    stack: "Laravel, React.js, Next.js, PostgreSQL, REST APIs, Git",
    points: [
      "Improved engineering workflows and aligned delivery with business priorities.",
      "Led MBGPro development for the Makan Bergizi Gratis program and shipped ERP workflows for procurement, invoicing, payment tracking, and monitoring.",
      "Built ERPKita and delivered Trijaya Tissue and Airos landing pages.",
    ],
  },
  {
    company: "Aksaramaya.id",
    role: "Frontend Developer",
    period: "Feb 2024 – May 2025",
    context: "Digital library platform with national-scale usage",
    stack: "React.js, Next.js, GraphQL, Golang APIs, Git",
    points: [
      "Contributed to iPusnas, a national digital library used by millions of readers.",
      "Contributed to Pustaka Datun, a digital library platform for JAMDATUN with legal references and curated document collections.",
      "Worked on Edoo Library and improved interactive features, performance, and low-bandwidth usability.",
    ],
  },
  {
    company: "Educourse.id",
    role: "Full Stack Engineer Intern",
    period: "Aug 2023 – Jan 2024",
    context: "EdTech and LMS product development",
    stack:
      "React.js, React Native, Flutter, Next.js, Express.js, API integration, CMS workflows, Git",
    points: [
      "Contributed to the Educourse LMS platform and supported STEM-based digital learning experiences.",
      "Maintained Flutter apps, built GPS-based attendance, and delivered LMS modules for production release.",
    ],
  },
  {
    company: "Infinite Learning",
    role: "Web Development Intern",
    period: "Sep 2022 – Jan 2023",
    context:
      "Vocational training in the Nongsa Digital Park ecosystem; healthcare prototype",
    stack: "React.js, Node.js, Next.js, REST APIs, Git",
    points: [
      "Developed full stack features with React.js and Node.js in a collaborative training environment.",
      "Built Rumah Kucing and led SIMARSA Bunda Purwokerto, a hospital management prototype recognized as a Top 3 project.",
    ],
  },
];

const WORKS = [
  {
    title: "MBGPro",
    subtitle: "Integrated ERP for the Makan Bergizi Gratis program",
    image: gizihubThumb,
    link: "https://gizihub.vercel.app",
    description:
      "ERP system for procurement, order automation, invoicing, payment tracking, and monitoring.",
  },
  {
    title: "ERPKita",
    subtitle: "Internal ERP platform for operational workflows",
    image: erpkitaThumb,
    link: "https://erpkita.vercel.app",
    description:
      "Internal ERP system for finance, inventory, procurement, and operations.",
  },
  {
    title: "iPusnas",
    subtitle: "National digital library platform",
    image: ipusnasThumb,
    link: "https://ipusnas2.perpusnas.go.id",
    description:
      "National digital library where I worked on frontend features and performance.",
  },
  {
    title: "Edoo Library",
    subtitle: "Digital library and LMS for schools",
    image: edooThumb,
    link: "https://dashboard.edoo.id",
    description:
      "School-focused learning platform with multi-role flows and CMS integration.",
  },
  {
    title: "Pustaka Datun",
    subtitle: "Digital library for JAMDATUN",
    image: datunThumb,
    link: "https://dashboard-pustaka-datun.moco.co.id",
    description:
      "Digital library for Datun/JAMDATUN with e-books, legal references, cooperation documents, and supporting materials.",
  },
  {
    title: "Educourse.id",
    subtitle: "STEM learning platform and LMS",
    image: educourseThumb,
    link: "https://educourse.id",
    description:
      "Learning platform that supports dashboards, discussion systems, activity tracking, and CMS workflows.",
  },
];

const CERTIFICATIONS = [
  "Certified Web Development — Infinite Learning, 2023",
  "Full Stack Engineer Certification — Educourse, 2024",
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="site-container flex items-center justify-between py-4">
        <a href="#about" className="flex items-center gap-3 text-white">
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 text-sm font-extrabold tracking-[0.35em] text-cyan-200">
            FA
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm text-slate-400">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="transition-colors hover:text-white"
            >
              {link}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition-colors hover:border-cyan-300/60 hover:bg-cyan-300/15"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="about" className="section-pad pb-10 pt-14 sm:pt-20">
      <div className="site-container grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Software Engineer | ERP Systems | High-Traffic Web Apps
          </span>

          <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Firstyan Ageng Maulana
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Software Engineer with 4+ years of experience designing and
            delivering scalable web applications, ERP systems, and high-traffic
            platforms. Strong in end-to-end development from system design to
            production deployment with a focus on reliability, performance, and
            business impact.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
            Experienced in cross-functional collaboration and product ownership,
            including national-scale systems like iPusnas and ERP products.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition-transform hover:-translate-y-0.5"
            >
              Contact Me
            </a>
            <a
              href="https://linkedin.com/in/firstyan-ageng"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/20 hover:bg-white/10"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/FirstyanAgeng"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/20 hover:bg-white/10"
            >
              GitHub
            </a>
          </div>

          <div className="mt-8 grid gap-3 text-sm text-slate-400 sm:grid-cols-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-colors hover:border-cyan-300/40 hover:bg-cyan-300/10"
            >
              WhatsApp: 081329877494
            </a>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              +62 813-2987-7494
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              Indonesia
            </div>
          </div>
        </div>

        <div className="glass-card overflow-hidden p-4 sm:p-5">
          <div className="grid gap-4 sm:grid-cols-[1fr_0.9fr] sm:items-center">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-4">
              <img
                src={heroThumb}
                alt="Abstract portfolio illustration"
                className="h-52 w-full rounded-2xl object-cover"
              />
            </div>

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Current focus
              </p>
              <p className="text-sm leading-6 text-white">
                Building reliable systems that ship cleanly, perform well, and
                support real business operations.
              </p>
              <div className="grid gap-3 pt-2">
                {METRICS.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3"
                  >
                    <div className="text-xl font-black tracking-tight text-cyan-200">
                      {metric.value}
                    </div>
                    <div className="mt-1 text-xs text-slate-400">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="site-container">
        <SectionHeading eyebrow="What I work with" title="Skills" />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {SKILLS.map((group) => (
            <article key={group.category} className="glass-card h-full p-5">
              <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-200">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="site-container">
        <SectionHeading eyebrow="Career timeline" title="Experience" />
        <div className="relative mt-8 space-y-4">
          <div className="absolute left-4 top-2 hidden h-[calc(100%-8px)] w-px bg-gradient-to-b from-cyan-300/40 via-white/10 to-transparent sm:block" />

          {EXPERIENCES.map((experience) => (
            <article
              key={`${experience.company}-${experience.period}`}
              className="relative sm:pl-12"
            >
              <span className="absolute left-[9px] top-6 hidden h-3 w-3 rounded-full border border-cyan-200/30 bg-cyan-300 shadow-[0_0_0_6px_rgba(34,211,238,0.12)] sm:block" />
              <div className="glass-card p-5 sm:p-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
                      {experience.company}
                    </p>
                    <h3 className="mt-2 text-2xl font-black text-white">
                      {experience.role}
                    </h3>
                    <p className="mt-2 text-sm text-slate-400">
                      {experience.context}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                    <p className="font-semibold text-white">
                      {experience.period}
                    </p>
                    <p className="mt-1 text-slate-400">{experience.stack}</p>
                  </div>
                </div>

                <ul className="mt-5 space-y-3">
                  {experience.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-7 text-slate-300"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="section-pad">
      <div className="site-container">
        <SectionHeading eyebrow="Selected product work" title="Work" />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {WORKS.map((project) => (
            <article
              key={project.title}
              className="group glass-card overflow-hidden p-4 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-cyan-200">
                    {project.subtitle}
                  </p>
                </div>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200 transition-colors hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white"
                  >
                    Live
                  </a>
                ) : (
                  <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-400">
                    On request
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section-pad">
      <div className="site-container">
        <SectionHeading
          eyebrow="Background"
          title="Education & Certifications"
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="glass-card p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
              Education
            </p>
            <h3 className="mt-3 text-2xl font-bold text-white">
              Bachelor of Informatics
            </h3>
            <p className="mt-2 text-slate-400">Universitas Amikom Purwokerto</p>
            <p className="mt-2 text-sm text-slate-500">2020 – 2025</p>
          </article>

          <article className="glass-card p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
              Certifications
            </p>
            <ul className="mt-4 space-y-3">
              {CERTIFICATIONS.map((certificate) => (
                <li
                  key={certificate}
                  className="flex gap-3 text-sm leading-7 text-slate-300"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  <span>{certificate}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://drive.google.com/drive/folders/16blPnTZ79gWgVCLyKuEAAD9wdvgXEBdu?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition-transform hover:-translate-y-0.5"
            >
              View Certificates
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-pad pb-16">
      <div className="site-container">
        <div className="glass-card overflow-hidden p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                Open to roles focused on product quality and delivery
                discipline.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
                If you need someone who can move between frontend, backend, and
                system thinking while keeping stakeholder communication clear,
                this profile fits that scope.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold text-white transition-colors hover:border-cyan-300/40 hover:bg-cyan-300/10"
              >
                WhatsApp
                <span className="mt-2 block text-slate-400">081329877494</span>
              </a>
              <a
                href="https://linkedin.com/in/firstyan-ageng"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold text-white transition-colors hover:border-cyan-300/40 hover:bg-cyan-300/10"
              >
                LinkedIn
                <span className="mt-2 block text-slate-400">
                  linkedin.com/in/firstyan-ageng
                </span>
              </a>
              <a
                href="https://github.com/FirstyanAgeng"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold text-white transition-colors hover:border-cyan-300/40 hover:bg-cyan-300/10"
              >
                GitHub
                <span className="mt-2 block text-slate-400">
                  github.com/FirstyanAgeng
                </span>
              </a>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold text-white">
                Phone
                <span className="mt-2 block text-slate-400">
                  +62 813-2987-7494
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-8">
      <div className="site-container flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © 2026 <span className="text-slate-300">Firstyan Ageng Maulana</span>
        </p>
        <p>
          Portfolio updated from your resume and tuned for product, ERP, and
          high-traffic web roles.
        </p>
      </div>
    </footer>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
      </div>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent sm:ml-8" />
    </div>
  );
}

function App() {
  return (
    <div className="page-shell min-h-screen text-slate-50">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
