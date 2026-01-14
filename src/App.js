import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navigation Header */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <h2>MATIC AI</h2>
          </div>

          <div className="nav-menu">
            <div className="nav-item dropdown">
              Product <span className="arrow">▼</span>
            </div>
            <div className="nav-item dropdown">
              Use Cases <span className="arrow">▼</span>
            </div>
            <div className="nav-item dropdown ai-item">
              <span className="ai-icon">✦</span> AI{" "}
              <span className="arrow">▼</span>
            </div>
            <div className="nav-item dropdown">
              APIs <span className="arrow">▼</span>
            </div>
            <div className="nav-item dropdown">
              Resources <span className="arrow">▼</span>
            </div>
            <div className="nav-item">Pricing</div>
          </div>

          <div className="nav-actions">
            <button className="btn-contact">Contact Sales</button>
            <button className="btn-login">Login</button>
            <button className="btn-signup">Sign Up</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            CREATE PRO LEVEL
            <br />
            VIDEOS IN THE BLINK OF AI
          </h1>
          <p className="hero-subtitle">
            Make better videos faster. Smart video creation tools for teams
          </p>
          <button className="btn-cta">
            Start for free <span className="arrow-right">→</span>
          </button>
          <p className="hero-footer">
            * No credit card required |{" "}
            <span className="rating">⭐ Rated 4.6 out of 5 on G2</span>
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
