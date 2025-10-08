import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cylinder, Sphere } from '@react-three/drei';
import * as THREE from 'three';

export const Lab = () => {
  const laptopRef = useRef<THREE.Group>(null);
  const screenRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (laptopRef.current) {
      laptopRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
    if (screenRef.current) {
      const material = screenRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <group>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial
          color="#0d1117"
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>

      {/* Laptop Setup */}
      <group ref={laptopRef} position={[0, 0, 0]}>
        {/* Table */}
        <Box args={[3, 0.1, 2]} position={[0, -0.05, 0]} castShadow>
          <meshStandardMaterial color="#1a1f2e" roughness={0.7} metalness={0.3} />
        </Box>

        {/* Laptop Base */}
        <Box args={[2, 0.05, 1.5]} position={[0, 0.025, 0]} castShadow>
          <meshStandardMaterial color="#0a0e1a" roughness={0.6} metalness={0.4} />
        </Box>

        {/* Laptop Screen */}
        <group position={[0, 0.6, -0.7]} rotation={[-0.3, 0, 0]}>
          <Box args={[2, 1.2, 0.05]} castShadow>
            <meshStandardMaterial color="#0a0e1a" roughness={0.6} metalness={0.4} />
          </Box>
          
          {/* Screen Display */}
          <mesh ref={screenRef} position={[0, 0, 0.03]}>
            <planeGeometry args={[1.8, 1.1]} />
            <meshStandardMaterial
              color="#00fff5"
              emissive="#00fff5"
              emissiveIntensity={0.5}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>
        </group>
      </group>

      {/* Neon Tubes - Broken lights */}
      <NeonTube position={[-4, 2, -3]} color="#00fff5" />
      <NeonTube position={[4, 2, -3]} color="#7a00ff" flickering />
      <NeonTube position={[0, 3, -5]} color="#00fff5" rotation={[0, 0, Math.PI / 2]} />

      {/* Cables hanging */}
      <Cable position={[-2, 3, -2]} />
      <Cable position={[2, 3, -2]} />
      <Cable position={[0, 3, -4]} />

      {/* Broken Monitors on walls */}
      <BrokenMonitor position={[-3, 1.5, -4]} />
      <BrokenMonitor position={[3, 1.5, -4]} />
    </group>
  );
};

const NeonTube = ({ position, color, rotation = [0, 0, 0], flickering = false }: any) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current && flickering) {
      const material = ref.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 0.3 + Math.random() * 0.4;
    }
  });

  return (
    <mesh ref={ref} position={position} rotation={rotation}>
      <Cylinder args={[0.05, 0.05, 3, 16]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={flickering ? 0.5 : 0.8}
          roughness={0.3}
          metalness={0.7}
        />
      </Cylinder>
    </mesh>
  );
};

const Cable = ({ position }: any) => {
  return (
    <mesh position={position}>
      <Cylinder args={[0.02, 0.02, 2, 8]}>
        <meshStandardMaterial color="#1a1f2e" roughness={0.9} />
      </Cylinder>
    </mesh>
  );
};

const BrokenMonitor = ({ position }: any) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      const material = ref.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = Math.random() > 0.95 ? 0.3 : 0;
    }
  });

  return (
    <group position={position}>
      <Box args={[0.8, 0.6, 0.1]}>
        <meshStandardMaterial color="#0a0e1a" roughness={0.8} />
      </Box>
      <mesh ref={ref} position={[0, 0, 0.06]}>
        <planeGeometry args={[0.7, 0.5]} />
        <meshStandardMaterial
          color="#00fff5"
          emissive="#00fff5"
          emissiveIntensity={0}
          roughness={0.5}
        />
      </mesh>
    </group>
  );
};