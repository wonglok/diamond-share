import './App.css';
import { Suspense, useRef } from 'react';
import { CanvasGPU } from './CanvasGPU/CanvasGPU.tsx';
import { Environment, OrbitControls } from '@react-three/drei';
import { DiamindComponent } from './DiamondTSL/DiamondComponent.tsx';
import { BloomPipeline } from './CanvasGPU/BloomPipeline.tsx';
import { useFrame } from '@react-three/fiber';

function App() {
  return (
    <>
      <CanvasGPU webgpu>
        <color attach="background" args={['#ffffff']} />
        <Suspense fallback={null}>
          <Environment preset={'sunset'} background />
          <Spinner>
            <DiamindComponent />
          </Spinner>
          <OrbitControls object-position={[0, 2, 1]} />
          <BloomPipeline />
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
