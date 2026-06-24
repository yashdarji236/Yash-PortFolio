const items = [
  'REACT',
  'NEXT.JS',
  'NODE.JS',
  'TYPESCRIPT',
  'GSAP',
  'FIGMA',
  'AWS',
  'POSTGRESQL',
  'DOCKER',
  'PYTHON',
  'REDIS',
  'VERCEL',
];

function MarqueeItems({ copy }) {
  return items.map((item) => (
    <span key={`${copy}-${item}`} className="marquee-item">
      {item} <span style={{ opacity: 0.5, marginLeft: 16 }}>✦</span>
    </span>
  ));
}

export default function Marquee() {
  return (
    <section className="marquee-section">
      <div className="marquee-track">
        <MarqueeItems copy="a" />
        <MarqueeItems copy="b" />
      </div>
    </section>
  );
}
