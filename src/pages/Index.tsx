import { Scene3D } from '@/components/Scene3D';
import { PortfolioUI } from '@/components/PortfolioUI';

const Index = () => {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-background">
      {/* 3D Scene Background */}
      <Scene3D />
      
      {/* Portfolio UI Overlay */}
      <PortfolioUI />
      
      {/* Atmospheric Fog Overlay */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-transparent via-background/20 to-background/40 z-5" />
    </main>
  );
};

export default Index;