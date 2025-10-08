import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scene3D } from '@/components/Scene3D';
import { Desktop } from '@/components/Desktop';

const Index = () => {
  const [isDesktopActive, setIsDesktopActive] = useState(false);
  const [showBootScreen, setShowBootScreen] = useState(false);

  const handleLaptopClick = () => {
    setShowBootScreen(true);
    setTimeout(() => {
      setShowBootScreen(false);
      setIsDesktopActive(true);
    }, 2000);
  };

  return (
    <main className="relative w-full h-screen overflow-hidden bg-background">
      {/* 3D Scene */}
      {!isDesktopActive && (
        <>
          <Scene3D onLaptopClick={handleLaptopClick} />
          
          {/* Atmospheric Fog Overlay */}
          <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-transparent via-background/20 to-background/40 z-5" />
          
          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 z-10 text-center"
          >
            <p className="text-primary font-mono text-sm neon-glow animate-pulse">
              Click the laptop to boot system
            </p>
          </motion.div>
        </>
      )}

      {/* Boot Screen */}
      <AnimatePresence>
        {showBootScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background flex items-center justify-center z-50"
          >
            <div className="text-center space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-primary text-3xl font-mono animate-pulse-glow"
              >
                SYSTEM BOOTING...
              </motion.div>
              
              <div className="space-y-2 text-sm font-mono text-muted-foreground">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  [OK] Loading kernel modules
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  [OK] Initializing portfolio system
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  [OK] Starting desktop environment
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="text-secondary"
                >
                  [READY] Welcome to AMAN_VERMA_OS
                </motion.div>
              </div>

              <div className="flex justify-center gap-2 mt-8">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Interface */}
      {isDesktopActive && <Desktop />}
    </main>
  );
};

export default Index;