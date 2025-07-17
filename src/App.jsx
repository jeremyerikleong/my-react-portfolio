import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';
import JeremyBot from './components/JeremyBot.jsx';

function App() {
  return (
    <div className="container">
      <section className="left-col">
        <Hero />
      </section>

      <section className="right-col">
        <About />
        <Experience />
        <Projects />
        <Footer />
        <JeremyBot />
      </section>
    </div>
  )
}

export default App
