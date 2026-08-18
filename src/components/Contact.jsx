import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href =
      `mailto:your-email@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact">

      <div className="container">

        <div className="section-heading">

          <p>GET IN TOUCH</p>

          <h2>Contact Me</h2>

        </div>

        <div className="contact-grid">

          <div className="contact-info">

            <h3>
              Let's work together
            </h3>

            <p>
              If you would like to discuss a software development
              opportunity, project or collaboration, feel free to get
              in touch.
            </p>

            <div className="contact-item">
              <strong>Email</strong>
              <span>  tdkrishani@gmail.com </span>
            </div>

            <div className="contact-item">
              <strong>Location</strong>
              <span>New Zealand</span>
            </div>

            <div className="contact-item">
              <strong>GitHub</strong>
              <span>https://github.com/Krishanitd-dev</span>
            </div>

          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <label htmlFor="name">
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />

            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tdkrishani@email.com"
              required
            />

            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              rows="6"
              required
            />

            <button
              type="submit"
              className="btn btn-primary"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;