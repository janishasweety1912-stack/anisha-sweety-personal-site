import Stars from "../components/Stars";

function Resume() {
  return (
    <section id="resume" className="resume-section">
      <Stars />

      <div className="resume-container">
        <div className="resume-heading">
          <p className="section-label">RESUME</p>
          <h2>My Professional Profile</h2>
          <p className="resume-intro">
            A concise overview of my education, technical skills,
            projects and practical experience as I begin my career
            in software development.
          </p>
        </div>

        <div className="resume-content">
          <div className="resume-info">
            <span className="resume-label">CAREER PROFILE</span>

            <h3>
              Ready to contribute, learn and grow
              <span> as a Software Developer.</span>
            </h3>

            <p>
              I am a Computer Science and Engineering student with
              hands-on experience in full stack development, web
              development and UI/UX design. My projects and
              internships have helped me develop practical
              experience in building responsive applications,
              working with backend technologies and managing
              database-driven systems.
            </p>

            <div className="resume-highlights">
              <div>
                <span>01</span>
                <p>Full Stack Development</p>
              </div>

              <div>
                <span>02</span>
                <p>Web Development</p>
              </div>

              <div>
                <span>03</span>
                <p>UI / UX Design</p>
              </div>
            </div>

            <div className="resume-actions">
              <a
                href="/resume/Anisha_Sweety_J_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn"
              >   
                View Resume
                <span>↗</span>
              </a>

              <a
                href="/resume/Anisha_Sweety_J_Resume.pdf"
                download="Anisha_Sweety_J_Resume.pdf"
                className="primary-btn"
              >
                 Download Resume
                <span>↓</span>
              </a>
            </div>
          </div>

          <div className="resume-preview">
            <div className="resume-paper">
              <div className="resume-paper-top">
                <div>
                  <span className="resume-paper-small">
                    PROFESSIONAL PROFILE
                  </span>

                  <h3>Anisha Sweety J</h3>

                  <p>Computer Science & Engineering</p>
                </div>

                <div className="resume-paper-mark">
                  ASJ
                </div>
              </div>

              <div className="resume-paper-line"></div>

              <div className="resume-paper-section">
                <span>PROFILE</span>

                <div className="resume-paper-lines">
                  <i></i>
                  <i></i>
                  <i className="short"></i>
                </div>
              </div>

              <div className="resume-paper-section">
                <span>TECHNICAL SKILLS</span>

                <div className="resume-paper-tags">
                  <b>React</b>
                  <b>Node.js</b>
                  <b>MongoDB</b>
                  <b>JavaScript</b>
                </div>
              </div>

              <div className="resume-paper-section">
                <span>EXPERIENCE</span>

                <div className="resume-paper-lines">
                  <i></i>
                  <i></i>
                  <i className="short"></i>
                </div>
              </div>

              <div className="resume-paper-section">
                <span>PROJECTS</span>

                <div className="resume-paper-projects">
                  <b>ShopSphere</b>
                  <b>Blogify</b>
                  <b>TaskFlow</b>
                </div>
              </div>

              <div className="resume-paper-footer">
                <span>SOFTWARE DEVELOPMENT</span>
                <span>2026</span>
              </div>
            </div>

            <div className="resume-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;