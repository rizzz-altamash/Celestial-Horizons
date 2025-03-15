import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import gsap from "gsap";

const ParticleEffect = () => {
  const particlesRef = useRef();
  const [positions, setPositions] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const particles = [];
    const colorsArray = [];
    
    // Define two colors
    const twoColors = [
      [1, 0, 0.8], // Pink
      [0.8, 0, 0.8], // Purple
      [1, 0, 0] // Red
    ];

    for (let i = 0; i < 200; i++) {
      particles.push((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10);

      // Randomly choose one of the two colors
      const color = twoColors[Math.floor(Math.random() * 3)];
      colorsArray.push(...color);
    }

    setPositions(particles);
    setColors(colorsArray);
  }, []);

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.002; // Slight rotation effect
    }
  });

// TO MOVE WITH MOUSE CURSOR ---
//   useEffect(() => {
//     const moveParticles = (e) => {
//       if (particlesRef.current) {
//         gsap.to(particlesRef.current.position, {
//           x: (e.clientX / window.innerWidth) * 6 - 3,
//           y: -(e.clientY / window.innerHeight) * 6 + 3,
//           duration: 0.2,
//           ease: "power2.out",
//         });
//       }
//     };

//     window.addEventListener("mousemove", moveParticles);
//     return () => window.removeEventListener("mousemove", moveParticles);
//   }, []);

  return (
    <Points ref={particlesRef} positions={new Float32Array(positions)} colors={new Float32Array(colors)}>
      <PointMaterial size={0.05} vertexColors transparent opacity={0.7} depthWrite={false} sizeAttenuation />
    </Points>
  );
};

const ParticlesBg3D = () => {
  return (
    <Canvas style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none" }}>
      <ParticleEffect />
    </Canvas>
  );
};

export default ParticlesBg3D;
