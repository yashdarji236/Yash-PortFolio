export default function Projects() {
  const projectsData = [
    {
      num: '01',
      title: 'FINTRACK',
      desc: 'Personal finance tracker & budgeting SaaS',
      categories: ['Finance', 'SaaS'],
      tech: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
      bg: '#1A1A1A',
      sizeClass: 'card-large',
    },
    {
      num: '02',
      title: 'DEVHUB',
      desc: 'Real-time developer collaboration platform',
      categories: ['Productivity', 'Real-time'],
      tech: ['Next.js', 'Prisma', 'WebSockets'],
      bg: '#1B4332',
      sizeClass: 'card-small',
    },
    {
      num: '03',
      title: 'VIZR',
      desc: 'Interactive data visualisation dashboard',
      categories: ['Analytics', 'Dashboard'],
      tech: ['D3.js', 'React', 'REST API'],
      bg: '#1B4332',
      sizeClass: 'card-small',
    },
    {
      num: '04',
      title: 'STOREFRONT',
      desc: 'Headless e-commerce engine with live CMS',
      categories: ['E-commerce', 'Headless'],
      tech: ['Next.js', 'Shopify API', 'TypeScript'],
      bg: '#1A1A1A',
      sizeClass: 'card-large',
    },
  ];

  return (
    <section id="work" className="projects-section">
      <span className="eyebrow">SELECTED WORK</span>
      <div style={{ overflow: 'hidden', marginBottom: 48 }}>
        <h2 className="display-text" style={{ fontSize: 'var(--h1)' }}>
          PROJECTS.
        </h2>
      </div>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <article
            key={project.num}
            className={`project-card ${project.sizeClass} hoverable`}
            style={{
              background: project.bg,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
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
