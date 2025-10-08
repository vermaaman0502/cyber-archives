import { motion } from 'framer-motion';

const education = [
  {
    degree: 'B.Tech',
    institution: 'Raja Balwant Singh Engineering Technical Campus',
    year: '2019 - 2023',
    status: 'COMPLETED',
  },
  {
    degree: 'XII',
    institution: 'Symboyzia Senior Secondary School',
    year: '2018 - 2019',
    status: 'COMPLETED',
  },
];

export const Education = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="text-secondary text-sm font-mono mb-4 animate-flicker">
          Loading archived transcripts from corrupted memory...
        </div>

        <h2 className="text-3xl font-bold text-primary mb-6">
          &gt; EDUCATION_RECORDS
        </h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="border border-primary/30 p-6 bg-background/50 hover:bg-primary/5 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-primary">
                  {edu.degree}
                </h3>
                <span className={`text-xs font-mono px-2 py-1 border ${
                  edu.status === 'COMPLETED' 
                    ? 'border-primary text-primary' 
                    : 'border-secondary text-secondary'
                }`}>
                  [{edu.status}]
                </span>
              </div>
              
              <p className="text-foreground/80 mb-2">
                {edu.institution}
              </p>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                <span className="text-secondary">PERIOD:</span>
                <span>{edu.year}</span>
              </div>

              {/* Data loading animation */}
              <div className="mt-4 h-1 bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 1 }}
                  className="h-full bg-primary"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 p-4 border border-secondary/30 bg-secondary/5">
          <div className="text-xs font-mono text-muted-foreground">
            <span className="text-secondary">[DATA_RESTORED]</span> Educational records 
            successfully recovered from archive.
          </div>
        </div>
      </motion.div>
    </div>
  );
};