function Skills() {
  const skills = [
    {
      category: "Frontend",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Responsive Design"
      ]
    },
    {
      category: "Backend",
      technologies: [
        "Python",
        "FastAPI",
        "REST APIs",
        "C#",
        ".NET"
      ]
    },
    {
      category: "Database",
      technologies: [
        "SQLite",
        "MySQL",
        "SQL",
        "CRUD Operations"
      ]
    },
    {
      category: "Tools",
      technologies: [
        "Git",
        "GitHub",
        "VS Code",
        "JIRA",
        "Trello"
      ]
    },
    {
      category: "AI & APIs",
      technologies: [
        "OpenAI API",
        "LLMs",
        "NLP",
        "AI Integration",
        "API Development"
      ]
    },
    {
      category: "Other",
      technologies: [
        "Testing",
        "Secure Coding",
        "Software Development",
        "Agile"
      ]
    }
  ];

  return (
    <section id="skills" className="section skills">

      <div className="container">

        <div className="section-heading">

          <p>MY TECHNOLOGIES</p>

          <h2>Skills</h2>

        </div>

        <div className="skills-grid">

          {skills.map((skill) => (

            <div className="skill-card" key={skill.category}>

              <h3>{skill.category}</h3>

              <div className="skill-list">

                {skill.technologies.map((technology) => (

                  <span key={technology}>
                    {technology}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;
