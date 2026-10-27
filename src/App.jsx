import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight, ArrowUpRight, BrainCircuit, Code2, Cpu, Github,
  Mail, MapPin, MonitorCog, ShieldCheck, Sparkles, Terminal, UserRound
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Smart Daycare Monitoring System",
    category: "Computer Vision · AI",
    description:
      "A monitoring prototype designed to detect children, flag danger-zone activity, identify inactivity, and support attendance reporting.",
    stack: ["Python", "YOLOv8", "OpenCV", "Streamlit", "SQLite"],
    icon: ShieldCheck,
    note: "Security Based Computer Vision Project"
  },
  {
    number: "02",
    title: "EduParser",
    category: "AI-assisted Document Processing",
    description:
      "A desktop tool that extracts content from PDF brochures and helps turn unstructured information into clean text or structured JSON.",
    stack: ["Python", "PyMuPDF", "OpenAI API", "Tkinter"],
    icon: Code2,
    note: "Software based project"
  },
  {
    number: "03",
    title: "CounselAI",
    category: "Education Technology",
    description:
      "A concept for matching student qualifications with suitable courses and helping compare course options and EMI calculations.",
    stack: ["Project-specific stack", "Matching logic", "EMI calculations"],
    icon: BrainCircuit,
    note: "AI & ML based project"
  },
    {
    number: "04",
    title: "Success Academy Management System",
    category: "Business Management · Full-Stack Web App",
    description:
      "A web-based management system for Success Academy, designed to manage staff records, attendance, salaries, income, expenses, and financial performance.",
    stack: [
      "React",
      "Vite",
      "Supabase",
      "Tailwind CSS",
      "Recharts"
    ],
    icon: MonitorCog,
    note: "Built for Success Academy"
  }
];

const skills = [
  { icon: Terminal, title: "Programming", items: "Python · SQL · JavaScript basics" },
  { icon: BrainCircuit, title: "AI & Machine Learning", items: "Computer vision · ML fundamentals · NLP fundamentals" },
  { icon: MonitorCog, title: "IT & Technical Support", items: "Troubleshooting · CCTV/AI camera monitoring · Client support" },
  { icon: Cpu, title: "Tools & Platforms", items: "Git · GitHub · Streamlit · OpenCV · SQLite" }
];

