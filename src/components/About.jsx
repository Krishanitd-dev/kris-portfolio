function About() {
  return (
    <section id="about" className="section about">

      <div className="container">

        <div className="section-heading">

          <p>GET TO KNOW ME</p>

          <h2>About Me</h2>

        </div>
      
        <div className="about-grid">
{/* Technology Card 
          <div className="about-image">

            <div className="about-placeholder">
              Developer
            </div>

          </div>
*/}
          <div className="about-content">

            <h3>
              Building practical software solutions with modern technology.
            </h3>

            <p>
              I am a software developer with experience 
              in developing web applications, RESTful APIs, databases, and 
              user-focused digital solutions.
            </p>

            <p>
              My technical experience includes Python, FastAPI, C#, JavaScript,
              React, HTML, CSS, SQL, SQLite, and API integration, with experience
              working across both frontend and backend development.
            </p>

            <p>
              I am interested in software development, full-stack development, artificial 
              intelligence, and modern web technologies. I enjoy building practical applications that solve real-world problems
              and using personal projects to explore new technologies and continuously
              strengthen my development skills.
            </p>

            <div className="about-details">

              <div>
                <strong>Location</strong>
                <span>New Zealand</span>
              </div>

              <div>
                <strong>Role</strong>
                <span>Software Developer</span>
              </div>

              <div>
                <strong>Experience</strong>
                <span>Software Development & Testing</span>
              </div>

              <div>
                <strong>Education</strong>
                <span>Master of Information Technology</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;