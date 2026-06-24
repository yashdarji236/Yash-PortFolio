import { useEffect, useRef } from 'react';

function GooglyEye() {
  const eyeRef = useRef(null);
  const pupilRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const eye = eyeRef.current;
      const pupil = pupilRef.current;
      if (!eye || !pupil) return;

      const rect = eye.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;
      const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
      const maxRadius = Math.min(26, rect.width * 0.2);
      const x = Math.cos(angle) * maxRadius;
      const y = Math.sin(angle) * maxRadius;

      pupil.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={eyeRef} className="contact-eye">
      <div ref={pupilRef} className="contact-pupil" />
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="display-text contact-heading">
          <div style={{ overflow: 'hidden' }}>
            <span className="contact-word" style={{ display: 'inline-block' }}>READY TO</span>
          </div>

          <div className="contact-eye-container">
            <GooglyEye />
            <GooglyEye />
          </div>

          <div style={{ overflow: 'hidden' }}>
            <span className="contact-word" style={{ display: 'inline-block' }}>START THE</span>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <span className="contact-word" style={{ display: 'inline-block' }}>PROJECT?</span>
          </div>
        </h2>

        <p className="body-text contact-subtext">
          Open to senior full-time roles & ambitious freelance projects.
        </p>

        <div className="contact-cta-row">
          <a href="mailto:hello@yash.dev" className="contact-btn primary hoverable btn-active">
            SEND A MESSAGE →
          </a>
          <a href="mailto:hello@yash.dev" className="contact-btn secondary hoverable btn-active">
            hello@yash.dev
          </a>
        </div>
      </div>
    </section>
  );
}