function FloatingChip({ children, className = "" }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={`floating-chip ${className}`}
      animate={reduceMotion ? {} : { y: [0, -9, 0], rotate: [0, 1.5, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

function Reveal({ children, delay = 0, className = "" }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Ken Antony Cecil home"><span className="brand-mark">K.</span><span>Ken Antony Cecil<span className="brand-dot">.</span></span></a>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
        </nav>
        <a className="nav-contact" href="#contact">Let's connect <ArrowUpRight size={15} /></a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <motion.div className="availability" initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="status-dot" /> Open to opportunities in the UAE
            </motion.div>
            <motion.p className="eyebrow" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>AI / ML GRADUATE · TECHNICAL SUPPORT</motion.p>
            <motion.h1 initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.65 }}>
              I build useful things<br />with <span className="text-accent">technology.</span>
            </motion.h1>
            <motion.p className="hero-intro" initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28, duration: 0.6 }}>
              I'm Ken — an AI and Machine Learning graduate with hands-on technical support experience and a focus on practical, user-friendly solutions.
            </motion.p>
            <motion.div
  className="hero-actions"
  initial={reduceMotion ? false : { opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.42 }}
>
  <a className="button button-primary" href="#projects">
    Explore my work <ArrowDownRight size={17} />
  </a>

  <a className="button button-secondary" href="#contact">
    Contact me <ArrowUpRight size={16} />
  </a>

  <a
    className="button button-secondary"
    href="/Ken-Antony-Cecil-AI-Engineer-Resume.pdf"
    download
  >
    Download AI Resume
  </a>

  <a
    className="button button-secondary"
    href="/Ken-Antony-Cecil-Technical-Support-Resume.pdf"
    download
  >
    Download Technical Support Resume
  </a>
</motion.div>
            <div className="hero-meta"><span><MapPin size={15} /> UAE</span><span className="meta-separator" /><span>AI · IT Support · Software</span></div>
          </div>

          <div className="hero-art" aria-label="Floating technology cards">
            <div className="orb orb-one" /><div className="orb orb-two" />
            <FloatingChip className="chip-python"><span className="chip-symbol">Py</span><span><b>Python</b><small>Programming</small></span></FloatingChip>
            <FloatingChip className="chip-ai"><BrainCircuit size={20} /><span><b>AI / ML</b><small>Problem solving</small></span></FloatingChip>
            <FloatingChip className="chip-cv"><Cpu size={19} /><span><b>Computer Vision</b><small>YOLOv8 · OpenCV</small></span></FloatingChip>
            <motion.div className="hero-core" animate={reduceMotion ? {} : { y: [0, -7, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
              <div className="core-grid" />
              <div className="core-icon"><Sparkles size={34} strokeWidth={1.5} /></div>
              <span className="core-caption">Curiosity → solutions</span>
            </motion.div>
            <div className="art-caption">A little curiosity goes a long way.</div>
          </div>
          <a className="scroll-hint" href="#about"><span /> Scroll to explore</a>
        </section>

        <section className="section-wrap section-block" id="about">
          <Reveal><div className="section-heading"><p className="eyebrow">01 / ABOUT</p><h2>Technology should solve<br /><span className="muted-heading">real problems.</span></h2></div></Reveal>
          <div className="about-grid">
            <Reveal className="about-main">
              <p className="large-copy">I bring together a background in electronics, postgraduate study in AI and Machine Learning, and real-world technical support experience.</p>
              <p className="body-copy">I enjoy troubleshooting systems, exploring computer vision, and building tools that make everyday work simpler. I'm looking for opportunities where I can keep learning, support reliable technology, and contribute to useful products.</p>
            </Reveal>
            <Reveal delay={0.12} className="about-side">
              <div className="fact-card"><UserRound size={19} /><div><small>Education</small><strong>MSc Artificial Intelligence & Machine Learning</strong></div></div>
              <div className="fact-card"><MonitorCog size={19} /><div><small>Experience</small><strong>Technical support & AI camera monitoring</strong></div></div>
              <div className="fact-card"><MapPin size={19} /><div><small>Location</small><strong>United Arab Emirates</strong></div></div>
            </Reveal>
          </div>
        </section>

        <section className="skills-section">
          <div className="section-wrap section-block" id="skills">
            <Reveal><div className="section-heading heading-row"><div><p className="eyebrow">02 / TOOLKIT</p><h2>Skills I work with.</h2></div><p className="heading-note">A growing toolkit for building, supporting, and improving technology.</p></div></Reveal>
            <div className="skills-grid">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return <Reveal key={skill.title} delay={index * 0.07}><article className="skill-card"><div className="skill-icon"><Icon size={21} /></div><h3>{skill.title}</h3><p>{skill.items}</p></article></Reveal>;
              })}
            </div>
            <p className="small-note">For more, refer the Resume provided.</p>
          </div>
        </section>

        <section className="section-wrap section-block" id="projects">
          <Reveal><div className="section-heading heading-row"><div><p className="eyebrow">03 / SELECTED WORK</p><h2>Projects with a purpose.</h2></div><p className="heading-note">A few practical projects combining software, automation, and AI.</p></div></Reveal>
          <div className="projects-grid">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return <Reveal key={project.number} delay={index * 0.1}><article className="project-card">
                <div className="project-top"><span className="project-number">{project.number}</span><span className="project-icon"><Icon size={21} /></span></div>
                <p className="project-category">{project.category}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p>
                <div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                <div className="project-footer"><span>{project.note}</span><span className="project-arrow"><ArrowUpRight size={17} /></span></div>
              </article></Reveal>;
            })}
          </div>
          <div className="project-callout"><span>Have a project in mind?</span><a href="#contact">Let's talk <ArrowUpRight size={15} /></a></div>
        </section>

        <section className="experience-section" id="experience">
          <div className="section-wrap section-block">
            <Reveal><div className="section-heading"><p className="eyebrow">04 / EXPERIENCE</p><h2>Learning by doing.</h2></div></Reveal>
            <div className="timeline">
              <Reveal><article className="timeline-item"><span className="timeline-marker" /><div className="timeline-date">PROFESSIONAL EXPERIENCE</div><div className="timeline-content"><h3>Technical Support Executive</h3><p className="timeline-company">Srvisif AI Pvt Ltd</p><p>Supported AI camera and CCTV monitoring operations, followed up on system updates, and communicated with clients to help keep systems working reliably.</p><div className="tag-list"><span>Technical Support</span><span>AI Cameras</span><span>Client Communication</span></div></div></article></Reveal>
              <Reveal delay={0.1}><article className="timeline-item"><span className="timeline-marker" /><div className="timeline-date">ADDITIONAL EXPERIENCE</div><div className="timeline-content"><h3>Academic Mentor</h3><p className="timeline-company">Oda Class</p><p>Worked with prospective learners through outbound communication and helped explain programme options and next steps.</p><div className="tag-list"><span>Communication</span><span>Student Support</span><span>Follow-up</span></div></div></article></Reveal>
              <Reveal delay={0.2}><article className="timeline-item"><span className="timeline-marker" /><div className="timeline-date">EDUCATION</div><div className="timeline-content"><h3>MSc in Artificial Intelligence & Machine Learning</h3><p className="timeline-company">Postgraduate degree</p><p>Focused on AI/ML concepts and practical project work, including computer vision and software development.</p></div></article></Reveal>
            </div>
          </div>
        </section>

        <section className="section-wrap contact-section section-block" id="contact">
          <Reveal><div className="contact-card"><div className="contact-spark"><Sparkles size={21} /></div><p className="eyebrow">05 / CONTACT</p><h2>Let's make something<br /><span className="muted-heading">useful together.</span></h2><p className="contact-copy">I'm open to relevant opportunities in AI/ML, technical support, and IT support. Feel free to reach out.</p>
            <div className="contact-actions"><a className="button button-primary" href="mailto:kenucecil@gmail.com"><Mail size={17} /> Email me</a><a className="button button-secondary" href="https://www.linkedin.com/in/ken-cecil-63b0a7b7/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16} /></a><a className="button button-secondary" href="https://github.com/KenCecil" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a></div>
            <p className="Mail me @">kenucecil@gmail.com</p>
          </div></Reveal>
        </section>
      </main>

      <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">K.</span><span>Ken Antony Cecil<span className="brand-dot">.</span></span></a><p>Built with curiosity and a little motion.</p><a href="#home" className="back-top">Back to top ↑</a></footer>
    </div>
  );
}