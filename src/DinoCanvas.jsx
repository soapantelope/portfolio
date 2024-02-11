import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { forwardRef } from "react";

// import CanvasLoader from '../Loader'

export default function DinoCanvas() {
  const dinoCanvasRef = useRef();
  let divTop = () => dinoCanvasRef.current.getBoundingClientRect().top;
  let divBottom = () => dinoCanvasRef.current.getBoundingClientRect().bottom;

  return (
    <div className="dinoCanvas" ref={dinoCanvasRef}>
      <Canvas
        frameLoop="demand"
        shadows
        camera={{ position: [15, -1, 17], fov: 23 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense>
          <Dino divTop={divTop} divBottom={divBottom}></Dino>
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}

function moveJoint(joint, rotation) {
  joint.rotation.x = -rotation;
}

function Dino({ divTop, divBottom }) {
  const { nodes, materials } = useGLTF("../models/dinoscene.glb?url");
  const dinoRef = useRef();

  useEffect(() => {
    document.getElementById("content").addEventListener("scroll", handleScroll);
    return () => {
      document
        .getElementById("content")
        .removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = document.getElementById("content").scrollTop;
    const scrollBottom = scrollTop + window.innerHeight;

    const dinoTopDistanceFromTop = scrollTop + divTop();
    const dinoBottomDistanceFromTop = scrollTop + divBottom();
    if (
      scrollBottom > dinoTopDistanceFromTop &&
      scrollTop < dinoBottomDistanceFromTop
    ) {
      moveJoint(
        nodes.neck002,
        (scrollTop - dinoTopDistanceFromTop) / window.innerHeight
      );
    }
  };

  return (
    <mesh>
      <hemisphereLight
        skyColor={"black"}
        groundColor={0xffffff}
        intensity={5}
        position={[0, 5, 10]}
      />

      <pointLight
        color={"#ffaf8f"}
        intensity={150}
        position={[10, 5, 0]}
      ></pointLight>
      <pointLight
        color={"#e6712e"}
        intensity={100}
        position={[10, 0, 15]}
      ></pointLight>

      <spotLight
        position={[3, 5, 0]}
        angle={0.12}
        penumbra={1}
        intensity={5}
        castShadow
        shadow-mapSize={1024}
      ></spotLight>
      <group ref={dinoRef} position={[0, -2, 0]}>
        <group
          position={[-1, 0.408, 0]}
          rotation={[0.107, Math.PI / 2 + 0.2, 0]}
          scale={[1.15, 1.15, 1.15]}
        >
          <skinnedMesh
            geometry={nodes.Dinosaur.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.Dinosaur.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Eyes.geometry}
            material={materials["Material.002"]}
            skeleton={nodes.Eyes.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Teeth.geometry}
            material={materials["Material.003"]}
            skeleton={nodes.Teeth.skeleton}
          />
          <primitive object={nodes.spine006} />
          <primitive object={nodes.spine008} />
          <primitive object={nodes.pelvisR} />
          <primitive object={nodes.pelvisL} />
        </group>
      </group>
    </mesh>
  );
}
