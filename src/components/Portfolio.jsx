import Cursor from './Cursor';
import Navbar from './Navbar';
import Hero from './Hero';
import Marquee from './Marquee';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Skills from './Skills';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';

export default function Portfolio({ startHero }) {
  return (
    <ErrorBoundary>
      <Cursor />
      <div className="page-wrapper">
        <Navbar />
        <main>
          <Hero startAnimation={startHero} />
          <Marquee />
          <About />
          <Services />
          <Projects />
          <Skills />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
