import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const contacts = [
  {
    icon: Github,
    label: 'GitHub',
    value: 'Vermaaman0502',
    link: 'https://github.com/Vermaaman0502',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'amanverma0502',
    link: 'https://linkedin.com/in/amanverma0502',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'amanverma210605@gmail.com',
    link: 'mailto:amanverma210605@gmail.com',
  },
];

export const Contact = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="text-secondary text-sm font-mono mb-4">
          Establishing secure connection...
        </div>

        <h2 className="text-3xl font-bold text-primary mb-6">
          &gt; ACCESS_TERMINAL
        </h2>

        <div className="space-y-4">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group flex items-center gap-4 p-4 border border-primary/30 bg-background/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-primary/50 bg-primary/5 group-hover:bg-primary/20 transition-all">
                <contact.icon className="w-6 h-6 text-primary group-hover:animate-pulse-glow" />
              </div>
              
              <div className="flex-1">
                <div className="text-sm font-mono text-secondary mb-1">
                  [{contact.label}]
                </div>
                <div className="text-foreground group-hover:text-primary transition-colors font-mono">
                  {contact.value}
                </div>
              </div>

              <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                &gt;&gt;
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 p-6 border border-secondary/30 bg-gradient-to-br from-background/50 to-secondary/5"
        >
          <div className="text-center space-y-3">
            <div className="text-secondary font-mono text-sm animate-pulse">
              [STATUS: ONLINE]
            </div>
            <p className="text-foreground/80 text-sm">
              Ready to collaborate on innovative projects
            </p>
            <div className="flex justify-center gap-2 mt-4">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </motion.div>

        {/* Neon data lines animation */}
        <div className="mt-6 relative h-20 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="absolute top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent w-full"
              style={{ top: `${i * 20}%` }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};