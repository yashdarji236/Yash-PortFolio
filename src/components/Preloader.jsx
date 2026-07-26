import { useEffect, useState, useRef } from 'react';
import './Preloader.css';

export default function Preloader({ onComplete, onExitStart }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const completedRef = useRef(false);

  const triggerComplete = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    if (typeof onComplete === 'function') {
      onComplete();
    }
  };

  useEffect(() => {
    let rafId;
    let start = null;
    const duration = 2200;

    const tick = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = Math.min(duration, timestamp - start);
      const pct = Math.floor((elapsed / duration) * 100);

      // Stop updating progress if skipped/completed
      if (completedRef.current) return;

      setProgress(pct);

      if (elapsed < duration) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);

    const fallback = setTimeout(() => {
      if (!completedRef.current) {
        setProgress(100);
      }
    }, 3000);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    if (progress < 100 || completedRef.current) return;

    const exitTimer = setTimeout(() => {
      setExiting(true);
      if (typeof onExitStart === 'function') {
        onExitStart();
      }
    }, 400);

    const completeTimer = setTimeout(() => {
      triggerComplete();
    }, 1200);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [progress, onExitStart]);

  const handleSkip = () => {
    if (completedRef.current) return;
    setProgress(100);
    setExiting(true);
    if (typeof onExitStart === 'function') {
      onExitStart();
    }
    // Trigger onComplete after a short delay matching the skip exit transition
    setTimeout(() => {
      triggerComplete();
    }, 700);
  };

  return (
    <div
      className={`preloader ${exiting ? 'preloader-exit' : ''}`}
      onClick={handleSkip}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{ cursor: 'pointer' }}
    >
      <div className="preloader-inner">
        <div className="preloader-logo">
          <span className="logo-y">Y</span>
          <span className="logo-d">D</span>
        </div>

        <div className="preloader-bottom">
          <div className="progress-bar-track">
            <div
              className="progress-bar-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="progress-text">{progress}%</div>
        </div>
      </div>
    </div>
  );
}
