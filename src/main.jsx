import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Code2, Database,
  Workflow, Layers3, Terminal, BriefcaseBusiness, ShoppingCart, Boxes,
  Store, Bot, Network, CheckCircle2, ExternalLink, BarChart3, PlugZap
} from 'lucide-react';
import './styles.css';

const projects = [
  {
    n: '01', featured: true, label: 'CORE BUSINESS APPLICATION', name: 'FoodERP', subtitle: 'ERP workflows for food and retail operations',
    overview: 'A business application covering connected day-to-day operations—from sales and purchasing to inventory and point-of-sale workflows. The focus is on keeping operational data and transactions consistent across the business.',
    work: [
      'Worked across sales, purchase, inventory, and related ERP modules used in daily operations.',
      'Developed and maintained POS billing functionality and connected business workflows.',
      'Worked with application APIs and SQL-backed data to support transactions, records, and operational screens.',
      'Troubleshot issues across UI behavior, backend processing, and database data.'
    ],
    stack: ['React', 'JavaScript', 'Python', 'FastAPI', 'SQL', 'REST APIs'], icon: Layers3
  },
  {
    n: '02', featured: true, label: 'INTEGRATION PLATFORM', name: 'Online Aggregator Integration & Management', subtitle: 'Restaurant platform integrations for Swiggy and Zomato',
    overview: 'A menu and integration management workflow that connects restaurant/POS operations with online food-ordering aggregators. Similar in business category to restaurant management platforms such as Petpooja, with emphasis on integration and operational control.',
    work: [
      'Implemented store ON/OFF and real-time store status API workflows for Swiggy and Zomato integrations.',
      'Worked on menu-management and item-control flows, including assignment rules across organization, merchant, and aggregator levels.',
      'Validated request payloads and integration responses; investigated UAT issues and differences between aggregator behavior.',
      'Supported order-related integration workflows and troubleshooting between POS services and aggregator APIs.'
    ],
    stack: ['Python', 'FastAPI', 'REST APIs', 'PostgreSQL', 'SQLAlchemy', 'API Testing'], icon: PlugZap
  },
  {
    n: '03', featured: true, label: 'AI / DATA APPLICATION', name: 'SQL AI Agent', subtitle: 'Ask questions about business data in natural language',
    overview: 'An AI-assisted data-access project designed to help users explore SQL-backed information using natural-language questions instead of writing every query manually.',
    work: [
      'Developed an SQL-agent workflow using LlamaIndex as the AI/data orchestration framework.',
      'Focused on connecting natural-language questions with structured SQL data and useful responses.',
      'Worked on the application logic that connects the user request, data retrieval, and response flow.'
    ],
    stack: ['Python', 'LlamaIndex', 'SQL', 'AI Agent'], icon: Bot
  },
  {
    n: '04', label: 'POINT OF SALE', name: 'POS Billing Software', subtitle: 'Billing and sales workflows for business operations',
    overview: 'A point-of-sale application built to support day-to-day billing and sales activity, with a focus on practical workflows used by store or restaurant teams.',
    work: [
      'Built and developed POS billing software and its core billing/sales workflows.',
      'Worked on application behavior and data handling needed to support billing operations.',
      'Connected front-end interactions with application logic and persistent business data.'
    ],
    stack: ['React', 'JavaScript', 'REST APIs', 'SQL'], icon: ShoppingCart
  },
  {
    n: '05', label: 'MENU CONFIGURATION', name: 'Food Menu Manager', subtitle: 'Menu assignment and item controls across business levels',
    overview: 'A menu-management application that resolves menu and item settings across organizations, merchants, and aggregators, so the effective configuration follows defined precedence rules.',
    work: [
      'Worked on menu assignment logic across organization, merchant, and aggregator levels.',
      'Implemented or maintained precedence behavior for resolving the effective assignment and item controls.',
      'Investigated backend, repository, schema, constraint, and data-loading issues.'
    ],
    stack: ['FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Python'], icon: Store
  },
  {
    n: '06', label: 'ERP / SUPPLY CHAIN', name: 'SCM ERP', subtitle: 'Supply chain management workflows',
    overview: 'A separate ERP project in the supply-chain domain. The portfolio lists this project at a high level until the exact modules and individual contributions are added.',
    work: ['Project experience in the SCM ERP domain; detailed modules and responsibilities can be expanded with confirmed project specifics.'],
    stack: ['ERP', 'Business workflows'], icon: Boxes
  },
  {
    n: '07', label: 'SOP / TASK MANAGEMENT', name: 'TakPro', subtitle: 'SOPs, reminders, and organization task tracking',
    overview: 'A task and SOP management application intended to help teams organize procedures, track assigned work, and follow up on reminders.',
    work: ['Project scope includes SOP management, reminders, and organization-level task tracking.'],
    stack: ['Workflow management', 'Task tracking'], icon: CheckCircle2
  },
  {
    n: '08', label: 'AI BACKEND SERVICE', name: 'ERP AI Chat Service', subtitle: 'Conversation APIs and streaming AI queries',
    overview: 'A backend service for an ERP application that supports chat conversations and streaming query responses, with database-backed conversation records.',
    work: [
      'Worked on FastAPI endpoints for creating and listing conversations and streaming AI queries.',
      'Connected chat flows with persistent conversation records and service configuration.'
    ],
    stack: ['Python', 'FastAPI', 'Streaming APIs', 'SQL'], icon: Network
  }
];

