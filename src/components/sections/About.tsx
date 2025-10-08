import { motion } from 'framer-motion';

export const About = () => {
  const text = "Initializing profile... restoring data blocks...";
  
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-secondary text-sm font-mono mb-4 animate-glitch">
          {text}
        </div>
        
        <h2 className="text-3xl font-bold text-primary mb-4">
          &gt; PROFILE_LOADED
        </h2>
        
        <div className="space-y-4 text-foreground/90">
          <p className="leading-relaxed">
            Software Engineer specializing in full-stack development with expertise in 
            building scalable web applications. Passionate about creating efficient, 
            user-centric solutions using modern technologies.
          </p>
          
          <p className="leading-relaxed">
            Experienced in developing secure systems, implementing real-time features, 
            and optimizing application performance. Continuously exploring cutting-edge 
            technologies to solve complex problems.
          </p>

          <div className="pt-4 border-t border-primary/30">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-primary">STATUS:</span>
              <span className="text-secondary animate-pulse">ACTIVE</span>
            </div>
            <div className="flex items-center gap-2 text-sm mt-2">
              <span className="text-primary">LOCATION:</span>
              <span>REMOTE</span>
            </div>
            <div className="flex items-center gap-2 text-sm mt-2">
              <span className="text-primary">SPECIALIZATION:</span>
              <span>FULL-STACK DEVELOPMENT</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Holographic Circuit Overlay */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none">
        <div className="cyber-grid w-full h-full animate-pulse-glow" />
      </div>
    </div>
  );
};