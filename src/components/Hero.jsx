export default function Hero({ startAnimation }) {
  return (
    <section id="home">
      <div className="hero-bg-media">
        <video autoPlay loop muted playsInline preload="metadata" className="hero-video" aria-hidden="true">
          <source src="/robot.mp4" type="video/mp4" />
        </video>
        <img
          src="/image.png"
          alt="Yash Darji - Full Stack Developer Portfolio Hero"
          className="hero-img-fallback"
          width="1920"
          height="1080"
          loading="eager"
        />
        <div className="hero-gradient-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-headings">
          <div className="split-line-wrapper">
            <span
              key={startAnimation ? 'sub-anim' : 'sub-init'}
              className="split-line text-subtitle"
              style={!startAnimation ? { opacity: 0, animation: 'none' } : undefined}
            >
              AI Full Stack Engineer
            </span>
          </div>
          <div className="split-line-wrapper">
            <h1
              key={startAnimation ? 'title-anim' : 'title-init'}
              className="split-line text-title"
              style={{
                fontSize: '8vw',
                ...(!startAnimation ? { opacity: 0, animation: 'none' } : {})
              }}
            >
              Yash
            </h1>
          </div>
        </div>

        <div className="hero-footer-metadata">
          <div className="meta-item align-left">
            <p>AI Engineer • Full-Stack Developer • Founder in Progress</p>
          </div>
          <div className="meta-item align-center">
            <p>Specializing in AI &amp; Full-Stack Development</p>
          </div>
        </div>
      </div>
    </section>
  );
}