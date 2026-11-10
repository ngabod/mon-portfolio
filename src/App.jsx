import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="theme-light min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-sky-200 selection:text-sky-900">
      <div className="portfolio-background" aria-hidden="true">
        <img src="/boxe.jpg" alt="" />
      </div>
      <Navbar />
      <main className="relative z-10 flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
