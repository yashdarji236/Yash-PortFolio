export default function Skills() {
  const skillsData = [
    ['FRONTEND', ['React', 'Next.js', 'TypeScript', 'Vue.js', 'GSAP', 'Vanilla CSS', 'HTML5']],
    ['BACKEND', ['Node.js', 'Express', 'Python', 'REST API', 'GraphQL', 'WebSockets']],
    ['DATABASE', ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Prisma ORM']],
    ['DEVOPS', ['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'CI/CD', 'Linux']],
    ['DESIGN', ['Figma', 'Design Systems', 'Motion Design', 'Responsive UI']],
  ];

  return (
    <section id="skills" className="skills-section">
      <span className="eyebrow" style={{ color: 'rgba(26, 26, 26, 0.6)' }}>EXPERTISE</span>
      <div style={{ overflow: 'hidden', marginBottom: 48 }}>
        <h2 className="display-text" style={{ fontSize: 'var(--h1)' }}>
          SKILLS.
        </h2>
      </div>

      <div className="skills-list">
        {skillsData.map(([category, skills]) => (
          <div key={category} className="skill-row">
            <div className="skill-label">{category}</div>
            <div className="skills-flex">
              {skills.map((skill) => (
                <span key={skill} className="skill-pill hoverable">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
