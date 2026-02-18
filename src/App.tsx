import "./App.css";
import { Suspense, useRef } from "react";
import { CanvasGPU } from "./CanvasGPU/CanvasGPU.tsx";
import { Environment, OrbitControls, Sphere } from "@react-three/drei";
import { DiamindComponent } from "./DiamondTSL/DiamondComponent.tsx";
import { BloomPipeline } from "./CanvasGPU/BloomPipeline.tsx";
import { useFrame } from "@react-three/fiber";
import { DoubleSide } from "three";

function App() {
  return (
    <>
      <CanvasGPU webgpu>
        {/* <color attach="background" args={["#ffffff"]} /> */}
        <Suspense fallback={null}>
          <Environment
            environmentIntensity={0.35}
            background
            files={[`/hdr/sky.hdr`]}
          />
          <Spinner>
            <DiamindComponent />
          </Spinner>

          <OrbitControls object-position={[0, 2, 1]} />
          <BloomPipeline />
          {/* <Sphere scale={100}>
            <meshStandardNodeMaterial
              roughness={1.0}
              metalness={0.0}
              color={"#ffffff"}
              side={DoubleSide}
            ></meshStandardNodeMaterial>
          </Sphere> */}
        </Suspense>
      </CanvasGPU>
    </>
  );
}

//

function Spinner({ children }: any) {
  const ref = useRef<any>(null);

  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.y += dt * 0.125;
    }
  });

  return <group ref={ref}>{children}</group>;
}

export default App;
