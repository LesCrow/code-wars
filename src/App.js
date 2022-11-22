import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MainContent from "./pages/MainContent";
import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";

function App() {
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="relative z-10 h-[100vh]">
      <div className="relative z-10 h-full flex flex-col justify-between">
        {" "}
        <Header />
        <MainContent />
        <Footer />
      </div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          style: {
            zIndex: 0,
          },
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 15,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 1,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.9,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}

export default App;
