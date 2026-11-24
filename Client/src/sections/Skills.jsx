import Stars from "../components/Stars";

function Skills() {
  const skillGroups = [
    {
      number: "01",
      title: "Frontend Development",
      description:
        "Building responsive and interactive web interfaces using modern frontend technologies.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Vite"
      ]
    },

    {
      number: "02",
      title: "Backend Development",
      description:
        "Developing server-side applications, REST APIs and backend functionality for full-stack applications.",
      skills: [
        "Node.js",
        "Express.js",
        "REST API"
      ]
    },

    {
      number: "03",
      title: "Databases",
      description:
        "Working with databases to store, manage and retrieve application data.",
      skills: [
        "MongoDB",
        "MySQL"
      ]
    },

    {
      number: "04",
      title: "Development Tools",
      description:
        "Using modern development tools for coding, API testing, version control and project development.",
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code"
      ]
    },

    {
      number: "05",
      title: "UI / UX & Design",
      description:
        "Designing clean, responsive and user-friendly interfaces with a focus on usability and visual consistency.",
      skills: [
        "Figma",
        "UI Design",
        "UX Design",
        "Responsive Design"
      ]
    },

    {
      number: "06",
      title: "Cloud & Deployment",
      description:
        "Working with cloud-based services and deployment platforms to host and manage web applications.",
      skills: [
        "Render",
        "Vercel",
        "Cloudinary"
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">

      {/* STAR BACKGROUND */}
      <Stars />

      <div className="skills-container">

        {/* SECTION HEADING */}
        <div className="skills-heading">

          <p className="section-label">
            TECHNICAL SKILLS
          </p>

          <h2>
            Technologies I Work With
          </h2>

          <p className="skills-intro">
            A practical technology stack developed through academic work,
            internships and hands-on full-stack application development.
          </p>

        </div>


        {/* SKILL CARDS */}
        <div className="skills-grid">

          {skillGroups.map((group) => (

            <div
              className="skill-card"
              key={group.number}
            >

              <div className="skill-card-top">

                <span className="skill-number">
                  {group.number}
                </span>

                <span className="skill-line"></span>

              </div>


              <h3>
                {group.title}
              </h3>


              <p>
                {group.description}
              </p>


              <div className="skill-list">

                {group.skills.map((skill) => (

                  <span
                    className="skill-tag"
                    key={skill}
                  >
                    {skill}
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