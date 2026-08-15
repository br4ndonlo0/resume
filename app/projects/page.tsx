"use client";

import { useEffect } from "react";

export default function CapstoneProject() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="container max-w-[1000px] mx-auto px-8 py-12">
      <style dangerouslySetInnerHTML={{__html: `
        /* ── animations ── */
        .animate-on-scroll { opacity: 0; transform: translateY(18px); transition: opacity 0.5s ease, transform 0.5s ease; }
        .animate-on-scroll.visible { opacity: 1; transform: translateY(0); }

        /* ── typography ── */
        .proj-title { font-family: var(--font-space-grotesk); font-size: clamp(2.2rem, 4.5vw, 3.2rem); letter-spacing: -0.5px; line-height: 1.15; color: var(--text-main); margin: 0 0 0.35rem; }
        .proj-event { font-size: 1.05rem; color: var(--text-muted); margin: 0 0 1.25rem; }
        .proj-summary { font-size: 1.05rem; color: var(--text-muted); line-height: 1.7; margin: 0; }

        .section-label { font-family: var(--font-space-grotesk); font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px; color: var(--text-muted); margin: 0 0 0.5rem; }
        .section-title { font-family: var(--font-space-grotesk); font-size: 1.6rem; color: var(--text-main); margin: 0 0 1.25rem; }

        /* ── cards ── */
        .card-grid { display: grid; grid-template-columns: 1fr; gap: 1.25rem; }
        @media (min-width: 640px) { .card-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 768px) { .card-grid-3 { grid-template-columns: 1fr 1fr 1fr; } }

        .info-card { background: var(--card-bg); border: 1px solid var(--border); padding: 1.5rem; border-radius: 10px; }
        .info-card h3 { font-size: 1.05rem; font-weight: 600; color: var(--text-main); margin: 0 0 0.5rem; }
        .info-card p { font-size: 0.92rem; color: var(--text-muted); line-height: 1.55; margin: 0; }

        /* ── divider ── */
        .section-break { border: none; border-top: 1px solid var(--border); margin: 3rem 0; }

        /* ── architecture diagram ── */
        .arch-diagram-wrap { background: var(--card-bg); border: 1px solid var(--border); border-radius: 12px; padding: 2rem; overflow-x: auto; }
        .arch-diagram-wrap svg text { font-family: var(--font-inter, Inter, system-ui, sans-serif); }

        /* ── table ── */
        .api-table { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
        .api-table th { text-align: left; padding: 0.6rem 1rem; border-bottom: 2px solid var(--border); color: var(--text-main); font-weight: 600; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px; }
        .api-table td { padding: 0.55rem 1rem; border-bottom: 1px solid var(--border); color: var(--text-muted); }
        .api-table td:first-child { font-family: monospace; font-size: 0.85rem; color: var(--text-main); }
        .api-table code { background: var(--tag-bg); padding: 0.15rem 0.45rem; border-radius: 4px; font-size: 0.82rem; }

        /* ── links ── */
        .inline-link { color: var(--text-main); text-decoration: underline; text-underline-offset: 3px; }
      `}} />

      {/* ───────── Header ───────── */}
      <div className="animate-on-scroll grid grid-cols-1 md:grid-cols-2 gap-8 items-center" style={{ marginBottom: '3rem' }}>
        <div>
          <h1 className="proj-title">SAIV</h1>
          <p className="proj-event">NTU SC3099 Capstone Project — Secure Attendance & Identity Verification</p>
          <p className="proj-summary">
            A production-grade biometric attendance system that combines face recognition,
            passive liveness detection, GPS geofencing, device fingerprinting, and a weighted
            risk-scoring engine to detect and flag spoofed or fraudulent check-ins in real time.
            Built as a six-module microservice system designed for unattended student attendance verification.
          </p>
        </div>
        <div>
          <video
            src="/capstone%20liveness%20(1).mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ width: '100%', borderRadius: '12px', border: '1px solid var(--border)' }}
          />
        </div>
      </div>

      <hr className="section-break" />

      {/* ───────── Capabilities ───────── */}
      <div className="animate-on-scroll">
        <p className="section-label">Capabilities</p>
        <h2 className="section-title">What it does</h2>
        <div className="card-grid card-grid-3">
          <div className="info-card">
            <h3>Biometric Check-in</h3>
            <p>Secure face enrollment and real-time face matching ensuring the physical presence of the authenticated student.</p>
          </div>
          <div className="info-card">
            <h3>Liveness Detection</h3>
            <p>Passive anti-spoofing challenge to prevent presentation attacks using printed photos or digital screens.</p>
          </div>
          <div className="info-card">
            <h3>Geofencing</h3>
            <p>GPS-based location verification strictly bound to the geographical boundaries of each specific session.</p>
          </div>
          <div className="info-card">
            <h3>Device Fingerprinting</h3>
            <p>SHA-256 signatures generated from browser hardware signals to prevent multi-device spoofing.</p>
          </div>
          <div className="info-card">
            <h3>Risk Scoring</h3>
            <p>A multi-signal weighted risk assessment engine incorporating liveness, face match, device, network, and geolocation data.</p>
          </div>
          <div className="info-card">
            <h3>Security & RBAC</h3>
            <p>JWT authentication (HS256) with 1-hour access and 7-day refresh tokens, mapped to Student, TA, Instructor, and Admin roles.</p>
          </div>
        </div>
      </div>

      <hr className="section-break" />

      {/* ───────── Architecture Diagram ───────── */}
      <div className="animate-on-scroll">
        <p className="section-label">System Design</p>
        <h2 className="section-title">Architecture</h2>
        <div className="arch-diagram-wrap">
          <svg viewBox="0 0 800 580" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
            {/* ── User Layer ── */}
            <rect x="250" y="10" width="300" height="50" rx="8" fill="var(--tag-bg)" stroke="var(--border)" strokeWidth="1.5" />
            <text x="400" y="40" textAnchor="middle" fill="var(--text-main)" fontSize="13" fontWeight="700">Student / Instructor Browser</text>

            {/* Arrow down */}
            <line x1="400" y1="60" x2="400" y2="90" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#arrow)" />

            {/* ── Module 1 & 4: Frontend Layer ── */}
            <rect x="60" y="90" width="680" height="110" rx="8" fill="var(--card-bg)" stroke="var(--border)" strokeWidth="1.5" />
            <text x="82" y="113" fill="var(--text-muted)" fontSize="10" fontWeight="600" letterSpacing="1">FRONTEND</text>

            <rect x="82" y="123" width="300" height="55" rx="5" fill="var(--tag-bg)" stroke="var(--border)" strokeWidth="1" />
            <text x="232" y="147" textAnchor="middle" fill="var(--text-main)" fontSize="12" fontWeight="600">Module 1: Student PWA</text>
            <text x="232" y="165" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Next.js · TypeScript · Tailwind · :3000</text>

            <rect x="418" y="123" width="300" height="55" rx="5" fill="var(--tag-bg)" stroke="var(--border)" strokeWidth="1" />
            <text x="568" y="147" textAnchor="middle" fill="var(--text-main)" fontSize="12" fontWeight="600">Module 4: Instructor Dashboard</text>
            <text x="568" y="165" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Next.js · Chart.js · Tailwind · :8501</text>

            {/* Arrow down */}
            <line x1="400" y1="200" x2="400" y2="235" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <text x="415" y="223" fill="var(--text-muted)" fontSize="10">REST API</text>

            {/* ── Module 2: Backend API ── */}
            <rect x="120" y="235" width="560" height="90" rx="8" fill="var(--card-bg)" stroke="var(--border)" strokeWidth="1.5" />
            <text x="142" y="258" fill="var(--text-muted)" fontSize="10" fontWeight="600" letterSpacing="1">BACKEND</text>

            <rect x="142" y="268" width="516" height="44" rx="5" fill="var(--tag-bg)" stroke="var(--border)" strokeWidth="1" />
            <text x="400" y="286" textAnchor="middle" fill="var(--text-main)" fontSize="12" fontWeight="600">Module 2: Backend API (FastAPI / Python)</text>
            <text x="400" y="302" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Auth · RBAC · Check-ins · Audit logs · :8000</text>

            {/* Arrow down */}
            <line x1="400" y1="325" x2="400" y2="360" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <text x="415" y="348" fill="var(--text-muted)" fontSize="10">Internal only</text>

            {/* ── Module 3: Face Recognition ── */}
            <rect x="140" y="360" width="520" height="85" rx="8" fill="var(--card-bg)" stroke="var(--border)" strokeWidth="1.5" />
            <text x="162" y="383" fill="var(--text-muted)" fontSize="10" fontWeight="600" letterSpacing="1">AI SERVICE</text>

            <rect x="162" y="393" width="476" height="40" rx="5" fill="var(--tag-bg)" stroke="var(--border)" strokeWidth="1" />
            <text x="400" y="410" textAnchor="middle" fill="var(--text-main)" fontSize="12" fontWeight="600">Module 3: Face Recognition (FastAPI / Python)</text>
            <text x="400" y="426" textAnchor="middle" fill="var(--text-muted)" fontSize="10">MediaPipe · FaceNet · PyTorch · Risk scoring · :8001</text>

            {/* Arrows down to data stores */}
            <line x1="200" y1="445" x2="120" y2="485" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <line x1="330" y1="445" x2="310" y2="485" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <line x1="470" y1="445" x2="500" y2="485" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <line x1="600" y1="445" x2="680" y2="485" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#arrow)" />

            {/* ── Data / Infra Layer ── */}
            <rect x="35" y="485" width="165" height="60" rx="8" fill="var(--card-bg)" stroke="var(--border)" strokeWidth="1.5" />
            <text x="117" y="512" textAnchor="middle" fill="var(--text-main)" fontSize="12" fontWeight="700">PostgreSQL</text>
            <text x="117" y="530" textAnchor="middle" fill="var(--text-muted)" fontSize="10">:5432</text>

            <rect x="225" y="485" width="165" height="60" rx="8" fill="var(--card-bg)" stroke="var(--border)" strokeWidth="1.5" />
            <text x="307" y="512" textAnchor="middle" fill="var(--text-main)" fontSize="12" fontWeight="700">Redis</text>
            <text x="307" y="530" textAnchor="middle" fill="var(--text-muted)" fontSize="10">:6379 · Session cache</text>

            <rect x="415" y="485" width="165" height="60" rx="8" fill="var(--card-bg)" stroke="var(--border)" strokeWidth="1.5" />
            <text x="497" y="512" textAnchor="middle" fill="var(--text-main)" fontSize="12" fontWeight="700">Prometheus</text>
            <text x="497" y="530" textAnchor="middle" fill="var(--text-muted)" fontSize="10">:9090 · Metrics</text>

            <rect x="605" y="485" width="165" height="60" rx="8" fill="var(--card-bg)" stroke="var(--border)" strokeWidth="1.5" />
            <text x="687" y="512" textAnchor="middle" fill="var(--text-main)" fontSize="12" fontWeight="700">Grafana</text>
            <text x="687" y="530" textAnchor="middle" fill="var(--text-muted)" fontSize="10">:3001 · Dashboards</text>

            {/* ── Arrowhead marker ── */}
            <defs>
              <marker id="arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="var(--text-muted)" />
              </marker>
            </defs>
          </svg>
        </div>
      </div>

      <hr className="section-break" />

      {/* ───────── My Contributions ───────── */}
      <div className="animate-on-scroll">
        <p className="section-label">My Role</p>
        <h2 className="section-title">What I built</h2>
        <div style={{ display: 'grid', gap: '0.75rem' }}>
          {[
            "Led the team as project lead — coordinated across 4 modules, ran sprint planning, and owned the system architecture decisions.",
            "Architected the 4-microservice system with Docker Compose, defining the service boundaries, inter-service contracts, and port allocation.",
            "Built the face recognition pipeline (Module 3): MediaPipe for face detection, FaceNet for embedding extraction, and cosine similarity for verification.",
            "Implemented the passive liveness detection challenge to prevent presentation attacks from printed photos and digital screens.",
            "Designed the weighted risk-scoring engine combining signals from liveness, face match confidence, device fingerprint, network, and geolocation.",
            "Implemented privacy-by-design storage — retaining only transformed hash templates instead of raw biometric data, with JWT auth and RBAC across all routes.",
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--text-muted)', fontFamily: 'monospace', fontSize: '0.85rem', flexShrink: 0, marginTop: '2px' }}>{String(i + 1).padStart(2, '0')}</span>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>{item}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="section-break" />

      {/* ───────── Modules breakdown ───────── */}
      <div className="animate-on-scroll">
        <p className="section-label">Modules</p>
        <h2 className="section-title">Service breakdown</h2>
        <div style={{ overflowX: 'auto', border: '1px solid var(--border)', borderRadius: '10px' }}>
          <table className="api-table">
            <thead>
              <tr>
                <th>Module</th>
                <th>Stack</th>
                <th>Responsibility</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>1</code></td><td>Next.js · TypeScript · Tailwind</td><td>Student/instructor PWA — camera, liveness UI, geolocation</td></tr>
              <tr><td><code>2</code></td><td>FastAPI · SQLAlchemy · PostgreSQL · Redis</td><td>Auth, RBAC, check-in processing, audit logs</td></tr>
              <tr><td><code>3</code></td><td>FastAPI · MediaPipe · FaceNet · PyTorch</td><td>Face enrollment, verification, and risk scoring</td></tr>
              <tr><td><code>4</code></td><td>Next.js · Tailwind · Chart.js</td><td>Instructor dashboard — session management, statistical export</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="section-break" />

      {/* ───────── Security ───────── */}
      <div className="animate-on-scroll">
        <p className="section-label">Security</p>
        <h2 className="section-title">How data is protected</h2>
        <div className="card-grid">
          <div className="info-card">
            <h3>Authentication</h3>
            <p>JWT (HS256) with 1-hour access tokens and 7-day refresh tokens. Four roles: Student, TA, Instructor, Admin — enforced at every route.</p>
          </div>
          <div className="info-card">
            <h3>Biometric Privacy</h3>
            <p>Raw face images are never stored. Only transformed hash templates from FaceNet embeddings are retained for matching.</p>
          </div>
          <div className="info-card">
            <h3>Anti-Spoofing</h3>
            <p>Multi-layer defence: passive liveness challenge, device fingerprinting (SHA-256), GPS geofencing, and network signal analysis.</p>
          </div>
          <div className="info-card">
            <h3>Audit Trail</h3>
            <p>Every check-in attempt is logged with timestamps, risk scores, and signal breakdowns for instructor review and compliance.</p>
          </div>
        </div>
      </div>

      <div style={{ paddingBottom: '4rem' }}></div>
    </div>
  );
}
