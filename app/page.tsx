"use client";

import { useEffect, useState } from "react";
import Link from "next/link";



export default function Home() {
  // Default to full name so it's visible immediately and on SSR/slow JS
  const [typedText, setTypedText] = useState("Brandon Loo");


  useEffect(() => {
    // Reset to empty string to run typing animation cleanly on mount
    setTypedText("");
    const textToType = "Brandon Loo";
    let typeIndex = 0;
    let timeoutId: NodeJS.Timeout;

    function typeWriter() {
      if (typeIndex < textToType.length) {
        setTypedText(textToType.slice(0, typeIndex + 1));
        typeIndex++;
        timeoutId = setTimeout(typeWriter, 90 + Math.random() * 70);
      }
    }

    timeoutId = setTimeout(typeWriter, 300);

    /* 3D Flip on Scroll Observer */
    const flipObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.3, rootMargin: "0px 0px -50px 0px" });

    const triggers = document.querySelectorAll('.flip-trigger');
    triggers.forEach(el => flipObserver.observe(el));

    return () => {
      clearTimeout(timeoutId);
      triggers.forEach(el => flipObserver.unobserve(el));
    };
  }, []);

  return (
    <>

    <div className="container max-w-[1000px] mx-auto px-8">
      {/* Global Component Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        html { scroll-behavior: smooth; }
        .theme-toggle { background: none; border: none; cursor: pointer; font-size: 1.2rem; padding: 0; color: var(--text-main); display: flex; align-items: center; }

        section { padding: 4.5rem 0; border-bottom: 1px solid var(--border); }
        section:last-child { border-bottom: none; }
        h1 { font-family: var(--font-space-grotesk); font-size: clamp(3rem, 6vw, 5rem); letter-spacing: -1.5px; line-height: 1.1; margin-bottom: 1rem; color: var(--text-main); }
        h2 { font-family: var(--font-space-grotesk); font-size: clamp(1.8rem, 4vw, 2.5rem); margin-bottom: 2.5rem; color: var(--text-main); letter-spacing: -0.5px; }
        h3 { font-size: 1.3rem; color: var(--text-main); margin-bottom: 0.2rem; font-weight: 600; }
        .role-title { color: var(--text-muted); font-weight: 500; margin-bottom: 1rem; font-size: 1rem; }
        p { font-size: 1.05rem; color: var(--text-muted); margin-bottom: 1rem; }
        .subtitle { font-size: clamp(1.1rem, 2vw, 1.5rem); color: var(--text-muted); margin-bottom: 2.5rem; font-weight: 400; }

        .typewriter-cursor { color: var(--accent); font-weight: 300; animation: blink 1s step-end infinite; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

        .badge { display: inline-flex; align-items: center; padding: 0.4rem 1rem; background: var(--badge-bg); border: 1px solid var(--border); color: var(--text-main); border-radius: 50px; font-size: 0.85rem; font-weight: 500; margin-bottom: 1.5rem; }

        .btn-group { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn { display: inline-block; padding: 0.8rem 1.8rem; text-decoration: none; font-weight: 500; font-size: 0.95rem; transition: all 0.2s ease; border-radius: 4px; cursor: pointer; }
        .btn-primary { background: var(--text-main); color: var(--bg-color); border: 1px solid var(--text-main); }
        .btn-primary:hover { opacity: 0.8; }
        .btn-secondary { background: transparent; color: var(--text-main); border: 1px solid var(--border); }
        .btn-secondary:hover { border-color: var(--text-main); }

        .grid-layout { display: grid; grid-template-columns: 1fr; gap: 2rem; }
        @media (min-width: 768px) { .grid-layout { grid-template-columns: 1fr 1fr; } .grid-1-col { grid-template-columns: 1fr; } }

        .card { background: var(--card-bg); border: 1px solid var(--border); padding: 2.5rem; border-radius: 8px; transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; display: flex; flex-direction: column; }
        .card:hover { transform: translateY(-3px); box-shadow: var(--card-hover-shadow); }
        .project-card:hover { border-color: var(--text-main); cursor: pointer; }
        .project-card h3 { display: flex; justify-content: space-between; align-items: center; }
        .project-card h3::after { content: ''; display: inline-block; width: 1.1rem; height: 1.1rem; background-color: var(--text-main); mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M7 17L17 7M7 7h10v10'/%3E%3C/svg%3E") no-repeat center / contain; -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M7 17L17 7M7 7h10v10'/%3E%3C/svg%3E") no-repeat center / contain; opacity: 0; transition: opacity 0.3s ease, transform 0.3s ease; transform: translateX(-5px) translateY(5px); }
        .project-card:hover h3::after { opacity: 1; transform: translateX(0) translateY(0); }
        .card ul { margin-left: 1.2rem; margin-top: 1rem; color: var(--text-muted); }
        .card li { margin-bottom: 0.6rem; font-size: 0.95rem; }

        .company-logo { display: inline-flex; align-items: center; justify-content: center; width: 70px; height: 70px; background: var(--text-main); color: var(--bg-color); font-family: var(--font-space-grotesk); font-weight: 700; font-size: 1.4rem; border-radius: 12px; margin-bottom: 1.5rem; box-shadow: 0 4px 15px rgba(0,0,0,0.08); opacity: 0; transform: perspective(1000px) rotateX(-70deg) translateY(30px); transform-origin: center bottom; transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.8s ease; }
        .visible .company-logo { opacity: 1; transform: perspective(1000px) rotateX(0) translateY(0); }

        .tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1.5rem; }
        .tag { background: var(--tag-bg); border: 1px solid var(--border); color: var(--text-muted); padding: 0.3rem 0.8rem; border-radius: 4px; font-size: 0.8rem; font-weight: 500; }

        .hero-content { display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; margin-top: 2rem; }
        .hero-content .btn-group { justify-content: center; }
        .hero-video-container { position: relative; width: 100%; border-radius: 12px; overflow: hidden; background: transparent; display: flex; align-items: center; justify-content: center; }
        .hero-video { width: 100%; height: 100%; object-fit: contain; display: block; mix-blend-mode: multiply; }
        .dark .hero-video { filter: invert(1); mix-blend-mode: screen; }

        footer { padding: 4rem 0 3rem; text-align: center; }
        .contact-links { display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; margin-top: 2rem; }
        .contact-links a { color: var(--text-muted); text-decoration: none; font-size: 1rem; font-weight: 500; transition: color 0.2s; }
        .contact-links a:hover { color: var(--accent); }
      `}} />

      {/* Section 1: Hero */}
      <section id="hero" style={{ paddingTop: '1.5rem', paddingBottom: '3.5rem' }}>
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              <span id="typewriter-text">{typedText}</span>
              <span className="typewriter-cursor">|</span>
            </h1>
            <div className="subtitle">Computer Science @ NTU</div>
            <div className="btn-group">
              <a href="#experience" className="btn btn-primary">Explore Experience</a>
              <a 
                href="https://1drv.ms/b/c/b96af1ecdfc22469/IQBgy9Alw76tR5CdyAQiQHcNAVBOKktL45qi7tUfFuRxAVQ?e=bxeB7Q&download=1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
              >
                Download Resume
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Section 2: Enterprise & Technical Experience */}
      <section id="experience">
        <h2>Experience</h2>
        <div className="grid-layout grid-1-col">
          <div className="card flip-trigger">
            <div className="company-logo" style={{ background: 'white', overflow: 'hidden' }}><img src="/htx-logo.png" alt="HTX" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <h3>HTX (Home Team Science & Technology)</h3>
            <div className="role-title">Enterprise AI Products Intern</div>
            <p>Designed and built an agentic AI workflow frontend to empower non-technical users.</p>
            <ul>
              <li>Integrated with <strong>Model Context Protocol (MCP)</strong> servers for seamless multi-step AI workflows.</li>
              <li>Deployed to internal infrastructure, adopted by 20+ users.</li>
              <li>Scoped technical frameworks and gathered stakeholder feedback for advanced AI product features.</li>
            </ul>
          </div>
          <div className="card flip-trigger">
            <div className="company-logo" style={{ background: 'white', overflow: 'hidden' }}><img src="/accenture-logo.png" alt="Accenture" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <h3>Accenture</h3>
            <div className="role-title">IT Business Analyst Intern</div>
            <p>Bridged the gap between business requirements and technical execution.</p>
            <ul>
              <li>Resolved functional gaps in a case management platform through technical documentation and environment testing.</li>
              <li>Led cross-team Agile/Scrum development meetings to track defects and maintain sprint cycles.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Projects */}
      <section id="projects">
        <h2>Featured Projects</h2>
        <div className="grid-layout">
          <Link href="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card project-card" style={{ height: '100%' }}>
              <h3>NTU Capstone: Biometric System</h3>
              <div className="role-title">Team Leader & Developer</div>
              <p>Architected a real-time face recognition and liveness detection system using MediaPipe and FaceNet.</p>
              <ul>
                <li>Engineered a 4-microservice architecture ensuring modularity and scalability.</li>
                <li>Implemented privacy-by-design storage (retaining only transformed hash templates) with JWT auth and RBAC.</li>
              </ul>
              <div className="tags">
                <span className="tag">Next.js</span>
                <span className="tag">FastAPI</span>
                <span className="tag">Docker</span>
                <span className="tag">PostgreSQL</span>
                <span className="tag">Redis</span>
              </div>
            </div>
          </Link>
          <Link href="/projects/intuition" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card project-card" style={{ height: '100%' }}>
              <h3>Bank Buddy</h3>
              <div className="role-title">Jane Street iNTUition 2026 Hackathon</div>
              <p>Developed an accessibility-first fintech frontend emphasizing inclusivity and performance.</p>
              <ul>
                <li>Delivered voice navigation and 13-language support with a &lt;2s load time (90+ Lighthouse score).</li>
                <li>Utilized <strong>Claude Code</strong> as an agentic AI coding assistant to accelerate component architecture and quality.</li>
              </ul>
              <div className="tags">
                <span className="tag">Next.js</span>
                <span className="tag">TypeScript</span>
                <span className="tag">Agentic AI</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Section 4: Technical Arsenal & Architecture */}
      <section id="arsenal">
        <h2>Technical Arsenal</h2>
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3>AI & Workflows</h3>
          <p>Specialized in building and integrating autonomous and assisted AI systems.</p>
          <div className="tags">
            <span className="tag" style={{ background: '#111', color: '#fff', borderColor: '#111' }}>Agentic Workflows</span>
            <span className="tag" style={{ background: '#111', color: '#fff', borderColor: '#111' }}>Model Context Protocol (MCP)</span>
            <span className="tag" style={{ background: '#111', color: '#fff', borderColor: '#111' }}>OpenCode</span>
            <span className="tag" style={{ background: '#111', color: '#fff', borderColor: '#111' }}>Claude Code</span>
            <span className="tag" style={{ background: '#111', color: '#fff', borderColor: '#111' }}>Google Antigravity</span>
          </div>
        </div>
        <div className="grid-layout">
          <div className="card">
            <h3>Languages</h3>
            <div className="tags">
              <span className="tag">Python</span>
              <span className="tag">Java (OOP)</span>
              <span className="tag">C</span>
              <span className="tag">C++</span>
              <span className="tag">C#</span>
              <span className="tag">SQL</span>
              <span className="tag">Assembly</span>
            </div>
          </div>
          <div className="card">
            <h3>Frameworks & Infra</h3>
            <div className="tags">
              <span className="tag">React</span>
              <span className="tag">Next.js</span>
              <span className="tag">Node.js</span>
              <span className="tag">FastAPI</span>
              <span className="tag">Docker</span>
              <span className="tag">PostgreSQL</span>
              <span className="tag">Redis</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Leadership, Life & Contact */}
      <section id="leadership">
        <h2>Leadership & Life</h2>
        <div className="grid-layout">
          <div className="card">
            <h3>Community & Sports</h3>
            <ul>
              <li><strong>Vice-Captain, Hall 10 Football:</strong> Designed structured training plans, advancing the squad to the IHG Quarter-Finals.</li>
              <li><strong>Logistics Lead, YMCA-NTU Overseas:</strong> Coordinated international transportation of essential supplies.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Creative Distinction</h3>
            <ul>
              <li><strong>Grade 8 Distinction:</strong> Electric Guitar (Trinity College London).</li>
              <li><strong>Guitarist, Hall 10 Jamband:</strong> Performing at university-wide events bridging technical and creative disciplines.</li>
            </ul>
          </div>
        </div>

        <footer>
          <div className="contact-links">
            <a href="mailto:brandonloo2002@gmail.com">Email Me</a>
            <a href="https://github.com/br4ndonlo0" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/brandon-loo-kj/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </footer>
      </section>
    </div>
    </>
  );
}
