import { useEffect, useState } from 'react';

export default function Footer() {
  const [times, setTimes] = useState({
    mumbai: '--:--:--',
    tokyo: '--:--:--',
    london: '--:--:--',
    paris: '--:--:--',
  });

  useEffect(() => {
    const timeOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    };

    const zones = {
      mumbai: 'Asia/Kolkata',
      tokyo: 'Asia/Tokyo',
      london: 'Europe/London',
      paris: 'Europe/Paris',
    };

    const updateTimes = () => {
      const now = new Date();
      const newTimes = {};
      Object.keys(zones).forEach((key) => {
        try {
          const formatter = new Intl.DateTimeFormat('en-US', {
            ...timeOptions,
            timeZone: zones[key],
          });
          newTimes[key] = formatter.format(now);
        } catch (err) {
          newTimes[key] = '--:--:--';
        }
      });
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="contact">
      <div className="footer-inner-container">

        {/* Dividers & Contact Details */}
        <div className="footer-divider"></div>

        <div className="footer-contact-row">
          <div className="footer-col-left">
            <h3 className="contact-label">New Business Inquiries</h3>
          </div>
          <div className="footer-col-mid">
            <span className="meta-label">Email</span>
          </div>
          <div className="footer-col-right">
            <span className="meta-value">
              <a href="mailto:yashdarji5237@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                yashdarji5237@gmail.com
              </a>
            </span>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* About bio statement */}
        <div className="footer-about-row">
          <div className="footer-col-left">
            <h3 className="contact-label">About</h3>
          </div>
          <div className="footer-col-text">
            <p>Yash is a full-stack engineer and UI developer building innovative digital solutions through AI, Web3, and full-stack development. Focused on creating meaningful impact, he engineers robust backend architectures and designs smooth user experiences that scale.</p>
          </div>
        </div>

        {/* Full width logo */}
        <div className="footer-large-logo-row" style={{ display: 'flex', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '10vw', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.03em', color: 'rgba(255,255,255,0.95)', margin: '40px 0 20px', fontFamily: "var(--font-heading)" }}>
            YASH
          </h2>
        </div>

        {/* Clocks row */}
        <div className="footer-clocks-row">
          {/* Clock 1: Mumbai */}
          <div className="clock-item">
            <div className="clock-header">
              <span className="clock-dot"></span>
              <span className="clock-city">MUMBAI</span>
            </div>
            <div className="clock-time">{times.mumbai}</div>
          </div>

          {/* Clock 2: Tokyo */}
          <div className="clock-item">
            <div className="clock-header">
              <span className="clock-dot"></span>
              <span className="clock-city">TOKYO</span>
            </div>
            <div className="clock-time">{times.tokyo}</div>
          </div>

          {/* Clock 3: London */}
          <div className="clock-item">
            <div className="clock-header">
              <span className="clock-dot"></span>
              <span className="clock-city">LONDON</span>
            </div>
            <div className="clock-time">{times.london}</div>
          </div>

          {/* Clock 4: Paris */}
          <div className="clock-item">
            <div className="clock-header">
              <span className="clock-dot"></span>
              <span className="clock-city">PARIS</span>
            </div>
            <div className="clock-time">{times.paris}</div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Meta links and Copyright */}
        <div className="footer-metadata-row">
          <div className="footer-meta-left">
            <a href="https://www.linkedin.com/in/yash-darji-202447342/" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn</a>
            <a href="https://github.com/yashdarji236" target="_blank" rel="noopener noreferrer" className="linkedin-link" style={{ marginLeft: '25px' }}>GitHub</a>
            <a href="https://x.com/yashdarji182764" target="_blank" rel="noopener noreferrer" className="linkedin-link" style={{ marginLeft: '25px' }}>Twitter</a>

          </div>

        </div>

      </div>
    </footer>
  );
}
