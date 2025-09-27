import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landing/LandingPage';
import App from './App';
import './index.css';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://themindfulmoney.app';

function Root() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/landing" element={
          <LandingPage onGetStarted={() => { window.location.href = APP_URL; }} />
        } />
      </Routes>
    </Router>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);