import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Braces, Terminal, Cloud, Database, Cpu, Settings, Globe } from 'lucide-react';

interface Skill {
  name: string;
  category: 'languages' | 'frameworks' | 'styling' | 'cloud_db' | 'devops' | 'methodology';
  categoryLabel: string;
  icon: React.ReactNode;
}

export default function Skills() {
  const [filter, setFilter] = useState<string>('all');

  const skillsData: Skill[] = [
    // Languages
    { name: 'TypeScript', category: 'languages', categoryLabel: 'Language', icon: <Code2 /> },
    { name: 'JavaScript (ES@Next)', category: 'languages', categoryLabel: 'Language', icon: <Code2 /> },
    { name: 'Node.js', category: 'languages', categoryLabel: 'Runtime', icon: <Terminal /> },
    { name: 'NestJS', category: 'languages', categoryLabel: 'Framework', icon: <Terminal /> },
    { name: 'Deno', category: 'languages', categoryLabel: 'Runtime', icon: <Terminal /> },
    { name: 'Core Java', category: 'languages', categoryLabel: 'Language', icon: <Code2 /> },
    { name: 'Express.js', category: 'languages', categoryLabel: 'Framework', icon: <Terminal /> },

    // Frameworks & Libraries
    { name: 'React.js', category: 'frameworks', categoryLabel: 'Frontend', icon: <Braces /> },
    { name: 'Next.js', category: 'frameworks', categoryLabel: 'Frontend', icon: <Braces /> },
    { name: 'Redux / NgRx', category: 'frameworks', categoryLabel: 'State Management', icon: <Braces /> },
    { name: 'Angular 12', category: 'frameworks', categoryLabel: 'Frontend', icon: <Braces /> },
    { name: 'Vue 3', category: 'frameworks', categoryLabel: 'Frontend', icon: <Braces /> },
    { name: 'Svelte.js', category: 'frameworks', categoryLabel: 'Frontend', icon: <Braces /> },
    { name: 'GraphQL / React Query', category: 'frameworks', categoryLabel: 'Data Fetching', icon: <Globe /> },
    { name: 'Nuxt.js', category: 'frameworks', categoryLabel: 'Frontend', icon: <Braces /> },

    // Web & Styling
    { name: 'SCSS / SASS', category: 'styling', categoryLabel: 'Styling', icon: <Globe /> },
    { name: 'HTML5 / CSS3', category: 'styling', categoryLabel: 'Frontend', icon: <Globe /> },
    { name: 'Tailwind CSS', category: 'styling', categoryLabel: 'Styling', icon: <Globe /> },
    { name: 'Web Accessibility', category: 'styling', categoryLabel: 'WCAG 2.0', icon: <Globe /> },
    { name: 'WebAssembly (WASM)', category: 'styling', categoryLabel: 'Performance', icon: <Globe /> },

    // Cloud & Databases
    { name: 'AWS Lambda / S3', category: 'cloud_db', categoryLabel: 'Serverless', icon: <Cloud /> },
    { name: 'API Gateway', category: 'cloud_db', categoryLabel: 'AWS API', icon: <Cloud /> },
    { name: 'MongoDB', category: 'cloud_db', categoryLabel: 'NoSQL DB', icon: <Database /> },
    { name: 'MySQL', category: 'cloud_db', categoryLabel: 'SQL DB', icon: <Database /> },
    { name: 'Firebase', category: 'cloud_db', categoryLabel: 'BaaS', icon: <Cloud /> },

    // DevOps & Tools
    { name: 'Vite / Webpack', category: 'devops', categoryLabel: 'Build Tool', icon: <Settings /> },
    { name: 'GitHub Actions / Git', category: 'devops', categoryLabel: 'CI/CD & SCM', icon: <Settings /> },
    { name: 'Docker', category: 'devops', categoryLabel: 'Containerization', icon: <Settings /> },
    { name: 'Jenkins', category: 'devops', categoryLabel: 'CI/CD', icon: <Settings /> },
    { name: 'Azure / TFS', category: 'devops', categoryLabel: 'DevOps & SCM', icon: <Settings /> },

    // Methodologies & Architecture
    { name: 'Design Patterns', category: 'methodology', categoryLabel: 'Architecture', icon: <Cpu /> },
    { name: 'SOLID Principles', category: 'methodology', categoryLabel: 'Design Code', icon: <Cpu /> },
    { name: 'KISS & DRY Patterns', category: 'methodology', categoryLabel: 'Design Code', icon: <Cpu /> },
    { name: 'Micro-frontends', category: 'methodology', categoryLabel: 'Architecture', icon: <Cpu /> },
    { name: 'Agile & DevOps', category: 'methodology', categoryLabel: 'Methodology', icon: <Cpu /> }
  ];

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'languages', label: 'Languages' },
    { id: 'frameworks', label: 'Frameworks' },
    { id: 'styling', label: 'Web & Styling' },
    { id: 'cloud_db', label: 'Cloud & Database' },
    { id: 'devops', label: 'DevOps & Build' },
    { id: 'methodology', label: 'Methodology' }
  ];

  const filteredSkills = filter === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === filter);

  return (
    <section id="skills" className="skills section-container">
      <div className="section-header">
        <h2>Technical Arsenal</h2>
        <p>A comprehensive toolkit built on years of continuous learning, architectural design, and deployment experience.</p>
      </div>

      <div className="skills-filter">
        {categories.map(cat => (
          <button
            key={cat.id}
            className={filter === cat.id ? 'active' : ''}
            onClick={() => setFilter(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <motion.div 
        layout
        className="skills-grid"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map(skill => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={skill.name}
              className="skill-card"
            >
              <div className="skill-icon">{skill.icon}</div>
              <span>{skill.name}</span>
              <div className="skill-category">{skill.categoryLabel}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
