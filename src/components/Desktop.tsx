import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, ArrowLeft, X, File } from 'lucide-react';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Education } from './sections/Education';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';

interface FolderType {
  id: string;
  name: string;
  icon: string;
  component: React.ComponentType;
  position: { x: number; y: number };
}

const folders: FolderType[] = [
  { id: 'about', name: 'ABOUT_ME', icon: '👤', component: About, position: { x: 20, y: 20 } },
  { id: 'skills', name: 'SKILLS', icon: '⚡', component: Skills, position: { x: 20, y: 140 } },
  { id: 'education', name: 'EDUCATION', icon: '🎓', component: Education, position: { x: 20, y: 260 } },
  { id: 'experience', name: 'EXPERIENCE', icon: '💼', component: Experience, position: { x: 20, y: 380 } },
  { id: 'projects', name: 'PROJECTS', icon: '🚀', component: Projects, position: { x: 160, y: 20 } },
  { id: 'contact', name: 'CONTACT', icon: '📡', component: Contact, position: { x: 160, y: 140 } },
];

export const Desktop = () => {
  const [openFolder, setOpenFolder] = useState<FolderType | null>(null);

  const handleFolderClick = (folder: FolderType) => {
    setOpenFolder(folder);
  };

  const handleBack = () => {
    setOpenFolder(null);
  };

  return (
    <div className="fixed inset-0 bg-[#0a0e1a] overflow-hidden">
      {/* Desktop Background with Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-card/80 backdrop-blur-md border-t border-primary/30 flex items-center px-4 gap-2 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary/20 border border-primary flex items-center justify-center">
            <span className="text-primary text-xs font-bold">AV</span>
          </div>
          <span className="text-primary font-mono text-sm">AMAN_VERMA_OS</span>
        </div>

        {openFolder && (
          <div className="flex items-center gap-2 ml-4 px-3 py-1 bg-primary/20 border border-primary">
            <span className="text-lg">{openFolder.icon}</span>
            <span className="text-primary font-mono text-xs">{openFolder.name}</span>
          </div>
        )}

        <div className="ml-auto text-primary font-mono text-xs">
          {new Date().toLocaleTimeString()}
        </div>
      </div>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        {!openFolder ? (
          // Desktop View - Show Folders
          <motion.div
            key="desktop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-full h-full pb-12"
          >
            {/* Desktop Title */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-8 left-1/2 -translate-x-1/2 text-center z-10"
            >
              <h1 className="text-4xl md:text-5xl font-bold neon-glow mb-2">
                AMAN VERMA
              </h1>
              <p className="text-sm text-secondary animate-flicker font-mono">
                Software Engineer | Builder | Creator
              </p>
            </motion.div>

            {/* Folder Icons */}
            <div className="relative w-full h-full pt-32">
              {folders.map((folder, index) => (
                <motion.button
                  key={folder.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleFolderClick(folder)}
                  onDoubleClick={() => handleFolderClick(folder)}
                  className="absolute w-32 p-4 flex flex-col items-center gap-3 group hover:bg-primary/10 rounded transition-all"
                  style={{ left: folder.position.x, top: folder.position.y }}
                >
                  <Folder className="w-16 h-16 text-primary group-hover:text-secondary transition-colors group-hover:animate-pulse-glow" />
                  <span className="text-xs font-mono text-foreground group-hover:text-primary transition-colors text-center leading-tight">
                    {folder.name}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Instructions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center"
            >
              <p className="text-muted-foreground font-mono text-xs animate-pulse">
                Double-click folders to open
              </p>
            </motion.div>
          </motion.div>
        ) : (
          // Folder Open View - Show Content
          <motion.div
            key="folder"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full h-full pb-12"
          >
            {/* File Explorer Window */}
            <div className="w-full h-full flex flex-col">
              {/* Window Title Bar */}
              <div className="h-14 bg-card/90 backdrop-blur-md border-b-2 border-primary/50 flex items-center px-4 gap-3">
                <button
                  onClick={handleBack}
                  className="w-10 h-10 flex items-center justify-center hover:bg-primary/20 transition-colors border border-primary/30 group"
                >
                  <ArrowLeft className="w-5 h-5 text-primary group-hover:animate-pulse-glow" />
                </button>

                <div className="flex items-center gap-3 flex-1">
                  <span className="text-3xl">{openFolder.icon}</span>
                  <div>
                    <h2 className="text-xl font-bold text-primary font-mono">
                      {openFolder.name}
                    </h2>
                    <p className="text-xs text-muted-foreground font-mono">
                      C:\PORTFOLIO\{openFolder.name}\
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleBack}
                  className="w-10 h-10 flex items-center justify-center hover:bg-destructive/20 transition-colors"
                >
                  <X className="w-5 h-5 text-destructive" />
                </button>
              </div>

              {/* Address Bar */}
              <div className="h-12 bg-background/80 backdrop-blur-sm border-b border-primary/20 flex items-center px-4">
                <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-background/50 border border-primary/30 font-mono text-sm text-primary">
                  <Folder className="w-4 h-4" />
                  <span>Desktop &gt; {openFolder.name}</span>
                </div>
              </div>

              {/* Folder Contents Area */}
              <div className="flex-1 overflow-hidden bg-background/40 backdrop-blur-sm">
                <div className="h-full overflow-y-auto p-6">
                  {/* File Icon Header */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 mb-6 pb-4 border-b border-primary/20"
                  >
                    <File className="w-8 h-8 text-secondary" />
                    <div>
                      <h3 className="text-lg font-bold text-primary font-mono">
                        {openFolder.name}.dat
                      </h3>
                      <p className="text-xs text-muted-foreground font-mono">
                        System File • Modified: {new Date().toLocaleDateString()}
                      </p>
                    </div>
                  </motion.div>

                  {/* Actual Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-card/50 backdrop-blur-md border border-primary/30 p-6 rounded"
                  >
                    <openFolder.component />
                  </motion.div>
                </div>
              </div>

              {/* Status Bar */}
              <div className="h-8 bg-card/90 backdrop-blur-md border-t border-primary/30 flex items-center px-4 text-xs font-mono text-muted-foreground">
                <span>1 item selected</span>
                <span className="ml-auto text-primary">Ready</span>
              </div>
            </div>

            {/* Scan Line Effect */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-8 animate-scan-line" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};