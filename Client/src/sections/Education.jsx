import Stars from "../components/Stars";

function Education() {
  const education = [
    {
      number: "01",
      status: "UNDERGRADUATE",
      degree: "Bachelor of Engineering",
      field: "Computer Science and Engineering",
      institution: "Kings Engineering College",
      location: "Sriperumbudur, Chennai",
      description:
        "Built a strong foundation in software development, web technologies, databases, cloud computing, cybersecurity, embedded systems and object-oriented software engineering.",
      highlight: "8.12",
      highlightLabel: "CGPA",
      highlightNote: "Up to 6th Semester"
    },

    {
      number: "02",
      status: "HIGHER SECONDARY",
      degree: "Higher Secondary Education",
      field: "Bio-Maths",
      institution: "R.C.M. Matriculation Higher Secondary School",
      location: "Avadi, Chennai",
      description:
        "Completed higher secondary education with Biology as the major stream, developing a strong foundation in scientific concepts and analytical thinking.",
      highlight: "66.83%",
      highlightLabel: "Percentage",
      highlightNote: "Completed in 2023"
    },

    {
      number: "03",
      status: "SECONDARY SCHOOL",
      degree: "Secondary School Leaving Certificate",
      institution: "R.C.M. Matriculation School",
      location: "Avadi, Chennai",
      description:
        "Completed secondary school education during the COVID-19 academic batch, with all subjects successfully cleared.",
      highlight: "All Pass",
      highlightLabel: "Result",
      highlightNote: "Completed under COVID-19 Batch in 2021"
    }
  ];

  return (
    <section id="education" className="education-section">

      {/* STAR BACKGROUND */}
      <Stars />

      <div className="education-container">

        {/* SECTION HEADING */}
        <div className="education-heading">

          <p className="section-label">
            EDUCATION
          </p>

          <h2>
            My Academic Journey
          </h2>

          <p className="education-intro">
            My academic journey from school education to Computer Science
            and Engineering, building the foundation for my career in technology.
          </p>

        </div>


        {/* EDUCATION CONTENT */}
        <div className="education-content">

          {education.map((item) => (

            <div
              className="education-card"
              key={item.number}
            >

              {/* NUMBER */}
              <div className="education-number">
                {item.number}
              </div>


              {/* DETAILS */}
              <div className="education-details">

                <span className="education-status">
                  {item.status}
                </span>

                <h3>
                  {item.degree}
                </h3>

                <h4>
                  {item.field}
                </h4>

                <p className="education-institution">
                  {item.institution}
                </p>


                {/* LOCATION */}
                <div className="education-meta">

                  <span>
                    📍 {item.location}
                  </span>

                </div>


                {/* DESCRIPTION */}
                <p className="education-description">
                  {item.description}
                </p>


                {/* HIGHLIGHT */}
                <div className="education-highlight">

                  <span>
                    {item.highlightLabel}:
                  </span>

                  <strong>
                    {item.highlight}
                  </strong>

                  <small>
                    {item.highlightNote}
                  </small>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Education;