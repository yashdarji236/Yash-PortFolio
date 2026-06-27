export default function Projects() {
  const projectsData = [
    {
      num: '01',
      title: 'FINTRACK',
      desc: 'Personal finance tracker & budgeting SaaS',
      categories: ['Finance', 'SaaS'],
      tech: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
      bg: '#E6FF2B',
      theme: 'light',
      sizeClass: 'card-large',
    },
    {
      num: '02',
      title: 'DEVHUB',
      desc: 'Real-time developer collaboration platform',
      categories: ['Productivity', 'Real-time'],
      tech: ['Next.js', 'Prisma', 'WebSockets'],
      bg: '#0B4650',
      theme: 'dark',
      sizeClass: 'card-small',
    },
    {
      num: '03',
      title: 'VIZR',
      desc: 'Interactive data visualisation dashboard',
      categories: ['Analytics', 'Dashboard'],
      tech: ['D3.js', 'React', 'REST API'],
      bg: '#F9F7F2',
      theme: 'light',
      sizeClass: 'card-small',
    },
    {
      num: '04',
      title: 'STOREFRONT',
      desc: 'Headless e-commerce engine with live CMS',
      categories: ['E-commerce', 'Headless'],
      tech: ['Next.js', 'Shopify API', 'TypeScript'],
      bg: '#898A8D',
      theme: 'light',
      sizeClass: 'card-large',
    },
  ];

  return (
    <section id="work" className="projects-section">
      {/* Sticky header for the notch triangle */}
      <div className="projects-sticky-header">
        <div className="projects-header-triangle"></div>
      </div>

      <div className="projects-intro">
        <span className="eyebrow">SELECTED WORK</span>
        <div style={{ overflow: 'hidden', marginBottom: 48 }}>
          <h2 className="display-text" style={{ fontSize: 'var(--h1)' }}>
            PROJECTS.
          </h2>
        </div>
      </div>

      <div className="projects-grid">
        {projectsData.map((project, idx) => (
          <article
            key={project.num}
            className={`project-card ${project.sizeClass} hoverable theme-${project.theme}`}
            style={{
              background: project.bg,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* Structural elements for the notch borders */}
            {idx > 0 && (
              <>
                <div className="card-border-left"></div>
                <div className="card-border-right"></div>
                <div className="card-border-notch-wrapper">
                  <svg className="card-border-notch-svg" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <path d="M 0 0 L 50 30 L 100 0" fill="none" stroke="white" strokeWidth="2" />
                  </svg>
                </div>
              </>
            )}

            <div className="project-card-top">
              <span className="project-number">{project.num}</span>
              <div className="project-pill-group project-pill-group-top">
                {project.categories.map((category) => (
                  <span key={category} className="pill-outline">{category}</span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 'auto' }}>
              <h3 className="project-title">
                <span className="project-bullet" />
                {project.title}
              </h3>
              <p className="project-desc">{project.desc}</p>
            </div>

            <div className="project-card-bottom">
              <div className="project-pill-group">
                {project.tech.map((tech) => (
                  <span key={tech} className="pill-outline">{tech}</span>
                ))}
              </div>
              <button className="project-view-btn pill-outline hoverable">
                VIEW ↗
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
