import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Twitter Clone',
    tech: ['React', 'Node.js', 'PostgreSQL', 'OAuth', 'WebSockets'],
    description: 'Full-stack social media platform with real-time updates, user authentication, and interactive features',
    status: 'DEPLOYED',
  },
  {
    name: 'DNS Server Implementation',
    tech: ['Python', 'dnspython'],
    description: 'Custom DNS server with real-time caching mechanism, achieving 40% faster lookup times',
    status: 'ACTIVE',
  },
  {
    name: 'Multiplayer Typing Game',
    tech: ['React', 'Firebase', 'WebSockets'],
    description: 'Real-time competitive typing game with live leaderboards and multiplayer synchronization',
    status: 'LIVE',
  },
];

export const Projects = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="text-secondary text-sm font-mono mb-4 animate-glitch">
          Decrypting project files...
        </div>

        <h2 className="text-3xl font-bold text-primary mb-6">
          &gt; PROJECT_ARCHIVE
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 }}
              className="group relative border border-primary/30 p-6 bg-background/50 hover:bg-primary/5 transition-all duration-300"
            >
              {/* Holographic corner effect */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-secondary/50 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-secondary/50 pointer-events-none" />

              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-primary group-hover:neon-glow transition-all">
                  {project.name}
                </h3>
                <span className="text-xs font-mono px-2 py-1 border border-secondary text-secondary">
                  [{project.status}]
                </span>
              </div>

              <p className="text-foreground/80 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, tIndex) => (
                  <motion.span
                    key={tIndex}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.15 + tIndex * 0.05 }}
                    className="text-xs font-mono px-2 py-1 bg-primary/10 text-primary border border-primary/30"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Loading bar effect */}
              <div className="mt-4 h-0.5 bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1.5, delay: index * 0.15 }}
                  className="h-full bg-gradient-to-r from-primary via-secondary to-primary"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 p-4 border border-primary/20 bg-primary/5"
        >
          <div className="text-xs font-mono text-muted-foreground">
            <span className="text-primary">[DECRYPT_COMPLETE]</span> All project files successfully loaded.
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};