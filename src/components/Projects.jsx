function Projects() {
  const projects = [
    {
      title: "AI Assistant Web Application",
      description:
        "A full-stack AI assistant application featuring secure user authentication and AI-powered question answering.",
      technologies: [
        "Python",
        "HTML",
        "CSS",
        "JavaScript",
        "SQLite"
      ],
      github: "https://github.com/Krishanitd-dev/ai-assistant-web-local",
             
      
    },
    {
      title: "IT Helpdesk Ticket System",
      description:
        "A web-based ticket management system allowing employees and support staff to manage IT support requests.",
      technologies: [
        "Python",
        "FastAPI",
        "HTML",
        "CSS",
        "SQLite",
        "JavaScript"
      ],
      github: "https://github.com/Krishanitd-dev/it-helpdesk-ticketing-system",
     
    },
    {
      title: "Multilingual AI Text Summarizer",
      description:
        "A Python-based application that uses Artificial Intelligence and NLP to analyse lengthy text and generate concise, meaningful summaries.",
      technologies: [
        "Python",
        "REST API's",
        "Groq's free API",
       
      ],
      github: "https://github.com/Krishanitd-dev/ai_text_summarizer",
    
    }
  ];

  return (
    <section id="projects" className="section projects">

      <div className="container">

        <div className="section-heading">

          <p>I enjoy working on personal projects in my spare time.</p>

          <h2>My Projects</h2>

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

                  {/* <a href={project.demo}>
                    Live Demo
                  </a> */}

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