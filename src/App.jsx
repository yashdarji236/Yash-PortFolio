import { useEffect, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import './index.css';
import Portfolio from './components/Portfolio';
import Preloader from './components/Preloader';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loading, setLoading] = useState(true);

  const handlePreloaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updatePhysics = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updatePhysics);
    gsap.ticker.lagSmoothing(0);

    window.lenisInstance = lenis;

    // The DOM just swapped from <Preloader> to the full <Portfolio> tree,
    // which changes every section's height. Child components (e.g. Hero)
    // create their own ScrollTriggers in their own mount effects, and those
    // fire BEFORE this one (React runs child effects before parent effects).
    // So by the time we get here, triggers may have been measured against
    // a layout that's still settling. Refresh on the next frame once
    // everything has painted, so trigger start/end positions are accurate.
    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      gsap.ticker.remove(updatePhysics);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.lenisInstance = null;
    };
  }, [loading]);

  return (
    <>
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
      {!loading && <Portfolio />}
    </>
  );
}