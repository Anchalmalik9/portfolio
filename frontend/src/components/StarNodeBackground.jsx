import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

const StarCore = () => {
  const group = useRef(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    
    // Read the actual scroll position manually per-frame (very performant in R3F)
    const scrollY = window.scrollY || 0;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const scrollProgress = scrollY / maxScroll; // 0 to 1

    // Map scroll progress to Y translation (moves down smoothly as you scroll)
    const targetY = THREE.MathUtils.lerp(1.5, -2.5, scrollProgress);
    
    // Map scroll progress to X rotation
    const targetRotX = THREE.MathUtils.lerp(0, Math.PI * 2, scrollProgress);

    // Smoothly interpolate current values towards the target (lerp)
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, targetY, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRotX, 0.05);
    
    // Continuous spinning on Y and Z
    group.current.rotation.y += delta * 0.15;
    group.current.rotation.z += delta * 0.1;
  });

  return (
    <group ref={group} scale={0.8}>
      {/* Central Glowing Core */}
      <mesh>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshBasicMaterial color="#00ffff" />
      </mesh>
      
      {/* 8 Emissive Beams */}
      {[0, Math.PI/4, Math.PI/2, 3*Math.PI/4].map((angle, i) => (
        <mesh key={i} rotation={[0, 0, angle]}>
          <cylinderGeometry args={[0.015, 0.015, 3.5, 8]} />
          <meshBasicMaterial color="#00ffff" transparent opacity={0.8} />
        </mesh>
      ))}

      {/* Outer Orbiting Rings */}
      <mesh rotation={[Math.PI/3, Math.PI/4, 0]}>
        <torusGeometry args={[1.5, 0.01, 16, 100]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.4} />
      </mesh>
      <mesh rotation={[-Math.PI/4, Math.PI/6, 0]}>
        <torusGeometry args={[2, 0.01, 16, 100]} />
        <meshBasicMaterial color="#00ffff" transparent opacity={0.2} />
      </mesh>
    </group>
  );
};

const BackgroundSpheres = () => {
  const group = useRef(null);
  
  useFrame((state, delta) => {
    if (!group.current) return;
    const scrollY = window.scrollY || 0;
    
    // Wireframes move upward slightly creating parallax against the scroll
    const targetY = scrollY * 0.003;
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, targetY, 0.05);

    // Slow continual rotation
    group.current.rotation.x += delta * 0.05;
    group.current.rotation.y += delta * 0.08;
  });

  return (
    <group ref={group}>
      <mesh position={[-5, -1, -5]}>
        <sphereGeometry args={[1.5, 16, 16]} />
        <meshBasicMaterial color="#00ffff" wireframe transparent opacity={0.15} />
      </mesh>
      <mesh position={[4, 2, -8]}>
        <sphereGeometry args={[2.5, 16, 16]} />
        <meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.1} />
      </mesh>
      <mesh position={[5, -5, -6]}>
        <sphereGeometry args={[1.2, 16, 16]} />
        <meshBasicMaterial color="#0ea5e9" wireframe transparent opacity={0.15} />
      </mesh>
      <mesh position={[-3, -8, -4]}>
        <sphereGeometry args={[1.8, 16, 16]} />
        <meshBasicMaterial color="#00ffff" wireframe transparent opacity={0.1} />
      </mesh>
    </group>
  );
};

const StarNodeBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#000000]">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        
        {/* Parallax Depth Stars (Tiny points) */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {/* Wireframe Rotating Parallax Spheres */}
        <BackgroundSpheres />
        
        {/* The Central 3D Interactive Star Node */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <StarCore />
        </Float>
        
      </Canvas>
    </div>
  );
};

export default StarNodeBackground;
