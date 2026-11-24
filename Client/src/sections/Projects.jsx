import Stars from "../components/Stars";

function Projects() {
  const fullStackProjects = [
    {
      number: "01",
      title: "ShopSphere",
      subtitle: "Full Stack E-Commerce Platform",
      category: "FULL STACK DEVELOPMENT",
      image: "/projects/ShopSphere.png.png",
      description:
        "A full-stack e-commerce platform with user authentication, product management, shopping cart, checkout, order management and an admin dashboard.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB"
      ],
      github:
        "https://github.com/janishasweety1912-stack/ShopSphere---Full-Stack-E-Commerce-Platform.git",
      live:
        "https://shop-sphere-full-stack-e-commerce-p.vercel.app"
    },

    {
      number: "02",
      title: "Blogify",
      subtitle: "Full Stack Blogging Platform",
      category: "FULL STACK DEVELOPMENT",
      image: "/projects/Blogify.png.png",
      description:
        "A full-stack blogging platform with authentication, protected routes, blog creation and editing, search, category filtering, comments and user profiles.",
      technologies: [
        "React",
        "React Router",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT"
      ],
      github:
        "https://github.com/janishasweety1912-stack/Blogify---Full-Stack-Blogging-Platform.git",
      live:
        "https://blogify-full-stack-blogging-platfor-alpha.vercel.app/"
    },

    {
      number: "03",
      title: "QuizTac",
      subtitle: "Quiz-Based Tic-Tac-Toe Game",
      category: "FULL STACK DEVELOPMENT",
      image: "/projects/QuizTac.png.png",
      description:
        "A full-stack quiz-based Tic-Tac-Toe game where players answer questions to make moves, featuring multiple difficulty levels, multiplayer, computer AI, game history and leaderboard.",
      technologies: [
        "React",
        "Vite",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Minimax AI"
      ],
      github:
        "https://github.com/janishasweety1912-stack/Tic-Tac-Toe-Game-Application.git",
      live:
        "https://tic-tac-toe-game-application-89rw8ol3f.vercel.app"
    },

    {
      number: "04",
      title: "TaskFlow",
      subtitle: "Task Management Application",
      category: "FULL STACK DEVELOPMENT",
      image: "/projects/TaskFlow.png.png",
      description:
        "A full-stack task management application for creating, updating, deleting and organizing tasks with user authentication and persistent database storage.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT"
      ],
      github:
        "https://github.com/janishasweety1912-stack/Task-Management-Application.git",
      live:
        "https://task-management-application-taupe.vercel.app"
    },

    {
      number: "05",
      title: "Personal Portfolio",
      subtitle: "Full Stack Portfolio Website",
      category: "FULL STACK DEVELOPMENT",
      image: "/projects/PersonalPortfolio.png.png",
      description:
        "A personal portfolio website designed to showcase education, technical skills, projects, experience, certifications and achievements with a backend-powered contact system.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB"
      ],
      github:
        "https://github.com/janishasweety1912-stack/Personal-Portfolio-Website.git",
      live:
        "https://personal-portfolio-website-iota-pied.vercel.app/"
    }
  ];

  const webDevelopmentProjects = [
    {
      number: "01",
      title: "E-Commerce Website",
      subtitle: "Web Development Project",
      category: "WEB DEVELOPMENT",
      image: "/projects/E-CommerceWebsite.png.jpeg",
      description:
        "A web development project focused on creating an e-commerce website interface with a clean structure and user-friendly shopping experience.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      github:
        "https://github.com/janishasweety1912-stack/Ecommerce_Website.git",
      live: "https://ecommerce-website-theta-teal.vercel.app/"
    },

    {
      number: "02",
      title: "Simple Calculator",
      subtitle: "Responsive Calculator Application",
      category: "WEB DEVELOPMENT",
      image: "/projects/SimpleCalculator.png.png",
      description:
        "A responsive calculator web application that performs basic arithmetic operations including addition, subtraction, multiplication and division.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      github:
        "https://github.com/janishasweety1912-stack/Simple-Calculator.git",
      live: "https://simple-calculator-kappa-six.vercel.app/"
    }
  ];

  const ProjectCard = ({ project }) => {
    return (
      <div className="project-card">

        {/* Project Image */}
        <div className="project-image">
          <img
            src={project.image}
            alt={`${project.title} project screenshot`}
          />
        </div>

        {/* Project Number + Category */}
        <div className="project-top">
          <span className="project-number">
            {project.number}
          </span>

          <span className="project-category">
            {project.category}
          </span>
        </div>

        {/* Project Content */}
        <div className="project-content">
          <h3>{project.title}</h3>

          <h4>{project.subtitle}</h4>

          <p>{project.description}</p>

          {/* Technologies */}
          <div className="project-tech">
            {project.technologies.map((technology) => (
              <span key={technology}>
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Project Actions */}
        <div className="project-actions">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            GitHub <span>↗</span>
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link project-live-link"
            >
              Live Demo <span>↗</span>
            </a>
          )}

        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="projects-section">
      <Stars />

      <div className="projects-container">

        {/* =================================================
            MAIN PROJECT HEADING
        ================================================= */}

        <div className="projects-heading">
          <p className="section-label">PROJECTS</p>

          <h2>Things I Have Built</h2>

          <p className="projects-intro">
            A collection of projects developed through academic
            learning, personal practice and hands-on software
            development. Each project reflects my interest in
            building practical and user-focused applications.
          </p>
        </div>


        {/* =================================================
            FULL STACK DEVELOPMENT
        ================================================= */}

        <div className="projects-group">

          <div className="projects-group-heading">
            <div>
              <span>01</span>

              <h3>Full Stack Development</h3>
            </div>

            <p>
              End-to-end applications covering frontend,
              backend, APIs, authentication and database
              integration.
            </p>
          </div>


          <div className="fullstack-projects-grid">
            {fullStackProjects.map((project) => (
              <ProjectCard
                key={project.number + project.title}
                project={project}
              />
            ))}
          </div>

        </div>


        {/* =================================================
            WEB DEVELOPMENT
        ================================================= */}

        <div className="projects-group">

          <div className="projects-group-heading">
            <div>
              <span>02</span>

              <h3>Web Development</h3>
            </div>

            <p>
              Responsive web projects focused on frontend
              development, functionality and clean user
              interfaces.
            </p>
          </div>


          <div className="web-development-projects-grid">
            {webDevelopmentProjects.map((project) => (
              <ProjectCard
                key={project.number + project.title}
                project={project}
              />
            ))}
          </div>

        </div>


        {/* =================================================
            UI / UX DESIGN
        ================================================= */}

        <div className="projects-group">

          <div className="projects-group-heading">
            <div>
              <span>03</span>

              <h3>UI / UX Design</h3>
            </div>

            <p>
              Design-focused work will be added as I continue
              developing my UI/UX portfolio.
            </p>
          </div>


          <div className="uiux-project-area">

            <div className="uiux-number">
              01
            </div>

            <div className="uiux-content">

              <span className="project-category">
                UI / UX DESIGN
              </span>

              <h3>
                Design Work Coming Soon
              </h3>

              <p>
                I am currently building dedicated UI/UX design
                projects to showcase my skills in user research,
                wireframing, interface design and responsive
                user experiences.
              </p>

              <span className="uiux-status">
                IN PROGRESS
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;