import React, { useState } from "react";


const skills = [
  { name: "Java", type: "Programming", icon: "openjdk" },
  { name: "Spring Boot", type: "Backend", icon: "spring" },
  { name: "MySQL", type: "Database", icon: "mysql" },
  { name: "React.js", type: "Frontend", icon: "react" },
  { name: "JavaScript", type: "Frontend", icon: "javascript" },
  { name: "HTML5", type: "Frontend", icon: "html5" },
  { name: "CSS3", type: "Frontend", icon: "css" },
  { name: "Git & GitHub", type: "Tools", icon: "github" },
];



const projects = [
  {
    number: "01",
    name: "ATM Interface",
    description:
      "Developed a menu-driven ATM application using Java to perform essential banking operations such as balance inquiry, cash deposit and withdrawal.",
    tags: ["Java", "OOP", "Banking Operations", "Problem Solving"],
    link: "https://github.com/Sourabhpawar12/OIBSIP/tree/main/JavaDevelopment-Task3-ATMInterface",
  },
  {
    number: "02",
    name: "Number Guessing Game",
    description:
      "Built an interactive Java game where users guess a randomly generated number within 7 attempts, with feedback after each guess.",
    tags: ["Java", "Random Number", "Loops", "Conditional Logic"],
    link: "https://github.com/Sourabhpawar12/OIBSIP/tree/main/JavaDevelopment-Task1-NumberGuessingGame",
  },
  {
    number: "03",
    name: "Trusty Tails",
    description:
      "A web development project showcasing practical development skills and hands-on project experience.",
    tags: ["Web Development", "React.js", "Frontend"],
    link: "https://github.com/Sourabhpawar12",
  },
];


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}>SP<span>.</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">☰</button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["About", "Skills", "Projects", "Experience", "Contact"].map((item) =>
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          )}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <span>↗</span></a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO SOFTWARE ENGINEERING OPPORTUNITIES</div>
            <p className="hello">Hello, I'm</p>
            <h1>Sourabh<br /><span>Pawar.</span></h1>
            <h2>Software Engineer <i>—</i> Java & Web Development</h2>
            <p className="hero-description">
              I enjoy building practical software solutions and creating clean,
              user-friendly web experiences. I’m continuously learning and
              strengthening my skills in backend and frontend development.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <span>↗</span></a>
              <a className="button button-ghost" href="#contact">Get in touch</a>
              <a
  className="button button-ghost"
  href="/Sourabh-Resume.pdf"
  download="Sourabh-Pawar-Resume.pdf"
>
  Download Resume <span>↓</span>
</a>
            </div>
            <div className="social-line">
              <a href="https://github.com/Sourabhpawar12" target="_blank" rel="noreferrer">GITHUB ↗</a>
              <span />
              <a href="#contact">LINKEDIN ↗</a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Decorative initials graphic">
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="hero-glow" />
            <img
  src="/sourabh-profile.jpeg"
  alt="Sourabh Pawar"
  className="profile-photo"
/>
            <div className="visual-tag tag-top">JAVA · REACT</div>
            <div className="visual-tag tag-bottom">BUILD. LEARN. REPEAT.</div>
            <div className="spark spark-one">✳</div><div className="spark spark-two">✦</div>
          </div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="section about-section" id="about">
          <div className="section-kicker">01 / ABOUT ME</div>
          <div className="section-heading-row">
            <h2>A little about <span>me.</span></h2>
            <p className="section-intro">Curious by nature. Developer by choice.</p>
          </div>
          <div className="about-grid">
            <div className="about-main glass-card">
              <div className="card-mark">“</div>
              <p className="about-lead">I’m an aspiring Software Engineer with a background in Electronics & Telecommunication Engineering and a strong interest in software development.</p>
              <p className="muted">I have been building my foundation in Java, backend development and modern web technologies through hands-on projects and internship experience. I enjoy learning by building, solving problems and improving a little every day.</p>
            </div>
            <div className="about-facts">
              <div className="fact-card"><span>EDUCATION</span><strong>B.Tech</strong><p>Electronics & Telecommunication</p><small>Completed · 2024</small></div>
              <div className="fact-card"><span>FOCUS</span><strong>Software</strong><p>Java · Backend · Web Development</p><small>Always learning</small></div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-kicker">02 / TECH STACK</div>
          <div className="section-heading-row">
            <h2>Tools I work <span>with.</span></h2>
            <p className="section-intro">The technologies I’m learning and using to build.</p>
          </div>
          
