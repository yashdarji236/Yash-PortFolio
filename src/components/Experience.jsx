import { useState, useRef } from 'react';

const experiences = [
  {
    company: 'Optimal Telemedia',
    role: 'Full-Stack & AI Engineer',
    locationDate: '2026 – Present',
    desc: 'Developed a CRM application using the MERN stack, building responsive interfaces, REST APIs, and database-driven features for efficient customer management.',
    bullets: [
      'Developed a CRM application using the MERN stack (MongoDB, Express.js, React, Node.js).',
      'Built responsive and user-friendly interfaces with React.',
      'Designed and integrated RESTful APIs for seamless data management.',
      'Implemented CRUD operations and database functionality with MongoDB.',
      'Collaborated to deliver features that improved customer management workflows.'
    ],
  },
  {
    company: 'Arrow Networks',
    role: 'Frontend Developer',
    locationDate: '2026 - Present',
    desc: 'Redesigned and enhanced the production website with a focus on modern UI, responsive design, performance, and user experience.',
    bullets: [
      'Built reusable and scalable UI components to improve development efficiency and maintainability.',
      'Implemented modern animations and interactive experiences to enhance user engagement.',
      'Optimized frontend performance, responsiveness, and cross-device compatibility.',
      'Collaborated with the team to translate business requirements and designs into functional web experiences.',
      'Improved website usability and visual consistency across key sections of the production platform.'
    ],
  }
];

export default function Experience() {
  const [activeIdx, setActiveIdx] = useState(null);
  const contentRefs = useRef([]);

  const toggleAccordion = (idx) => {
    if (activeIdx === idx) {
      setActiveIdx(null);
    } else {
      setActiveIdx(idx);
    }
  };

  return (
    <section id="experience">
      <div className="experience-header-grid">
        <div className="header-left">

          <h2 className="section-heading">My Experience</h2>
        </div>
        <div className="header-right">
          <h3 className="experience-main-text">2+ years of hands on experience in AI and full-stack development.</h3>
        </div>
      </div>

      <div className="accordion experience-accordion">
        {experiences.map((exp, idx) => {
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
                <span className="company-name">{exp.company}</span>
                <span className="icon-wrap">
                  <span className="icon-line hor"></span>
                  <span className="icon-line vert"></span>
                </span>
              </button>
              <div
                className="accordion-content"
                ref={(el) => (contentRefs.current[idx] = el)}
                style={{ maxHeight: currentHeight }}
              >
                <div className="accordion-content-inner">
                  <div className="content-row-meta">
                    <span className="role-badge">{exp.role}</span>
                    <span className="role-location-date">{exp.locationDate}</span>
                  </div>
                  <div className="content-row-body">
                    <div className="desc-col">
                      <p>{exp.desc}</p>
                    </div>
                    <div className="bullets-col">
                      <ul className="fancy-bullet-list">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