const skillGroups = [
  { icon: Code2, title: 'Frontend development', description: 'Building responsive, usable application interfaces.', items: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Component-based UI'] },
  { icon: Terminal, title: 'Backend development', description: 'API design and application business logic.', items: ['Python', 'FastAPI', 'REST APIs', 'SQLAlchemy', 'Pydantic', 'Async programming'] },
  { icon: Database, title: 'Databases & data', description: 'Working with structured application data.', items: ['SQL', 'MySQL', 'PostgreSQL', 'SQLite', 'Schema design', 'Alembic migrations'] },
  { icon: Workflow, title: 'Integrations & systems', description: 'Connecting services and operational workflows.', items: ['Swiggy / Zomato APIs', 'Apache Kafka', 'MQTT', 'WebSockets', 'Postman', 'Git', 'Docker'] },
  { icon: Bot, title: 'AI application development', description: 'AI-assisted workflows over business data.', items: ['LlamaIndex', 'SQL AI Agent', 'Natural-language data access', 'Streaming AI queries'] },
  { icon: BarChart3, title: 'Engineering practices', description: 'Debugging, testing, and maintaining business systems.', items: ['API troubleshooting', 'UAT support', 'Payload validation', 'Microservices', 'Database debugging'] }
];

function App() {
  return <>
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Rohit Mainkar home"><span className="brand-mark">RM</span><span>Rohit Mainkar<span className="brand-sub">Full Stack Developer</span></span></a>
      <nav aria-label="Main navigation"><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#approach">How I work</a><a href="#contact" className="nav-contact">Contact <ArrowUpRight size={15}/></a></nav>
    </header>
    <main>
      <section className="hero section" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"/> FULL STACK DEVELOPER · OPEN TO OPPORTUNITIES</div>
          <h1>I build software<br/>for <em>real business needs.</em></h1>
          <p className="hero-text">I'm Rohit Mainkar, a Full Stack Developer with around 5 years of experience building web applications with React.js, Python, FastAPI, SQL databases, integrations, and AI-assisted data workflows.</p>
          <div className="hero-actions"><a className="btn primary" href="#projects">Explore projects <ArrowDownRight size={17}/></a><a className="btn secondary" href="https://github.com/rmainkar-001" target="_blank" rel="noreferrer"><Github size={17}/> GitHub profile <ArrowUpRight size={15}/></a></div>
          <div className="hero-meta"><span><b>~5 years</b> software development</span><span><b>Frontend + Backend</b> React.js & FastAPI</span><span><b>Business + AI</b> ERP, POS & SQL Agent</span></div>
        </div>
        <div className="hero-art" aria-label="Code illustration"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="code-window"><div className="window-top"><span/><span/><span/><small>rohit_mainkar.py</small></div><pre><code><span className="syntax-purple">class</span> <span className="syntax-green">FullStackDeveloper</span>:{'\n'}  frontend = <span className="syntax-orange">"React.js"</span>{'\n'}  backend = <span className="syntax-orange">"FastAPI"</span>{'\n'}  data = <span className="syntax-orange">"SQL + AI"</span>{'\n\n'}  <span className="syntax-purple">def</span> <span className="syntax-blue">build_solution</span>(self):{'\n'}    <span className="syntax-purple">return</span> <span className="syntax-orange">"business value"</span></code></pre><div className="code-footer"><span className="status-dot"/> From user workflow to working software</div></div><div className="floating-chip chip-react">◈ React.js</div><div className="floating-chip chip-python">⌘ Python + FastAPI</div><div className="floating-chip chip-api">↗ APIs · SQL · AI</div></div>
        <div className="hero-index">PORTFOLIO <span>PROJECTS · ENGINEERING · INTEGRATIONS</span></div>
      </section>

      <section className="intro-strip"><span>PRODUCT-MINDED ENGINEERING</span><p>Understand the workflow. Build the feature. Connect the systems. Solve the problem.</p><span className="strip-line"/></section>

      <section className="section about" id="about"><div className="section-kicker">01 / PROFILE</div><div className="about-content"><div><h2>Practical full-stack development.<br/><em>End-to-end problem solving.</em></h2></div><div><p>I build and maintain web applications that support real operational workflows. My experience spans React.js interfaces, Python and FastAPI services, REST API integrations, relational databases, and AI-related backend development.</p><p>My project work includes ERP and POS systems, sales and purchase processes, inventory workflows, restaurant aggregator integrations for Swiggy and Zomato, menu configuration, and an SQL AI Agent using LlamaIndex.</p><p>I enjoy working across the stack: understanding how a business process should work, implementing the interface and API logic, connecting the data layer, and investigating issues that appear during testing or integration.</p><a className="text-link" href="#contact">Discuss an opportunity <ArrowUpRight size={16}/></a></div></div></section>

      <section className="section highlights"><div className="section-heading"><div><div className="section-kicker">02 / WHAT I BUILD</div><h2>Software that supports<br/>day-to-day operations<span>.</span></h2></div><p>My experience is grounded in business applications where reliable data, clear workflows, and integrations matter.</p></div><div className="highlight-grid"><article><div className="highlight-icon"><Layers3/></div><h3>ERP & operations</h3><p>Sales, purchase, inventory, and connected workflows that help teams manage business transactions.</p></article><article><div className="highlight-icon"><ShoppingCart/></div><h3>POS & billing</h3><p>Billing and sales software designed around practical checkout and operational requirements.</p></article><article><div className="highlight-icon"><PlugZap/></div><h3>Platform integrations</h3><p>API-driven connections, menu workflows, store availability controls, and aggregator status synchronization.</p></article><article><div className="highlight-icon"><Bot/></div><h3>AI + SQL</h3><p>AI-assisted access to structured business data using natural-language questions and SQL-oriented workflows.</p></article></div></section>

      <section className="section skills" id="skills"><div className="section-heading"><div><div className="section-kicker">03 / TECHNICAL SKILLS</div><h2>My engineering toolkit<span>.</span></h2></div><p>A practical set of tools for frontend development, backend APIs, data, integrations, and AI-enabled features.</p></div><div className="skill-grid">{skillGroups.map(({icon:Icon,title,description,items})=><article className="skill-card" key={title}><div className="skill-icon"><Icon size={20}/></div><h3>{title}</h3><p>{description}</p><div className="tag-list">{items.map(x=><span key={x}>{x}</span>)}</div></article>)}</div></section>

      <section className="section projects" id="projects"><div className="section-heading"><div><div className="section-kicker">04 / PROJECT EXPERIENCE</div><h2>Projects with business context<span>.</span></h2></div><p>Selected work across ERP, POS, platform integrations, menu management, and AI services. Descriptions focus on the scope and contribution provided.</p></div>
        <div className="project-list">{projects.map(p=>{const Icon=p.icon;return <article className={`project-row ${p.featured?'featured-project':''}`} key={p.n}><div className="project-number">{p.n}</div><div className="project-main"><div className="project-type">{p.label}</div><div className="project-title-line"><div><h3>{p.name}</h3><div className="project-subtitle">{p.subtitle}</div></div><span className="project-icon"><Icon size={20}/></span></div><p className="project-overview">{p.overview}</p><div className="contribution-label">WORK / SCOPE</div><ul className="contribution-list">{p.work.map((item,i)=><li key={i}>{item}</li>)}</ul><div className="project-tags">{p.stack.map(s=><span key={s}>{s}</span>)}</div></div><div className="project-arrow" aria-hidden="true"><ArrowUpRight size={20}/></div></article>})}</div>
        <p className="project-note">Project descriptions are intentionally written without unverified metrics or client-confidential details. Add public demos, screenshots, or repository links only where you are authorized to share them.</p>
      </section>

      <section className="section approach" id="approach"><div className="section-kicker">05 / HOW I WORK</div><div className="approach-layout"><div><h2>Think clearly.<br/><em>Build carefully.</em></h2><p className="approach-intro">I aim to connect the technical implementation to the business requirement—not just make a screen or endpoint work in isolation.</p></div><div className="approach-steps"><article><span>01</span><div><h3>Understand the workflow</h3><p>Clarify the user, the business rule, expected data, and how the feature fits into the wider application.</p></div></article><article><span>02</span><div><h3>Build across the stack</h3><p>Implement React interfaces, API/business logic, and database interactions as the feature requires.</p></div></article><article><span>03</span><div><h3>Integrate and validate</h3><p>Check request/response payloads, test edge cases, and investigate behavior across connected services.</p></div></article><article><span>04</span><div><h3>Debug and improve</h3><p>Trace problems across frontend, backend, service configuration, and SQL data to reach a practical fix.</p></div></article></div></div></section>

      <section className="section contact" id="contact"><div className="section-kicker">06 / CONTACT</div><div className="contact-layout"><div><h2>Let's build something<br/><em>useful together.</em></h2><p>I'm interested in Full Stack Developer opportunities involving React.js, Python, FastAPI, database-driven applications, integrations, and AI-powered tools.</p><p className="contact-note">For the best introduction, include the role, team, and a link to the job description.</p></div><div className="contact-links"><a href="https://github.com/rmainkar-001" target="_blank" rel="noreferrer"><span><Github size={19}/> GitHub <small>Projects and code</small></span><ExternalLink size={18}/></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><span><Linkedin size={19}/> LinkedIn <small>Replace with your profile URL</small></span><ArrowUpRight size={18}/></a><a href="mailto:your-email@example.com"><span><Mail size={19}/> Email <small>Replace with your professional email</small></span><ArrowUpRight size={18}/></a></div></div></section>
    </main>
    <footer><a className="brand" href="#home"><span className="brand-mark">RM</span><span>Rohit Mainkar<span className="brand-sub">Full Stack Developer</span></span></a><span>React.js · Python · FastAPI · SQL · AI</span><a href="#home" className="back-top">Back to top ↑</a></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
