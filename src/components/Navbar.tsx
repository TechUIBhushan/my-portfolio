import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import logo3D from "../assets/tech_bhushan_3d_logo.png";

interface NavbarProps {
  activeSection: string;
  isIntroActive?: boolean;
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export default function Navbar({ activeSection, isIntroActive, theme, toggleTheme }: NavbarProps) {
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
        <a href="#home" className={`nav-logo ${isIntroActive ? "intro-active" : "intro-landed"}`}>
          <div className="nav-logo-icon-wrapper">
            <img src={logo3D} alt="Tech Bhushan 3D Logo" className="nav-logo-img" />
          </div>
          <span className="nav-logo-text">Tech Bhushan</span>
        </a>

        {/* Right Navigation & Theme Controls */}
        <div className="nav-right">
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

          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile menu toggle */}
          <button
            className="nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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
        <li>
          <button
            className="mobile-theme-toggle"
            onClick={() => {
              toggleTheme();
              setIsOpen(false);
            }}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            <span>{theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}</span>
          </button>
        </li>
      </ul>

      {/* Progress Bar */}
      <div className="nav-progress" style={{ width: `${scrollProgress}%` }} />
    </nav>
  );
}
