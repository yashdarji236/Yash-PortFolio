export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-grid">
        <div className="about-left">
          <span className="eyebrow" style={{ color: 'rgba(26, 26, 26, 0.6)' }}>ABOUT ME</span>

          <div className="about-reveal-block" style={{ marginBottom: 24 }}>
            <h2
              className="display-text"
              style={{
                fontSize: 'clamp(20px, 2.5vw, 28px)',
                fontWeight: 500,
                lineHeight: 1.45,
                textTransform: 'none',
                letterSpacing: 0,
                maxWidth: 580,
              }}
            >
             I’m a developer, AI builder, and aspiring entrepreneur focused on creating intelligent digital products. My work spans AI, full-stack development, data science, and emerging technologies, where I transform ambitious ideas into impactful solutions.

Driven by curiosity and innovation, I believe technology should solve meaningful problems, create value, and shape the future. Every project I build is a step toward that vision.

            </h2>
          </div>

          <div className="about-reveal-block">
            <p className="body-text" style={{ color: '#333333', lineHeight: 1.7 }}>
              With 5+ years of professional experience, I've shipped SaaS platforms, led frontend teams, and built systems used by thousands of users daily. I work best when design and engineering are treated as one discipline.
            </p>
          </div>
        </div>

        <div className="about-right">
          {[
            ['AI & Automation', 'Specialization'],
            ['Full-Stack Development', 'Core Expertise'],
            ['Continuous Learning', 'Growth Mindset'],
          ].map(([number, label]) => (
            <div className="about-stat-card hoverable" key={label}>
              <div className="about-stat-number">{number}</div>
              <div className="about-stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
