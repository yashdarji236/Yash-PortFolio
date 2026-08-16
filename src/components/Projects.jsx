import { useState, useEffect, useRef } from 'react';

const projectsList = [
  {
    num: '01',
    title: 'asknova',
    url: 'https://backend-series-seven.vercel.app/', // Fallback to main portfolio or specific link if desired
    categories: ['full-stack', 'saas'],
    img: '/p3.jpg',
  },
  {
    num: '02',
    title: 'Cinematic',
    url: 'https://movie-app-eta-blue.vercel.app/',
    categories: ['full-stack', 'real-time-ui'],
    img: '/p2.jpg',
  },
  {
    num: '03',
    title: 'Ai Battle Arena',
    url: 'https://ai-battle-arena-tan.vercel.app/',
    categories: ['full-stack', 'real-time-ui'],
    img: '/p1.png',
  },

];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const trackerRef = useRef(null);
  const trackerImgRef = useRef(null);
  const trackerVideoRef = useRef(null);

  const targetX = useRef(0);
  const targetY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);
  const isTracking = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth <= 768) return;
      targetX.current = e.clientX;
      targetY.current = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let rafId;
    const updateTrackerPosition = () => {
      if (isTracking.current && trackerRef.current) {
        currentX.current += (targetX.current - currentX.current) * 0.15;
        currentY.current += (targetY.current - currentY.current) * 0.15;
        trackerRef.current.style.left = `${currentX.current}px`;
        trackerRef.current.style.top = `${currentY.current}px`;
      }
      rafId = requestAnimationFrame(updateTrackerPosition);
    };
    rafId = requestAnimationFrame(updateTrackerPosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const handleMouseEnter = (img, video) => {
    if (window.innerWidth <= 768) return;
    isTracking.current = true;
    if (trackerRef.current) {
      trackerRef.current.classList.add('active');
    }

    if (trackerImgRef.current) {
      if (img && !video) {
        trackerImgRef.current.src = img;
        trackerImgRef.current.style.display = 'block';
      } else {
        trackerImgRef.current.style.display = 'none';
      }
    }

    if (trackerVideoRef.current) {
      if (video) {
        trackerVideoRef.current.src = video;
        trackerVideoRef.current.classList.add('visible');
        trackerVideoRef.current.play().catch(err => console.log('Video play interrupted:', err));
        if (trackerImgRef.current) trackerImgRef.current.style.display = 'none';
      } else {
        trackerVideoRef.current.classList.remove('visible');
        trackerVideoRef.current.pause();
        trackerVideoRef.current.src = '';
      }
    }
  };

  const handleMouseLeave = () => {
    isTracking.current = false;
    if (trackerRef.current) {
      trackerRef.current.classList.remove('active');
    }
    if (trackerVideoRef.current) {
      trackerVideoRef.current.pause();
      trackerVideoRef.current.src = '';
    }
  };

  return (
    <section id="work">
      <div className="section-header">
        <div className="section-title-wrap">

          <h2 className="section-heading">Building Products That Solve Real Problems</h2>
        </div>
      </div>

      {/* Studio Parallax Banner */}
      <div className="studio-banner-wrap">
        <div className="studio-banner-inner">
          <div className="studio-bg" style={{ backgroundImage: "url('/image.png')" }}></div>
          <div className="studio-banner-content">
            <div className="banner-left-content">
              <span className="banner-tag">Featured Concept</span>
              <h3 className="banner-title">Solve Real Problems</h3>
              <p className="banner-desc">
                Designing, prototype validation, and engineering high-impact digital experiences that bridge the gap between design and functionality.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Work Category Filters */}
      <div className="portfolio-filters-wrap">
        <div className="portfolio-filters">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button
            className={`filter-btn ${activeFilter === 'full-stack' ? 'active' : ''}`}
            onClick={() => setActiveFilter('full-stack')}
          >
            Full-Stack
          </button>
          <button
            className={`filter-btn ${activeFilter === 'saas' ? 'active' : ''}`}
            onClick={() => setActiveFilter('saas')}
          >
            SaaS Products
          </button>
          <button
            className={`filter-btn ${activeFilter === 'real-time-ui' ? 'active' : ''}`}
            onClick={() => setActiveFilter('real-time-ui')}
          >
            Real-Time &amp; UI
          </button>
        </div>
      </div>

      {/* Selected Work List */}
      <div className="portfolio-list">
        {projectsList.map((project) => {
          const isFilteredOut = activeFilter !== 'all' && !project.categories.includes(activeFilter);
          return (
            <div
              key={project.num}
              className={`portfolio-item-row ${isFilteredOut ? 'filtered-out' : ''}`}
              onMouseEnter={() => handleMouseEnter(project.img, project.video)}
              onMouseLeave={handleMouseLeave}
            >
              <a href={project.url} target="_blank" className="portfolio-item-link" rel="noopener noreferrer">
                <div className="portfolio-item-inner">
                  <span className="portfolio-number">{project.num}</span>
                  <h2 className="portfolio-title">{project.title}</h2>
                  <svg className="portfolio-arrow" viewBox="60 58 140 140" xmlns="http://www.w3.org/2000/svg">
                    <path d="M198,64V168a6,6,0,0,1-12,0V78.48L68.24,196.24a6,6,0,0,1-8.48-8.48L177.52,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z"></path>
                  </svg>
                </div>
              </a>
            </div>
          );
        })}
      </div>

      {/* Hover Cursor Image Container */}
      <div id="hover-image-tracker" ref={trackerRef}>
        <div className="tracker-media-wrap">
          <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="tracker-img" ref={trackerImgRef} style={{ display: 'none' }} />
          <video className="tracker-video" loop muted playsInline autoPlay ref={trackerVideoRef}></video>
        </div>
      </div>
    </section>
  );
}
