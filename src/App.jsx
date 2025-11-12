import React, { useRef, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Mail, Github, Linkedin, Phone, FileText, Rocket, ChevronUp } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const GradientBG = () => {
  return (
    <div className="fixed inset-0 -z-0 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(124,58,237,0.35),transparent),radial-gradient(900px_500px_at_90%_10%,rgba(59,130,246,0.25),transparent),radial-gradient(700px_500px_at_50%_100%,rgba(236,72,153,0.2),transparent)]" />
      <div className="pointer-events-none absolute inset-0 backdrop-blur-[2px]" />
    </div>
  )
}

const GlassCard = ({ children, className = '' }) => (
  <div className={`relative rounded-2xl bg-white/10 border border-white/20 shadow-xl backdrop-blur-xl ${className}`}>
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-60" />
    <div className="relative z-10">{children}</div>
  </div>
)

const Navbar = () => (
  <div className="fixed top-0 left-0 right-0 z-50">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-white/90 font-bold tracking-wide text-lg">VS</Link>
      <div className="hidden md:flex items-center gap-6 text-white/80">
        <a href="#about" className="hover:text-white">About</a>
        <a href="#projects" className="hover:text-white">Projects</a>
        <a href="#skills" className="hover:text-white">Skills</a>
        <a href="#certs" className="hover:text-white">Certifications</a>
        <a href="#experience" className="hover:text-white">Experience</a>
        <a href="#leadership" className="hover:text-white">Leadership</a>
        <a href="#contact" className="hover:text-white">Contact</a>
      </div>
      <a href="#contact" className="text-sm px-4 py-2 rounded-full bg-white/15 border border-white/20 text-white hover:bg-white/25 transition">Let's talk</a>
    </div>
  </div>
)

const Hero = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5])

  return (
    <section ref={containerRef} className="relative min-h-[100svh] w-full pt-24">
      <div className="absolute inset-0" style={{ width: '100%', height: '100%' }}>
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent pointer-events-none" />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-6xl mx-auto px-6 pt-24">
        <GlassCard className="p-8 md:p-12 text-white/90">
          <p className="text-sm tracking-widest uppercase text-white/60 mb-3">DevOps Engineer • Front-End Developer</p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            👋 Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-400 to-sky-300">Vishal S</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/80">I build intelligent, scalable, and automated systems.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-full bg-fuchsia-500/80 hover:bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/30 transition inline-flex items-center gap-2"><Rocket size={18}/> Explore Projects</a>
            <a href="#contact" className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 text-white transition inline-flex items-center gap-2"><Mail size={18}/> Contact Me</a>
            <a href="/resume.pdf" className="px-5 py-2.5 rounded-full bg-sky-500/80 hover:bg-sky-500 text-white shadow-lg shadow-sky-500/30 transition inline-flex items-center gap-2"><FileText size={18}/> View Resume</a>
          </div>
        </GlassCard>

        <div className="mt-16 flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/80"
          >
            <ArrowDown />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

const SectionWrapper = ({ id, children }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 20%'] })
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [40, 0])
  return (
    <section id={id} ref={ref} className="relative py-24 md:py-32">
      <motion.div style={{ opacity, y }} className="max-w-6xl mx-auto px-6">
        {children}
      </motion.div>
    </section>
  )
}

const About = () => (
  <SectionWrapper id="about">
    <div className="grid md:grid-cols-3 gap-8 items-start">
      <motion.div whileHover={{ rotateX: -6, rotateY: 6 }} transition={{ type: 'spring', stiffness: 200, damping: 15 }} className="md:col-span-1">
        <GlassCard className="overflow-hidden p-4">
          <div className="aspect-[4/5] rounded-xl bg-gradient-to-br from-violet-600/40 to-indigo-600/40 border border-white/10 flex items-center justify-center text-white/70 font-bold text-2xl">
            VS
          </div>
        </GlassCard>
      </motion.div>
      <div className="md:col-span-2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white/90">About Me</h2>
        <p className="text-white/80 leading-relaxed">DevOps Engineer and quality-focused software professional passionate about automating workflows, managing cloud infrastructure, and deploying scalable apps on AWS & Azure.</p>
        <GlassCard className="p-6">
          <h3 className="text-xl font-semibold text-white/90 mb-4">Education</h3>
          <div className="space-y-3 text-white/80">
            <div className="flex items-center justify-between">
              <span>MCA – CHRIST University</span>
              <span className="opacity-70">2024–Present</span>
            </div>
            <div className="flex items-center justify-between">
              <span>BSc (CS, Maths, Electronics) – CHRIST University</span>
              <span className="opacity-70">2021–2024</span>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  </SectionWrapper>
)

