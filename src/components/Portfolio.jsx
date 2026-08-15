import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Expertise from './Expertise';
import Experience from './Experience';
import Quote from './Quote';
import Clients from './Clients';
import Milestones from './Milestones';
import Awards from './Awards';
import About from './About';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';

export default function Portfolio({ startHero }) {
  return (
    <ErrorBoundary>
      <div className="noise-overlay"></div>
      <div className="page-wrapper">
        <Navbar />
        <main id="ajax-content-wrap">
          <Hero startAnimation={startHero} />
          <Projects />
          <Expertise />
          <Experience />
          <Quote />
          <Clients />
          <Milestones />
          <Awards />
          <About />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
