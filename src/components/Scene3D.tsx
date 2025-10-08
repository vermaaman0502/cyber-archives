import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Stars } from '@react-three/drei';
import { Lab } from './Lab';
import { Particles } from './Particles';
import { Suspense } from 'react';

export const Scene3D = () => {
  return (
    <div className="fixed inset-0 w-full h-full">
      <Canvas
        shadows
        gl={{ alpha: false, antialias: true }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#0a0e1a']} />
        
        <PerspectiveCamera makeDefault position={[0, 2, 8]} fov={75} />
        
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.1} />
          <pointLight position={[0, 3, 0]} intensity={0.5} color="#00fff5" />
          <pointLight position={[-5, 2, -5]} intensity={0.3} color="#7a00ff" />
          <spotLight
            position={[0, 10, 0]}
            angle={0.3}
            penumbra={1}
            intensity={0.5}
            color="#00fff5"
            castShadow
          />
          
          {/* Environment */}
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Environment preset="night" />
          
          {/* Scene Elements */}
          <Lab />
          <Particles />
          
          {/* Controls */}
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            minDistance={5}
            maxDistance={15}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 6}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};