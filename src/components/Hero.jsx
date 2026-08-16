export default function Hero({ startAnimation }) {
  return (
    <section id="home">
      <div className="hero-bg-media">
        <video autoPlay loop muted playsInline preload="auto" className="hero-video">
          <source src="/robot.mp4" type="video/mp4" />
        </video>
        <img src="/hero.webp" alt="" className="hero-img-fallback" />
        <div className="hero-gradient-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-headings">
          <div className="split-line-wrapper">
            {startAnimation && (
              <span className="split-line text-subtitle">AI Powered full stack developer &amp; UI Developer</span>
            )}
          </div>
          <div className="split-line-wrapper">
            {startAnimation && (
              <h1 className="split-line text-title" style={{ fontSize: '8vw' }}>Yash</h1>
            )}
          </div>
        </div>

        <div className="hero-footer-metadata">
          <div className="meta-item align-left">
            <p>AI Engineer • Full-Stack Developer • Founder in Progress
            </p>
          </div>
          <div className="meta-item align-center">
            <p>Specializing in AI, Full-Stack</p>
          </div>

        </div>
      </div>
    </section>
  );
}