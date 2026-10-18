import "../index.css"
export default function About() {
  return (
    <section id="about">
      <div className="about-background-overlay"></div>

      <div className="about-layout">
        <div className="about-title-block">
          <h2 className="about-giant-heading">Full-Stack Engineer</h2>
        </div>

        <div className="about-media-block">
          <div className="about-portrait-wrap">
            <img
              src="/person.png"
              alt="Yash Darji - Full Stack Developer Portrait"
              className="about-portrait"
              width="600"
              height="800"
              loading="lazy"
            />
          </div>
        </div>

        <div className="about-text-block">
          <div className="about-introduction">
            <p>Hi, I&apos;m Yash Darji. I&apos;m a full stack developer building impactful digital solutions with AI, Web3, and modern web architectures.</p>
          </div>

          <div className="about-story-rich text-opacity">
            <p>My journey started with simple HTML and CSS, but JavaScript showed me how ideas could become interactive experiences. As a dedicated full stack developer, I&apos;ve been constantly learning and building across AI, Web3, and scalable web applications.</p>
            <p>I enjoy turning complex ideas into clean, user-focused products—from responsive interfaces to scalable backend systems. Every project is an opportunity to learn, improve, and build technology that creates real impact.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
