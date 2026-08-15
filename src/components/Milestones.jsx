import { useEffect, useRef } from 'react';

const milestonesData = [
  {
    num: '10',
    label: 'Projects Built',
    slideDir: 'left-slide',
    borderClass: 'border-top-bottom',
  },
  {
    num: '5',
    label: 'AI Integrations',
    slideDir: 'right-slide',
    borderClass: '',
  },
  {
    num: '0',
    label: ' Excuses, 100% Delivery',
    slideDir: 'left-slide',
    borderClass: 'border-top-bottom',
  },
  {
    num: '100',
    label: 'Code Obsession %',
    slideDir: 'right-slide',
    borderClass: '',
  },
];

export default function Milestones() {
  const rowRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      rowRefs.current.forEach((row) => {
        if (!row) return;
        const rect = row.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom > 0) {
          const offset = (windowHeight - rect.top) * 0.25;
          row.style.setProperty('--scroll-offset', `${offset}px`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger initially
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="milestone-rows-container">
      {milestonesData.map((m, idx) => (
        <div
          key={idx}
          ref={(el) => (rowRefs.current[idx] = el)}
          className={`milestone-row ${m.borderClass}`}
          style={{ backgroundColor: '#FF3401' }}
        >
          <div className="bayer-dither-overlay"></div>
          <div className={`milestone-parallax-wrapper ${m.slideDir}`}>
            <div className="milestone-card">
              <span className="milestone-number">
                {m.num}
                {m.label.includes('%') ? <span className="sup">%</span> : <span className="sup">+</span>}
              </span>
              <span className="milestone-label">{m.label}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
