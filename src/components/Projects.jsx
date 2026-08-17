function Projects() {
  const projects = [
    {
      title: "AI Assistant Web Application",
      description:
        "A full-stack AI assistant application using React, FastAPI, Python, SQLite and AI API integration.",
      technologies: [
        "React",
        "FastAPI",
        "Python",
        "SQLite"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "IT Helpdesk Ticket System",
      description:
        "A web-based ticket management system allowing employees and support staff to manage IT support requests.",
      technologies: [
        "Python",
        "FastAPI",
        "SQLite",
        "JavaScript"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Developer Portfolio",
      description:
        "A responsive personal portfolio website built with React and modern frontend development practices.",
      technologies: [
        "React",
        "JavaScript",
        "CSS",
        "Vite"
      ],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="section projects">

      <div className="container">

        <div className="section-heading">

          <p>MY WORK</p>

          <h2>Featured Projects</h2>

        </div>

        <div className="projects-grid">

          {projects.map((project) => (

            <article className="project-card" key={project.title}>

              <div className="project-image">

                <span>Project</span>

              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">

                  {project.technologies.map((technology) => (

                    <span key={technology}>
                      {technology}
                    </span>

                  ))}

                </div>

                <div className="project-links">

                  <a href={project.github}>
                    GitHub
                  </a>

                  <a href={project.demo}>
                    Live Demo
                  </a>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;