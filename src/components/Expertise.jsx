import { useEffect, useRef, useState } from 'react';

function ExpertiseBlock({
  num,
  id,
  title,
  bgImage,
  svgLayer,
  colorTheme,
  giantNum,
  heading,
  text,
  capabilities
}) {
  const blockRef = useRef(null);
  const heroRef = useRef(null);
  const layerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, { threshold: 0.15 });

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    if (!blockRef.current || !layerRef.current) return;
    const rect = blockRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) - rect.width / 2;
    const y = (e.clientY - rect.top) - rect.height / 2;

    layerRef.current.style.setProperty('--x', `${x * 0.05}px`);
    layerRef.current.style.setProperty('--y', `${y * 0.05}px`);
  };

  const handleMouseLeave = () => {
    if (layerRef.current) {
      layerRef.current.style.setProperty('--x', `0px`);
      layerRef.current.style.setProperty('--y', `0px`);
    }
  };

  return (
    <section
      className={`expertise-block ${colorTheme} theme-dark`}
      id={id}
      ref={blockRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`expertise-hero ${isInView ? 'in-view' : ''}`} ref={heroRef}>
        <div className="expertise-parallax-scene">
          <div
            ref={layerRef}
            className="parallax-svg-layer"
            style={{ backgroundImage: `url('${svgLayer}')` }}
          ></div>
        </div>
        <div
          className="expertise-cover-image"
          style={{ backgroundImage: `url('${bgImage}')` }}
        ></div>
        <div className="expertise-hero-content">
          <span className="exp-num">{num}</span>
          <h2 className="exp-title">{title}</h2>
        </div>
      </div>
      <div className="expertise-details">
        <div className="details-grid">
          <div className="details-left">
            <span className="giant-num">{giantNum}</span>
          </div>
          <div className="details-right">
            <h3 className="details-heading">{heading}</h3>
            <p className="details-text">{text}</p>

            <div className="capabilities-list">
              {capabilities.map((cap, index) => (
                <div key={index} className="cap-item">
                  <span>{cap.name}</span>
                  <span>{cap.num}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const expertiseData = [
  {
    num: '// 01',
    id: 'exp-web-apps',
    title: 'Web Applications',
    bgImage: '/ai-1-scaled.webp',
    colorTheme: 'block-orange',
    giantNum: '01',
    heading: 'Responsive, scalable, and high-performance frontend solutions',
    text: 'I design and build conversion-focused web applications that balance design fidelity with technical scalability. Specializing in modern frameworks and performance optimization, I ensure applications are blazing fast, accessible, and delight users.',
    capabilities: [
      { name: 'React & Next.js', num: '01' },
      { name: 'TypeScript Integration', num: '02' },
      { name: 'Performance Optimization', num: '03' },
      { name: 'SEO & Web Accessibility', num: '04' }
    ]
  },
  {
    num: '// 02',
    id: 'exp-backend',
    title: 'Backend Systems',
    bgImage: '/img1.png',
    svgLayer: '/Creative_direction.svg',
    colorTheme: 'block-red',
    giantNum: '02',
    heading: 'Secure, reliable, and scalable server-side architectures',
    text: 'I construct robust backend systems and REST APIs capable of handling high traffic and complex workflows. Focusing on database optimization, cache strategies, and real-time sockets, I build services that scale seamlessly.',
    capabilities: [
      { name: 'Node.js & Express', num: '01' },
      { name: 'MongoDB', num: '02' },
      { name: 'WebSockets & Real-time systems', num: '04' },
      { name: 'Redis Caching & Key Store', num: '05' }
    ]
  },
  {
    num: '// 03',
    id: 'exp-ui-ux',
    title: 'UI / UX Design & Dev',
    bgImage: '/branding-2.webp',
    svgLayer: '/branding.svg',
    colorTheme: 'block-orange',
    giantNum: '03',
    heading: 'Where visual aesthetics meet seamless interactive motions',
    text: 'I bridge the gap between static wireframes and animated user experiences. Leveraging Figma and advanced motion tools like GSAP, I construct premium design systems and fluid micro-interactions that elevate brand perception.',
    capabilities: [
      { name: 'Figma Prototyping', num: '01' },
      { name: 'GSAP Web Animations', num: '02' },
      { name: 'Responsive UI Design Systems', num: '03' },
      { name: 'Design Token Architecture', num: '04' },
    ]
  },
  {
    num: '// 04',
    id: 'exp-saas',
    title: 'SaaS Products',
    bgImage: '/img2.png',
    svgLayer: '/web_design.svg',
    colorTheme: 'block-orange',
    giantNum: '04',
    heading: 'Building SaaS That Solves Real Problems',
    text: 'I build scalable SaaS products that combine AI, automation, and modern web technologies to solve real business challenges and deliver seamless user experiences.',
    capabilities: [
      { name: 'AI-Powered Features', num: '01' },
      { name: 'Authentication & User Management', num: '02' },
      { name: 'Subscription-Ready Architecture', num: '03' },
      { name: 'Dashboard & Analytics', num: '04' },
      { name: 'Scalable API Integration', num: '05' }
    ]
  },
  {
    num: '// 05',
    id: 'exp-devops-web3',
    title: 'DevOps & Web3',
    bgImage: '/img3.png',
    svgLayer: '/Creative_direction.svg',
    colorTheme: 'block-orange',
    giantNum: '05',
    heading: 'Deploying automated pipelines and decentralized apps',
    text: 'I containerize applications, configure continuous delivery workflows, and build decentralized Web3 modules. Balancing hosting costs with system reliability, I establish robust infrastructure for modern applications.',
    capabilities: [
      { name: 'Docker Containerization', num: '01' },
      { name: 'CI/CD (GitHub Actions)', num: '02' },
      { name: 'Solidity Smart Contracts', num: '03' },
      { name: 'Vercel & AWS Deployments', num: '05' }
    ]
  }
];

export default function Expertise() {
  return (
    <>
      <section id="expertise">
        <div className="section-header">
          <div className="section-title-wrap">

            <h2 className="section-heading">Crafting Digital Experiences Through Vision, Design, and Engineering</h2>
          </div>
        </div>
      </section>

      {expertiseData.map((exp) => (
        <ExpertiseBlock key={exp.id} {...exp} />
      ))}
    </>
  );
}
