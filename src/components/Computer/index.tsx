import React from "react";
import { useGLTF, Text } from "@react-three/drei";

interface ComputerProps {
  message: string;
}

const Computer: React.FC<ComputerProps> = ({ message }) => {
  const { scene } = useGLTF("/assets/camputer/scene.gltf");

  return (
    <>
      <primitive
        object={scene}
        scale={[80, 80, 80]}
        position={[0, 0, 0]} 
      />

      {message && (
        <Text
          position={[0, 15, -5]}
          fontSize={10} 
          color="white" 
          anchorX="center" 
          anchorY="middle" 
        >
          {message}
        </Text>
      )}
    </>
  );
};

export default Computer;
