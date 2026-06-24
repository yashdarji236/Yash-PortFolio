export default function Footer() {
  const handleLinkClick = (id) => {
    if (id === 'top') {
      if (window.lenisInstance) {
        window.lenisInstance.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    const element = document.getElementById(id);
    if (element && window.lenisInstance) {
      window.lenisInstance.scrollTo(element);
    } else if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    ['top', 'Home'],
    ['work', 'Work'],
    ['about', 'About'],
    ['skills', 'Skills'],
    ['contact', 'Contact'],
  ];

  return (
    <footer className="footer-section">
      <div className="footer-grid">
        <div>
          <button
            className="hoverable"
            style={{
              fontSize: 20,
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: 12,
              cursor: 'pointer',
              display: 'inline-block',
            }}
            onClick={() => handleLinkClick('top')}
          >
            YASH.
          </button>
          <p style={{ fontSize: 14, color: 'rgba(255, 255, 255, 0.6)', marginTop: 12 }}>
            Senior Full-Stack Engineer
          </p>
          <p style={{ fontSize: 12, color: 'rgba(255, 255, 255, 0.4)', marginTop: 32 }}>
            © 2025 Yash. All rights reserved.
          </p>
        </div>

        <div>
          <div className="footer-col-label">S:</div>
          <a href="https://github.com/yash" target="_blank" rel="noopener noreferrer" className="footer-link hoverable">GitHub</a>
          <a href="https://linkedin.com/in/yash" target="_blank" rel="noopener noreferrer" className="footer-link hoverable">LinkedIn</a>
          <a href="https://twitter.com/yash" target="_blank" rel="noopener noreferrer" className="footer-link hoverable">Twitter</a>
          <a href="https://dribbble.com/yash" target="_blank" rel="noopener noreferrer" className="footer-link hoverable">Dribbble</a>
        </div>

        <div>
          <div className="footer-col-label">E:</div>
          <a href="mailto:hello@yash.dev" className="footer-link hoverable">hello@yash.dev</a>
        </div>

        <div>
          <div className="footer-col-label">M:</div>
          {navLinks.map(([id, label]) => (
            <a
              href={id === 'top' ? '#hero' : `#${id}`}
              key={id}
              className="footer-link hoverable"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(id);
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>Designed & developed with obsession. Mumbai, India.</p>
        <p>Available for work ✦ 2025</p>
      </div>
    </footer>
  );
}
