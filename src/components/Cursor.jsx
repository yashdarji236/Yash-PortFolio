import { useEffect, useRef } from 'react';

export default function Cursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const gsap = window.gsap;
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot || !gsap) return;

    // quickTo for smooth lag on ring
    const xRing = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3.out' });
    const yRing = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3.out' });
    const xDot  = gsap.quickTo(dot,  'x', { duration: 0.08 });
    const yDot  = gsap.quickTo(dot,  'y', { duration: 0.08 });

    const move = (e) => {
      xRing(e.clientX);
      yRing(e.clientY);
      xDot(e.clientX);
      yDot(e.clientY);
    };

    window.addEventListener('mousemove', move);

    // Dynamic hover event delegation (so it works on all elements, static or dynamic)
    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, .hoverable, .service-row, .project-card, .testimonial-card');
      if (target) {
        ring.classList.add('hovered');
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest('a, button, .hoverable, .service-row, .project-card, .testimonial-card');
      if (target) {
        ring.classList.remove('hovered');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef}  className="cursor-dot"  />
    </>
  );
}
