import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
            <a href="#contact" className="connect-btn" onClick={(e) => handleLinkClick(e, 'contact')}>
              <span className="btn-text" data-text="Connect With Me">Connect With Me</span>
            </a>

            <button
              className="menu-toggle"
              aria-label="Toggle Menu"
              aria-expanded={menuOpen}
              aria-controls="slide-out-menu"
              onClick={() => setMenuOpen(true)}
            >
              <span className="burger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Navigation Drawer */}
      <div
        id="slide-out-menu"
        className={menuOpen ? 'active' : ''}
        aria-label="Off Canvas Menu"
        aria-modal="true"
        role="dialog"
      >
        <div className="menu-inner-wrap">
          <button
            className="menu-close"
            aria-label="Close Menu"
            onClick={() => setMenuOpen(false)}
          >
            <span className="close-lines">
              <span className="close-line line1"></span>
              <span className="close-line line2"></span>
            </span>
          </button>

          <nav className="off-canvas-nav" aria-label="Drawer Menu">
            <ul className="menu-links">
              <li><a href="#work" onClick={(e) => handleLinkClick(e, 'work')}>Work</a></li>
              <li><a href="#expertise" onClick={(e) => handleLinkClick(e, 'expertise')}>Expertise</a></li>
              <li><a href="#experience" onClick={(e) => handleLinkClick(e, 'experience')}>Experience</a></li>
              <li><a href="#certificates" onClick={(e) => handleLinkClick(e, 'certificates')}>Certificates</a></li>
              <li><a href="#awards" onClick={(e) => handleLinkClick(e, 'awards')}>Achievements</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Connect</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
