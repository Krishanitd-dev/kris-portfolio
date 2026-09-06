import profilebanner from "../assets/prof.jpg";
import profileImage from "../assets/ph.png";
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-banner">
        <img
          src={profilebanner}
          alt="Krishani"
        />
      </div>
      <div className="container hero-container">

        <div className="hero-content">

          <p className="hero-subtitle">
            SOFTWARE DEVELOPER | FULL-STACK DEVELOPER
          </p>

          <h1>
            Hi, I'm <span>Krishani</span>
          </h1>
          <p className="hero-description">
            <b> Software Developer building practical web applications, APIs and AI-powered solutions. </b>
            <p> I develop reliable and user-focused software using technologies
            such as Python, C#, JavaScript, React, FastAPI and SQL.
             I enjoy solving problems, learning new technologies and turning ideas into practical applications.
          </p>  </p>

          {/* <h2>
            Full-Stack Developer
          </h2> */}


          {/* <p className="hero-description">
           I am a passionate and adaptable developer who thrives on learning, solving problems, 
           and taking on new challenges. I am committed to delivering high-quality work, continuously 
           developing my skills, and making a positive contribution to every project and team.
          </p> */}

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
              href="https://github.com/Krishanitd-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/krishani-m-309780145"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </div>

        <div className="hero-profile">

         <div className="profile-card">
            <img
              src={profileImage}
              alt="Krishani"
              className="profile-photo"
            />
        </div>
        </div>

      </div>

    </section>
  );
}

export default Hero;