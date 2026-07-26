export default function About() {
  const text = "Building innovative digital solutions through AI, Web3, and full-stack development. Always learning, and always focused on creating meaningful impact.";
  const words = text.split(" ");
  const underlinedWords = ["innovative", "AI,", "Web3,", "full-stack", "development.", "meaningful", "impact."];

  const details = [
    {
      title: "Full-Stack Development",
      desc: "Building responsive, scalable, and high-performance web applications using modern technologies like React, Next.js, Node.js, Express, and MongoDB."
    },
    {
      title: "AI & Emerging Technologies",
      desc: "Exploring Artificial Intelligence, Generative AI, AI Agents, RAG systems, automation, and blockchain to create intelligent, future-ready software solutions."
    },
    {
      title: "Continuous Learning & Innovation",
      desc: "Passionate about solving real-world problems, experimenting with new technologies, and transforming ideas into impactful digital products with a focus on performance, security, and user experience."
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <span className="eyebrow" style={{ color: 'rgba(26, 26, 26, 0.6)', display: 'block', marginBottom: '32px' }}>
          ABOUT ME
        </span>
        <h2 className="about-title">
          {words.map((word, idx) => {
            const isUnderlined = underlinedWords.includes(word);
            return (
              <span key={idx} className={`roll-word ${isUnderlined ? 'underlined-word' : ''}`}>
                <span className="roll-word-inner">
                  <span className="roll-word-default">{word}</span>
                  <span className="roll-word-hover">{word}</span>
                </span>
              </span>
            );
          })}
        </h2>

        <div className="about-details-grid">
          {details.map((item, idx) => (
            <div key={idx} className="about-detail-col">
              <h3 className="about-detail-title">{item.title}</h3>
              <p className="about-detail-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
