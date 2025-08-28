import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

const Model = () => {
  const gltf = useGLTF("/Robot.glb");
  const robotRef = useRef();
  const targetEmpty = useRef();
  const rotatingEdges = useRef();
  const { mouse } = useThree();

  // Debug: log object hierarchy once
  useEffect(() => {
    if (gltf?.scene) {
      console.log("GLB Scene Graph:");
      gltf.scene.traverse((child) => {
        console.log(child.name);
      });

      // Assign references based on object names
      targetEmpty.current = gltf.scene.getObjectByName("Empty"); // 👀 Eye target
      rotatingEdges.current = gltf.scene.getObjectByName("CubeEdges"); // ⬛ Rotating edges
    }
  }, [gltf]);

  // Update loop
  useFrame(() => {
    // Eye tracking (smooth follow)
    if (targetEmpty.current) {
      const targetPos = new THREE.Vector3(mouse.x * 2, mouse.y * 2, 0);
      targetEmpty.current.position.lerp(targetPos, 0.1); // smooth follow
    }

    // Slow rotation for cube edges
    if (rotatingEdges.current) {
      rotatingEdges.current.rotation.y += 0.003;
      rotatingEdges.current.rotation.x += 0.002;
    }
  });

  return (
    <primitive
      ref={robotRef}
      object={gltf.scene}
      scale={1.0}
      position={[0, -0.2, 0]}
      rotation={[0, 0, 0]} // facing forward
    />
  );
};

const ModelCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ height: "100%", width: "100%" }}
    >
      {/* Lights */}
      <ambientLight intensity={0.9} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />

      {/* 3D Model */}
      <Suspense fallback={null}>
        <Model />
      </Suspense>

      {/* Bloom glow */}
      <EffectComposer>
        <Bloom
          intensity={1.5}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>

      {/* Controls */}
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default ModelCanvas;
