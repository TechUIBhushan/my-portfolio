import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

const roles = [
  "Senior Manager App Dev",
  "Technical Architect",
  "Lead Product Architect",
  "AWS Solutions Architect",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const activeRole = roles[roleIndex];
    let timer: number;

    const tick = () => {
      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1));
      } else {
        setCurrentText((prev) => activeRole.slice(0, prev.length + 1));
      }
    };

    if (!isDeleting && currentText === activeRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(tick, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero section-container">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="greeting">Welcome to my space</span>
          <h1>Bhushan Kumar Sharma</h1>

          <div className="role-title">
            I'm a <span>{currentText}</span>
            <span className="cursor">|</span>
          </div>

          <p className="description">
            Experienced Product & Technical Architect with over 19+ years of
            expertise designing, building, and deploying mission-critical,
            full-stack enterprise applications. Dedicated to crafting highly
            scalable, performant, and secure solutions with modern frontend and
            cloud technologies.
          </p>

          <div className="cta-group">
            <a href="#experience" className="btn btn-primary">
              View Experience <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in Touch
            </a>
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <h3>19+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat-item">
              <h3>AWS</h3>
              <p>Certified Solutions Architect</p>
            </div>
            <div className="stat-item">
              <h3>SAFe</h3>
              <p>Agile Certified Developer</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8, y: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -12, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.2, ease: "easeOut" },
            scale: { duration: 0.8, delay: 0.2, ease: "easeOut" },
            y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" },
          }}
        >
          {/* Spinning Soccer Ball Effect */}
          <motion.div
            style={{
              position: "absolute",
              top: "-32px",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "2.8rem",
              zIndex: 10,
              filter: "drop-shadow(0 0 10px rgba(0, 242, 254, 0.7))",
              pointerEvents: "none",
            }}
            animate={{
              rotate: 360,
              y: [0, -6, 0],
            }}
            transition={{
              rotate: { repeat: Infinity, duration: 12, ease: "linear" },
              y: { repeat: Infinity, duration: 2.2, ease: "easeInOut" },
            }}
          >
            ⚽
          </motion.div>

          <div className="image-wrapper">
            <img src="/bhushan_soccer.jpg" alt="Bhushan Kumar Sharma" />
          </div>

          {/* Floating tech badges */}
          <div className="tech-badge badge-1">
            <ShieldCheck
              size={20}
              className="text-cyan-400"
              style={{ color: "#00f2fe" }}
            />
            <span>AWS Architect</span>
          </div>

          <div className="tech-badge badge-2">
            <span style={{ color: "#f355da", fontWeight: "bold" }}>
              19+ Yrs Exp
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
