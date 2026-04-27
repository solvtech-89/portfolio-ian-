import { MotionConfig, motion } from "framer-motion";
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
  { value: "5+", label: "Years building production software" },
  { value: "2M+", label: "Users reached through iPusnas" },
  { value: "ERP", label: "Operational systems focus" },
];

const PRINCIPLES = [
  "Reliable delivery",
  "Clear architecture",
  "Performance-minded",
  "Business-aware engineering",
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
    category: "Engineering Practice",
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
    period: "Jun 2025 - Feb 2026",
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
    period: "Feb 2024 - May 2025",
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
    period: "Aug 2023 - Jan 2024",
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
    period: "Sep 2022 - Jan 2023",
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
  {
    title: "Airos",
    subtitle: "Professional landing page for business presence",
    image: airosThumb,
    link: "",
    description:
      "Company landing page delivered with a clean visual system, responsive layout, and production-ready frontend implementation.",
  },
];

const CERTIFICATIONS = [
  "Certified Web Development - Infinite Learning, 2023",
  "Full Stack Engineer Certification - Educourse, 2024",
];

const Motion = motion;
const EASE_OUT = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: true, amount: 0.2 };

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const cardMotion = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};

function Navbar() {
  return (
    <Motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: EASE_OUT }}
      className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-xl"
    >
      <div className="site-container flex items-center justify-between py-4">
        <a href="#about" className="flex items-center gap-3 text-white">
          <span className="grid h-10 w-10 place-items-center border border-white/15 bg-white text-sm font-black tracking-[0.28em] text-black">
            FA
          </span>
          <span className="hidden text-sm font-semibold uppercase tracking-[0.32em] text-neutral-300 sm:inline">
            Software Engineer
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-neutral-500 lg:flex">
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

        <Motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center border border-white bg-white px-4 py-2 text-sm font-bold text-black transition-colors hover:bg-black hover:text-white"
        >
          Contact Me
        </Motion.a>
      </div>
    </Motion.header>
  );
}

