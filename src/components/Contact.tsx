import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const contactDetails = [
    {
      icon: <Mail />,
      label: "Email Me",
      value: "uibhushan@gmail.com",
      link: "mailto:uibhushan@gmail.com",
    },
    {
      icon: <Phone />,
      label: "Call Me",
      value: "+91-7XXXXXX447",
      link: "tel:+917XXXXXX447",
    },
    {
      icon: <MapPin />,
      label: "Location",
      value: "Pune, India",
      link: "https://maps.google.com/?q=Pune,India",
    },
  ];

  return (
    <section id="contact" className="contact section-container">
      <div className="section-header">
        <h2>Get In Touch</h2>
        <p>
          Let's discuss architecture planning, technology adoption, product
          strategies, or career opportunities.
        </p>
      </div>

      <div className="contact-layout">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {contactDetails.map((detail, idx) => (
            <a
              key={idx}
              href={detail.link}
              target={detail.label === "Location" ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="info-card"
            >
              <div className="info-icon">{detail.icon}</div>
              <div className="info-details">
                <p>{detail.label}</p>
                <h4>{detail.value}</h4>
              </div>
            </a>
          ))}

          <div className="social-links">
            <a
              href="https://linkedin.com/in/bhushan-sharma-938aab22/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="contact-form-container"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                required
                placeholder="e.g. John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                required
                placeholder="e.g. john@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                required
                placeholder="How can I help you?"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%" }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"} <Send size={18} />
            </button>

            {submitted && (
              <div className="form-status">
                ✓ Thank you! Your message was sent successfully. (Simulated)
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
