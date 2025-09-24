import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import LandingPage from './components/landing/LandingPage';
import './index.css';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.example.com';

function Root() {
  return (
    <LandingPage onGetStarted={() => { window.location.href = APP_URL + '/login'; }} />
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);