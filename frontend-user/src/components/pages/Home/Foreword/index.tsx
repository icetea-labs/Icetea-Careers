// @ts-nocheck
import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import glsl from "babel-plugin-glsl/macro";
import * as THREE from "three";
import { useCommonStyle } from "../../../../styles";
import useStyles from "./styles";

const WaveShaderMaterial = shaderMaterial(
  // Uniform
  {
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uTexture: new THREE.Texture(),
  },
  // Vertex Shader
  glsl`
    precision mediump float;
 
    varying vec2 vUv;
    varying float vWave;

    uniform float uTime;

    #pragma glslify: snoise3 = require(glsl-noise/simplex/3d.glsl);

    void main() {
      vUv = uv;

      vec3 pos = position;
      float noiseFreq = 0.5;
      float noiseAmp = 0.1;
      vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
      pos.z += snoise3(noisePos) * noiseAmp * 0.5;
      vWave = pos.z;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);  
    }
  `,
  // Fragment Shader
  glsl`
    precision mediump float;

    uniform vec3 uColor;
    uniform float uTime;
    uniform sampler2D uTexture;

    varying vec2 vUv;
    varying float vWave;

    void main() {
      float wave = vWave * 0.08;
      vec3 texture = texture2D(uTexture, vUv - wave).rgb;
      gl_FragColor = vec4(texture, 1.0); 
    }
  `
);

extend({ WaveShaderMaterial });

// const Wave = () => {
//   const ref = useRef<any>(null!);
//   useFrame(({ clock }: any) => (ref.current.uTime = clock.getElapsedTime()));

//   const [image] = useLoader(THREE.TextureLoader, ["/images/bg-landing.png"]);

//   return (
//     <mesh>
//       <planeBufferGeometry args={[1.44, 0.68, 32, 32]} />
//       <waveShaderMaterial ref={ref} uTexture={image} />
//     </mesh>
//   );
// };

const Foreword = (props: any) => {
  const styles = useStyles();
  const commonStyles = useCommonStyle();

  return (
    <div className={styles.foreword}>
      <div className={`${commonStyles.fbContainer} ${commonStyles.fbGridBase}`}>
        <div className={styles.forewordContainer}>
          <p className="sub-title">An Entrance Portal</p>
          <p className="title">To The Gaming World & Metaverse on Polkadot</p>
          <p className="desciption">
            Firebird is the first optimized chain that allows Gaming and
            Metaverse developers to create scalable and userfriendly realtime
            Dapps with cheap costs while never compromising security
          </p>
        </div>
      </div>

      {/* <img
        src="/images/bg-landing-part-1.svg"
        alt=""
        className="foreword-bg foreword-bg-1"
      />
      <img
        src="/images/bg-landing-part-2.svg"
        alt=""
        className="foreword-bg foreword-bg-2"
      />

      <Canvas
        camera={{ fov: 10, position: [0, 0, 3.8] }}
        style={{
          width: "100%",
          gridColumn: "1 / 13",
          height: "100vh",
          position: "absolute",
          bottom: 0,
          top: "auto",
          left: 0,
          transform: "inherit",
          zIndex: 1,
        }}
      >
        <Suspense fallback={null}>
          <Wave />
        </Suspense>
      </Canvas> */}
    </div>
  );
};

export default Foreword;
