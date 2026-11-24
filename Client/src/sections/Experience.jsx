import Stars from "../components/Stars";

function Experience() {
  const experiences = [
    {
      number: "01",
      company: "INTERPE",
      role: "Web Developer Intern",
      duration: "15 DAYS INTERNSHIP",

      description:
        "Completed my first internship as a Web Developer, gaining practical experience in building responsive web applications and strengthening my frontend development skills.",

      projects: [
        "Simple Calculator",
        "E-Commerce Website"
      ],

      technologies: [
        "HTML",
        "CSS",
        "JavaScript"
      ],

      certificate: "/experience/InterPe-Completion.png",
      offerLetter: "/experience/InterPe-Offer-Letter.png"
    },

    {
      number: "02",
      company: "THIRANEX",
      role: "Full Stack Developer Intern",
      duration: "1 MONTH INTERNSHIP",

      description:
        "Completed a one-month internship as a Full Stack Developer, working on multiple web applications and gaining practical experience across frontend, backend and database-driven development.",

      projects: [
        "Personal Portfolio",
        "ShopSphere",
        "Blogify",
        "Task Management Application"
      ],

      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB"
      ],

      certificate: "/experience/Thiranex-Completion.pdf",
      offerLetter: "/experience/Thiranex-Offer-Letter.pdf"
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <Stars />

      <div className="experience-container">

        {/* SECTION HEADING */}

        <div className="experience-heading">

          <p className="section-label">
            EXPERIENCE
          </p>

          <h2>
            Where I Gained Practical Experience
          </h2>

          <p className="experience-intro">
            My internship experiences gave me the opportunity to apply
            my technical knowledge to real-world development projects,
            strengthen my problem-solving skills and understand the
            software development process.
          </p>

        </div>


        {/* EXPERIENCE TIMELINE */}

        <div className="experience-timeline">

          {experiences.map((experience) => (

            <div
              className="experience-card"
              key={experience.number}
            >

              {/* TOP */}

              <div className="experience-top">

                <span className="experience-number">
                  {experience.number}
                </span>

                <span className="experience-duration">
                  {experience.duration}
                </span>

              </div>


              {/* MAIN CONTENT */}

              <div className="experience-content">

                <p className="experience-company">
                  {experience.company}
                </p>

                <h3>
                  {experience.role}
                </h3>

                <p className="experience-description">
                  {experience.description}
                </p>


                {/* PROJECTS */}

                <div className="experience-projects">

                  <h4>
                    PROJECTS & WORK
                  </h4>

                  <div className="experience-project-list">

                    {experience.projects.map((project) => (

                      <span key={project}>
                        {project}
                      </span>

                    ))}

                  </div>

                </div>


                {/* TECHNOLOGIES */}

                <div className="experience-technologies">

                  <h4>
                    TECHNOLOGIES
                  </h4>

                  <div className="experience-tech-list">

                    {experience.technologies.map((technology) => (

                      <span key={technology}>
                        {technology}
                      </span>

                    ))}

                  </div>

                </div>


                {/* DOCUMENTS */}

                <div className="experience-documents">

                  <a
                    href={experience.offerLetter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-button"
                  >
                    ✦ View Offer Letter
                    <span className="document-arrow">
                      ↗
                    </span>
                  </a>

                  <a
                    href={experience.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-button"
                  >
                    ✦ View Certificate
                    <span className="document-arrow">
                      ↗
                    </span>
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;