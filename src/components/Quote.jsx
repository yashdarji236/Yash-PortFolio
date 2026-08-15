import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Quote() {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    console.log("Quote.jsx - Initializing Block-Reveal ScrollTrigger");
    
    // Select all animatable words and highlight boxes in reading order
    const elements = containerRef.current.querySelectorAll('.quote-word, .quote-highlight-box');
    
    // Create ScrollTrigger timeline pinned to the viewport
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "+=150%", // Pinned scroll distance
        pin: true,
        scrub: 0.5,
      }
    });

    // Sequence the animations in natural reading order
    elements.forEach((el) => {
      if (el.classList.contains('quote-word')) {
        // Fade in regular and outline words
        tl.to(el, {
          opacity: 1,
          duration: 0.15,
          ease: "none",
        });
      } else if (el.classList.contains('quote-highlight-box')) {
        const bg = el.querySelector('.quote-highlight-bg');
        const text = el.querySelector('.quote-highlight-text');

        // Scale in the background block and transition the text color inside
        tl.to(bg, {
          scaleX: 1,
          duration: 0.3,
          ease: "power1.out",
        })
        .to(text, {
          opacity: 1,
          color: "#000000",
          duration: 0.2,
          ease: "none",
        }, "-=0.25"); // Overlap with block slide-in for a smooth look
      }
    });

    // Initial ScrollTrigger calculation
    ScrollTrigger.refresh();

    // Staggered refreshes to catch post-load height changes
    const timeouts = [
      setTimeout(() => ScrollTrigger.refresh(), 100),
      setTimeout(() => ScrollTrigger.refresh(), 500),
      setTimeout(() => ScrollTrigger.refresh(), 1500),
      setTimeout(() => ScrollTrigger.refresh(), 3000),
    ];

    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', handleLoad);

    return () => {
      console.log("Quote.jsx - Cleaning up ScrollTrigger");
      window.removeEventListener('load', handleLoad);
      timeouts.forEach(clearTimeout);
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === triggerRef.current) {
          t.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={triggerRef} className="quote-section theme-light">
      <div ref={containerRef} className="quote-container">
        <h2 className="quote-sentence active">
          <span className="quote-row">
            <span className="quote-word">I</span>
            <span className="quote-word">TURN</span>
            <span className="quote-word">IDEAS</span>
            <span className="quote-word">INTO</span>
            <span className="quote-word quote-outline">MODERN</span>
            <span className="quote-word quote-outline">WEB</span>
            <span className="quote-highlight-box">
              <span className="quote-highlight-bg"></span>
              <span className="quote-highlight-text">EXPERIENCES</span>
            </span>
          </span>
          <span className="quote-row">
            <span className="quote-word">THROUGH</span>
            <span className="quote-highlight-box">
              <span className="quote-highlight-bg"></span>
              <span className="quote-highlight-text">THOUGHTFUL</span>
            </span>
            <span className="quote-highlight-box">
              <span className="quote-highlight-bg"></span>
              <span className="quote-highlight-text">DESIGN,</span>
            </span>
            <span className="quote-word quote-outline">SMOOTH</span>
          </span>
          <span className="quote-row">
            <span className="quote-highlight-box">
              <span className="quote-highlight-bg"></span>
              <span className="quote-highlight-text">INTERACTIONS,</span>
            </span>
            <span className="quote-word">AND</span>
            <span className="quote-highlight-box">
              <span className="quote-highlight-bg"></span>
              <span className="quote-highlight-text">SCALABLE</span>
            </span>
            <span className="quote-highlight-box">
              <span className="quote-highlight-bg"></span>
              <span className="quote-highlight-text">DEVELOPMENT.</span>
            </span>
          </span>
        </h2>
      </div>
    </section>
  );
}
