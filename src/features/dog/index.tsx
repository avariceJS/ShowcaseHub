"use client"
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

type ModelProps = {
  path: string; // путь к модели .glb
};

const Model = ({ path }: ModelProps) => {
  const { scene } = useGLTF(path); // Загружаем модель с помощью useGLTF
  return <primitive object={scene} scale={1} />;
};

export default function ModelViewer() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} />
        <Model path="/dog.glb" />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
