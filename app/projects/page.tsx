"use client";

import Link from "next/link";
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
          <h1 className="hero-title">SAIV — Secure Attendance & Identity Verification</h1>
          <p className="hero-subtitle" style={{ marginBottom: 0 }}>A production-grade biometric attendance system built for the NTU SC3099 Capstone Project.</p>
        </div>
        <div className="flex justify-center md:justify-end">
          <video 
            src="/capstone%20liveness%20(1).mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full max-w-xs md:max-w-sm rounded-2xl shadow-lg border border-[var(--border)]"
          />
        </div>
      </div>

      <div className="animate-on-scroll">
        <h2 className="section-heading">Project Overview</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          SAIV is a six-module microservice system designed for secure, unattended student attendance verification. 
          It combines <strong>biometric matching</strong>, <strong>passive liveness detection</strong>, <strong>GPS geofencing</strong>, <strong>device fingerprinting</strong>, 
          and a <strong>weighted risk-scoring engine</strong> to detect and flag spoofed or fraudulent check-ins in real time.
        </p>
      </div>

      <div className="animate-on-scroll">
        <h2 className="section-heading">Key Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">👤</div>
            <h3 className="feature-title">Biometric Check-in</h3>
            <p className="feature-desc">Secure face enrollment and real-time face matching ensuring the physical presence of the authenticated student.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3 className="feature-title">Liveness Detection</h3>
            <p className="feature-desc">Passive anti-spoofing challenge to prevent presentation attacks using printed photos or digital screens.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📍</div>
            <h3 className="feature-title">Geofencing</h3>
            <p className="feature-desc">GPS-based location verification strictly bound to the geographical boundaries of each specific session.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3 className="feature-title">Device Fingerprinting</h3>
            <p className="feature-desc">Generation of SHA-256 signatures based on browser hardware signals to prevent multi-device spoofing.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚖️</div>
            <h3 className="feature-title">Risk Scoring</h3>
            <p className="feature-desc">A multi-signal weighted risk assessment engine incorporating liveness, face match, device, network, and geolocation data.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔐</div>
            <h3 className="feature-title">Security & RBAC</h3>
            <p className="feature-desc">JWT authentication (HS256) with 1-hour access and 7-day refresh tokens, mapped to Student, TA, Instructor, and Admin roles.</p>
          </div>
        </div>
      </div>

      <div className="animate-on-scroll">
        <h2 className="section-heading">System Architecture</h2>
        <div className="arch-box">
{`Student/Instructor Browser
        │
        ▼
Module 1: Frontend PWA (Next.js/TypeScript)   :3000
Module 4: Dashboard (Next.js/TypeScript)      :8501
        │
        ▼ REST API  (base: http://localhost:8000/api/v1)
Module 2: Backend API (FastAPI/Python)        :8000
        │
        ▼ Internal only — never called directly from frontend
Module 3: Face Recognition (FastAPI/Python)   :8001
        │
        ▼
PostgreSQL :5432  |  Redis :6379  |  Prometheus :9090  |  Grafana :3001`}
        </div>
        <div style={{ marginTop: '2rem', display: 'grid', gap: '1rem' }}>
          <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <strong style={{ color: 'var(--text-main)' }}>Module 1 (Frontend):</strong> Next.js, TypeScript, Tailwind CSS — Student/instructor PWA handling camera, liveness UI, and geolocation.
          </div>
          <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <strong style={{ color: 'var(--text-main)' }}>Module 2 (Backend API):</strong> FastAPI, SQLAlchemy, PostgreSQL, Redis — Handles auth, RBAC, check-ins, and audit logs.
          </div>
          <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <strong style={{ color: 'var(--text-main)' }}>Module 3 (Face Recognition):</strong> FastAPI, MediaPipe, FaceNet, PyTorch — Core AI service for face enrollment, verification, and risk scoring.
          </div>
          <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <strong style={{ color: 'var(--text-main)' }}>Module 4 (Dashboard):</strong> Next.js, Tailwind CSS, Chart.js — Instructor dashboard for session management and statistical export.
          </div>
        </div>
      </div>
      
      <div style={{ paddingBottom: '4rem' }}></div>
    </div>
  );
}
