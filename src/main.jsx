import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import '../dist/style.css'
import '../styles/style.scss'
import { Helmet, HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jeremy Erik Leong</title>
        <link rel="canonical" href="https://jeremyerikleong.com" />
        <meta name="description" content="Hello! My name is Jeremy Erik Leong. I’m a developer & designer that based in Kuala Lumpur. I enjoy building digital experiences for the web." />
      </Helmet>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
