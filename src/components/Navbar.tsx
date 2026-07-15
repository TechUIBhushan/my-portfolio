import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Credentials", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          <Code2 size={24} />
          <span>Tech Bhushan</span>
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={
                  activeSection === link.href.substring(1) ? "active" : ""
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <ul className={`mobile-menu ${isOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className={
                activeSection === link.href.substring(1) ? "active" : ""
              }
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Progress Bar */}
      <div className="nav-progress" style={{ width: `${scrollProgress}%` }} />
    </nav>
  );
}
