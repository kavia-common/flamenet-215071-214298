import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * PUBLIC_INTERFACE
 * App
 * The FlameNet landing page. Provides:
 * - Theme toggle (light/dark)
 * - Hero section with FlameNet title and subtitle
 * - CTA buttons
 * - Placeholder sections for "Documentation Preview" and "Settings"
 */
function App() {
  const [theme, setTheme] = useState('light');

  // Apply theme to <html> element and set document title to FlameNet
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.title = 'FlameNet';
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const openDocs = () => {
    window.open('https://reactjs.org', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="App">
      <header className="App-header" role="banner">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>

        <div className="container">
          <img src={logo} className="App-logo" alt="FlameNet logo" />
          <h1 className="title">FlameNet</h1>
          <p className="subtitle">
            Manage and visualize the project-wide renaming and documentation updates for FlameNet.
          </p>

          <div className="actions" role="group" aria-label="Primary actions">
            <button className="btn btn-primary" onClick={openDocs}>
              View Docs
            </button>
            <a className="btn btn-secondary" href="#settings">
              Open Settings
            </a>
          </div>

          <div className="sections">
            <section className="section-card" aria-labelledby="doc-prev-title">
              <h2 id="doc-prev-title" className="section-title">Documentation Preview</h2>
              <p className="section-desc">
                Preview updated documentation, verify renaming consistency, and review API changes.
              </p>
            </section>

            <section id="settings" className="section-card" aria-labelledby="settings-title">
              <h2 id="settings-title" className="section-title">Settings</h2>
              <p className="section-desc">
                Configure rename options, select targets, and manage theme and accessibility preferences.
              </p>
            </section>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
