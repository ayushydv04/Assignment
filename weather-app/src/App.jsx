import React, { useEffect, useRef } from "react";
import Home from "./pages/Home";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min";

function App() {
  const vantaRef = useRef(null); // Reference for Vanta effect

  useEffect(() => {
    const vantaEffect = CLOUDS({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      THREE: THREE,
      backgroundColor: 0xffffff,   // White background
      skyColor: 0xacecfc,          // Light blue sky
      cloudColor: 0xffffff ,        // Soft blue-gray clouds
      cloudShadowColor: 0x878787 ,  // Darker blue cloud shadows
      sunColor: 0xff9919,          // Orange sun
      sunGlareColor: 0xff6633,     // Deep orange glare
      sunlightColor: 0xff9933,     // Warm sunlight
      speed: 1,                    // Increased speed for more movement
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy(); // Cleanup when component unmounts
    };
  }, []);

  return (
    <div ref={vantaRef} className="min-h-screen flex justify-center items-center">
      <Home />
      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;
