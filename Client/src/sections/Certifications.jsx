import Stars from "../components/Stars";

function Certifications() {
  const technicalCertifications = [
    {
      number: "01",
      name: "Java",
      organization: "Cybernaut",
      date: "04-07-2025",
      score: "79%",
      credentialId: "CNTTJV02500268",
      description:
        "Covered core Java programming, object-oriented concepts and problem-solving fundamentals.",
      certificate: "/certificates/Technical/Cybernaut-java.pdf"
    },

    {
      number: "02",
      name: "Python",
      organization: "Cybernaut",
      date: "06-09-2025",
      score: "95%",
      credentialId: "CNTTPY02500268",
      description:
        "Covered Python programming fundamentals, problem-solving and application development concepts.",
      certificate: "/certificates/Technical/Cybernaut-python.pdf"
    },

    {
      number: "03",
      name: "C++",
      organization: "Cybernaut",
      date: "28-04-2025",
      score: "88%",
      credentialId: "CNTTCPP02500267",
      description:
        "Covered C++ programming fundamentals, object-oriented programming and logical problem-solving.",
      certificate: "/certificates/Technical/Cybernaut-cpp.pdf"
    },

    {
      number: "04",
      name: "Full Stack",
      organization: "NoviTech",
      date: "10-07-2025 to 16-08-2025",
      credentialId: "NT_B42FSDE35",
      description:
        "Focused on full-stack web development using frontend, backend, database and application development concepts.",
      certificate: "/certificates/Technical/FullStack.pdf"
    },

    {
      number: "05",
      name: "UI/UX Design",
      organization: "NoviTech",
      date: "28-04-2025 to 11-06-2025",
      credentialId: "NT_B1UIUX35",
      description:
        "Covered UI/UX principles, user-centered design, wireframing and creating intuitive digital interfaces.",
      certificate: "/certificates/Technical/Ui&Ux.pdf"
    },

    {
      number: "06",
      name: "Data Analytics",
      organization: "NoviTech",
      date: "25-09-2025 to 05-11-2025",
      credentialId: "NT_B32DAT174",
      description:
        "Introduced data analysis concepts, data interpretation and techniques for deriving useful insights.",
      certificate: "/certificates/Technical/DataAnalytics.pdf"
    },

    {
      number: "07",
      name: "Natural Language Processing",
      organization: "Pantech e Learning",
      date: "23-09-2024 to 23-10-2024",
      credentialId: "PEL-PART-MC-1106",
      description:
        "Introduced natural language processing concepts and techniques for working with human language data.",
      certificate: "/certificates/Technical/NLP.pdf"
    },

    {
      number: "08",
      name: "Arduino Training",
      organization: "Spoken Tutorial",
      date: "17-06-2026",
      score: "95%",
      credits: "3 Credits",
      credentialId: "35842793GA",
      description:
        "Covered Arduino programming, microcontroller concepts and basic hardware interfacing.",
      certificate: "/certificates/Technical/Arduino.pdf"
    },

    {
      number: "09",
      name: "HTML Training",
      organization: "Spoken Tutorial",
      date: "22-11-2024",
      score: "82.50%",
      credits: "1 Credit",
      credentialId: "3584279BY0",
      description:
        "Covered HTML fundamentals for creating structured and accessible web pages.",
      certificate: "/certificates/Technical/HTML.pdf"
    },

    {
      number: "10",
      name: "Introduction to Computers Training",
      organization: "Spoken Tutorial",
      date: "28-11-2024",
      score: "100%",
      credits: "1 Credit",
      credentialId: "3584279YQ",
      description:
        "Covered fundamental computer concepts, operating systems and essential computing skills.",
      certificate: "/certificates/Technical/ComputersTraining.pdf"
    },

    {
      number: "11",
      name: "JavaScript Training",
      organization: "Spoken Tutorial",
      date: "21-05-2025",
      score: "97.50%",
      credits: "2 Credits",
      credentialId: "3584279ST7",
      description:
        "Covered JavaScript fundamentals, programming logic and interactive web development concepts.",
      certificate: "/certificates/Technical/Javascript.pdf"
    },

    {
      number: "12",
      name: "Linux Training",
      organization: "Spoken Tutorial",
      date: "22-05-2025",
      score: "73.33%",
      credits: "2 Credits",
      credentialId: "35842794KA",
      description:
        "Covered Linux fundamentals, command-line operations and basic system management concepts.",
      certificate: "/certificates/Technical/Linux.pdf"
    },

    {
      number: "13",
      name: "Android App Using Kotlin Training",
      organization: "Spoken Tutorial",
      date: "23-05-2025",
      score: "92.50%",
      credits: "2 Credits",
      credentialId: "3584279GOT",
      description:
        "Introduced Android application development using Kotlin and fundamental mobile development concepts.",
      certificate: "/certificates/Technical/KotlinTraining.pdf"
    },

    {
      number: "14",
      name: "Jmol Application Training",
      organization: "Spoken Tutorial",
      date: "18-06-2026",
      score: "87.50%",
      credits: "2 Credits",
      credentialId: "3584279SQS",
      description:
        "Covered the use of Jmol for interactive molecular visualization and scientific applications.",
      certificate: "/certificates/Technical/Jmol.pdf"
    },

    {
      number: "15",
      name: "PERL Training",
      organization: "Spoken Tutorial",
      date: "18-12-2025",
      score: "96.67%",
      credits: "3 Credits",
      credentialId: "3584279681",
      description:
        "Covered Perl programming fundamentals, scripting concepts and basic problem-solving.",
      certificate: "/certificates/Technical/perl.pdf"
    },

    {
      number: "16",
      name: "ns-3 Network Simulator Training",
      organization: "Spoken Tutorial",
      date: "17-12-2025",
      score: "98.33%",
      credits: "2 Credits",
      credentialId: "3584279ZFP",
      description:
        "Introduced network simulation concepts and the use of ns-3 for modelling network scenarios.",
      certificate: "/certificates/Technical/ns3.pdf"
    },

    {
      number: "17",
      name: "GUI in Scilan Training",
      organization: "Spoken Tutorial",
      date: "16-12-2025",
      score: "90%",
      credits: "1 Credit",
      credentialId: "35842793KJ",
      description:
        "Covered graphical user interface concepts and application development using Scilab.",
      certificate: "/certificates/Technical/GUI.pdf"
    },

    {
      number: "18",
      name: "C Training",
      organization: "Spoken Tutorial",
      date: "22-05-2024",
      score: "62.5%",
      credits: "2 Credits",
      credentialId: "3584279WAM",
      description:
        "Covered C programming fundamentals, control structures, functions and basic problem-solving.",
      certificate: "/certificates/Technical/C.pdf"
    }
  ];

  const industryCertifications = [
    {
      number: "01",
      name: "Introduction to OpenRoads Designer Concepts and Capabilities",
      organization: "Bentley (ICT Academy)",
      date: "17-10-2024",
      credentialId: "C121336",
      description:
        "Introduced the core concepts and capabilities of OpenRoads Designer for infrastructure design.",
      certificate: "/certificates/Platform/bentley1.pdf"
    },

    {
      number: "02",
      name: "2D/3D CAD Modeling of Building Environment",
      organization: "Bentley (ICT Academy)",
      date: "17-10-2024",
      credentialId: "C121377",
      description:
        "Covered fundamental 2D and 3D CAD modelling concepts for building environments.",
      certificate: "/certificates/Platform/bentley2.pdf"
    },

    {
      number: "03",
      name: "Modelling Structures with Analytical Modeler",
      organization: "Bentley (ICT Academy)",
      date: "17-10-2024",
      credentialId: "C121387",
      description:
        "Introduced structural modelling concepts using analytical modelling tools.",
      certificate: "/certificates/Platform/bentley3.pdf"
    },

    {
      number: "04",
      name: "Celonis Foundation",
      organization: "Celonis (ICT Academy)",
      date: "15-09-2024",
      verify:
        "https://www.credly.com/badges/209a5810-d605-412b-b410-40e1f93e79db",
      description:
        "Introduced process mining concepts and the fundamentals of the Celonis platform.",
      certificate: "/certificates/Platform/Celonis1.pdf"
    },

    {
      number: "05",
      name: "Academic Process Mining Fundamentals",
      organization: "Celonis (ICT Academy)",
      date: "16-09-2024",
      verify:
        "https://www.credly.com/badges/23c8c867-eb72-4991-9d5f-f5b6d62956d7",
      description:
        "Covered fundamental process mining concepts and how process data can be analyzed for improvement.",
      certificate: "/certificates/Platform/Celonis2.pdf"
    },

    {
      number: "06",
      name: "Deep Learning Onramp",
      organization: "MathWorks (ICT Academy)",
      date: "30-09-2024",
      description:
        "Introduced deep learning concepts and the fundamentals of building neural network models.",
      certificate: "/certificates/Platform/mathworks1.pdf"
    },

    {
      number: "07",
      name: "Machine Learning Onramp",
      organization: "MathWorks (ICT Academy)",
      date: "28-10-2024",
      description:
        "Introduced machine learning concepts, model training and basic predictive analysis.",
      certificate: "/certificates/Platform/mathworks2.pdf"
    },

    {
      number: "08",
      name: "Introduction to MongoDB, AI, and Vector Search",
      organization: "MongoDB (ICT Academy)",
      date: "17-09-2024",
      credentialId: "MDBwz5t3j9zhq",
      description:
        "Introduced MongoDB, AI concepts and vector search capabilities for modern data applications.",
      certificate: "/certificates/Platform/mongodb1.pdf"
    },

    {
      number: "09",
      name: "MongoDB Basics for Students",
      organization: "MongoDB (ICT Academy)",
      date: "26-07-2025",
      verify: "https://www.credly.com/go/5LI39fJf",
      description:
        "Covered MongoDB fundamentals, document-based data modelling and basic database operations.",
      certificate: "/certificates/Platform/mongodb2.pdf"
    },

    {
      number: "10",
      name: "UiPath Automation Explorer for Students",
      organization: "UiPath (ICT Academy)",
      date: "30-10-2024",
      description:
        "Introduced robotic process automation concepts and automation workflows using UiPath.",
      certificate: "/certificates/Platform/uipath1.pdf"
    },

    {
      number: "11",
      name: "UiPath Academy Automation Explorer Training",
      organization: "UiPath (ICT Academy)",
      date: "09-11-2024",
      description:
        "Covered fundamental automation concepts and the use of UiPath tools for workflow automation.",
      certificate: "/certificates/Platform/uipath2.pdf"
    },

    {
      number: "12",
      name: "Effective Speaking and Listening Skills",
      organization: "Wadhwani (ICT Academy)",
      date: "26-10-2024",
      description:
        "Focused on effective communication, active listening and professional workplace interaction.",
      certificate: "/certificates/Platform/Wadhwani1.pdf"
    },

    {
      number: "13",
      name: "Professionalism",
      organization: "Wadhwani (ICT Academy)",
      date: "26-10-2024",
      description:
        "Focused on professional behavior, workplace skills and developing a professional mindset.",
      certificate: "/certificates/Platform/Wadhwani2.pdf"
    }
  ];

  const workshopsAndProfessional = [
    {
      number: "01",
      name: "BlackOps – A Cybersecurity Workshop",
      organization: "Kings Engineering College",
      date: "20-01-2026",
      description:
        "Explored fundamental cybersecurity concepts, security practices and common cyber threats.",
      certificate: "/certificates/Workshops/kings1.pdf"
    },

    {
      number: "02",
      name: "UI/UX Design: An Industry Perspective",
      organization: "Kings Engineering College",
      date: "04-10-2024",
      description:
        "Explored practical UI/UX design principles and how design is applied in industry.",
      certificate: "/certificates/Workshops/kings2.pdf"
    },

    {
      number: "03",
      name: "Visionary Vision – Paper Presentation",
      organization: "Kings Engineering College",
      date: "09-08-2025",
      description:
        "Participated in a technical paper presentation focused on research, communication and presentation skills.",
      certificate: "/certificates/Workshops/kings3.pdf"
    },

    {
      number: "04",
      name: "Resume Creation Secrets – From Draft to Dream Job",
      organization: "NoviTech",
      date: "28-09-2025",
      credentialId: "NT_MFSDBT37",
      description:
        "Focused on creating an effective resume and presenting skills and experience for career opportunities.",
      certificate: "/certificates/Workshops/novitech1.pdf"
    },

    {
      number: "05",
      name: "Productivity with Macros – Making Excel Work for You",
      organization: "NoviTech",
      date: "21-09-2025",
      credentialId: "NT_RDAB47",
      description:
        "Introduced Excel macros and techniques for improving productivity through automation.",
      certificate: "/certificates/Workshops/novitech2.pdf"
    },

    {
      number: "06",
      name: "Data Driven World",
      organization: "NoviTech",
      date: "02-10-2025",
      credentialId: "NT_2FWB53",
      description:
        "Explored the role of data in modern applications, decision-making and business processes.",
      certificate: "/certificates/Workshops/novitech3.pdf"
    },

    {
      number: "07",
      name: "Development to Deployment",
      organization: "NoviTech",
      date: "21-09-2025",
      credentialId: "NT_BFSDB51",
      description:
        "Explored the software development lifecycle from application development through deployment.",
      certificate: "/certificates/Workshops/novitech4.pdf"
    },

    {
      number: "08",
      name: "Power Query Essentials – Shaping & Transforming Your Data",
      organization: "NoviTech",
      date: "28-09-2025",
      credentialId: "NT_RDABT47",
      description:
        "Covered data transformation, cleaning and preparation using Power Query.",
      certificate: "/certificates/Workshops/novitech5.pdf"
    },

    {
      number: "09",
      name: "Leveraging Full Stack with AI",
      organization: "NoviTech",
      date: "28-09-2025",
      credentialId: "NT_BFSDBT49",
      description:
        "Explored how AI capabilities can be integrated into modern full-stack applications.",
      certificate: "/certificates/Workshops/novitech6.pdf"
    },

    {
      number: "10",
      name: "Frontend Bootcamp: Events in JavaScript",
      organization: "NoviTech",
      date: "21-12-2025",
      credentialId: "NT_BSCC47",
      description:
        "Focused on JavaScript event handling and creating interactive frontend experiences.",
      certificate: "/certificates/Workshops/novitech7.pdf"
    },

    {
      number: "11",
      name: "Take Your First Step into Open Source Limited. with GitHub",
      organization: "NoviTech",
      date: "20-09-2025",
      credentialId: "NT_MFSDB39",
      description:
        "Introduced open-source collaboration, GitHub workflows and contributing to software projects.",
      certificate: "/certificates/Workshops/novitech8.pdf"
    },

    {
      number: "12",
      name: "Certificate – Upskill from Cambridge",
      organization: "Upskill from Cambridge (Naan Mudhalvan)",
      date: "27-05-2024",
      credentialId: "ENG_577010",
      description:
        "Completed a professional upskilling program focused on developing career-ready skills.",
      certificate: "/certificates/Workshops/upskill.pdf"
    }
  ];

  const CertificationCard = ({ certificate }) => {
    return (
      <article className="certification-card">

        {/* CARD TOP */}
        <div className="certification-card-top">

          <span className="certification-number">
            {certificate.number}
          </span>

          <span className="certification-date">
            {certificate.date}
          </span>

        </div>


        {/* CARD CONTENT */}
        <div className="certification-content">

          <h3>
            {certificate.name}
          </h3>

          <p className="certification-organization">
            {certificate.organization}
          </p>

          {/* SHORT DESCRIPTION */}
          <p className="certification-description">
            {certificate.description}
          </p>


          {/* CERTIFICATION META */}
          <div className="certification-meta">

            {certificate.score && (
              <span>
                <strong>Score</strong>
                {certificate.score}
              </span>
            )}

            {certificate.credits && (
              <span>
                <strong>Credits</strong>
                {certificate.credits}
              </span>
            )}

            {certificate.credentialId && (
              <span>
                <strong>ID</strong>
                {certificate.credentialId}
              </span>
            )}

          </div>


          {/* VIEW CERTIFICATE */}
          {certificate.certificate && (
            <a
              href={certificate.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="certification-view"
            >
              <span className="certificate-icon">
                ✦
              </span>

              View Certificate

              <span className="certificate-arrow">
                ↗
              </span>
            </a>
          )}

        </div>


        {/* VERIFY CREDENTIAL */}
        {certificate.verify && (
          <a
            href={certificate.verify}
            target="_blank"
            rel="noopener noreferrer"
            className="certification-verify"
          >
            Verify Credential

            <span>
              ↗
            </span>
          </a>
        )}

      </article>
    );
  };


  const CertificationSection = ({
    number,
    title,
    description,
    certificates
  }) => {

    return (
      <div className="certification-group">

        {/* GROUP HEADING */}
        <div className="certification-group-heading">

          <div className="certification-group-title">

            <span>
              {number}
            </span>

            <div>

              <p className="certification-group-label">
                CERTIFICATION CATEGORY
              </p>

              <h3>
                {title}
              </h3>

            </div>

          </div>


          <p className="certification-group-description">
            {description}
          </p>

        </div>


        {/* CERTIFICATIONS GRID */}
        <div className="certifications-grid">

          {certificates.map((certificate) => (

            <CertificationCard
              key={`${number}-${certificate.number}-${certificate.name}`}
              certificate={certificate}
            />

          ))}

        </div>

      </div>
    );
  };


  return (
    <section
      id="certifications"
      className="certifications-section"
    >

      {/* STAR BACKGROUND */}
      <Stars />


      <div className="certifications-container">

        {/* SECTION HEADING */}
        <div className="certifications-heading">

          <p className="section-label">
            CERTIFICATIONS
          </p>

          <h2>
            Learning Beyond the Classroom
          </h2>

          <p className="certifications-intro">
            A collection of technical certifications, industry
            learning experiences and professional development
            activities that reflect my continuous learning and
            interest in software development.
          </p>

        </div>


        {/* TECHNICAL CERTIFICATIONS */}
        <CertificationSection
          number="01"
          title="Technical Certifications"
          description="Certifications focused on programming, web development, full stack development, databases, data analytics, AI and other technical skills."
          certificates={technicalCertifications}
        />


        {/* INDUSTRY CERTIFICATIONS */}
        <CertificationSection
          number="02"
          title="Industry & Platform Certifications"
          description="Industry-recognized learning and platform certifications completed through ICT Academy and established technology learning platforms."
          certificates={industryCertifications}
        />


        {/* WORKSHOPS */}
        <CertificationSection
          number="03"
          title="Workshops & Professional Development"
          description="Workshops, bootcamps, presentations and professional development programs that supported my technical, communication and career skills."
          certificates={workshopsAndProfessional}
        />

      </div>

    </section>
  );
}

export default Certifications;