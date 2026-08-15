"use client";

import { useEffect } from "react";

export default function IntuitionProject() {
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
        .proj-event a { color: var(--text-main); text-decoration: underline; text-underline-offset: 3px; }
        .proj-summary { font-size: 1.05rem; color: var(--text-muted); line-height: 1.7; margin: 0; }

        .section-label { font-family: var(--font-space-grotesk); font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px; color: var(--text-muted); margin: 0 0 0.5rem; }
        .section-title { font-family: var(--font-space-grotesk); font-size: 1.6rem; color: var(--text-main); margin: 0 0 1.25rem; }

        /* ── tags ── */
        .tag-row { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.75rem; }
        .tag-pill { background: var(--tag-bg); border: 1px solid var(--border); color: var(--text-main); padding: 0.3rem 0.85rem; border-radius: 50px; font-size: 0.82rem; font-weight: 500; }

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
      <div className="animate-on-scroll grid grid-cols-1 md:grid-cols-2 gap-8 items-center" style={{ marginBottom: '2rem' }}>
        <div>
          <h1 className="proj-title">Bank Buddy</h1>
          <p className="proj-event">
            Built at the <a href="https://github.com/br4ndonlo0/iNTUtion" target="_blank" rel="noopener noreferrer">Jane Street iNTUition 2026</a> hackathon
          </p>
          <p className="proj-summary">
            Over 1 billion people globally live with some form of disability, yet most fintech
            applications are not designed with their needs in mind. Bank Buddy is an accessible
            financial management app that treats accessibility and internationalisation as first-class
            concerns — not afterthoughts. It supports voice control, hand-gesture navigation,
            AI-driven UI customisation, and 13 languages out of the box.
          </p>
        </div>
        <div>
          <img
            src="/photo_2026-08-15_18-53-31.jpg"
            alt="Team hacking at iNTUition 2026"
            style={{ width: '100%', borderRadius: '12px', border: '1px solid var(--border)' }}
          />
        </div>
      </div>
      <div className="animate-on-scroll" style={{ marginBottom: '3rem' }}>
        <video
          src="/copy_D9754D1F-3C5F-47D1-B64D-235E85775570.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '100%', borderRadius: '12px', border: '1px solid var(--border)' }}
        />
      </div>

      <hr className="section-break" />

      {/* ───────── What it does ───────── */}
      <div className="animate-on-scroll">
        <p className="section-label">Capabilities</p>
        <h2 className="section-title">What it does</h2>
        <div className="card-grid card-grid-3">
          <div className="info-card">
            <h3>Voice Control</h3>
            <p>Hands-free navigation and transaction input via the Web Speech API — faster than typing for transaction-heavy workflows.</p>
          </div>
          <div className="info-card">
            <h3>Gesture Recognition</h3>
            <p>On-device hand-gesture tracking with MediaPipe Tasks-Vision. No camera data leaves the browser.</p>
          </div>
          <div className="info-card">
            <h3>AI Adaptive UI</h3>
            <p>Say &ldquo;I need high contrast&rdquo; or &ldquo;Make buttons larger&rdquo; and Gemini translates that into an accessibility profile applied instantly via CSS injection.</p>
          </div>
          <div className="info-card">
            <h3>13 Languages</h3>
            <p>Real-time translation powered by MyMemory API with client-side caching and locale-aware date formatting via the Intl API.</p>
          </div>
          <div className="info-card">
            <h3>P2P Transfers</h3>
            <p>Peer-to-peer money transfers with MongoDB atomic transactions ensuring all-or-nothing integrity. Instant balance updates.</p>
          </div>
          <div className="info-card">
            <h3>Auth &amp; Security</h3>
            <p>JWT tokens in httpOnly/sameSite cookies, bcryptjs 10-round hashing, middleware-level route protection, and encrypted balances at rest.</p>
          </div>
        </div>
      </div>

      <hr className="section-break" />

      {/* ───────── Architecture Diagram ───────── */}
      <div className="animate-on-scroll">
        <p className="section-label">System Design</p>
        <h2 className="section-title">Architecture</h2>
        <div className="arch-diagram-wrap">
          <svg viewBox="0 0 800 520" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
            {/* ── Client Layer ── */}
            <rect x="30" y="10" width="740" height="100" rx="8" fill="none" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="6 3" />
            <text x="50" y="34" fill="var(--text-muted)" fontSize="11" fontWeight="600" letterSpacing="1">CLIENT (BROWSER)</text>

            <rect x="55" y="48" width="130" height="48" rx="6" fill="var(--tag-bg)" stroke="var(--border)" strokeWidth="1" />
            <text x="120" y="69" textAnchor="middle" fill="var(--text-main)" fontSize="12" fontWeight="600">Web Speech API</text>
            <text x="120" y="84" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Voice input</text>

            <rect x="210" y="48" width="130" height="48" rx="6" fill="var(--tag-bg)" stroke="var(--border)" strokeWidth="1" />
            <text x="275" y="69" textAnchor="middle" fill="var(--text-main)" fontSize="12" fontWeight="600">MediaPipe</text>
            <text x="275" y="84" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Gesture tracking</text>

            <rect x="365" y="48" width="130" height="48" rx="6" fill="var(--tag-bg)" stroke="var(--border)" strokeWidth="1" />
            <text x="430" y="69" textAnchor="middle" fill="var(--text-main)" fontSize="12" fontWeight="600">Translation Cache</text>
            <text x="430" y="84" textAnchor="middle" fill="var(--text-muted)" fontSize="10">13 languages</text>

            <rect x="520" y="48" width="130" height="48" rx="6" fill="var(--tag-bg)" stroke="var(--border)" strokeWidth="1" />
            <text x="585" y="69" textAnchor="middle" fill="var(--text-main)" fontSize="12" fontWeight="600">GSAP</text>
            <text x="585" y="84" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Animations</text>

            {/* ── Arrow: client → frontend ── */}
            <line x1="400" y1="110" x2="400" y2="140" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

            {/* ── Frontend Layer ── */}
            <rect x="100" y="140" width="600" height="90" rx="8" fill="var(--card-bg)" stroke="var(--border)" strokeWidth="1.5" />
            <text x="120" y="164" fill="var(--text-main)" fontSize="13" fontWeight="700">Next.js Frontend</text>
            <text x="440" y="164" fill="var(--text-muted)" fontSize="11">React 19 · TypeScript · TailwindCSS</text>

            <rect x="120" y="178" width="110" height="36" rx="5" fill="var(--tag-bg)" stroke="var(--border)" strokeWidth="1" />
            <text x="175" y="200" textAnchor="middle" fill="var(--text-muted)" fontSize="11">VoiceContext</text>

            <rect x="245" y="178" width="110" height="36" rx="5" fill="var(--tag-bg)" stroke="var(--border)" strokeWidth="1" />
            <text x="300" y="200" textAnchor="middle" fill="var(--text-muted)" fontSize="11">GestureContext</text>

            <rect x="370" y="178" width="110" height="36" rx="5" fill="var(--tag-bg)" stroke="var(--border)" strokeWidth="1" />
            <text x="425" y="200" textAnchor="middle" fill="var(--text-muted)" fontSize="11">StyleContext</text>

            <rect x="495" y="178" width="95" height="36" rx="5" fill="var(--tag-bg)" stroke="var(--border)" strokeWidth="1" />
            <text x="542" y="200" textAnchor="middle" fill="var(--text-muted)" fontSize="11">Auth (JWT)</text>

            <rect x="605" y="178" width="80" height="36" rx="5" fill="var(--tag-bg)" stroke="var(--border)" strokeWidth="1" />
            <text x="645" y="200" textAnchor="middle" fill="var(--text-muted)" fontSize="11">i18n</text>

            {/* ── Arrow: frontend → backend ── */}
            <line x1="400" y1="230" x2="400" y2="270" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
            <text x="415" y="255" fill="var(--text-muted)" fontSize="10">HTTP / REST</text>

            {/* ── Backend Layer ── */}
            <rect x="140" y="270" width="520" height="80" rx="8" fill="var(--card-bg)" stroke="var(--border)" strokeWidth="1.5" />
            <text x="160" y="295" fill="var(--text-main)" fontSize="13" fontWeight="700">Next.js API Routes</text>
            <text x="420" y="295" fill="var(--text-muted)" fontSize="11">Node.js runtime</text>

            <text x="160" y="320" fill="var(--text-muted)" fontSize="11" fontFamily="monospace">/api/auth</text>
            <text x="280" y="320" fill="var(--text-muted)" fontSize="11" fontFamily="monospace">/api/transfer</text>
            <text x="420" y="320" fill="var(--text-muted)" fontSize="11" fontFamily="monospace">/api/analyze</text>
            <text x="540" y="320" fill="var(--text-muted)" fontSize="11" fontFamily="monospace">/api/users</text>

            {/* ── Arrows: backend → services ── */}
            <line x1="250" y1="350" x2="175" y2="400" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
            <line x1="400" y1="350" x2="400" y2="400" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
            <line x1="550" y1="350" x2="625" y2="400" stroke="var(--text-muted)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

            {/* ── Data / External Services ── */}
            <rect x="90" y="400" width="170" height="65" rx="8" fill="var(--card-bg)" stroke="var(--border)" strokeWidth="1.5" />
            <text x="175" y="427" textAnchor="middle" fill="var(--text-main)" fontSize="13" fontWeight="700">MongoDB</text>
            <text x="175" y="447" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Mongoose · Atomic txns</text>

            <rect x="315" y="400" width="170" height="65" rx="8" fill="var(--card-bg)" stroke="var(--border)" strokeWidth="1.5" />
            <text x="400" y="427" textAnchor="middle" fill="var(--text-main)" fontSize="13" fontWeight="700">Google Gemini</text>
            <text x="400" y="447" textAnchor="middle" fill="var(--text-muted)" fontSize="10">AI accessibility profiles</text>

            <rect x="540" y="400" width="170" height="65" rx="8" fill="var(--card-bg)" stroke="var(--border)" strokeWidth="1.5" />
            <text x="625" y="427" textAnchor="middle" fill="var(--text-main)" fontSize="13" fontWeight="700">MyMemory API</text>
            <text x="625" y="447" textAnchor="middle" fill="var(--text-muted)" fontSize="10">Translation service</text>

            {/* ── Arrowhead marker ── */}
            <defs>
              <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
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
            "Designed and implemented the full-stack transfer flow — from the frontend form through API validation to MongoDB atomic transactions.",
            "Built the AI adaptive accessibility pipeline: user speaks a plain-language request → Gemini returns a structured profile → StyleContext injects CSS variables in real time without a page reload.",
            "Integrated MediaPipe Tasks-Vision for on-device gesture recognition, keeping all camera processing local to the browser for privacy.",
            "Set up JWT-based authentication with httpOnly cookies, bcryptjs hashing, and middleware-level route protection.",
            "Used Claude Code as an agentic coding assistant to accelerate component scaffolding and enforce consistent code quality across the team.",
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--text-muted)', fontFamily: 'monospace', fontSize: '0.85rem', flexShrink: 0, marginTop: '2px' }}>{String(i + 1).padStart(2, '0')}</span>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>{item}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="section-break" />

      {/* ───────── API surface ───────── */}
      <div className="animate-on-scroll">
        <p className="section-label">Backend</p>
        <h2 className="section-title">API Endpoints</h2>
        <div style={{ overflowX: 'auto', border: '1px solid var(--border)', borderRadius: '10px' }}>
          <table className="api-table">
            <thead>
              <tr>
                <th>Method</th>
                <th>Route</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>POST</code></td><td>/api/auth/register</td><td>Create a new account</td></tr>
              <tr><td><code>POST</code></td><td>/api/auth/login</td><td>Authenticate &amp; issue JWT</td></tr>
              <tr><td><code>GET</code></td><td>/api/auth/me</td><td>Return current user info</td></tr>
              <tr><td><code>POST</code></td><td>/api/auth/logout</td><td>Clear auth cookie</td></tr>
              <tr><td><code>POST</code></td><td>/api/transfer</td><td>Execute a P2P transfer</td></tr>
              <tr><td><code>GET</code></td><td>/api/transactions</td><td>Transaction history</td></tr>
              <tr><td><code>GET</code></td><td>/api/users/search</td><td>Search by phone/username</td></tr>
              <tr><td><code>POST</code></td><td>/api/analyze</td><td>Gemini accessibility request</td></tr>
              <tr><td><code>POST</code></td><td>/api/change-password</td><td>Update password</td></tr>
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
            <p>Stateless JWT in httpOnly / sameSite cookies with server-side expiry. Passwords hashed with bcryptjs (10 rounds). All protected routes default to deny.</p>
          </div>
          <div className="info-card">
            <h3>Data at Rest</h3>
            <p>Account balances encrypted via a dedicated utility. Passwords never stored in plaintext. API routes enforce ownership checks.</p>
          </div>
          <div className="info-card">
            <h3>Transfer Integrity</h3>
            <p>Transfers use MongoDB session transactions for atomic, all-or-nothing balance updates with a best-effort fallback for standalone instances.</p>
          </div>
          <div className="info-card">
            <h3>Privacy</h3>
            <p>Gesture recognition runs entirely on-device via MediaPipe. Voice uses the browser&apos;s Web Speech API. No biometric data is stored or transmitted.</p>
          </div>
        </div>
      </div>

      <hr className="section-break" />

      {/* ───────── Links ───────── */}
      <div className="animate-on-scroll" style={{ paddingBottom: '4rem' }}>
        <p className="section-label">Links</p>
        <h2 className="section-title">Source &amp; Docs</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          <a href="https://github.com/br4ndonlo0/iNTUtion" target="_blank" rel="noopener noreferrer" className="inline-link" style={{ fontSize: '0.95rem' }}>GitHub Repository ↗</a>
          <span style={{ color: 'var(--border)' }}>·</span>
          <a href="https://github.com/br4ndonlo0/iNTUtion/blob/main/ARCHITECTURE.md" target="_blank" rel="noopener noreferrer" className="inline-link" style={{ fontSize: '0.95rem' }}>Architecture Doc ↗</a>
          <span style={{ color: 'var(--border)' }}>·</span>
          <a href="https://github.com/br4ndonlo0/iNTUtion/blob/main/USER-GUIDE.md" target="_blank" rel="noopener noreferrer" className="inline-link" style={{ fontSize: '0.95rem' }}>User Guide ↗</a>
          <span style={{ color: 'var(--border)' }}>·</span>
          <a href="https://github.com/br4ndonlo0/iNTUtion/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="inline-link" style={{ fontSize: '0.95rem' }}>Contributing ↗</a>
        </div>
      </div>
    </div>
  );
}
