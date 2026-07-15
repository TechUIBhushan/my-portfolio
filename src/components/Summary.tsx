import { motion } from 'framer-motion';
import { Cpu, Layers, Users, ShieldAlert } from 'lucide-react';

export default function Summary() {
  const cards = [
    {
      icon: <Cpu size={24} />,
      title: "Architectural Planning",
      description: "Proven expertise in developing resilient architectural solutions, microservice and micro-frontend architectures, performance strategies, and full-stack system integrations."
    },
    {
      icon: <Layers size={24} />,
      title: "Full-Stack Development",
      description: "Robust command over MERN & MEAN stacks, modern frontend platforms (React, Next.js, Angular, Svelte), server-side platforms (Node.js, Nest.js, Deno), and AWS cloud native platforms."
    },
    {
      icon: <Users size={24} />,
      title: "Technical Leadership",
      description: "Demonstrated success in team building, stakeholder engagement, resource planning, agile project management, budgeting, and ensuring rigorous standards for code quality and maintainability."
    },
    {
      icon: <ShieldAlert size={24} />,
      title: "Security & Optimization",
      description: "Deep understanding of core security principles (OWASP standards), performance auditing, search engine optimization (SEO), and web accessibility standards (WCAG 2.0)."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section id="about" className="summary section-container">
      <div className="section-header">
        <h2>Professional Expertise</h2>
        <p>A comprehensive outline of capabilities gained over a 19-year journey in software engineering and systems architecture.</p>
      </div>

      <motion.div 
        className="summary-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {cards.map((card, idx) => (
          <motion.div 
            key={idx} 
            className="summary-card"
            variants={cardVariants}
            whileHover={{ y: -8 }}
          >
            <div className="icon-box">
              {card.icon}
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
