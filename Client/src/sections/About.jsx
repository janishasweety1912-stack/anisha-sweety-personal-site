import Stars from "../components/Stars";

function About() {
  return (
    <section id="about" className="about-section">

      {/* STAR BACKGROUND */}
      <Stars />

      <div className="about-container">

        <div className="about-heading">
          <p className="section-label">ABOUT ME</p>
          <h2>Who I Am</h2>
        </div>

        <div className="about-content">

          <div className="about-text">

            <h3>
              A Computer Science graduate building my career in
              <span> Software Development.</span>
            </h3>

            <p>
              I am a Computer Science and Engineering graduate with a
              strong interest in Software Development, particularly
              Full Stack Development and UI/UX Design.
            </p>

            <p>
              I enjoy building responsive and user-friendly web
              applications, working across both frontend and backend
              technologies, and creating interfaces that are simple,
              functional and visually engaging.
            </p>

            <p>
              As I begin my professional career, I am actively looking
              for an entry-level Software Developer opportunity where
              I can apply my technical skills, contribute to real-world
              projects and continue growing as a developer.
            </p>

          </div>

          <div className="about-card">

            <div className="about-card-item">
              <span className="about-icon">01</span>

              <div>
                <h4>Full Stack Development</h4>

                <p>
                  Building responsive frontend interfaces and
                  developing backend applications, APIs and
                  database-driven systems.
                </p>
              </div>
            </div>

            <div className="about-card-item">
              <span className="about-icon">02</span>

              <div>
                <h4>UI / UX Design</h4>

                <p>
                  Creating clean, intuitive and responsive interfaces
                  with a focus on usability and user experience.
                </p>
              </div>
            </div>

            <div className="about-card-item">
              <span className="about-icon">03</span>

              <div>
                <h4>Career Goal</h4>

                <p>
                  Seeking an opportunity as a Software Developer to
                  learn, contribute and grow through real-world
                  development experience.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;