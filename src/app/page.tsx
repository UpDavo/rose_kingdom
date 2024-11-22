"use client";

import { useEffect, useState } from "react";
import { PortraitAnimation } from "components/sections";
import Sound from "components/sound/sound";

export default function Home() {
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    // Solo se ejecuta en el cliente
    const updateHeight = () => {
      setViewportHeight(window.innerHeight);
    };

    // Establece la altura inicial
    updateHeight();
    window.addEventListener("resize", updateHeight);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  // Si aún no se ha calculado la altura (en el render inicial), devuelve un contenedor vacío.
  if (viewportHeight === 0) {
    return null;
  }

  return (
    <main
      style={{
        height: `${viewportHeight}px`,
        width: "100vw",
        backgroundColor: "var(--color-secundary, #f0f0f0)",
        overflow: "hidden",
      }}
    >
      <Sound />
      <PortraitAnimation />
    </main>
  );
}