const Projects = () => {
  const projectData = [
    { title: 'Christ-International App', stack: 'Kotlin, XML, Firebase, Google APIs', desc: 'Multilingual appointment booking for international students and faculty with role-based access and real-time feedback.', link: '#' },
    { title: 'DocuMind AI – Smart Document Search Chatbot', stack: 'React, Vite, FastAPI, Python, spaCy, FAISS', desc: 'RAG chatbot for contextual document search with real-time results and AI-driven queries.', link: '#' },
    { title: 'Intruder Alert System – IoT-Based Missile Detection', stack: 'Arduino Uno, Camera Module, Laser, Ultrasonic Sensor, OpenCV', desc: 'Real-time detection and radar visualization for missile tracking.', link: '#' },
    { title: 'Anti-Missile System using Camera & Laser (IoT)', stack: 'Arduino Uno, Camera, Laser Module', desc: 'IoT-based missile prevention with THEL simulation.', link: '#' },
    { title: 'BinSense – Smart Waste Management System', stack: 'IoT, Sensors, Arduino', desc: 'Smart waste detection with alert and monitoring system.', link: '#' },
    { title: 'Revelations Fest App', stack: 'Android Studio, Kotlin, XML', desc: 'CS fest app with profiles, navigation, and gallery with brightness control.', link: '#' },
    { title: 'Event Management App – Plannify', stack: 'Android Studio, Kotlin, XML, Firebase', desc: 'Event planner with Firebase schedules and data storage.', link: '#' },
  ]

  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl md:text-4xl font-bold text-white/90 mb-8">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ delay: i * 0.05 }}>
            <motion.div whileHover={{ rotateY: 10, rotateX: -6 }} className="[perspective:1000px]">
              <GlassCard className="p-6 min-h-[220px] group">
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-semibold text-white/90">{p.title}</h3>
                  <p className="text-xs text-white/60 mt-1">{p.stack}</p>
                  <p className="text-white/80 mt-3 text-sm leading-relaxed flex-1">{p.desc}</p>
                  <a href={p.link} className="mt-4 inline-flex items-center gap-2 text-sky-300 hover:text-sky-200">Learn More →</a>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

const Skills = () => {
  const categories = {
    Programming: ['Python', 'Java', 'SQL', 'JavaScript', 'C', 'R'],
    'DevOps & Cloud': ['AWS', 'Azure', 'Docker', 'CI/CD', 'IaC'],
    Tools: ['Jenkins', 'Ansible', 'CloudWatch', 'VS Code', 'Figma', 'Blender'],
    Frameworks: ['React', 'Pandas', 'NumPy', 'Selenium'],
    'IoT & ML': ['Arduino', 'Drone Tech', 'Power BI', 'SpaCy'],
  }
  return (
    <SectionWrapper id="skills">
      <h2 className="text-3xl md:text-4xl font-bold text-white/90 mb-8">Technical Skills</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(categories).map(([cat, items], i) => (
          <GlassCard key={cat} className="p-6">
            <h3 className="text-lg font-semibold text-white/90 mb-4">{cat}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item, idx) => (
                <motion.span key={item} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="px-3 py-1 rounded-full border border-white/20 bg-white/10 text-white/80 shadow-[0_0_20px_rgba(99,102,241,0.25)]">
                  {item}
                </motion.span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  )
}

const Certifications = () => {
  const certs = [
    'Implementing AI Using Cognitive Modeling',
    'JavaScript by Example',
    'Google Cloud Foundations',
    'CompTIA Cloud+: Cloud Migrations',
    'Prompt Engineering: Cloud & IoT Hacking in the GenAI Era',
  ]
  return (
    <SectionWrapper id="certs">
      <h2 className="text-3xl md:text-4xl font-bold text-white/90 mb-8">Certifications</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((c, i) => (
          <motion.div key={c} whileHover={{ rotateY: 12, scale: 1.02 }} className="[perspective:1000px]">
            <GlassCard className="p-6 min-h-[140px] flex items-center">
              <p className="text-white/85 text-sm">{c}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

const Experience = () => {
  const items = [
    {
      role: 'Front-End Developer Intern – Sensesys',
      time: '2025–Present',
      desc: 'Built dynamic React components, tested modules, and contributed to agile sprints.',
    },
    {
      role: 'Teaching Assistant – Christ University',
      time: '2025',
      desc: 'Developed lecture content and interactive presentations for MCA program.',
    },
  ]
  return (
    <SectionWrapper id="experience">
      <h2 className="text-3xl md:text-4xl font-bold text-white/90 mb-8">Experience</h2>
      <div className="relative pl-6">
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/20" />
        <div className="space-y-8">
          {items.map((it, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative">
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-gradient-to-br from-fuchsia-400 to-sky-400 shadow-[0_0_20px_rgba(99,102,241,0.4)]" />
              <GlassCard className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-white/90 font-semibold">{it.role}</h3>
                  <span className="text-white/60 text-sm">{it.time}</span>
                </div>
                <p className="text-white/80 mt-2 text-sm">{it.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

const Leadership = () => {
  const items = [
    'Head, Christ University NCC (Junior Under Officer)',
    'Committee Head – Gateways National Fest',
    'Digital Mission Trainer (Python & Cloud Computing)',
    'Vice Chancellor’s Commendation Award recipient',
  ]
  return (
    <SectionWrapper id="leadership">
      <h2 className="text-3xl md:text-4xl font-bold text-white/90 mb-8">Leadership</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <GlassCard key={t} className="p-6">
            <p className="text-white/85">{t}</p>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  )
}

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thanks! Your message has been sent via EmailJS in a production setup.')
  }
  return (
    <SectionWrapper id="contact">
      <h2 className="text-3xl md:text-4xl font-bold text-white/90 mb-8">Contact</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <GlassCard className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input placeholder="Name" className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white/90 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50"/>
              <input placeholder="Email" className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white/90 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50"/>
            </div>
            <input placeholder="Subject" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white/90 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50"/>
            <textarea rows="5" placeholder="Message" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white/90 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50"/>
            <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-sky-500 text-white shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-500/50 transition w-full">Send Message</button>
          </form>
        </GlassCard>
        <div className="space-y-4">
          <GlassCard className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-3 text-white/85"><Github size={18}/> github.com/vishal-sreenivas</div>
            <a href="https://github.com/vishal-sreenivas" className="text-sky-300">Open</a>
          </GlassCard>
          <GlassCard className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-3 text-white/85"><Linkedin size={18}/> LinkedIn: Vishal S</div>
            <a href="https://linkedin.com" className="text-sky-300">Open</a>
          </GlassCard>
          <GlassCard className="p-6 flex items-center gap-3 text-white/85"><Mail size={18}/> vishal.s.offical@gmail.com</GlassCard>
          <GlassCard className="p-6 flex items-center gap-3 text-white/85"><Phone size={18}/> +91 9633760494</GlassCard>
        </div>
      </div>
    </SectionWrapper>
  )
}

const Footer = () => (
  <div className="py-10 text-center text-white/60">
    © {new Date().getFullYear()} Vishal S. Built with React, R3F, and Framer Motion.
  </div>
)

const ScrollToTop = () => {
  const [visible, setVisible] = React.useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8 }}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white/15 border border-white/20 text-white backdrop-blur-md shadow-lg"
    >
      <ChevronUp />
    </motion.button>
  )
}

function App() {
  return (
    <div className="relative min-h-screen text-white">
      <GradientBG />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Experience />
      <Leadership />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
