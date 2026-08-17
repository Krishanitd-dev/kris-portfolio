function Hero() {
  return (
    <section id="home" className="hero">

      <div className="container hero-container">

        <div className="hero-content">

          <p className="hero-subtitle">
            SOFTWARE DEVELOPER
          </p>

          <h1>
            Hi, I'm <span>Krishani</span>
          </h1>

          <h2>
            Full-Stack Developer & IT Professional
          </h2>

          <p className="hero-description">
            I build modern, responsive and user-focused web applications
            using technologies such as React, JavaScript, Python and FastAPI.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn btn-primary">
              View My Projects
            </a>

            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>

          </div>

          <div className="social-links">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </div>

        <div className="hero-image">

          <div className="profile-card">

            <div className="profile-placeholder">
              KD
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;