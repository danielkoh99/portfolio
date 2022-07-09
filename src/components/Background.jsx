import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React from "react";

export default function Background({ options }) {
  const particlesInit = async main => {
    await loadFull(main);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      height="100vh"
      style={{ height: "100vh", width: "100vw" }}
      options={options}
    />
  );
}
