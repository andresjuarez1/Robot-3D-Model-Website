import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { AnimationMixer, LoopRepeat } from "three";

const CardRobot3d = ({ scene, animations }) => {
  const robotAnimation = animations[0];

  const mixerRef = useRef();
  if (!mixerRef.current) {
    mixerRef.current = new AnimationMixer(scene);
  }

  const mixer = mixerRef.current;
  const action = mixer.clipAction(robotAnimation);
  action.setLoop(LoopRepeat, Infinity);
  action.play();

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return <primitive object={scene} animation={animations} />;
};

export default CardRobot3d;
