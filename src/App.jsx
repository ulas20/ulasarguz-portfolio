import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Background from './components/Background.jsx';
import SkipLink from './components/SkipLink.jsx';
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import Skills from './components/sections/Skills.jsx';
import Projects from './components/sections/Projects.jsx';
import Timeline from './components/sections/Timeline.jsx';
import Contact from './components/sections/Contact.jsx';

export default function App() {
  return (
    <>
      <SkipLink />
      <Background />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
