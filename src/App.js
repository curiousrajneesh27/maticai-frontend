import "./App.css";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTone, setSelectedTone] = useState("Casual");
  const [selectedAudience, setSelectedAudience] = useState("General Audience");
  const [selectedPlatform, setSelectedPlatform] = useState("Youtube");

  return (
    <div className="App">
      {/* Navigation Header */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <h2>Matic AI</h2>
          </div>

          <div className="nav-menu">
            <div className="nav-item">Product</div>
            <div className="nav-item">Resources</div>
            <div className="nav-item">Pricing</div>
            <div className="nav-item">APIs</div>
            <div className="nav-item">Docs</div>
          </div>

          <div className="nav-actions">
            <button className="btn-signin">Sign In</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="badge">
            <span className="sparkle">✦</span> Script Generator
          </div>

          <h1 className="hero-title">
            UNDERSTAND FASTER WITH
            <br />
            ANIMATED EXPLANATIONS.
          </h1>

          <p className="hero-subtitle">
            Turn educational questions into clear, step-by-step visual answers.
          </p>

          {/* Search Box */}
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="e.g. The best beach for beginner surfers in Europe."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-button">
              <span className="sparkle-icon">✦</span>
            </button>
          </div>

          {/* Filter Options */}
          <div className="filters">
            <div className="filter-item">
              <span className="filter-icon">🎭</span>
              <select
                className="filter-select"
                value={selectedTone}
                onChange={(e) => setSelectedTone(e.target.value)}
              >
                <option>Casual</option>
                <option>Professional</option>
                <option>Friendly</option>
                <option>Formal</option>
              </select>
            </div>

            <div className="filter-item">
              <span className="filter-icon">👥</span>
              <select
                className="filter-select"
                value={selectedAudience}
                onChange={(e) => setSelectedAudience(e.target.value)}
              >
                <option>General Audience</option>
                <option>Beginners</option>
                <option>Experts</option>
                <option>Students</option>
              </select>
            </div>

            <div className="filter-item">
              <span className="filter-icon">▶</span>
              <select
                className="filter-select"
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
              >
                <option>Youtube</option>
                <option>TikTok</option>
                <option>Instagram</option>
                <option>Twitter</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
