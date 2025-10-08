import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'LANGUAGES',
    skills: ['Python', 'JavaScript', 'SQL', 'TypeScript'],
  },
  {
    title: 'FRAMEWORKS',
    skills: ['React', 'Express.js', 'Django', 'Node.js'],
  },
  {
    title: 'DATABASES',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
  },
  {
    title: 'CLOUD & TOOLS',
    skills: ['AWS (EC2, S3, Lambda)', 'Git', 'Postman', 'WebSockets'],
  },
];

export const Skills = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-bold text-primary mb-6">
          &gt; SKILLS_MATRIX
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1 }}
              className="space-y-3"
            >
              <h3 className="text-secondary font-mono text-sm border-b border-primary/30 pb-2">
                [{category.title}]
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-2 h-2 bg-primary animate-pulse-glow" />
                    <span className="text-foreground/80 group-hover:text-primary transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Holographic Effect */}
        <div className="mt-8 p-4 border border-primary/20 bg-primary/5">
          <div className="text-xs font-mono text-muted-foreground">
            <span className="text-primary">[SYS_INFO]</span> Skills loaded from memory banks.
            Proficiency levels: <span className="text-secondary">ADVANCED</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};