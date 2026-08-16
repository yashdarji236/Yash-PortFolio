import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [istTime, setIstTime] = useState('--:--:--');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const updateTime = () => {
      try {
        const formatter = new Intl.DateTimeFormat('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
          timeZone: 'Asia/Kolkata',
        });
        setIstTime(formatter.format(new Date()));
      } catch (err) {
        setIstTime('--:--:--');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);

    const target = document.getElementById(id);
    if (target) {
      if (window.lenisInstance) {
        window.lenisInstance.scrollTo(target);
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Navigation Header */}
      <header id="top" className={scrolled ? 'scrolled' : ''}>
        <div className="header-container">
          <a href="#home" id="logo" style={{ display: 'flex', alignItems: 'center', fontSize: '24px', fontWeight: '900', letterSpacing: '-0.03em', color: 'var(--color-white)', textDecoration: 'none' }} onClick={(e) => handleLinkClick(e, 'home')}>
            YASH.
          </a>

          <div className="nav-actions">
            <a href="#contact" className="connect-btn connect-header-btn" onClick={(e) => handleLinkClick(e, 'contact')}>
              <span className="btn-text" data-text="Connect With Me">Connect With Me</span>
            </a>

            <a href="https://drive.google.com/file/d/1rkCooRrWwFSRjyko1Yc7YeKrkgL10pBS/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="connect-btn resume-header-btn">
              <span className="btn-text" data-text="Resume">Resume</span>
            </a>

            <button
              className={`menu-toggle ${menuOpen ? 'menu-open' : ''}`}
              aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={menuOpen}
              aria-controls="slide-out-menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="burger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Navigation Drawer Overlay */}
      <div
        className={`slide-out-overlay ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Slide-out Navigation Drawer */}
      <div
        id="slide-out-menu"
        className={menuOpen ? 'active' : ''}
        aria-label="Off Canvas Menu"
        aria-modal="true"
        role="dialog"
      >
        <button
          className="menu-close"
          aria-label="Close Menu"
          onClick={() => setMenuOpen(false)}
        >
          <span className="close-lines">
            <span className="close-line close-line1"></span>
            <span className="close-line close-line2"></span>
          </span>
        </button>

        <div className="menu-inner-wrap">
          {/* Column 1: Info and Contact Metadata */}
          <div className="menu-info-panel">
            <div className="info-section">
              <span className="info-heading">Availability</span>
              <div className="availability-status">
                <span className="status-dot pulsing"></span>
                <span className="status-text">Available for Opportunities</span>
              </div>
            </div>

            <div className="info-section">
              <span className="info-heading">Say Hello</span>
              <a href="mailto:yashdarji5237@gmail.com" className="info-link email-link">
                yashdarji5237@gmail.com
              </a>
            </div>

            <div className="info-section">
              <span className="info-heading">Timezone</span>
              <div className="timezone-clock">
                <span className="timezone-label">Gujarat, IN</span>
                <span className="timezone-time">{istTime}</span>
              </div>
            </div>

            <div className="info-section">
              <span className="info-heading">Socials</span>
              <ul className="info-social-links">
                <li>
                  <a href="https://www.linkedin.com/in/yash-darji-202447342/" target="_blank" rel="noopener noreferrer" className="social-link-item">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/yashdarji236" target="_blank" rel="noopener noreferrer" className="social-link-item">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://x.com/yashdarji182764" target="_blank" rel="noopener noreferrer" className="social-link-item">
                    Twitter / X
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <nav className="off-canvas-nav" aria-label="Drawer Menu">
            <ul className="menu-links">
              <li style={{ '--index': 1 }}><a href="#work" onClick={(e) => handleLinkClick(e, 'work')}><span className="link-num">01</span><span className="link-text">Work</span></a></li>
              <li style={{ '--index': 2 }}><a href="#expertise" onClick={(e) => handleLinkClick(e, 'expertise')}><span className="link-num">02</span><span className="link-text">Expertise</span></a></li>
              <li style={{ '--index': 3 }}><a href="#experience" onClick={(e) => handleLinkClick(e, 'experience')}><span className="link-num">03</span><span className="link-text">Experience</span></a></li>
              <li style={{ '--index': 4 }}><a href="#certificates" onClick={(e) => handleLinkClick(e, 'certificates')}><span className="link-num">04</span><span className="link-text">Certificates</span></a></li>
              <li style={{ '--index': 5 }}><a href="#awards" onClick={(e) => handleLinkClick(e, 'awards')}><span className="link-num">05</span><span className="link-text">Achievements</span></a></li>
              <li style={{ '--index': 6 }}><a href="#about" onClick={(e) => handleLinkClick(e, 'about')}><span className="link-num">06</span><span className="link-text">About</span></a></li>
              <li style={{ '--index': 7 }}><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}><span className="link-num">07</span><span className="link-text">Connect</span></a></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
