import { EffectComposer, Glitch, Vignette } from '@react-three/postprocessing';
import { BlendFunction, GlitchMode } from 'postprocessing';

export default function Experience() {
  return (
    <>
      {/* Post-Processing Effects */}
      <EffectComposer>
        <Glitch
          delay={[0.5, 1]} // Min and max glitch delay
          duration={[0.5, 1]} // Min and max glitch duration
          strength={[0.5, 1.0]} // Min and max glitch strength
          mode={GlitchMode.CONSTANT_MILD} // Mild but constant glitches
          blendFunction={BlendFunction.SCREEN} // Additive blending for visibility
        />
        <Vignette eskil offset={0.1} darkness={1.2} />  
      </EffectComposer>

      {/* Example 3D Objects (Optional) */}
      {/* <mesh castShadow position={[-2, 0, 0]}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>
      <mesh castShadow position={[2, 0, 0]} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" toneMapped={false} />
      </mesh> */}
    </>
  );
}