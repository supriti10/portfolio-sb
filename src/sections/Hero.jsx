import { Leva } from "leva";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { PerspectiveCamera } from "@react-three/drei";

import Button from "../components/Button.jsx";
import CanvasLoader from "../components/Loading.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import { calculateSizes } from "../constants/index.js";
import HackerRoom from "../components/HackerRoom.jsx";

const Hero = () => {
  // Responsive breakpoints
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  // ✅ FIX: push desk DOWN based on device
  const deskPosition = [
    sizes.deskPosition[0],
    sizes.deskPosition[1] - (isMobile ? 3 : 2), // 👈 shift down
    sizes.deskPosition[2],
  ];

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      
      {/* TEXT */}
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 z-10">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Supriti <span className="waving-hand">👋</span>
        </p>

        <p className="hero_tag text-gray_gradient text-center">
          Building sleek designs & crafting clean solutions
        </p>
      </div>

      {/* 3D CANVAS */}
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>

            {/* Hide Leva */}
            <Leva hidden />

            {/* ✅ Slightly raise camera for better framing */}
            <PerspectiveCamera makeDefault position={[0, 2, 30]} />

            {/* 3D Model */}
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={deskPosition}   // ✅ updated
                rotation={[0, -Math.PI, 0]}
              />
            </HeroCamera>

            {/* Lights */}
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.7} />

          </Suspense>
        </Canvas>
      </div>

      {/* BUTTON */}
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;