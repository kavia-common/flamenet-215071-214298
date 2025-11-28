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
 * - Backend status widget (calls /meta on port 3001)
 */
function App() {
  const [theme, setTheme] = useState('light');
  const [backendStatus, setBackendStatus] = useState({
    loading: true,
    ok: false,
    name: '',
    version: '',
    status: '',
    error: ''
  });

  // Apply theme to <html> element and set document title to FlameNet
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.title = 'FlameNet';
  }, [theme]);

  // Fetch backend meta (or health) from port 3001
  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();
    const base = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';
    const tryMeta = async () => {
      try {
        // Try /meta first
        let res = await fetch(`${base}/meta`, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (ignore) return;
        setBackendStatus({
          loading: false,
          ok: true,
          name: data.name || 'FlameNet',
          version: data.version || '',
          status: data.status || 'ok',
          error: ''
        });
      } catch (e1) {
        // Fallback to root health "/"
        fetch(`${base}/`, { signal: controller.signal })
          .then(async (res) => {
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            if (ignore) return;
            setBackendStatus({
              loading: false,
              ok: true,
              name: 'FlameNet',
              version: '',
              status: data.message || 'ok',
              error: ''
            });
          })
          .catch((e2) => {
            if (ignore) return;
            setBackendStatus({
              loading: false,
              ok: false,
              name: '',
              version: '',
              status: '',
              error: e2?.message || e1?.message || 'Failed to reach backend'
            });
          });
      }
    };
    tryMeta();
    return () => {
      ignore = true;
      controller.abort();
    };
  }, []);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const openDocs = () => {
    window.open('https://reactjs.org', '_blank', 'noopener,noreferrer');
  };

  const renderBackendBadge = () => {
    if (backendStatus.loading) {
      return <span className="badge badge-loading" aria-live="polite">Checking backend…</span>;
    }
    if (backendStatus.ok) {
      return (
        <span
          className="badge badge-ok"
          title={`Connected to ${backendStatus.name} ${backendStatus.version || ''}`}
          aria-label="Backend status OK"
        >
          🔗 Backend: {backendStatus.status}{backendStatus.version ? ` • v${backendStatus.version}` : ''}
        </span>
      );
    }
    return (
      <span
        className="badge badge-error"
        title={backendStatus.error}
        aria-label="Backend status error"
      >
        ⚠️ Backend unreachable
      </span>
    );
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
            {renderBackendBadge()}
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