function Hero() {
  return (
    <section id="about" className="section-pad pb-10 pt-14 sm:pt-20">
      <div className="site-container grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <Motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="w-full min-w-0"
        >
          <Motion.span
            variants={fadeUp}
            className="inline-flex border border-white/15 bg-white/5 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-neutral-300"
          >
            Software Engineer / ERP Systems / High-Traffic Web Apps
          </Motion.span>

          <Motion.h1
            variants={fadeUp}
            className="mt-7 max-w-4xl text-5xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Firstyan Ageng Maulana
          </Motion.h1>

          <Motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300 sm:text-xl"
          >
            Software Engineer with 5+ years of experience building scalable web
            applications, ERP systems, and production-grade platforms with a
            strong sense of ownership.
          </Motion.p>

          <Motion.p
            variants={fadeUp}
            className="mt-5 max-w-2xl text-base leading-7 text-neutral-500"
          >
            I work across frontend, backend, and system delivery, with an
            emphasis on clean execution, reliable architecture, performance, and
            business impact.
          </Motion.p>

          <Motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <Motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center border border-white bg-white px-5 py-3 text-sm font-black text-black transition-colors hover:bg-black hover:text-white"
            >
              Contact Me
            </Motion.a>
            <Motion.a
              href="https://linkedin.com/in/firstyan-ageng"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center border border-white/15 bg-transparent px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-black"
            >
              LinkedIn
            </Motion.a>
            <Motion.a
              href="https://github.com/FirstyanAgeng"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center border border-white/15 bg-transparent px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-black"
            >
              GitHub
            </Motion.a>
          </Motion.div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.18, ease: EASE_OUT }}
          className="panel overflow-hidden p-4 sm:p-5"
        >
          <div className="grid gap-5 sm:grid-cols-[1fr_0.9fr] sm:items-stretch">
            <div className="relative overflow-hidden border border-white/10 bg-neutral-950">
              <Motion.img
                src={heroThumb}
                alt="Firstyan Ageng Maulana portfolio visual"
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.1, delay: 0.25, ease: EASE_OUT }}
                className="h-full min-h-72 w-full object-cover grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
            </div>

            <div className="flex flex-col justify-between gap-5">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">
                  Current focus
                </p>
                <p className="mt-3 text-base leading-7 text-white">
                  Building reliable systems that ship cleanly, perform well, and
                  support real business operations.
                </p>
              </div>

              <Motion.div
                variants={stagger}
                initial="hidden"
                animate="visible"
                className="grid gap-3"
              >
                {METRICS.map((metric) => (
                  <Motion.div
                    key={metric.label}
                    variants={cardMotion}
                    className="border border-white/10 bg-black px-4 py-3"
                  >
                    <div className="text-2xl font-black tracking-tight text-white">
                      {metric.value}
                    </div>
                    <div className="mt-1 text-xs text-neutral-500">
                      {metric.label}
                    </div>
                  </Motion.div>
                ))}
              </Motion.div>
            </div>
          </div>
        </Motion.div>
      </div>

      <div className="site-container mt-12">
        <Motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid border-y border-white/10 md:grid-cols-4"
        >
          {PRINCIPLES.map((principle) => (
            <Motion.div
              key={principle}
              variants={cardMotion}
              className="border-white/10 px-4 py-4 font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 md:border-r last:md:border-r-0"
            >
              {principle}
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="site-container">
        <SectionHeading eyebrow="What I work with" title="Skills" />
        <Motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
        >
          {SKILLS.map((group) => (
            <Motion.article
              key={group.category}
              variants={cardMotion}
              whileHover={{ y: -6 }}
              className="panel h-full p-5"
            >
              <h3 className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-white">
                {group.category}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-neutral-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Motion.article>
          ))}
        </Motion.div>
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
          <div className="absolute left-4 top-2 hidden h-[calc(100%-8px)] w-px bg-white/15 sm:block" />

          {EXPERIENCES.map((experience) => (
            <Motion.article
              key={`${experience.company}-${experience.period}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="relative sm:pl-12"
            >
              <span className="absolute left-[9px] top-6 hidden h-3 w-3 border border-white bg-black shadow-[0_0_0_6px_rgba(255,255,255,0.08)] sm:block" />
              <div className="panel p-5 sm:p-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
                      {experience.company}
                    </p>
                    <h3 className="mt-2 text-2xl font-black text-white">
                      {experience.role}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-500">
                      {experience.context}
                    </p>
                  </div>
                  <div className="border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-neutral-300 lg:max-w-md">
                    <p className="font-semibold text-white">
                      {experience.period}
                    </p>
                    <p className="mt-1 text-neutral-500">{experience.stack}</p>
                  </div>
                </div>

                <ul className="mt-5 space-y-3">
                  {experience.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-7 text-neutral-300"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-white" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Motion.article>
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
        <Motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {WORKS.map((project) => (
            <Motion.article
              key={project.title}
              variants={cardMotion}
              whileHover={{ y: -8 }}
              className="group panel overflow-hidden p-4"
            >
              <div className="overflow-hidden border border-white/10 bg-neutral-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>

              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-black text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-400">
                    {project.subtitle}
                  </p>
                </div>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 border border-white/15 bg-white px-3 py-2 text-xs font-bold text-black transition-colors hover:bg-black hover:text-white"
                  >
                    Live
                  </a>
                ) : (
                  <span className="shrink-0 border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-semibold text-neutral-500">
                    On request
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm leading-7 text-neutral-500">
                {project.description}
              </p>
            </Motion.article>
          ))}
        </Motion.div>
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

        <Motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-8 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <Motion.article variants={cardMotion} className="panel p-6">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Education
            </p>
            <h3 className="mt-3 text-2xl font-bold text-white">
              Bachelor of Informatics
            </h3>
            <p className="mt-2 text-neutral-400">Universitas Amikom Purwokerto</p>
            <p className="mt-2 text-sm text-neutral-600">2020 - 2025</p>
          </Motion.article>

          <Motion.article variants={cardMotion} className="panel p-6">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Certifications
            </p>
            <ul className="mt-4 space-y-3">
              {CERTIFICATIONS.map((certificate) => (
                <li
                  key={certificate}
                  className="flex gap-3 text-sm leading-7 text-neutral-300"
                >
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-white" />
                  <span>{certificate}</span>
                </li>
              ))}
            </ul>
            <Motion.a
              href="https://drive.google.com/drive/folders/16blPnTZ79gWgVCLyKuEAAD9wdvgXEBdu?usp=sharing"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="mt-5 inline-flex border border-white bg-white px-5 py-3 text-sm font-black text-black transition-colors hover:bg-black hover:text-white"
            >
              View Certificates
            </Motion.a>
          </Motion.article>
        </Motion.div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-pad pb-16">
      <div className="site-container">
        <Motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="panel overflow-hidden p-6 sm:p-8"
        >
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                Open to roles focused on product quality and disciplined
                delivery.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-500">
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
                className="border border-white/10 bg-white/[0.03] px-4 py-4 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-black"
              >
                WhatsApp
                <span className="mt-2 block text-neutral-500">081329877494</span>
              </a>
              <a
                href="https://linkedin.com/in/firstyan-ageng"
                target="_blank"
                rel="noreferrer"
                className="border border-white/10 bg-white/[0.03] px-4 py-4 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-black"
              >
                LinkedIn
                <span className="mt-2 block text-neutral-500">
                  linkedin.com/in/firstyan-ageng
                </span>
              </a>
              <a
                href="https://github.com/FirstyanAgeng"
                target="_blank"
                rel="noreferrer"
                className="border border-white/10 bg-white/[0.03] px-4 py-4 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-black"
              >
                GitHub
                <span className="mt-2 block text-neutral-500">
                  github.com/FirstyanAgeng
                </span>
              </a>
              <div className="border border-white/10 bg-white/[0.03] px-4 py-4 text-sm font-semibold text-white">
                Phone
                <span className="mt-2 block text-neutral-500">
                  +62 813-2987-7494
                </span>
              </div>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-8">
      <div className="site-container flex flex-col gap-3 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; 2026 <span className="text-neutral-300">Firstyan Ageng Maulana</span>
        </p>
        <p>
          Portfolio tuned for software engineering, ERP systems, and
          production-grade web roles.
        </p>
      </div>
    </footer>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <Motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
    >
      <div>
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
      </div>
      <div className="h-px flex-1 bg-white/10 sm:ml-8" />
    </Motion.div>
  );
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="page-shell min-h-screen text-neutral-50">
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
    </MotionConfig>
  );
}

export default App;

