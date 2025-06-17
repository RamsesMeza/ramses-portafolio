import type { FC } from "react";
import Particles from "react-tsparticles";
import { loadBasic } from "tsparticles-basic";
import type { Engine } from "tsparticles-engine";

export const ParticlesBackground: FC = () => {
  const particlesInit = async (engine: Engine) => {
    await loadBasic(engine);
  };

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 z-[-1]"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#106399",
          },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 80,
          },
          color: {
            value: "#ffffff", // Partículas blancas
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: { min: 1, max: 4 },
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            outModes: {
              default: "out",
            },
          },
        },
        // SECCIÓN AGREGADA PARA LÍNEAS DE CONEXIÓN
        links: {
          enable: true, // Habilita conexiones
          distance: 120, // Distancia máxima para conectar
          color: "#ffffff", // Líneas blancas
          opacity: 0.4, // Visibilidad de las líneas
          width: 1, // Grosor de las líneas
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "connect", // Cambiado a modo conexión
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            connect: { // Configuración específica para conexión
              distance: 140, // Radio de conexión con el cursor
              links: {
                opacity: 0.5, // Aumenta opacidad al interactuar
              }
            },
            push: {
              quantity: 4,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
