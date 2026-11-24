
import { useState } from "react";
import Stars from "../components/Stars";

function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // Submit contact form
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message.");
      }

      setStatus("Your message has been sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus(error.message || "Unable to send your message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <Stars />

      <div className="contact-container">
        <div className="contact-heading">
          <p className="section-label">CONTACT</p>

          <h2>Let's Connect</h2>

          <p className="contact-intro">
            I am open to entry-level software development opportunities,
            internships and meaningful projects where I can contribute,
            learn and grow as a developer.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <span className="contact-label">GET IN TOUCH</span>

            <h3>
              Have an opportunity
              <span> in mind?</span>
            </h3>

            <p className="contact-description">
              Whether you are a recruiter, developer, organization or
              someone interested in collaborating, feel free to reach
              out. I would be happy to connect and discuss opportunities.
            </p>

            <div className="contact-details">
              <a
                href="mailto:j.anishasweety1912@gmail.com"
                className="contact-detail"
              >
                <div className="contact-detail-icon">@</div>

                <div>
                  <span>Email</span>
                  <strong>j.anishasweety1912@gmail.com</strong>
                </div>

                <span className="contact-arrow">↗</span>
              </a>

              <a
                href="https://github.com/janishasweety1912-stack"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-detail"
              >
                <div className="contact-detail-icon">GH</div>

                <div>
                  <span>GitHub</span>
                  <strong>https://github.com/janishasweety1912-stack</strong>
                </div>

                <span className="contact-arrow">↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/anisha-sweety-b0a1a8356/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-detail"
              >
                <div className="contact-detail-icon">in</div>

                <div>
                  <span>LinkedIn</span>
                  <strong>
                    https://www.linkedin.com/in/anisha-sweety-b0a1a8356/
                  </strong>
                </div>

                <span className="contact-arrow">↗</span>
              </a>
            </div>
          </div>

          <div className="contact-form-card">
            <div className="contact-form-header">
              <span>01</span>

              <div>
                <p>CONTACT FORM</p>
                <h3>Send a Message</h3>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="name">Your Name</label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="email">Email Address</label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="subject">Subject</label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      subject: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="contact-submit"
                disabled={loading}
              >
                <span>{loading ? "Sending..." : "Send Message"}</span>
                <span>↗</span>
              </button>
            </form>

            {status && (
              <p className="contact-status" role="status">
                {status}
              </p>
            )}
          </div>
        </div>

        <div className="contact-footer">
          <div>
            <span>OPEN TO OPPORTUNITIES</span>
            <strong>
              Software Development • Full Stack • Web Development
            </strong>
          </div>

          <p>Let's build something meaningful together.</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
