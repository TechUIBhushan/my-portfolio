import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

interface ExpItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  bullets: string[];
}

export default function Experience() {
  const experiences: ExpItem[] = [
    {
      company: "Marsh",
      role: "Senior Manager Application Development",
      duration: "Jan 2025 - Present",
      location: "Pune, India",
      bullets: [
        "Architecting highly resilient web-scale platforms and digital interfaces in risk and insurance consulting.",
        "Establishing design patterns, micro-frontend standards, and cloud deployment pipelines in AWS.",
        "Providing technical governance, guiding cross-functional agile development sprints, and facilitating top-level architecture sign-offs.",
      ],
    },
    {
      company: "UST India",
      role: "Lead Product Architect",
      duration: "Dec 2020 - Jan 2025",
      location: "Pune, India",
      bullets: [
        "Led product architecture, software design, development, and support of mission-critical fintech solutions.",
        "Collaborated on business budgeting, timelines, resource allocation, and risk management assessments.",
        "Spearheaded technical team building, quality control, code reviews, and performance benchmarking.",
      ],
    },
    {
      company: "Capita IT",
      role: "Technical Specialist",
      duration: "Mar 2019 - Dec 2020",
      location: "Pune, India",
      bullets: [
        "Defined application architectural layouts and drafted technical system specifications.",
        "Developed full-stack features using React, Redux, Node.js, and core Java backends.",
        "Resolved critical scalability bottlenecks in API communication and database performance.",
      ],
    },
    {
      company: "Capgemini India",
      role: "Senior Consultant",
      duration: "May 2016 - Jan 2019",
      location: "Pune, India",
      bullets: [
        "Provided expert consultation on digital platforms utilizing AEM 6.1 and Liferay CMS.",
        "Implemented standards-based, accessible interfaces adhering to WCAG 2.0 and W3C standards.",
        "Mentored junior engineers on frontend modular architecture and modern styling frameworks.",
      ],
    },
    {
      company: "Hexaware Technologies",
      role: "System Analyst G5",
      duration: "Oct 2013 - Apr 2016",
      location: "Pune, India",
      bullets: [
        "Built responsive interactive layouts for transportation and banking industry verticals.",
        "Conducted code optimizations and security auditing in accordance with OWASP directives.",
        "Engineered automated build flows and testing suites using Jest, Webpack, and Jenkins.",
      ],
    },
    {
      company: "SapientNitro",
      role: "Senior Interactive Developer L1",
      duration: "Apr 2012 - Oct 2013",
      location: "Bangalore, India",
      bullets: [
        "Engineered cross-browser compatible, high-performance UI templates for global e-commerce portals.",
        "Collaborated with UX/UI design teams to implement rich animations and micro-interactions.",
        "Integrated backend services with modular AJAX pipelines.",
      ],
    },
    {
      company: "A3logics Pvt. Ltd.",
      role: "Front-end Developer",
      duration: "Oct 2010 - Apr 2012",
      location: "Jaipur, India",
      bullets: [
        "Programmed responsive websites and layouts for clients in various verticals.",
        "Maintained existing codebases, resolving visual layout defects and optimizing page load speeds.",
      ],
    },
    {
      company: "Beyond Key System Pvt. Ltd.",
      role: "UI Front-end Developer",
      duration: "Jun 2010 - Oct 2010",
      location: "Indore, India",
      bullets: [
        "Converted visual comps into standard-compliant XHTML and CSS.",
        "Used jQuery to build slideshows, popups, and tabbed interfaces.",
      ],
    },
    {
      company: "Sofmen Technology Pvt. Ltd.",
      role: "UI Developer",
      duration: "Apr 2008 - Jun 2010",
      location: "Indore, India",
      bullets: [
        "Coded structural UI pages using semantic HTML/CSS and basic DOM JavaScript.",
        "Supported browser compatibility patches for legacy Internet Explorer versions.",
      ],
    },
  ];

  return (
    <section id="experience" className="experience section-container">
      <div className="section-header">
        <h2>Professional Journey</h2>
        <p>
          A timeline showcasing over 19+ years of professional experience across
          diverse industry verticals and leading IT enterprises.
        </p>
      </div>

      <div className="timeline">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: Math.min(idx * 0.1, 0.3) }}
          >
            <div className="timeline-dot" />

            <div className="timeline-content">
              <div className="timeline-header">
                <div className="role-company">
                  <h3>{exp.role}</h3>
                  <span className="company">{exp.company}</span>
                </div>

                <div className="meta-info">
                  <span className="duration">
                    <Calendar
                      size={12}
                      style={{
                        display: "inline",
                        marginRight: "4px",
                        verticalAlign: "middle",
                      }}
                    />
                    <span style={{ verticalAlign: "middle" }}>
                      {exp.duration}
                    </span>
                  </span>
                  <div className="location">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="timeline-body">
                <ul>
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
