import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroIcon from "../assets/hero-icon.png";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // gsap.context scopes every tween/ScrollTrigger created inside it to this
    // component, and ctx.revert() below undoes ALL of them cleanly. This is
    // what protects you from React 18 Strict Mode's double-invoke in dev
    // (mount -> cleanup -> mount), which otherwise creates two competing
    // timelines on the same elements.
    const ctx = gsap.context(() => {
      const lines = [line1Ref.current, line2Ref.current, line3Ref.current];

      // Set the "from" state synchronously before paint so there's no flash
      // of fully-visible content before the timeline starts.
      gsap.set(lines, { yPercent: 110, opacity: 0, rotateX: 8 });
      gsap.set(imageRef.current, { scale: 0.85, opacity: 0 });
      gsap.set([subtitleRef.current, ctaRef.current], { y: 24, opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.to(lines, {
        yPercent: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.1,
        stagger: 0.15,
      })
        .to(
          imageRef.current,
          { scale: 1, opacity: 1, duration: 1.0 },
          "-=0.8"
        )
        .to(
          [subtitleRef.current, ctaRef.current],
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.12 },
          "-=0.5"
        );

      // Scroll-triggered reveal for every section that follows
      gsap.utils.toArray("section:not(#hero), footer").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // The hero image loading after mount shifts page layout, which throws
      // off every ScrollTrigger start position calculated above. Recompute
      // them once the image is actually in the DOM at its final size.
      const imgEl = imageRef.current;
      const refresh = () => ScrollTrigger.refresh();
      if (imgEl && !imgEl.complete) {
        imgEl.addEventListener("load", refresh);
      } else {
        refresh();
      }

      return () => {
        if (imgEl) imgEl.removeEventListener("load", refresh);
      };
    }, sectionRef);

    return () => ctx.revert(); // kills timeline + all ScrollTriggers + resets inline styles
  }, []);

  const handleCtaClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection && window.lenisInstance) {
      window.lenisInstance.scrollTo(contactSection);
    } else if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero-section" ref={sectionRef}>
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-headline">
            <div className="hero-line" style={{ overflow: "hidden" }}>
              <span ref={line1Ref} className="hero-word" style={{ display: "block" }}>
                Clarity
              </span>
            </div>
            <div className="hero-line" style={{ overflow: "hidden" }}>
              <span ref={line2Ref} className="hero-word" style={{ display: "block" }}>
                over
              </span>
            </div>
            <div className="hero-line" style={{ overflow: "hidden" }}>
              <span ref={line3Ref} className="hero-word" style={{ display: "block" }}>
                cleverness.
              </span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <img
            ref={imageRef}
            src={heroIcon}
            alt="Hero Icon"
            className="hero-image"
          />
        </div>
      </div>

      <div className="hero-bottom-bar">
        <div
          ref={subtitleRef}
          className="body-text"
          style={{ fontSize: "clamp(14px,1.5vw,18px)", color: "var(--muted)" }}
        >
          AI Engineer • Full-Stack Developer • Founder in Progress
        </div>

        <button ref={ctaRef} className="hero-cta-pill hoverable" onClick={handleCtaClick}>
          START A PROJECT
          <span className="cta-icon-circle">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M3.5 9H14.5M14.5 9L10 4.5M14.5 9L10 13.5"
                stroke="#1a1a1a"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}