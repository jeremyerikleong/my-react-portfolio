import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';
import JeremyBot from './components/JeremyBot.jsx';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jeremy Erik Leong</title>
        <link rel="canonical" href="https://jeremyerikleong.com" />
        <meta name="description" content="Hello! My name is Jeremy Erik Leong. I’m a developer & designer that based in Kuala Lumpur. I enjoy building digital experiences for the web." />
      </Helmet>

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
    </>
  )
}

export default App
