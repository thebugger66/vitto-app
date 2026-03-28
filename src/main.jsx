
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'; // CRITICAL: This loads your Tailwind CSS

// Import compo
import VittoHomepage from './VittoHomepage';
import PlatformPage from './Platformpage'; 
import AutomationPage from './Automationpage';
import ArticlePage from './ArticlePage';
import App from './App';
import ContactPage from './ContactPage';

//root
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<VittoHomepage />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/automation" element={<AutomationPage />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/App" element={<App />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);