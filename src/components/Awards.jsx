const achievementsData = [
  {
    title: 'Toppers’ Learning Visit',
    organization: 'Adani Skill Development Center',
    description: 'Selected as a college topper to visit ASDC. Explored Power BI, soft skills, communication, teamwork, and leadership.',
    date: 'Sep 24'
  },
  {
    title: 'Academic Excellence Topper',
    organization: 'Computer Engineering Department',
    description: 'Consistently recognized among the top academic performers of the college for outstanding engineering coursework.',
    date: '2024 - 2026'
  },
  {
    title: 'MERN CRM Deployment',
    organization: 'Optimal Telemedia',
    description: 'Successfully engineered and integrated a full CRM application using MongoDB, Express, React, and Node.js.',
    date: '2026'
  }
];

export default function Awards() {
  return (
    <section id="awards">
      <div className="awards-grid-container">
        <div className="awards-left-col">
          <h2 className="section-heading">Achievements</h2>
        </div>
        <div className="awards-right-col">
          <h3 className="awards-intro">“Don’t limit your challenges — challenge your limits.”</h3>
        </div>
      </div>

      <div className="awards-list">
        {achievementsData.map((achievement, idx) => (
          <div key={idx} className="awards-list-item">
            <span>{achievement.title}</span>
            <span>{achievement.organization}</span>
            <span>{achievement.description}</span>
            <span className="year-cell">{achievement.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
