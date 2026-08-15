import { useState, useRef } from 'react';

const certificates = [
  {
    title: 'Explore AI Basics and Generative AI',
    issuer: 'Microsoft',
    date: 'Issued May 2026',
    credentialUrl: 'https://drive.google.com/file/d/1GKOdV2VJVv6pkB-cpBBJO5Fpt2dWo2mI/view?usp=drive_link',
    skills: ['Generative AI', 'LLMs', 'Prompt Engineering', 'AI Foundations'],
    description: 'Validation of expertise in foundational artificial intelligence concepts, large language models, and practical generative AI workflows.'
  },
  {
    title: 'Python Coder',
    issuer: 'Kaggle',
    date: 'Issued 2025',
    credentialUrl: 'https://drive.google.com/file/d/1Eog0zn6w4XllwRikj8Dnr5_x5Vfk5s8f/view?usp=drive_link',
    skills: ['Python', 'Algorithms', 'Data Structures', 'Scripting'],
    description: 'Verified Kaggle credential demonstrating proficiency in writing optimized Python code, algorithm design, and core software structures.'
  },
  {
    title: 'TCS iON Career Edge – Young Professional',
    issuer: 'Tata Consultancy Services',
    date: 'Issued Jan 2025',
    credentialUrl: 'https://drive.google.com/file/d/1pWA_d98UkjoeDqG1uMACE6P-5ZfV_ian/view?usp=drive_link',
    skills: ['IT Foundations', 'Accounting', 'Communication', 'AI Overview'],
    description: 'Comprehensive business and technology training program covering enterprise communication, essential accounting, and fundamental AI systems.'
  }
];

export default function Clients() {
  const [activeIdx, setActiveIdx] = useState(0); // Open the first certificate by default
  const contentRefs = useRef([]);

  const toggleAccordion = (idx) => {
    if (activeIdx === idx) {
      setActiveIdx(null);
    } else {
      setActiveIdx(idx);
    }
  };

  const handleCtaClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      if (window.lenisInstance) {
        window.lenisInstance.scrollTo(contactSection);
      } else {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="certificates">
      <div className="certificates-layout-grid">
        <div className="left-sticky-header">
          <div className="sticky-wrapper">
            <h2 className="section-heading">Certifications</h2>
            <p className="section-subheading">Validated credentials from industry-leading platforms.</p>

            <a href="#contact" className="certificates-cta" onClick={handleCtaClick}>
              <span className="cta-text">Connect with me</span>
              <span className="cta-circle-arrow">
                <svg className="cta-arrow" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>

        <div className="right-accordion-col">
          <div className="accordion certificates-accordion">
            {certificates.map((cert, idx) => {
              const isActive = activeIdx === idx;
              const currentHeight = isActive && contentRefs.current[idx]
                ? `${contentRefs.current[idx].scrollHeight}px`
                : '0px';

              return (
                <div key={idx} className={`accordion-item ${isActive ? 'active' : ''}`}>
                  <button
                    className="accordion-header"
                    aria-expanded={isActive}
                    onClick={() => toggleAccordion(idx)}
                  >
                    <span className="category-title" style={{ fontSize: '1.4rem' }}>
                      {cert.title} · <span style={{ opacity: 0.6, fontSize: '1.1rem', textTransform: 'none' }}>{cert.issuer}</span>
                    </span>
                    <span className="icon-circle">
                      <span className="icon-line hor"></span>
                      <span className="icon-line vert"></span>
                    </span>
                  </button>
                  <div
                    className="accordion-content"
                    ref={(el) => (contentRefs.current[idx] = el)}
                    style={{ maxHeight: currentHeight }}
                  >
                    <div className="accordion-content-inner" style={{ padding: '20px 0 40px' }}>
                      <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: 'var(--color-text-dark)', marginBottom: '15px' }}>
                        {cert.description}
                      </p>

                      <div className="certificate-tags">
                        {cert.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="cert-tag">{skill}</span>
                        ))}
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px', marginTop: '20px' }}>
                        <span style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', fontWeight: '600' }}>
                          {cert.date}
                        </span>

                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="verify-btn"
                        >
                          Verify Certificate
                          <svg className="btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
