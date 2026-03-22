import "./App.css";
import airosThumb from "./assets/airos .png";
import educourseThumb from "./assets/educourse.png";
import erpkitaThumb from "./assets/erpkita .png";
import gizihubThumb from "./assets/gizihub.png";
import ipusnasThumb from "./assets/ipusnas.png";
import trijayaThumb from "./assets/trijaya .png";

const NAV_LINKS = ["About", "Skills", "Experience", "Portfolio", "Education"];

const SKILLS = {
  Frontend: ["React.js", "Next.js"],
  Backend: ["Laravel", "GraphQL", "REST APIs"],
  "Data & DevOps": ["PostgreSQL", "MySQL", "Docker", "AWS", "CI/CD"],
};

const EXPERIENCES = [
  {
    company: "PT Satu Visi Raya",
    role: "Senior Full Stack Engineer",
    period: "Jun 2025 – Feb 2026",
    points: [
      "Took on product and delivery leadership during a CEO transition, rebuilt the engineering team from scratch, and brought in trusted former collaborators to restore execution.",
      "Led delivery of Trijaya Tissue and Airos landing pages plus Pamindo ERP, translating business needs into launch-ready web and ERP products.",
      "Built Laravel, React.js, Next.js, and PostgreSQL solutions for inventory, procurement, operations, and reporting workflows while setting development standards for the new team.",
    ],
  },
  {
    company: "Aksaramaya.id",
    role: "Frontend Developer",
    period: "Feb 2024 – May 2025",
    points: [
      "Contributed to iPusnas, Indonesia's national digital library serving 2M+ users, by developing scalable React.js and Next.js features for a high-traffic public platform.",
      "Improved performance and accessibility for low-bandwidth users and integrated frontend services with GraphQL and Golang-based APIs.",
      "Collaborated with product, backend, and design teams in Agile delivery cycles to ship production-ready enhancements.",
    ],
  },
  {
    company: "Educourse.id",
    role: "Full Stack Engineer Intern",
    period: "Aug 2023 – Jan 2024",
    points: [
      "Worked within Maleo Teknologi's IT team on a STEM-focused education platform, building the LMS dashboard and key Educourse.id application features.",
      "Developed discussion, activity tracking, and CMS modules, and supported frontend and API integration for the Educourse.id release on Google Play.",
    ],
  },
  {
    company: "Infinite Learning (Kampus Merdeka MSIB Program)",
    role: "Web Development Intern",
    period: "Sep 2022 – Jan 2023",
    points: [
      "Built full stack web application features using React.js, Node.js, and REST APIs in a collaborative internship program.",
      "Developed a Hospital Management System prototype using Git-based collaboration, code review, and team-based delivery.",
    ],
  },
];

const CERTS = [
  "Certified Web Development – Infinite Learning (MSIB Program), 2023",
  "Full Stack Engineer Certification – Educourse, 2024",
];

