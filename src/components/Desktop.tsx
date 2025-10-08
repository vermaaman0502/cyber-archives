import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, X, Minimize2, Maximize2 } from 'lucide-react';
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
  { id: 'about', name: 'ABOUT_ME.exe', icon: '👤', component: About, position: { x: 20, y: 20 } },
  { id: 'skills', name: 'SKILLS.sys', icon: '⚡', component: Skills, position: { x: 20, y: 140 } },
  { id: 'education', name: 'EDUCATION.dat', icon: '🎓', component: Education, position: { x: 20, y: 260 } },
  { id: 'experience', name: 'EXPERIENCE.log', icon: '💼', component: Experience, position: { x: 20, y: 380 } },
  { id: 'projects', name: 'PROJECTS.zip', icon: '🚀', component: Projects, position: { x: 160, y: 20 } },
  { id: 'contact', name: 'CONTACT.txt', icon: '📡', component: Contact, position: { x: 160, y: 140 } },
];

interface OpenWindow {
  id: string;
  folder: FolderType;
  position: { x: number; y: number };
  isMaximized: boolean;
}

export const Desktop = () => {
  const [openWindows, setOpenWindows] = useState<OpenWindow[]>([]);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);

  const openFolder = (folder: FolderType) => {
    if (openWindows.find(w => w.id === folder.id)) {
      setActiveWindow(folder.id);
      return;
    }

    const newWindow: OpenWindow = {
      id: folder.id,
      folder,
      position: { x: 100 + openWindows.length * 30, y: 80 + openWindows.length * 30 },
      isMaximized: false,
    };
    
    setOpenWindows([...openWindows, newWindow]);
    setActiveWindow(folder.id);
  };

  const closeWindow = (id: string) => {
    setOpenWindows(openWindows.filter(w => w.id !== id));
    if (activeWindow === id) {
      setActiveWindow(openWindows.length > 1 ? openWindows[openWindows.length - 2].id : null);
    }
  };

  const toggleMaximize = (id: string) => {
    setOpenWindows(openWindows.map(w => 
      w.id === id ? { ...w, isMaximized: !w.isMaximized } : w
    ));
  };

  return (
    <div className="fixed inset-0 bg-[#0a0e1a] overflow-hidden">
      {/* Desktop Background with Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-card/80 backdrop-blur-md border-t border-primary/30 flex items-center px-4 gap-2 z-50">
        <div className="flex items-center gap-2 mr-auto">
          <div className="w-8 h-8 bg-primary/20 border border-primary flex items-center justify-center">
            <span className="text-primary text-xs font-bold">AV</span>
          </div>
          <span className="text-primary font-mono text-sm">AMAN_VERMA_OS</span>
        </div>
        
        {openWindows.map(window => (
          <button
            key={window.id}
            onClick={() => setActiveWindow(window.id)}
            className={`px-3 py-1 font-mono text-xs border transition-all ${
              activeWindow === window.id
                ? 'bg-primary/20 border-primary text-primary'
                : 'bg-background/50 border-border text-muted-foreground hover:text-primary'
            }`}
          >
            {window.folder.icon} {window.folder.name}
          </button>
        ))}

        <div className="ml-auto text-primary font-mono text-xs">
          {new Date().toLocaleTimeString()}
        </div>
      </div>

      {/* Desktop Icons (Folders) */}
      <div className="relative w-full h-full">
        {folders.map((folder, index) => (
          <motion.button
            key={folder.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => openFolder(folder)}
            onDoubleClick={() => openFolder(folder)}
            className="absolute w-32 p-3 flex flex-col items-center gap-2 group hover:bg-primary/10 rounded transition-all"
            style={{ left: folder.position.x, top: folder.position.y }}
          >
            <div className="text-5xl group-hover:animate-pulse-glow">
              {folder.icon}
            </div>
            <span className="text-xs font-mono text-foreground group-hover:text-primary transition-colors text-center leading-tight">
              {folder.name}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Windows */}
      <AnimatePresence>
        {openWindows.map((window) => {
          const Component = window.folder.component;
          const isActive = activeWindow === window.id;
          const zIndex = isActive ? 40 : 30;

          return (
            <motion.div
              key={window.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                x: window.isMaximized ? 0 : window.position.x,
                y: window.isMaximized ? 0 : window.position.y,
              }}
              exit={{ opacity: 0, scale: 0.9 }}
              className={`absolute bg-card/95 backdrop-blur-md border-2 shadow-2xl ${
                isActive ? 'border-primary' : 'border-border'
              }`}
              style={{
                zIndex,
                width: window.isMaximized ? '100%' : 'min(90vw, 800px)',
                height: window.isMaximized ? 'calc(100% - 48px)' : 'min(80vh, 600px)',
                left: window.isMaximized ? 0 : undefined,
                top: window.isMaximized ? 0 : undefined,
              }}
              onClick={() => setActiveWindow(window.id)}
            >
              {/* Window Title Bar */}
              <div className="h-10 bg-background/50 border-b border-primary/30 flex items-center px-3 gap-2 cursor-move">
                <span className="text-lg">{window.folder.icon}</span>
                <span className="flex-1 font-mono text-sm text-primary">
                  {window.folder.name}
                </span>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMaximize(window.id);
                  }}
                  className="w-6 h-6 flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  {window.isMaximized ? (
                    <Minimize2 className="w-3 h-3 text-primary" />
                  ) : (
                    <Maximize2 className="w-3 h-3 text-primary" />
                  )}
                </button>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closeWindow(window.id);
                  }}
                  className="w-6 h-6 flex items-center justify-center hover:bg-destructive/20 transition-colors"
                >
                  <X className="w-4 h-4 text-destructive" />
                </button>
              </div>

              {/* Window Content */}
              <div className="h-[calc(100%-40px)] overflow-y-auto p-6">
                <Component />
              </div>

              {/* Scan Line Effect */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-8 animate-scan-line" />
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};