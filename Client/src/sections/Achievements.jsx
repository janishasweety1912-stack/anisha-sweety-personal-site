import Stars from "../components/Stars";

function Achievements() {
  const achievements = [
    {
      number: "01",
      platform: "HACKERRANK",
      title: "5★ Java",
      description:
        "Achieved a 5-star skill rating in Java through programming challenges and problem-solving practice.",
      skill: "Java"
    },

    {
      number: "02",
      platform: "HACKERRANK",
      title: "5★ C++",
      description:
        "Achieved a 5-star skill rating in C++ by solving programming challenges and demonstrating problem-solving ability.",
      skill: "C++"
    },

    {
      number: "03",
      platform: "HACKERRANK",
      title: "5★ Python",
      description:
        "Achieved a 5-star skill rating in Python through consistent practice and programming challenges.",
      skill: "Python"
    }
  ];

  return (
    <section
      id="achievements"
      className="achievements-section"
    >
      <Stars />

      <div className="achievements-container">

        {/* SECTION HEADING */}
        <div className="achievements-heading">

          <p className="section-label">
            ACHIEVEMENTS
          </p>

          <h2>
            Milestones That Reflect My Growth
          </h2>

          <p className="achievements-intro">
            Technical milestones achieved through consistent
            programming practice, problem-solving and continuous
            learning.
          </p>

        </div>


        {/* ACHIEVEMENTS */}
        <div className="achievements-grid">

          {achievements.map((achievement) => (

            <article
              className="achievement-card"
              key={achievement.number}
            >

              {/* CARD TOP */}
              <div className="achievement-top">

                <span className="achievement-number">
                  {achievement.number}
                </span>

                <span className="achievement-platform">
                  {achievement.platform}
                </span>

              </div>


              {/* STAR ICON */}
              <div className="achievement-icon">

                <span>
                  5
                </span>

                <small>
                  ★
                </small>

              </div>


              {/* CONTENT */}
              <div className="achievement-content">

                <h3>
                  {achievement.title}
                </h3>

                <p>
                  {achievement.description}
                </p>

              </div>


              {/* SKILL */}
              <div className="achievement-skill">

                <span>
                  SKILL
                </span>

                <strong>
                  {achievement.skill}
                </strong>

              </div>

            </article>

          ))}

        </div>


        {/* HACKERRANK PROFILE */}
        <div className="achievements-profile">

          <p>
            View my HackerRank profile to verify these
            skill ratings and programming achievements.
          </p>

          <a
            href="https://www.hackerrank.com/profile/j_anishasweety11"
            target="_blank"
            rel="noopener noreferrer"
            className="achievement-profile-button"
          >
            <span>
              ✦
            </span>

            View HackerRank Profile

            <span className="profile-arrow">
              ↗
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Achievements;