const PROJECTS = [
  {
    title: "iPusnas iLibrary — Digital Library System",
    link: "https://ipusnas2.perpusnas.go.id",
    thumbnail: ipusnasThumb,
    description:
      "A digital library platform owned by the National Library of Indonesia, allowing users to access digital book collections, borrow titles, and support broader access to digital literacy.",
  },
  {
    title: "MBG ERP System",
    link: "https://gizihub.vercel.app",
    thumbnail: gizihubThumb,
    description:
      "An Enterprise Resource Planning (ERP) system designed to support operational and data management in nutrition service sectors, featuring monitoring dashboards, data management capabilities, and administrative modules to make operations more structured and efficient.",
  },
  {
    title: "Trijaya Tissue — Corporate Landing Page",
    link: "https://trijayatissue.com",
    thumbnail: trijayaThumb,
    description:
      "A corporate landing page built to strengthen Trijaya Tissue's digital presence through modern design, clear information architecture, and professional presentation of the company profile and products.",
  },
  {
    title: "Airos.id — Product Landing Page",
    link: "https://airos.id",
    thumbnail: airosThumb,
    description:
      "A landing page created to introduce Airos products and services to potential customers effectively, with a responsive layout, solid user experience, and concise product messaging.",
  },
  {
    title: "Educourse.id — Education Platform Landing Page",
    link: "https://educourse.id",
    thumbnail: educourseThumb,
    description:
      "A digital education platform landing page designed with a modern UI/UX approach to increase engagement while helping visitors quickly understand the product's value.",
  },

  {
    title: "ERPKita — Integrated ERP Platform",
    link: "https://erpkita.vercel.app",
    thumbnail: erpkitaThumb,
    description:
      "An integrated ERP platform for digital transformation in Indonesian companies, featuring 12+ modules (Finance, HR & Payroll, Production, Inventory, CRM, Procurement, Analytics, and more), real-time dashboards, workflow automation, an FAQ/help center, and fast implementation support within 3-4 months with 24/7 local assistance.",
  },
];

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-white font-bold tracking-wide text-lg">
          F<span className="text-indigo-400">.</span>
        </span>
        <nav className="hidden sm:flex gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>
        <a
          href="mailto:firztyan@gmail.com"
          className="text-sm bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          Hire Me
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-gray-950 pt-20"
    >
      <div className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-indigo-400 font-mono text-sm mb-3 tracking-widest uppercase">
            Available for work
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
            Firstyan Ageng
            <br />
            <span className="text-indigo-400">Maulana</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Senior Full Stack Engineer with 3+ years of experience building ERP
            systems, LMS platforms, and large-scale web applications across
            supply chain, manufacturing, digital library, and STEM education.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="https://linkedin.com/in/firstyan-ageng"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm px-4 py-2 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/FirstyanAgeng"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm px-4 py-2 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
          <div className="flex flex-col gap-2 text-sm text-gray-500">
            <span>📧 firztyan@gmail.com</span>
            <span>📞 +62 813-2987-7494</span>
            <span>📍 Indonesia</span>
          </div>
        </div>

        {/* Stats card */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { value: "3+", label: "Years Experience" },
            { value: "2M+", label: "Users Impacted" },
            { value: "ERP", label: "Systems Built" },
            { value: "LMS", label: "Platforms Shipped" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-indigo-700 transition-colors"
            >
              <span className="text-3xl font-extrabold text-indigo-400 mb-1">
                {value}
              </span>
              <span className="text-gray-400 text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="bg-gray-900 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading title="Technical Skills" />
        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div
              key={category}
              className="bg-gray-950 border border-gray-800 rounded-2xl p-6 hover:border-indigo-700 transition-colors"
            >
              <h3 className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-4">
                {category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="bg-gray-950 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading title="Professional Experience" />
        <div className="mt-12 relative">
          {/* vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gray-800 hidden sm:block" />
          <div className="flex flex-col gap-10">
            {EXPERIENCES.map((exp) => (
              <div key={exp.company} className="sm:pl-12 relative">
                {/* dot */}
                <span className="hidden sm:block absolute left-[13px] top-1.5 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-2 ring-gray-950" />
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-indigo-700/50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-white font-bold text-lg">
                        {exp.role}
                      </h3>
                      <p className="text-indigo-400 font-medium text-sm">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-gray-500 text-xs font-mono whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="mt-3 flex flex-col gap-2">
                    {exp.points.map((pt, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-gray-400 text-sm leading-relaxed"
                      >
                        <span className="text-indigo-500 mt-1 shrink-0">▹</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="bg-gray-900 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading title="Portfolio" />
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="group bg-gray-950 border border-gray-800 rounded-2xl p-6 hover:border-indigo-700 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="overflow-hidden rounded-xl border border-gray-800">
                <img
                  src={project.thumbnail}
                  alt={`${project.title} thumbnail`}
                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-white font-bold text-lg leading-snug">
                {project.title}
              </h3>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex mt-3 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
                >
                  {project.link.replace("https://", "")}
                </a>
              ) : (
                <p className="inline-flex mt-3 text-gray-500 text-sm font-medium">
                  Link available on request
                </p>
              )}
              <p className="mt-4 text-gray-400 text-sm leading-relaxed">
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
    <section id="education" className="bg-gray-900 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading title="Education & Certifications" />
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 hover:border-indigo-700 transition-colors">
            <p className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-2">
              Degree
            </p>
            <h3 className="text-white font-bold text-lg mb-1">
              Bachelor of Informatics
            </h3>
            <p className="text-gray-400 text-sm">
              Universitas Amikom Purwokerto
            </p>
            <p className="text-gray-600 text-xs mt-1 font-mono">2020 – 2025</p>
          </div>
          <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 hover:border-indigo-700 transition-colors">
            <p className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-3">
              Certifications
            </p>
            <ul className="flex flex-col gap-3">
              {CERTS.map((cert) => (
                <li key={cert} className="flex gap-3 text-gray-400 text-sm">
                  <span className="text-indigo-500 shrink-0">✓</span>
                  {cert}
                </li>
              ))}
            </ul>
            <a
              href="https://drive.google.com/drive/folders/16blPnTZ79gWgVCLyKuEAAD9wdvgXEBdu?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex mt-5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              View Certificates
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>
          © 2026{" "}
          <span className="text-gray-400 font-medium">
            Firstyan Ageng Maulana
          </span>
        </p>
        <p>
          Portfolio &amp; live product links available via GitHub and LinkedIn.
        </p>
      </div>
    </footer>
  );
}

function SectionHeading({ title }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
        {title}
      </h2>
      <div className="flex-1 h-px bg-gray-800" />
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Portfolio />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;
