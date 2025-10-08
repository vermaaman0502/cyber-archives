import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Education } from './sections/Education';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';

const sections = [
  { id: 'about', label: 'ABOUT', component: About },
  { id: 'skills', label: 'SKILLS', component: Skills },
  { id: 'education', label: 'EDUCATION', component: Education },
  { id: 'experience', label: 'EXPERIENCE', component: Experience },
  { id: 'projects', label: 'PROJECTS', component: Projects },
  { id: 'contact', label: 'CONTACT', component: Contact },
];

export const PortfolioUI = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isBooted, setIsBooted] = useState(false);

  const ActiveComponent = sections.find(s => s.id === activeSection)?.component || About;

  return (
    <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-10">
      <div className="w-full max-w-6xl mx-auto p-6 pointer-events-auto">
        {/* Boot Screen */}
        <AnimatePresence>
          {!isBooted && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background flex items-center justify-center z-50"
            >
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-primary text-2xl font-mono mb-8"
                >
                  <div className="animate-pulse-glow">SYSTEM INITIALIZATION</div>
                  <div className="text-sm mt-4 text-muted-foreground">
                    Loading profile data...
                  </div>
                </motion.div>
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  onClick={() => setIsBooted(true)}
                  className="mt-8 px-8 py-3 neon-border bg-background/50 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  ACCESS TERMINAL
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main UI */}
        {isBooted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            {/* Header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold neon-glow mb-2">
                AMAN VERMA
              </h1>
              <p className="text-lg text-secondary animate-flicker">
                Software Engineer | Builder | Creator
              </p>
            </motion.div>

            {/* Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-4 py-2 font-mono text-sm transition-all duration-300 ${
                    activeSection === section.id
                      ? 'neon-border bg-primary/20 text-primary'
                      : 'border border-border bg-background/50 backdrop-blur-sm text-muted-foreground hover:text-primary hover:border-primary'
                  }`}
                >
                  [{section.label}]
                </motion.button>
              ))}
            </div>

            {/* Content */}
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="neon-border bg-background/80 backdrop-blur-md p-6 md:p-8 min-h-[400px]"
            >
              <ActiveComponent />
            </motion.div>

            {/* Scan Line Effect */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-8 animate-scan-line" />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};