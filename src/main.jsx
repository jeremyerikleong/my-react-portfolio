import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Archive from './pages/Archive.jsx';
// import '../dist/style.css'
import '../styles/style.scss'
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/archive' element={<Archive />} />
        </Routes>
      </Router>
    </HelmetProvider>
  </StrictMode>
)
