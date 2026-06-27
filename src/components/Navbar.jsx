import { useRef, useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const navRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 80);

      if (currentScrollY > 80) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down
          setNavHidden(true);
        } else {
          // Scrolling up
          setNavHidden(false);
        }
      } else {
        setNavHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element && window.lenisInstance) {
      window.lenisInstance.scrollTo(element);
    } else if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    ['work', 'Work'],
    ['about', 'About'],
    ['skills', 'Skills'],
    ['contact', 'Contact'],
  ];

  return (
    <>
      <nav ref={navRef} className={`navbar ${scrolled ? 'scrolled' : ''} ${navHidden ? 'nav-hidden' : ''}`}>
        <div className="nav-anim-item" style={{ overflow: 'hidden' }}>
          <a
            href="#hero"
            className="hoverable"
            style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-0.02em' }}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('hero');
            }}
          >
            YASH.
          </a>
        </div>

        <ul className="nav-links">
          {navLinks.map(([id, label]) => (
            <li className="nav-anim-item" key={id}>
              <a
                href={`#${id}`}
                className="hoverable"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(id);
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-right nav-anim-item" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button className="nav-cta hoverable btn-active" onClick={() => handleLinkClick('contact')}>
            HIRE ME ↗
          </button>

          <button className="nav-hamburger hoverable" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </nav>

      <div className={`nav-overlay ${menuOpen ? 'open' : ''}`}>
        <button className="nav-overlay-close hoverable" onClick={() => setMenuOpen(false)} aria-label="Close menu">
          ×
        </button>
        <div className="nav-overlay-links">
          {navLinks.map(([id, label]) => (
            <a
              href={`#${id}`}
              key={id}
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
    </>
  );
}
