import React from "react";
import { useGLTF } from "@react-three/drei";

const ReactLogo: React.FC = () => {
  const { scene } = useGLTF("/assets/react_logo/scene.gltf");

  return (
    <primitive
      object={scene}
      scale={[8, 8, 8]}
      position={[0, 15, 0]} 
    />
  );
};

export default ReactLogo;