<div className="skills-grid">
  {skills.map((skill, index) => (
    <div className="skill-card" key={skill.name}>
      <span className="skill-index">
        0{index + 1}
      </span>

      <div className="skill-icon">
        <img
          src={`https://cdn.simpleicons.org/${skill.icon}`}
          alt={`${skill.name} logo`}
          loading="lazy"
        />
      </div>

      <strong>{skill.name}</strong>
      <small>{skill.type}</small>
    </div>
  ))}
</div>

        </section>

        <section className="section" id="projects">
          <div className="section-kicker">03 / SELECTED WORK</div>
          <div className="section-heading-row">
            <h2>Things I’ve <span>built.</span></h2>
            <p className="section-intro">A selection of projects and hands-on practice.</p>
          </div>
          <div className="projects-list">
            {projects.map((project) => <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-content">
                <h3>{project.name}</h3><p>{project.description}</p>
                <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>
              <a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} on GitHub`}>↗</a>
            </article>)}
          </div>
          <a className="text-link" href="https://github.com/Sourabhpawar12" target="_blank" rel="noreferrer">Explore GitHub profile <span>↗</span></a>
        </section>

        
<section className="section" id="experience">
  <div className="section-kicker">04 / EXPERIENCE</div>

  <div className="section-heading-row">
    <h2>My professional <span>journey.</span></h2>
    <p className="section-intro">
      Building practical skills through real-world projects and continuous learning.
    </p>
  </div>

  <div className="timeline-card glass-card">
    <div className="timeline-point" />

    <div>
      <span className="timeline-label">
        JAVA DEVELOPMENT INTERNSHIP
      </span>

      <h3>Java Development Intern</h3>

      <p className="muted">
        Oasis Infobyte · Remote Internship
      </p>

      <p className="muted">
        Successfully completed a Java Development Internship,
        gaining hands-on experience in Java programming,
        object-oriented concepts and application development.
      </p>

      <p className="muted">
        Developed practical projects including an ATM Interface
        and Number Guessing Game, with project documentation
        and source code maintained on GitHub.
      </p>

      <div className="tag-list">
        <span>Java</span>
        <span>OOP</span>
        <span>Problem Solving</span>
        <span>Debugging</span>
        <span>GitHub</span>
      </div>

      <div className="tag-list">
        <span>Internship Completed</span>
      </div>
    </div>
  </div>
</section>


<section className="section" id="education">
  <div className="section-kicker">05 / EDUCATION</div>

  <div className="section-heading-row">
    <h2>My academic <span>background.</span></h2>
    <p className="section-intro">
      Education, achievements and continuous learning.
    </p>
  </div>

  {/* Graduation */}
  <div className="timeline-card glass-card">
    <div className="timeline-point" />
    <div>
      <span className="timeline-label">BACHELOR'S DEGREE · 2024</span>
      <h3>B.Tech – Electronics & Telecommunication Engineering</h3>
      <p className="muted">
        Deogiri Institute of Engineering & Management Studies,
        Chhatrapati Sambhajinagar
      </p>
      <p className="muted">
        Dr. Babasaheb Ambedkar Technological University, Lonere
      </p>
      <div className="tag-list">
        <span>CGPA: 6.73</span>
        <span>Electronics</span>
        <span>Telecommunication</span>
      </div>
    </div>
  </div>

  {/* HSC */}
  <div className="timeline-card glass-card">
    <div className="timeline-point" />
    <div>
      <span className="timeline-label">HIGHER SECONDARY · 2020</span>
      <h3>12th – Higher Secondary Certificate (HSC)</h3>
      <p className="muted">
        Residential Junior College, Ahilyanagar
      </p>
      <p className="muted">
        Savitribai Phule Pune University, Pune
      </p>
      <div className="tag-list">
        <span>Percentage: 67.23%</span>
      </div>
    </div>
  </div>

  {/* SSC */}
  <div className="timeline-card glass-card">
    <div className="timeline-point" />
    <div>
      <span className="timeline-label">SECONDARY SCHOOL · 2018</span>
      <h3>10th – Secondary School Certificate (SSC)</h3>
      <p className="muted">
        Residential High School, Ahilyanagar
      </p>
      <div className="tag-list">
        <span>Percentage: 87%</span>
      </div>
    </div>
  </div>

  {/* Certification */}
  <div className="timeline-card glass-card">
    <div className="timeline-point" />
    <div>
      <span className="timeline-label">CERTIFICATION</span>
      <h3>Core Java Certification</h3>
      <p className="muted">
        Friends Union for Energising Lives (FUEL), Pune
      </p>
      <div className="tag-list">
        <span>Core Java</span>
        <span>Java Programming</span>
      </div>
    </div>
  </div>

  {/* Extra Curricular */}
  <div className="timeline-card glass-card">
    <div className="timeline-point" />
    <div>
      <span className="timeline-label">EXTRA-CURRICULAR ACTIVITIES</span>
      <h3>Event Organizer</h3>
      <p className="muted">
        Participated in organizing events and coordinating
        activities, developing teamwork, communication
        and organizational skills.
      </p>
      <div className="tag-list">
        <span>Event Management</span>
        <span>Teamwork</span>
        <span>Coordination</span>
      </div>
    </div>
  </div>
</section>




        
<section className="contact-section section" id="contact">
  <div className="section-kicker">06 / CONTACT</div>

  <div className="contact-panel">
    <div>
      <p className="eyebrow">LET'S CONNECT</p>

      <h2>
        Let’s build<br />
        <span>something meaningful.</span>
      </h2>

      <p className="muted">
        Looking for an enthusiastic Software Engineer or Java Developer?
        I’m open to exciting opportunities, collaborations and new challenges.
        Let’s connect!
      </p>
    </div>

    <div className="contact-links">

      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pawarsaurabh373@gmail.com" target="_blank" rel="noreferrer">
        <span className="contact-icon">✉</span>
        <span>
          <small>EMAIL ME</small>
          <strong>pawarsaurabh373@gmail.com ↗</strong>
        </span>
      </a>

      <a
        href="https://www.linkedin.com/in/sourabh-pawar-0808a3240/"
        target="_blank"
        rel="noreferrer"
      >
        <span className="contact-icon">in</span>
        <span>
          <small>LINKEDIN</small>
          <strong>Connect professionally ↗</strong>
        </span>
      </a>

      <a
        href="https://github.com/Sourabhpawar12"
        target="_blank"
        rel="noreferrer"
      >
        <span className="contact-icon">⌘</span>
        <span>
          <small>GITHUB</small>
          <strong>Explore my projects ↗</strong>
        </span>
      </a>

      <a
        href="https://wa.me/919421348235"
        target="_blank"
        rel="noreferrer"
      >
        <span className="contact-icon">☏</span>
        <span>
          <small>WHATSAPP</small>
          <strong>+91 94213 48235 ↗</strong>
        </span>
      </a>

    </div>
  </div>
</section>

</main>      
      
<footer className="site-footer">
  <div className="footer-top">
    <a className="brand footer-brand" href="#home">
      SP<span>.</span>
    </a>

    <p>
      Building my journey in <span>Software Development.</span>
    </p>

    <div className="footer-socials">
      <a
        href="https://github.com/Sourabhpawar12"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        GH
      </a>

      <a
        href="https://www.linkedin.com/in/sourabh-pawar-0808a3240/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        in
      </a>

      <a
        href="mailto:pawarsaurabh373@gmail.com"
        aria-label="Email"
      >
        @
      </a>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© {new Date().getFullYear()} Sourabh Pawar. All rights reserved.</p>
    <a href="#home">Back to top ↑</a>
  </div>
</footer>
  </div>
  );
}

export default App;