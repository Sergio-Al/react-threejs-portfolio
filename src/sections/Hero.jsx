import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";

const Hero = () => {
  const controls = useControls("Hacker Room", {
    positionX: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionY: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionZ: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    rotationX: {
      value: 0,
      min: -10,
      max: 10,
    },
    rotationY: {
      value: 0,
      min: -10,
      max: 10,
    },
    rotationZ: {
      value: 0,
      min: -10,
      max: 10,
    },
    scale: {
      value: 0.01,
      min: 0.01,
      max: 10,
    }
  });
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl text-white text-center font-generalsans">
          Hi, I'm Sergio<span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Software, AI, and Products
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Leva />
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 3]} />
            <HackerRoom
              scale={[0.05, 0.05, 0.05]}
              position={[
                controls.positionX,
                controls.positionY,
                controls.positionZ,
              ]}
              rotation={[
                controls.rotationX,
                controls.rotationY,
                controls.rotationZ,
              ]}
            />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
