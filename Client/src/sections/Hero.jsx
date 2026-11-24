import Stars from "../components/Stars";

function Hero() {
  return (
    <section className="hero" id="home">
      <Stars />

      <div className="hero-content">
        <p className="availability">
          <span className="availability-dot"></span>
          OPEN TO ENTRY-LEVEL OPPORTUNITIES
        </p>

        <p className="hero-subtitle">
          WELCOME TO MY PORTFOLIO
        </p>

        <h1>Anisha Sweety J</h1>

        <p className="hero-role">
          Full Stack Developer <span>•</span> UI/UX Enthusiast
        </p>

        <p className="hero-description">
          Passionate about building responsive web applications
          and creating meaningful digital experiences through
          technology and creativity.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="primary-btn">
            View My Work
          </a>

          <a
            href="/resume/Anisha_Sweety_J_Resume.pdf"
            download="Anisha_Sweety_J_Resume.pdf"
            className="secondary-btn"
          >
            Download My Resume
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="hero-image-circle">
          <img
            src="/images/profile-image.png.png"
            alt="Anisha Sweety J"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
