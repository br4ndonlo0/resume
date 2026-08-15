"use client";

import Link from "next/link";
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
        .hero-section { margin-bottom: 4rem; }
        .hero-title { font-family: var(--font-space-grotesk); font-size: clamp(2.5rem, 5vw, 4rem); letter-spacing: -1px; line-height: 1.1; margin-bottom: 1rem; color: var(--text-main); }
        .hero-subtitle { font-size: 1.25rem; color: var(--text-muted); margin-bottom: 2rem; }
        .tech-stack { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 2rem; }
        .tech-badge { background: var(--card-bg); border: 1px solid var(--border); color: var(--text-main); padding: 0.5rem 1rem; border-radius: 50px; font-size: 0.9rem; font-weight: 500; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
        
        .section-heading { font-family: var(--font-space-grotesk); font-size: 2rem; color: var(--text-main); margin: 3rem 0 1.5rem; border-bottom: 1px solid var(--border); padding-bottom: 0.5rem; }
        
        .feature-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
        @media (min-width: 768px) { .feature-grid { grid-template-columns: 1fr 1fr; } }
        
        .feature-card { background: var(--card-bg); border: 1px solid var(--border); padding: 2rem; border-radius: 12px; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .feature-card:hover { transform: translateY(-3px); box-shadow: var(--card-hover-shadow); }
        .feature-icon { font-size: 2rem; margin-bottom: 1rem; }
        .feature-title { font-size: 1.25rem; font-weight: 600; color: var(--text-main); margin-bottom: 0.75rem; }
        .feature-desc { color: var(--text-muted); font-size: 1rem; line-height: 1.6; }

        .arch-box { background: var(--card-bg); border: 1px solid var(--border); padding: 2rem; border-radius: 12px; font-family: monospace; color: var(--text-muted); white-space: pre-wrap; overflow-x: auto; font-size: 0.9rem; line-height: 1.5; }
        
        .animate-on-scroll { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .animate-on-scroll.visible { opacity: 1; transform: translateY(0); }
      `}} />



      <div className="hero-section animate-on-scroll grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="hero-title">Bank Buddy — Accessible Fintech</h1>
          <p className="hero-subtitle" style={{ marginBottom: 0 }}>An accessible fintech application designed with inclusivity at its core, enabling secure P2P transfers and adaptive interfaces.</p>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-xs md:max-w-sm rounded-2xl shadow-lg border border-[var(--border)] bg-[var(--card-bg)] aspect-video flex items-center justify-center text-[var(--text-muted)] p-6 text-center">
            [Project Media Placeholder]
          </div>
        </div>
      </div>

      <div className="animate-on-scroll">
        <h2 className="section-heading">Project Overview</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          Bank Buddy is an accessible financial management application designed with inclusivity at its core. 
          Traditional banking interfaces often exclude users with visual, hearing, mobility, and cognitive disabilities. 
          Bank Buddy is built to serve everyone, regardless of ability, featuring <strong>Voice-First Interfaces</strong>, 
          <strong>Hand Gesture Recognition</strong>, <strong>AI Adaptive Accessibility</strong> powered by Google Gemini, 
          and <strong>13-language real-time translation</strong>.
        </p>
      </div>

      <div className="animate-on-scroll">
        <h2 className="section-heading">Key Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🎙️</div>
            <h3 className="feature-title">Voice-First Interfaces</h3>
            <p className="feature-desc">Voice control for hands-free operation and navigation for transaction-heavy tasks.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🖐️</div>
            <h3 className="feature-title">Hand Gesture Recognition</h3>
            <p className="feature-desc">Control the app with hand movements powered by on-device MediaPipe for users with mobility impairments.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🧠</div>
            <h3 className="feature-title">AI Adaptive Accessibility</h3>
            <p className="feature-desc">Natural language UI customization powered by Google Gemini to personalize the experience instantly.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3 className="feature-title">Multilingual Support</h3>
            <p className="feature-desc">Dynamic real-time translation supporting 13 languages to bring financial services to a broader audience.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💸</div>
            <h3 className="feature-title">Secure P2P Transfers</h3>
            <p className="feature-desc">Real-time peer-to-peer transfers with atomic operations ensuring data integrity via MongoDB.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔐</div>
            <h3 className="feature-title">Security-First</h3>
            <p className="feature-desc">JWT authentication, bcryptjs password hashing, route protection, and balance encryption at rest.</p>
          </div>
        </div>
      </div>

      <div className="animate-on-scroll">
        <h2 className="section-heading">System Architecture</h2>
        <div className="arch-box">
{`Browser / Mobile
        │
   ┌────┼─────────┬───────────────┬─────────────┐
   ▼    ▼         ▼               ▼             ▼
  Web  MediaPipe Translation    Next.js      Google
Speech (Gestures)  Cache        Frontend     Gemini
   │    │         │               │             │
   └────┴─────────┴───────────────┼─────────────┘
                                  │ HTTP
                                  ▼
                     Next.js API Routes (Backend)
                       /api/auth  /api/transfer
                                  │
                                  ▼
                               MongoDB`}
        </div>
        <div style={{ marginTop: '2rem', display: 'grid', gap: '1rem' }}>
          <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <strong style={{ color: 'var(--text-main)' }}>Frontend (Next.js 16.1):</strong> React 19, TypeScript, TailwindCSS. Handles Voice Context, Gesture Context, and Adaptive UI processing locally.
          </div>
          <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <strong style={{ color: 'var(--text-main)' }}>Backend API (Next.js Routes):</strong> Node.js runtime handling JWT authentication, secure transactions, and routing to AI APIs.
          </div>
          <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <strong style={{ color: 'var(--text-main)' }}>AI & Accessibility:</strong> Google Gemini API for parsing natural language accessibility requests, and on-device MediaPipe for gesture tracking.
          </div>
          <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <strong style={{ color: 'var(--text-main)' }}>Database (MongoDB):</strong> Reliable storage with Mongoose handling atomic transactions for secure peer-to-peer money transfers.
          </div>
        </div>
      </div>
      
      <div style={{ paddingBottom: '4rem' }}></div>
    </div>
  );
}
