import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Cybersecurity Intern',
    company: 'AICTE',
    period: '2025',
    achievements: [
      'Developed steganography system for secure image data embedding',
      'Applied LSB manipulation and robustness algorithms',
      'Implemented security protocols for data protection',
    ],
  },
  {
    role: 'Summer Intern',
    company: 'Celebal Technologies',
    period: '2023',
    achievements: [
      'Built REST APIs using Node.js + Express reducing data retrieval by 25%',
      'Integrated MongoDB for efficient data management',
      'Delivered comprehensive API documentation',
    ],
  },
];

export const Experience = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="text-secondary text-sm font-mono mb-4">
          [SYS.LOG] Loading Experience Records ... <span className="animate-pulse">OK</span>
        </div>

        <h2 className="text-3xl font-bold text-primary mb-6">
          &gt; WORK_HISTORY
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="border border-primary/30 p-6 bg-gradient-to-br from-background/50 to-primary/5 hover:from-primary/10 hover:to-secondary/5 transition-all duration-300"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-primary mb-1">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-secondary font-mono">{exp.company}</span>
                  <span className="text-muted-foreground">|</span>
                  <span className="text-muted-foreground font-mono">{exp.period}</span>
                </div>
              </div>

              <div className="space-y-3">
                {exp.achievements.map((achievement, aIndex) => (
                  <motion.div
                    key={aIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + aIndex * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1.5 w-1.5 h-1.5 bg-secondary animate-pulse" />
                    <span className="text-foreground/80 text-sm leading-relaxed">
                      {achievement}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Terminal-like footer */}
              <div className="mt-4 pt-4 border-t border-primary/20">
                <div className="text-xs font-mono text-muted-foreground">
                  <span className="text-primary">$</span> status: verified
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};