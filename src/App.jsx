import { useEffect, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Portfolio from './components/Portfolio';
import Preloader from './components/Preloader';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loading, setLoading] = useState(true);
  const [startHero, setStartHero] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  const handleExitStart = useCallback(() => {
    setStartHero(true);
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

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

    // The DOM has been paint-settled and the preloader is unmounted.
    // Refresh ScrollTriggers once everything has painted to ensure accurate layout calculations.
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
      <Portfolio startHero={startHero} />
      {loading && (
        <Preloader
          onComplete={handlePreloaderComplete}
          onExitStart={handleExitStart}
        />
      )}
    </>
  );
}