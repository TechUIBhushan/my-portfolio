export default function Footer() {
  const currentYear = 2026; // Setting year from local metadata context
  
  return (
    <footer className="footer">
      <p>© {currentYear} Bhushan Kumar Sharma. All rights reserved. Built with React & SCSS.</p>
    </footer>
  );
}
