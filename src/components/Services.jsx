import { useRef, useState, useEffect } from 'react';

export default function Services() {
  const containerRef = useRef(null);
  const [expandedIdx, setExpandedIdx] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const servicesData = [
    {
      num: '01',
      name: 'Web Applications',
      tags: ['React', 'Next.js', 'TypeScript'],
      desc: 'End-to-end web apps architected for scale, speed, and real users.',
    },
    {
      num: '02',
      name: 'Backend Systems',
      tags: ['Node.js', 'PostgreSQL', 'GraphQL'],
      desc: 'Robust APIs, databases, and server logic that never go down.',
    },
    {
      num: '03',
      name: 'UI / UX Design & Dev',
      tags: ['Figma', 'GSAP', 'CSS'],
      desc: 'Interfaces so polished, users notice — and remember — every detail.',
    },
    {
      num: '04',
      name: 'SaaS Products',
      tags: ['AWS', 'Stripe', 'Auth'],
      desc: 'Full product builds from MVP to production-grade platform.',
    },
    {
      num: '05',
      name: 'DevOps & Performance',
      tags: ['Docker', 'CI/CD', 'Vercel'],
      desc: 'Deploy faster, scale cheaper, and ship with total confidence.',
    },
    {
      num: '06',
      name: 'Web3 Development',
      tags: ['Solidity', 'Ethers.js', 'MetaMask'],
      desc: 'Decentralized applications, secure smart contracts, and seamless Web3 wallet integrations.',
    },
  ];

  const handleRowClick = (idx) => {
    if (isMobile) {
      setExpandedIdx(expandedIdx === idx ? null : idx);
    }
  };

  const handleRowHover = (idx, isEntering) => {
    if (!isMobile) {
      setExpandedIdx(isEntering ? idx : null);
    }
  };

  return (
    <section id="services" className="services-section" ref={containerRef}>
      <span className="eyebrow" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>SERVICES</span>
      <div style={{ overflow: 'hidden', marginBottom: 48 }}>
        <h2 className="display-text services-title-word" style={{ fontSize: 'var(--h1)' }}>
          WHAT I BUILD.
        </h2>
      </div>

      <div className="services-list">
        {servicesData.map((service, idx) => (
          <div 
            key={service.num} 
            className={`service-row hoverable ${expandedIdx === idx ? 'expanded' : ''}`}
            onMouseEnter={() => handleRowHover(idx, true)}
            onMouseLeave={() => handleRowHover(idx, false)}
            onClick={() => handleRowClick(idx)}
            style={{ cursor: isMobile ? 'pointer' : 'default' }}
          >
            <div className="service-num">{service.num}</div>
            <div className="service-name">{service.name}</div>
            <div className="service-tags">
              {service.tags.map((tag) => (
                <span key={tag} className="service-tag">{tag}</span>
              ))}
            </div>
            <div className="service-arrow" style={{ transform: expandedIdx === idx ? 'rotate(45deg)' : 'none' }}>→</div>
            {expandedIdx === idx && <div className="service-desc">{service.desc}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
