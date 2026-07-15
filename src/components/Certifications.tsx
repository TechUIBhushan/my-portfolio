import { motion } from 'framer-motion';
import { Award, GraduationCap, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const cards = [
    {
      type: "aws",
      icon: <Award size={36} />,
      title: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services (AWS)",
      verificationId: "3VWKBC31WJR41DWH",
      expiration: "Expires: July 31, 2026",
      link: "https://www.credly.com/badges/d590ee3a-41f7-43de-97b6-466e2715c859/linked_in_profile"
    },
    {
      type: "safe",
      icon: <Award size={36} />,
      title: "SAFe Certified (Scaled Agile Framework)",
      issuer: "Scaled Agile, Inc.",
      verificationId: "Credential ID: 2fd91d9c-746d-4f80-a895-bc7a6ba65ed9",
      expiration: "Active Credential",
      link: "https://www.youracclaim.com/badges/2fd91d9c-746d-4f80-a895-bc7a6ba65ed9/linked_in"
    },
    {
      type: "edu",
      icon: <GraduationCap size={36} />,
      title: "Bachelor of Science (B.Sc. - P.C.M)",
      issuer: "P.M.B. Gujarati Science College, Indore",
      verificationId: "D.A.V.V. University Indore (M.P.)",
      expiration: "Physics, Chemistry, and Mathematics Stream",
      link: ""
    }
  ];

  return (
    <section id="certifications" className="certifications section-container">
      <div className="section-header">
        <h2>Credentials & Education</h2>
        <p>Verified professional certifications and academic foundations that validate technical expertise and leadership standards.</p>
      </div>

      <div className="certs-grid">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            className="cert-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className={`cert-icon ${card.type}`}>
              {card.icon}
            </div>
            
            <div className="cert-info">
              <h3>{card.title}</h3>
              <p style={{ fontWeight: 600, color: '#e2e8f0' }}>{card.issuer}</p>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                {card.verificationId}
              </p>
              <p style={{ fontSize: '0.85rem', color: '#64748b', fontStyle: 'italic', marginBottom: '8px' }}>
                {card.expiration}
              </p>
              
              {card.link && (
                <a 
                  href={card.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cred-link"
                >
                  Verify Credential <ExternalLink size={14} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
