import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Optional: placeholder callback for when particles finish loading
  const particlesLoaded = useCallback(async () => {
    // You can access the container here in the future if needed
  }, []);

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            fullScreen: {
              enable: true,
              zIndex: -1, // Make sure particles stay behind your content
            },
            background: {
              color: {
                value: "#ffffff", // fallback background color
              },
              image: "url('https://particles.js.org/images/background3.jpg')",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover",
              opacity: 1,
            },
            backgroundMask: {
              enable: true,
              cover: {
                color: {
                  value: "#ffffff",
                },
                opacity: 1,
              },
            },
            fpsLimit: 60,
            detectRetina: true,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "bubble",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 200,
                  duration: 2,
                  size: 20,
                  opacity: 0.8,
                },
                push: {
                  quantity: 4,
                },
              },
            },
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  area: 800,
                },
              },
              color: {
                value: "#ffffff",
              },
              links: {
                enable: true,
                color: "#ffffff",
                distance: 150,
                opacity: 0.5,
                width: 1,
              },
              move: {
                enable: true,
                speed: 2,
                outModes: {
                  default: "out",
                },
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            pauseOnBlur: true,
            pauseOnOutsideViewport: true,
          }}
        />
      )}
    </>
  );
}
