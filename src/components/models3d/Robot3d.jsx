import React, { Suspense } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CardRobot3d from "./cardModels3d/CardRobot3d";

const Robot3d = () => {
  const { scene, animations } = useGLTF("/robot.glb");
  return (
    <div>
      <Canvas camera={{ zoom: 0.5, position: [0, 0, 5] }} style={{ height: "100vh", width: "600px" }}>
        <ambientLight intensity={2} />
        <OrbitControls></OrbitControls>
        <Suspense>
          <CardRobot3d scene={scene} animations={animations} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Robot3d;
